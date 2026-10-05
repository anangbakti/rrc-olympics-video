# Project Skills & Operator Runbook

This document details the technical competencies, toolchains, operational workflows, and software engineering practices used to develop, maintain, and scale this programmatic video documentary pipeline.

---

## 1. System Architecture & Tech Stack Overview

The project generates broadcast-quality historical video essays through code, combining procedural AI voiceover, word-level audio alignment, procedural audio synthesis, and deterministic React-based video rendering.

```
                      [ content.md / content_en.md ]
                                    │
                                    ▼
                      [ Kokoro TTS (ONNX Model) ]
                                    │
                  ┌─────────────────┴─────────────────┐
                  ▼                                   ▼
        [ voiceover.mp3 / .wav ]             [ voiceover.srt ]
                  │                                   │
                  ▼                                   ▼
        [ Faster-Whisper Base ] ────────► [ public/subtitles/words.json ]
                  │                                   │
                  ├───────────────────────────────────┤
                  ▼                                   ▼
        [ Procedural Audio DSP ]             [ Remotion Engine ]
        (BGM Drone, Whoosh, Impact)          (React 19 + TypeScript)
                  │                                   │
                  └─────────────────┬─────────────────┘
                                    ▼
                         [ Master Compositions ]
                     - FullVideo (1920x1080 @ 30fps)
                     - Scene 1 - 6 Standalone Previews
                     - YouTube Mobile Thumbnails (A, B, C)
                                    │
                                    ▼
                         [ Render Output / MP4 ]
```

### Core Technologies

