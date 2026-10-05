import React, { useMemo } from "react";
import {
  Audio,
  CalculateMetadataFunction,
  Sequence,
  staticFile,
} from "remotion";
import { getAudioDurationInSeconds } from "@remotion/media-utils";
import { CinematicWrapper } from "./components/CinematicWrapper";
import { KineticSubtitle } from "./components/KineticSubtitle";
import { createBgmEnvelope } from "./utils/audioEnvelope";
import { MasterVideoProps } from "./types";
import wordsData from "../public/subtitles/words.json";

import { Scene1_ColdOpenAndCrisis } from "./scenes/Scene1_ColdOpenAndCrisis";
import { Scene2_JuguoTizhi } from "./scenes/Scene2_JuguoTizhi";
import { Scene3_Project119 } from "./scenes/Scene3_Project119";
import { Scene4_SportsScience } from "./scenes/Scene4_SportsScience";
import { Scene5_DarkSideAndModern } from "./scenes/Scene5_DarkSideAndModern";
import { Scene6_GeopoliticsAndEndScreen } from "./scenes/Scene6_GeopoliticsAndEndScreen";

export const calculateVideoMetadata: CalculateMetadataFunction<MasterVideoProps> = async () => {
  const fps = 30;
  let voSec = 333.0;
  try {
    voSec = await getAudioDurationInSeconds(staticFile("audio/voiceover.mp3"));
  } catch (e) {
    console.warn("Could not read audio duration dynamically, using fallback 333.0s", e);
  }

  const voiceoverFrames = Math.ceil(voSec * fps);
  const outroTailFrames = 12 * fps; // 12 seconds clean outro tail
  const totalFrames = voiceoverFrames + outroTailFrames;

  return {
    durationInFrames: totalFrames,
    fps,
    width: 1920,
    height: 1080,
    props: {
      words: wordsData,
      voDurationFrames: voiceoverFrames,
    },
  };
};

export const FullVideo: React.FC<MasterVideoProps> = ({ words, voDurationFrames }) => {
  const totalFrames = voDurationFrames + 360;

  // Precompute smooth DSP ducking volume envelope
  const bgmEnvelope = useMemo(() => {
    return createBgmEnvelope(words, totalFrames);
  }, [words, totalFrames]);

  return (
    <CinematicWrapper>
      {/* 1. Voiceover Audio */}
      <Audio src={staticFile("audio/voiceover.mp3")} volume={1.0} />

      {/* 2. Background Scoring Music with DSP Ducking & Outro Fade */}
      <Audio
        loop
        src={staticFile("audio/bgm.mp3")}
        volume={(f) => bgmEnvelope(f)}
      />

      {/* 3. Chapter Transition Impact SFX on Cuts */}
      <Sequence from={2385} durationInFrames={36}>
        <Audio src={staticFile("audio/sfx/impact.mp3")} volume={0.65} />
      </Sequence>
      <Sequence from={4242} durationInFrames={36}>
        <Audio src={staticFile("audio/sfx/impact.mp3")} volume={0.65} />
      </Sequence>
      <Sequence from={6795} durationInFrames={36}>
        <Audio src={staticFile("audio/sfx/impact.mp3")} volume={0.65} />
      </Sequence>
      <Sequence from={7617} durationInFrames={36}>
        <Audio src={staticFile("audio/sfx/impact.mp3")} volume={0.65} />
      </Sequence>
      <Sequence from={9255} durationInFrames={36}>
        <Audio src={staticFile("audio/sfx/impact.mp3")} volume={0.65} />
      </Sequence>

      {/* 4. Climax Counter Clicks (Restricted to Seoul 5-gold drop & Beijing 48-gold) */}
      <Sequence from={960} durationInFrames={10}>
        <Audio src={staticFile("audio/sfx/counter_tick.mp3")} volume={0.5} />
      </Sequence>
      <Sequence from={1680} durationInFrames={10}>
        <Audio src={staticFile("audio/sfx/counter_tick.mp3")} volume={0.5} />
      </Sequence>

      {/* 5. The 6 Main Chapter Scenes */}
      <Sequence from={0} durationInFrames={2385} premountFor={1}>
        <Scene1_ColdOpenAndCrisis />
      </Sequence>

      <Sequence from={2385} durationInFrames={1857} premountFor={1}>
        <Scene2_JuguoTizhi />
      </Sequence>

      <Sequence from={4242} durationInFrames={2553} premountFor={1}>
        <Scene3_Project119 />
      </Sequence>

      <Sequence from={6795} durationInFrames={822} premountFor={1}>
        <Scene4_SportsScience />
      </Sequence>

      <Sequence from={7617} durationInFrames={1638} premountFor={1}>
        <Scene5_DarkSideAndModern />
      </Sequence>

      <Sequence from={9255} durationInFrames={1095} premountFor={1}>
        <Scene6_GeopoliticsAndEndScreen />
      </Sequence>

      {/* 6. Kinetic Subtitle Overlay with Word-Level Golden Highlighting */}
      <KineticSubtitle words={words} />
    </CinematicWrapper>
  );
};
