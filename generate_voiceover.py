import os
import sys
import time
import urllib.request
from pathlib import Path
import numpy as np
import soundfile as sf
from kokoro_onnx import Kokoro

MODEL_DIR = Path(__file__).parent / "kokoro_models"
MODEL_PATH = MODEL_DIR / "kokoro-v1.0.onnx"
VOICES_PATH = MODEL_DIR / "voices-v1.0.bin"

MODEL_URL = "https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.1/kokoro-v1.0.onnx"
VOICES_URL = "https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.1/voices-v1.0.bin"

def download_file(url: str, dest: Path):
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists() and dest.stat().st_size > 0:
        print(f"[OK] Found existing {dest.name} ({dest.stat().st_size / 1024 / 1024:.1f} MB)")
        return

    print(f"Downloading {dest.name}...")
    start_time = time.time()
    
    def reporthook(count, block_size, total_size):
        if total_size > 0:
            percent = int(count * block_size * 100 / total_size)
            downloaded_mb = (count * block_size) / (1024 * 1024)
            total_mb = total_size / (1024 * 1024)
            sys.stdout.write(f"\r  -> {dest.name}: {percent}% ({downloaded_mb:.1f}/{total_mb:.1f} MB)")
            sys.stdout.flush()

    urllib.request.urlretrieve(url, dest, reporthook=reporthook)
    print(f"\n[Done] Finished downloading {dest.name} in {time.time() - start_time:.1f}s")

def format_timestamp_srt(seconds: float) -> str:
    millis = int((seconds - int(seconds)) * 1000)
    mins, secs = divmod(int(seconds), 60)
    hours, mins = divmod(mins, 60)
    return f"{hours:02d}:{mins:02d}:{secs:02d},{millis:03d}"

def main():
    print("=== Kokoro TTS Voiceover Generator ===")
    
    # 1. Download model & voices if missing
    download_file(MODEL_URL, MODEL_PATH)
    download_file(VOICES_URL, VOICES_PATH)
    
    # 2. Initialize Kokoro
    print("\nLoading Kokoro ONNX model into CPU...")
    kokoro = Kokoro(str(MODEL_PATH), str(VOICES_PATH))
    available_voices = kokoro.get_voices()
    print(f"Available voices ({len(available_voices)}): {', '.join(available_voices[:8])}...")

    voice_name = "af_heart"
    if voice_name not in available_voices:
        print(f"Warning: {voice_name} not found, falling back to {available_voices[0]}")
        voice_name = available_voices[0]

    print(f"Using voice: {voice_name}")

    # 3. Read content_en.md
    content_file = Path(__file__).parent / "content_en.md"
    if not content_file.exists():
        print(f"Error: {content_file} not found!")
        sys.exit(1)

    with open(content_file, "r", encoding="utf-8") as f:
        raw_text = f.read().strip()

    # Split into clean paragraphs
    paragraphs = [p.strip() for p in raw_text.split("\n\n") if p.strip()]
    print(f"Found {len(paragraphs)} paragraphs to synthesize.")

    all_audio_segments = []
    srt_entries = []
    current_time_offset = 0.0
    sample_rate = 24000
    srt_index = 1

    # Short silence between paragraphs (0.5 second)
    silence_gap = np.zeros(int(sample_rate * 0.5), dtype=np.float32)

    total_start = time.time()
    for idx, para in enumerate(paragraphs, start=1):
        print(f"\n[{idx}/{len(paragraphs)}] Synthesizing: {para[:60]}...")
        t0 = time.time()
        
        samples, sr = kokoro.create(
            text=para,
            voice=voice_name,
            speed=1.0,
            lang="en-us"
        )
        sample_rate = sr
        duration = len(samples) / sr
        print(f"  -> Generated {duration:.2f}s of audio in {time.time() - t0:.2f}s")

        all_audio_segments.append(samples)
        all_audio_segments.append(silence_gap)

        # Build SRT subtitle entry for this paragraph
        start_sec = current_time_offset
        end_sec = current_time_offset + duration
        srt_entries.append(
            f"{srt_index}\n{format_timestamp_srt(start_sec)} --> {format_timestamp_srt(end_sec)}\n{para}\n"
        )
        srt_index += 1

        current_time_offset += duration + 0.5

    # 4. Concatenate and save files
    full_audio = np.concatenate(all_audio_segments)
    total_audio_duration = len(full_audio) / sample_rate

    output_mp3 = Path(__file__).parent / "voiceover_af_heart.mp3"
    output_wav = Path(__file__).parent / "voiceover_af_heart.wav"
    output_srt = Path(__file__).parent / "voiceover_af_heart.srt"

    print("\nSaving output files...")
    sf.write(str(output_mp3), full_audio, sample_rate, format="MP3")
    sf.write(str(output_wav), full_audio, sample_rate, format="WAV")
    
    with open(output_srt, "w", encoding="utf-8") as f:
        f.write("\n".join(srt_entries))

    print(f"\n==========================================")
    print(f"SUCCESS! Finished in {time.time() - total_start:.1f}s")
    print(f"Total Audio Duration: {total_audio_duration / 60:.2f} minutes ({total_audio_duration:.1f}s)")
    print(f"MP3 file: {output_mp3}")
    print(f"WAV file: {output_wav}")
    print(f"SRT subtitle file: {output_srt}")
    print(f"==========================================")

if __name__ == "__main__":
    main()
