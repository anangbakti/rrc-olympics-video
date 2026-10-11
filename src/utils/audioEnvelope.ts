import { WordTimestamp } from "../types";

export function createBgmEnvelope(
  words: WordTimestamp[],
  totalFrames: number
): (frame: number) => number {
  if (totalFrames <= 0) return () => 0.08;

  const raw = new Float32Array(totalFrames).fill(0.20); // Default gap volume (-14 dB)

  // 1. Mark speech spans as 0.08 (-22 dB)
  for (const w of words) {
    const s = Math.max(0, w.startFrame);
    const e = Math.min(totalFrames - 1, w.endFrame);
    for (let f = s; f <= e; f++) {
      raw[f] = 0.08;
    }
  }

  // 2. DSP One-Pole Filter: rapid attack down, gentle release up
  const smoothed = new Float32Array(totalFrames);
  let current = raw[0];
  const ATTACK = 0.50;  // Rapid drop down to 0.08 (~3 frames)
  const RELEASE = 0.12; // Smooth release up to 0.20 (~12 frames)

  for (let f = 0; f < totalFrames; f++) {
    const target = raw[f];
    current += (target - current) * (target < current ? ATTACK : RELEASE);
    smoothed[f] = current;
  }

  // 4. Master 3-second (90 frames) fade-out at the very end
  const fadeStart = Math.max(0, totalFrames - 90);
  for (let f = fadeStart; f < totalFrames; f++) {
    const progress = (f - fadeStart) / 90;
    smoothed[f] *= (1 - progress);
  }

  return (frame: number) => {
    if (frame < 0 || frame >= totalFrames) return 0;
    return smoothed[frame];
  };
}
