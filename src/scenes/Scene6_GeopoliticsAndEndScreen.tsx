import React from "react";
import { AbsoluteFill, Sequence, staticFile, OffthreadVideo } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { SourceCitation } from "../components/SourceCitation";

export const Scene6_GeopoliticsAndEndScreen: React.FC = () => {

  return (
    <AbsoluteFill style={{ backgroundColor: "#060A12", overflow: "hidden" }}>
      {/* 308.5s - 312.5s (Frames 0 - 120): Veo Podium Ceremony Video (4.0s) */}
      <Sequence from={0} durationInFrames={120}>
        <OffthreadVideo
          src={staticFile("videos/veo/08_olympic_podium_ceremony.mp4")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          muted
        />
        <div style={{ position: "absolute", bottom: 180, left: 80, padding: "16px 28px", backgroundColor: "rgba(10, 16, 28, 0.90)", borderRadius: 16, borderLeft: "6px solid #F59E0B" }}>
          <div style={{ color: "#F59E0B", fontSize: 20, fontWeight: 800, letterSpacing: 3 }}>CONCLUSION: THE GEOPOLITICAL STAGE</div>
          <div style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 900, marginTop: 4 }}>Gold Medals as Ideological Legitimacy</div>
        </div>
      </Sequence>

      {/* 312.5s - 316.0s (Frames 120 - 105): Ideological Metric (3.5s) */}
      <Sequence from={120} durationInFrames={105}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#090D1A" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#F59E0B", letterSpacing: 4, marginBottom: 12 }}>MORE THAN ATHLETICS</div>
          <div style={{ fontSize: 62, fontWeight: 900, color: "#FFFFFF", textAlign: "center", maxWidth: 1100 }}>
            An Instrument of National Pride & Global Messaging
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 316.0s - 320.0s (Frames 225 - 120): Gold Medal Macro Photo (4.0s) */}
      <Sequence from={225} durationInFrames={120}>
        <KenBurnsImage src={staticFile("images/stock/12_olympic_gold_medal.jpg")} durationInFrames={120} direction="zoom-out" />
        <SourceCitation text="Source: Unsplash / Olympic Archive" />
      </Sequence>

      {/* 320.0s - 324.0s (Frames 345 - 120): National Competitiveness (4.0s) */}
      <Sequence from={345} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#070B14" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#10B981", letterSpacing: 4, marginBottom: 12 }}>SYSTEMIC VALIDATION</div>
          <div style={{ fontSize: 60, fontWeight: 900, color: "#FFFFFF", textAlign: "center", maxWidth: 1100 }}>
            Proof of Modernization and State Execution Capacity
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 324.0s - 328.0s (Frames 465 - 120): The Final Thesis (4.0s) */}
      <Sequence from={465} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080C16" }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#F59E0B", letterSpacing: 4, marginBottom: 12 }}>THE DEFINITIVE MESSAGE</div>
          <div style={{ fontSize: 64, fontWeight: 900, color: "#FFFFFF", textAlign: "center" }}>State Discipline at Peak Scale</div>
        </AbsoluteFill>
      </Sequence>

      {/* 328.0s - 333.0s (Frames 585 - 150): Climax Statement (5.0s) */}
      <Sequence from={585} durationInFrames={150}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#060A12" }}>
          <div style={{ fontSize: 48, fontWeight: 900, color: "#FFFFFF", textAlign: "center", maxWidth: 1200, lineHeight: 1.3 }}>
            "The collective dedication of a nation capable of engineering everyday mortals into <span style={{ color: "#F59E0B" }}>number one champions of the world.</span>"
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