| Domain | Tools / Libraries | Purpose |
|---|---|---|
| **Video Engine** | [Remotion](https://www.remotion.dev/) 4.x, React 19, TypeScript 5.9 | Frame-accurate programmatic rendering, spring physics, layout compositions |
| **Voice Synthesis** | Kokoro-ONNX v1.0 (`af_heart` voice) | High-fidelity, local neural TTS with zero cloud API costs |
| **Speech Alignment** | Faster-Whisper (`base` model, Int8 CPU) | Automatic speech-to-text with word-level start/end timestamps |
| **Procedural Audio** | Python `soundfile`, `numpy` | Algorithmic ambient drone scoring (D minor), whoosh transients, impact booms |
| **Asset Pipeline** | Python `urllib`, Unsplash & Wikimedia APIs | Automated download of historical stock media, CC license audit |
| **Distribution** | Custom Markdown schema (`youtube_metadata.md`) | High-CTR title variants, chapters, timestamps, SEO tag suites |

---

## 2. Technical Skill Domains

### 2.1 Motion Graphics & Remotion Engineering
- **Frame-Accurate Sequencing**: Utilizing `<Sequence>`, `<Series>`, and `interpolate()` instead of traditional timeline keyframes.
- **Spring Physics**: Implementing organic dampening and stiffness curves using Remotion's `spring()` for UI elements, text reveals, and metric cards.
- **Ken Burns & Parallax Effects**: Dynamic pan-and-zoom image cameras with subtle rotation and vignette shading (`KenBurnsImage.tsx`).
- **Data Infographics**: Custom animated SVG components:
  - `MedalCounter.tsx`: Animated count-up meters for Olympic and Asian Games rankings.
  - `PyramidFunnel.tsx`: Multi-tier funnel representing China's 3,000 sports boarding schools down to Olympic champions.
  - `CoreSportsGrid.tsx`: Visual matrix of China's 6 monopoly sports (diving, weightlifting, table tennis, etc.).
  - `TelemetryOverlay.tsx`: Futuristic biomechanical data brackets and angular telemetry marks.

### 2.2 Speech Synthesis & Forced Alignment (AI Audio)
- **Kokoro-ONNX Workflow**:
  - Running offline neural speech generation on CPU via ONNX runtime.
  - Paragraph-by-paragraph batch synthesis with deterministic silence padding (`0.5s`).
  - Automated timestamped SRT generation based on synthesized audio chunk lengths.
- **Faster-Whisper Forced Word Alignment**:
  - Resampling audio from 24kHz/44.1kHz to 16kHz mono.
  - Extracting word boundaries (`start`, `end`, `startFrame`, `endFrame`).
  - Ground-truth alignment pointer: matching Whisper tokens back to exact script text (`content_en.md`) to prevent hallucinations or spelling discrepancies.

### 2.3 Audio Engineering & Procedural DSP
- **Algorithmic BGM Scoring**:
  - Additive synthesis of D-minor root frequencies (D2, A2, D3, F3, A3) with multi-frequency low-frequency oscillators (LFOs).
  - Sub-bass heartbeat pulses and filtered tape noise texture.
- **Sound Effects Synthesis**:
  - **Whooshes**: Filtered white noise with pitch-swept sine wave modulators.
  - **Impact Booms**: Exponential frequency-drop sub-bass transients (120Hz down to 35Hz).
  - **Counter Ticks**: High-frequency 2.2 kHz decaying impulses.
- **DSP Audio Ducking**:
  - `createBgmEnvelope()`: Automatic gain reduction of background music during active voiceover words with smooth ramp-down and release envelopes.

### 2.4 Visual Assets & Copyright Compliance
- Maintaining machine-readable manifest at [src/assets.manifest.json](file:///d:/PROJECTS/yt/hist/4okt26/src/assets.manifest.json).
- Auditing public domain, Creative Commons (CC BY-SA 3.0/4.0), and Unsplash commercial-free licensing.
- Integrating subtle on-screen source badges (`SourceCitation.tsx`) to build journalistic authority.

### 2.5 YouTube Growth & Thumbnail Engineering
- **High-CTR Visual Thumbnails**:
  - Dedicated Remotion compositions (`ThumbnailA`, `ThumbnailB`, `ThumbnailC`) rendered directly as high-resolution PNG stills.
  - Mobile-first typography: High-contrast 120px+ font sizing, dual-tone gold and red palettes, dark vignette backdrop.
- **SEO & Retention Strategy**:
  - High-hook cold open with immediate crisis introduction (Seoul 1988).
  - Systematic chapter structure with synchronized YouTube timestamps.

---

## 3. Operational Workflows & Runbooks

### Workflow 1: Script Preparation
1. Write the original research draft in [content.md](file:///d:/PROJECTS/yt/hist/4okt26/content.md) (Indonesian source or primary research).
2. Translate/adapt into rhythmic English narration in [content_en.md](file:///d:/PROJECTS/yt/hist/4okt26/content_en.md).
3. Ensure paragraphs are formatted with blank lines between thoughts (each paragraph maps to a distinct voiceover chunk).

### Workflow 2: Generate Voiceover & SRT
Run the Kokoro TTS synthesis script:
```bash
python generate_voiceover.py
```
- **Inputs**: [content_en.md](file:///d:/PROJECTS/yt/hist/4okt26/content_en.md), Kokoro ONNX model files.
- **Outputs**:
  - `voiceover_af_heart.wav` (uncompressed 24kHz master audio)
  - `voiceover_af_heart.mp3` (compressed preview)
  - `voiceover_af_heart.srt` (paragraph subtitles)
- **Deployment**: Copy `voiceover_af_heart.mp3` to `public/audio/voiceover.mp3`.

### Workflow 3: Align Subtitles to Word-Level Timestamps
Run the Faster-Whisper alignment pipeline:
```bash
python scripts/align_subtitles.py
```
- **Inputs**: `voiceover_af_heart.wav`, [content_en.md](file:///d:/PROJECTS/yt/hist/4okt26/content_en.md), `voiceover_af_heart.srt`.
- **Outputs**:
  - `public/subtitles/subtitles.json` (paragraph segments)
  - `public/subtitles/words.json` (word-by-word timestamps with `startFrame` and `endFrame` at 30 FPS).

### Workflow 4: Generate Procedural BGM and Sound FX
Run the NumPy sound generator:
```bash
python scripts/generate_audio_assets.py
```
- **Outputs**:
  - `public/audio/bgm.mp3` (6-minute ambient score)
  - `public/audio/sfx/whoosh.mp3`
  - `public/audio/sfx/impact.mp3`
  - `public/audio/sfx/counter_tick.mp3`

### Workflow 5: Acquire Stock Imagery
Fetch royalty-free and Creative Commons assets:
```bash
python scripts/download_assets.py
```
- Populates `public/images/stock/` with licensed historical imagery and updates manifest entries.

### Workflow 6: Interactive Studio QA & Preview
Launch the Remotion Studio:
```bash
npm run dev
```
- Open `http://localhost:3000` in your browser.
- Select individual scene compositions (`Scene1` through `Scene6`) to review animations, transitions, and audio sync with instant HMR.

### Workflow 7: Render Video and Thumbnails
Render the master documentary video:
```bash
npx remotion render FullVideo out/china_olympic_machine.mp4
```

Render thumbnail variants:
```bash
npx remotion still ThumbnailA out/thumb_a.png
npx remotion still ThumbnailB out/thumb_b.png
npx remotion still ThumbnailC out/thumb_c.png
```

---

## 4. Code Standards & Remotion Best Practices

1. **Deterministic Execution**:
   - Never use `Math.random()` or `Date.now()` inside render passes. Use deterministic seeding or frame-derived numbers.
2. **Audio Volume Management**:
   - Voiceover is normalized to 1.0 (0 dBFS ceiling).
   - BGM is ducked to `0.08 - 0.12` during active words and smoothly ramps to `0.30 - 0.40` during narrative pauses.
3. **Safe Zones for Text**:
   - Subtitles must stay within the bottom 15% safe area with sufficient padding to prevent overlap with YouTube playback controls.
4. **Scene Modularity**:
   - Each narrative scene must live in its own file under `src/scenes/` and export a standalone component with an explicit frame budget defined in [src/scenes.data.ts](file:///d:/PROJECTS/yt/hist/4okt26/src/scenes.data.ts).

---

## 5. Troubleshooting & QA Checklist

- **Subtitles drifting or out of sync**:
  - Verify that `FPS` in `scripts/align_subtitles.py` matches Remotion composition FPS (`30`).
  - Ensure `public/audio/voiceover.mp3` corresponds exactly to the aligned audio file.
- **Whisper word dropouts**:
  - Check the initial prompt in `scripts/align_subtitles.py` to include proper nouns (e.g. *Juguo Tizhi, Quan Hongchan, Pan Zhanle, Liu Xiang*).
- **Audio clipping or distortion**:
  - Check procedural audio normalization in `scripts/generate_audio_assets.py`; ensure `max_val` scaling avoids 0 dBFS clipping.
- **Render performance**:
  - Utilize `--concurrency` flag with `npx remotion render` for multi-threaded rendering matching available CPU cores.
