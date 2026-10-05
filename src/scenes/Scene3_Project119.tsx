import React from "react";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { CoreSportsGrid } from "../components/Infographics/CoreSportsGrid";
import { SourceCitation } from "../components/SourceCitation";

export const Scene3_Project119: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#060A12", overflow: "hidden" }}>
      {/* 141.4s - 154.0s (Frames 0 - 378): Cold Mathematical Calculus */}
      <Sequence from={0} durationInFrames={378}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#090E1A" }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#F59E0B", letterSpacing: 4 }}>
            PILLAR TWO: MATHEMATICS OF MEDALS
          </div>
          <div style={{ fontSize: 72, fontWeight: 900, color: "#FFFFFF", margin: "16px 0", textAlign: "center" }}>
            Cold Mathematical Calculus
          </div>
          <div style={{ fontSize: 26, color: "#94A3B8", maxWidth: 900, textAlign: "center" }}>
            Maximizing the gold medal return per state dollar invested
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 154.0s - 170.0s (Frames 378 - 480): 6 Core Sports Grid */}
      <Sequence from={378} durationInFrames={480}>
        <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CoreSportsGrid />
        </AbsoluteFill>
      </Sequence>

      {/* 170.0s - 178.0s (Frames 858 - 240): AI Diving Depth (8s) */}
      <Sequence from={858} durationInFrames={240}>
        <KenBurnsImage
          src={staticFile("images/ai/03_diving_depth_concept.jpg")}
          durationInFrames={240}
          direction="zoom-in"
        />
        <div style={{ position: "absolute", bottom: 180, left: 80, padding: "16px 28px", backgroundColor: "rgba(11, 16, 28, 0.85)", borderRadius: 16, color: "#F59E0B", fontSize: 28, fontWeight: 800 }}>
          Diving: The "Dream Team" Routinely Sweeping Nearly Every Olympic Gold
        </div>
      </Sequence>

      {/* 178.0s - 186.0s (Frames 1098 - 240): Table Tennis Stock (8s) */}
      <Sequence from={1098} durationInFrames={240}>
        <KenBurnsImage
          src={staticFile("images/stock/05_table_tennis_olympic.jpg")}
          durationInFrames={240}
          direction="pan-left"
        />
        <div style={{ position: "absolute", bottom: 180, right: 80, padding: "16px 28px", backgroundColor: "rgba(239, 68, 68, 0.9)", borderRadius: 16, color: "#FFFFFF", fontSize: 28, fontWeight: 800 }}>
          Table Tennis: Complete Technical Domination
        </div>
      </Sequence>

      {/* 186.0s - 201.0s (Frames 1338 - 450): Team Sport Trap */}
      <Sequence from={1338} durationInFrames={450}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080C16" }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#EF4444", letterSpacing: 4, marginBottom: 16 }}>
            STRATEGIC RESOURCE ALLOCATION
          </div>
          <div style={{ fontSize: 60, fontWeight: 900, color: "#FFFFFF", marginBottom: 30 }}>
            Avoiding The Popular Team Sport Trap
          </div>
          <div style={{ display: "flex", gap: 50 }}>
            <div style={{ width: 440, padding: "30px", backgroundColor: "rgba(239, 68, 68, 0.15)", borderRadius: 24, border: "2px solid #EF4444", textAlign: "center" }}>
              <div style={{ fontSize: 44 }}>⚽ 🏀</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: "#EF4444", marginTop: 8 }}>Soccer & Basketball</div>
              <div style={{ color: "#94A3B8", marginTop: 12, fontSize: 18 }}>Decades of time + Trillions of Yuan</div>
              <div style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 900, marginTop: 16 }}>REWARD: 1 GOLD MEDAL</div>
            </div>
            <div style={{ width: 440, padding: "30px", backgroundColor: "rgba(16, 185, 129, 0.15)", borderRadius: 24, border: "2px solid #10B981", textAlign: "center" }}>
              <div style={{ fontSize: 44 }}>🏊‍♂️ 🏋️‍♂️</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: "#10B981", marginTop: 8 }}>Individual Disciplines</div>
              <div style={{ color: "#94A3B8", marginTop: 12, fontSize: 18 }}>Targeted technical precision</div>
              <div style={{ color: "#F59E0B", fontSize: 28, fontWeight: 900, marginTop: 16 }}>REWARD: DOZENS OF GOLDS</div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 201.0s - 213.0s (Frames 1788 - 360): Project 119 Blueprint */}
      <Sequence from={1788} durationInFrames={360}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#060A14" }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#F59E0B", letterSpacing: 4 }}>
            BEIJING 2008 INITIATIVE
          </div>
          <div style={{ fontSize: 80, fontWeight: 900, color: "#38BDF8", margin: "16px 0" }}>
            "PROJECT 119"
          </div>
          <div style={{ fontSize: 28, color: "#FFFFFF", maxWidth: 900, textAlign: "center" }}>
            Conquering the 119 medals traditionally monopolized by the West:
            <br />
            <span style={{ color: "#F59E0B", fontWeight: 800 }}>Track & Field • Swimming • Rowing</span>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 213.0s - 220.0s (Frames 2148 - 210): Liu Xiang (7s) */}
      <Sequence from={2148} durationInFrames={210}>
        <KenBurnsImage
          src={staticFile("images/stock/07_liu_xiang_hurdles.jpg")}
          durationInFrames={210}
          direction="zoom-in"
        />
        <SourceCitation text="Source: Alex Needham / Wikimedia Commons" />
        <div style={{ position: "absolute", bottom: 180, left: 80, padding: "16px 28px", backgroundColor: "rgba(11, 16, 28, 0.85)", borderRadius: 16, color: "#FFFFFF", fontSize: 28, fontWeight: 800 }}>
          Liu Xiang: Global Icon in 110m Hurdles
        </div>
      </Sequence>

      {/* 220.0s - 226.5s (Frames 2358 - 195): Pan Zhanle / Swimming (6.5s) */}
      <Sequence from={2358} durationInFrames={195}>
        <KenBurnsImage
          src={staticFile("images/stock/08_pan_zhanle_olympic_gold.jpg")}
          durationInFrames={195}
          direction="zoom-out"
        />
        <div style={{ position: "absolute", bottom: 180, right: 80, padding: "16px 28px", backgroundColor: "rgba(56, 189, 248, 0.9)", borderRadius: 16, color: "#060A14", fontSize: 28, fontWeight: 900 }}>
          New Generation: World-Record Swim Dominance
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
