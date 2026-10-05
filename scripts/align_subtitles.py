import json
import re
from pathlib import Path
import numpy as np
import soundfile as sf
from faster_whisper import WhisperModel

WAV_PATH = Path("voiceover_af_heart.wav")
OUTPUT_WORDS = Path("public/subtitles/words.json")
OUTPUT_SUBS = Path("public/subtitles/subtitles.json")
SRT_PATH = Path("voiceover_af_heart.srt")
CONTENT_PATH = Path("content_en.md")

OUTPUT_WORDS.parent.mkdir(parents=True, exist_ok=True)
FPS = 30

def parse_srt(srt_file: Path):
    with open(srt_file, "r", encoding="utf-8") as f:
        content = f.read()
    
    pattern = re.compile(
        r"(\d+)\n(\d{2}):(\d{2}):(\d{2}),(\d{3}) --> (\d{2}):(\d{2}):(\d{2}),(\d{3})\n(.*?)(?=\n\d+\n|\n*$)",
        re.DOTALL
    )
    segments = []
    for match in pattern.finditer(content):
        idx = int(match.group(1))
        sh, sm, ss, sms = map(int, match.group(2, 3, 4, 5))
        eh, em, es, ems = map(int, match.group(6, 7, 8, 9))
        start_sec = sh * 3600 + sm * 60 + ss + sms / 1000.0
        end_sec = eh * 3600 + em * 60 + es + ems / 1000.0
        text = match.group(10).strip()
        segments.append({
            "id": idx,
            "start": round(start_sec, 3),
            "end": round(end_sec, 3),
            "startFrame": int(round(start_sec * FPS)),
            "endFrame": int(round(end_sec * FPS)),
            "text": text
        })
    return segments

def main():
    print("=== Aligning Audio with Ground-Truth Words ===")
    
    # 1. Parse SRT segments
    segments = parse_srt(SRT_PATH)
    with open(OUTPUT_SUBS, "w", encoding="utf-8") as f:
        json.dump(segments, f, indent=2)
    print(f"[OK] Saved {len(segments)} segments to {OUTPUT_SUBS}")

    # 2. Load and resample audio via soundfile + numpy
    print("Loading voiceover_af_heart.wav...")
    wav, sr = sf.read(str(WAV_PATH))
    if len(wav.shape) > 1:
        wav = wav.mean(axis=1) # Mono
    
    # Resample to 16000 Hz for Whisper
    target_sr = 16000
    target_len = int(len(wav) * target_sr / sr)
    wav16 = np.interp(
        np.linspace(0, len(wav), target_len, endpoint=False),
        np.arange(len(wav)),
        wav
    ).astype(np.float32)
    print(f"Resampled audio to {target_sr}Hz ({len(wav16) / target_sr:.1f}s)")

    # 3. Transcribe with faster-whisper on CPU
    print("\nRunning Faster-Whisper base model for word alignment...")
    model = WhisperModel("base", device="cpu", compute_type="int8")
    
    prompt = "Juguo Tizhi, Quan Hongchan, Pan Zhanle, Liu Xiang, Zheng Qinwen, Beijing 2008, Project One One Nine."
    whisper_segments, _ = model.transcribe(
        wav16,
        language="en",
        initial_prompt=prompt,
        word_timestamps=True,
        beam_size=5
    )

    extracted_words = []
    for seg in whisper_segments:
        if seg.words:
            for w in seg.words:
                clean_w = w.word.strip()
                if clean_w:
                    start_frame = int(round(w.start * FPS))
                    end_frame = int(round(w.end * FPS))
                    if end_frame <= start_frame:
                        end_frame = start_frame + 2
                    extracted_words.append({
                        "word": clean_w,
                        "start": round(float(w.start), 3),
                        "end": round(float(w.end), 3),
                        "startFrame": start_frame,
                        "endFrame": end_frame
                    })

    print(f"Extracted {len(extracted_words)} word timestamps.")

    # 4. Lock text to ground truth from content_en.md
    with open(CONTENT_PATH, "r", encoding="utf-8") as f:
        gt_raw = f.read()

    raw_tokens = gt_raw.split()
    gt_clean = [t.strip(".,;:?!\"'()[]{}").lower() for t in raw_tokens]

    final_words = []
    gt_ptr = 0
    for w in extracted_words:
        cur = w["word"].strip(".,;:?!\"'()[]{}").lower()
        if gt_ptr < len(gt_clean):
            # If matches current or next word in ground truth
            if cur == gt_clean[gt_ptr]:
                w["word"] = raw_tokens[gt_ptr]
                gt_ptr += 1
            elif gt_ptr + 1 < len(gt_clean) and cur == gt_clean[gt_ptr + 1]:
                gt_ptr += 1
                w["word"] = raw_tokens[gt_ptr]
                gt_ptr += 1
        final_words.append(w)

    with open(OUTPUT_WORDS, "w", encoding="utf-8") as f:
        json.dump(final_words, f, indent=2)
    print(f"[OK] Successfully saved {len(final_words)} words to {OUTPUT_WORDS}")

if __name__ == "__main__":
    main()
