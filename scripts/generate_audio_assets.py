import numpy as np
import soundfile as sf
from pathlib import Path

AUDIO_DIR = Path("public/audio")
SFX_DIR = AUDIO_DIR / "sfx"
SFX_DIR.mkdir(parents=True, exist_ok=True)

SR = 44100

def generate_ambient_bgm(duration_sec=360):
    """
    Synthesize a rich, dark cinematic ambient drone chord progression
    in D minor / F major with tape warmth and gentle pulsing texture.
    """
    total_samples = int(SR * duration_sec)
    t = np.linspace(0, duration_sec, total_samples, endpoint=False)
    
    # Root frequencies (D2, A2, D3, F3, A3)
    notes = [73.42, 110.0, 146.83, 174.61, 220.0, 329.63]
    audio = np.zeros(total_samples, dtype=np.float32)
    
    # Layer atmospheric sine/saw waves with slow LFOs
    for i, freq in enumerate(notes):
        lfo_rate = 0.05 + 0.02 * i
        lfo = 0.6 + 0.4 * np.sin(2 * np.pi * lfo_rate * t)
        detune = 1.0 + 0.0015 * (i % 2 * 2 - 1)
        
        layer = np.sin(2 * np.pi * freq * t) * 0.4
        layer += np.sin(2 * np.pi * (freq * detune) * t) * 0.3
        layer += np.sin(2 * np.pi * (freq * 2.0) * t) * 0.15 # 2nd harmonic
        
        audio += (layer * lfo).astype(np.float32)
    
    # Gentle low sub-bass pulse every 4 seconds
    pulse_env = (np.sin(2 * np.pi * 0.25 * t) ** 4).astype(np.float32)
    sub = np.sin(2 * np.pi * 36.71 * t) * 0.25 * pulse_env
    audio += sub
    
    # Soft filtered noise texture (tape hiss / vinyl warmth)
    np.random.seed(42)
    noise = np.random.normal(0, 0.015, total_samples).astype(np.float32)
    # Simple lowpass filter
    kernel_size = 50
    kernel = np.ones(kernel_size) / kernel_size
    filtered_noise = np.convolve(noise, kernel, mode='same')
    audio += filtered_noise
    
    # Normalize to -18 dB peak so it sits naturally under VO
    max_val = np.max(np.abs(audio))
    if max_val > 0:
        audio = (audio / max_val) * 0.6
        
    # Fade in / fade out (3 seconds each)
    fade_len = int(SR * 3)
    audio[:fade_len] *= np.linspace(0, 1, fade_len)
    audio[-fade_len:] *= np.linspace(1, 0, fade_len)
    
    bgm_path = AUDIO_DIR / "bgm.mp3"
    sf.write(str(bgm_path), audio, SR, format="MP3")
    print(f"[OK] Generated BGM: {bgm_path} ({duration_sec}s)")

def generate_whoosh():
    """Synthesize clean cinematic whoosh transition sound (0.6s)"""
    dur = 0.65
    samples = int(SR * dur)
    t = np.linspace(0, dur, samples, endpoint=False)
    
    noise = np.random.normal(0, 1, samples)
    # Pitch bend / bandpass sweep envelope
    center_freq = 200 + 1200 * np.sin(np.pi * (t / dur))
    mod = np.sin(2 * np.pi * center_freq * t)
    
    env = (np.sin(np.pi * (t / dur)) ** 3).astype(np.float32)
    audio = (noise * 0.5 + mod * 0.5) * env * 0.7
    
    dest = SFX_DIR / "whoosh.mp3"
    sf.write(str(dest), audio, SR, format="MP3")
    print(f"[OK] Generated Whoosh SFX: {dest}")

def generate_impact():
    """Synthesize a dramatic cinematic impact boom (1.2s)"""
    dur = 1.2
    samples = int(SR * dur)
    t = np.linspace(0, dur, samples, endpoint=False)
    
    # Pitch drop 120Hz down to 35Hz
    freq = 35 + 85 * np.exp(-12 * t)
    phase = 2 * np.pi * np.cumsum(freq) / SR
    sub = np.sin(phase) * np.exp(-3.5 * t)
    
    # Transient snap at start (first 30ms)
    snap_len = int(SR * 0.03)
    snap = np.random.normal(0, 0.5, samples)
    snap[snap_len:] = 0
    snap[:snap_len] *= np.linspace(1, 0, snap_len)
    
    audio = (sub * 0.8 + snap * 0.2) * 0.9
    dest = SFX_DIR / "impact.mp3"
    sf.write(str(dest), audio, SR, format="MP3")
    print(f"[OK] Generated Impact SFX: {dest}")

def generate_tick():
    """Synthesize a crisp, subtle mechanical counter tick (0.04s)"""
    dur = 0.04
    samples = int(SR * dur)
    t = np.linspace(0, dur, samples, endpoint=False)
    
    # 2.2 kHz short click
    click = np.sin(2 * np.pi * 2200 * t) * np.exp(-120 * t)
    audio = (click * 0.5).astype(np.float32)
    
    dest = SFX_DIR / "counter_tick.mp3"
    sf.write(str(dest), audio, SR, format="MP3")
    print(f"[OK] Generated Tick SFX: {dest}")

if __name__ == "__main__":
    generate_ambient_bgm(360)
    generate_whoosh()
    generate_impact()
    generate_tick()
