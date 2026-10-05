export interface WordTimestamp {
  word: string;
  start: number;
  end: number;
  startFrame: number;
  endFrame: number;
}

export interface SubtitleSegment {
  id: number;
  start: number;
  end: number;
  startFrame: number;
  endFrame: number;
  text: string;
}

export interface AssetManifestItem {
  id: string;
  file: string;
  scene?: number;
  type: string;
  license: string;
  attribution: string;
  description: string;
  sourceUrl?: string;
}

export interface MasterVideoProps extends Record<string, unknown> {
  words: WordTimestamp[];
  voDurationFrames: number;
}

export interface SceneProps {
  startFrame: number;
  durationFrames: number;
}
