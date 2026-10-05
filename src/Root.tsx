import React from "react";
import { Composition } from "remotion";
import { FullVideo, calculateVideoMetadata } from "./Composition";
import { MasterVideoProps } from "./types";
import wordsData from "../public/subtitles/words.json";

import { Scene1_ColdOpenAndCrisis } from "./scenes/Scene1_ColdOpenAndCrisis";
import { Scene2_JuguoTizhi } from "./scenes/Scene2_JuguoTizhi";
import { Scene3_Project119 } from "./scenes/Scene3_Project119";
import { Scene4_SportsScience } from "./scenes/Scene4_SportsScience";
import { Scene5_DarkSideAndModern } from "./scenes/Scene5_DarkSideAndModern";
import { Scene6_GeopoliticsAndEndScreen } from "./scenes/Scene6_GeopoliticsAndEndScreen";

import { ThumbnailA } from "./thumbnails/ThumbnailA";
import { ThumbnailB } from "./thumbnails/ThumbnailB";
import { ThumbnailC } from "./thumbnails/ThumbnailC";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Master 16:9 Documentary Composition */}
      <Composition<any, MasterVideoProps>
        id="FullVideo"
        component={FullVideo}
        durationInFrames={10350}
        fps={30}
        width={1920}
        height={1080}
        calculateMetadata={calculateVideoMetadata}
        defaultProps={{
          words: wordsData,
          voDurationFrames: 9990,
        }}
      />

      {/* Standalone Scene Previews for Fast Studio Preview & QA */}
      <Composition
        id="Scene1"
        component={Scene1_ColdOpenAndCrisis}
        durationInFrames={2385}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Scene2"
        component={Scene2_JuguoTizhi}
        durationInFrames={1857}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Scene3"
        component={Scene3_Project119}
        durationInFrames={2553}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Scene4"
        component={Scene4_SportsScience}
        durationInFrames={822}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Scene5"
        component={Scene5_DarkSideAndModern}
        durationInFrames={1638}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Scene6"
        component={Scene6_GeopoliticsAndEndScreen}
        durationInFrames={1095}
        fps={30}
        width={1920}
        height={1080}
      />

      {/* YouTube High-CTR Mobile-First Thumbnails */}
      <Composition
        id="ThumbnailA"
        component={ThumbnailA}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ThumbnailB"
        component={ThumbnailB}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ThumbnailC"
        component={ThumbnailC}
        durationInFrames={1}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
