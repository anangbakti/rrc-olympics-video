import React from "react";
import { AbsoluteFill, Sequence, staticFile, useCurrentFrame } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { SourceCitation } from "../components/SourceCitation";

export const Scene6_GeopoliticsAndEndScreen: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#060A12", overflow: "hidden" }}>
      {/* 308.5s - 318.0s (Frames 0 - 285): Podium Silhouette (Beat at 165 frames) */}
      <Sequence from={0} durationInFrames={285}>
        <KenBurnsImage
          src={staticFile("images/ai/06_podium_silhouette.jpg")}
          durationInFrames={285}
          direction="zoom-in"
        />
        <div style={{ position: "absolute", bottom: 180, left: 80, padding: "20px 32px", backgroundColor: "rgba(10, 16, 28, 0.90)", borderRadius: 20 }}>
          <div style={{ color: "#F59E0B", fontSize: 20, fontWeight: 800, letterSpacing: 3 }}>CONCLUSION: THE GEOPOLITICAL STAGE</div>
          <div style={{ color: "#FFFFFF", fontSize: 34, fontWeight: 900, marginTop: 4 }}>
            Gold Medals as Ideological Legitimacy
          </div>
          {frame >= 165 && (
            <div style={{ color: "#CBD5E1", fontSize: 20, marginTop: 6 }}>
              A profound instrument of national pride and diplomatic messaging
            </div>
          )}
        </div>
      </Sequence>

      {/* 318.0s - 325.0s (Frames 285 - 210): Gold Medal Macro (7s) */}
      <Sequence from={285} durationInFrames={210}>
        <KenBurnsImage
          src={staticFile("images/stock/12_olympic_gold_medal.jpg")}
          durationInFrames={210}
          direction="zoom-out"
        />
        <SourceCitation text="Source: Unsplash / Olympic Archive" />
      </Sequence>

      {/* 325.0s - 333.0s (Frames 495 - 240): Climax Statement (8s) */}
      <Sequence from={495} durationInFrames={240}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080C16" }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#F59E0B", letterSpacing: 4, marginBottom: 16 }}>
            THE DEFINITIVE MESSAGE
          </div>
          <div style={{ fontSize: 52, fontWeight: 900, color: "#FFFFFF", textAlign: "center", maxWidth: 1200, lineHeight: 1.25 }}>
            "The collective dedication of a nation capable of engineering everyday mortals into number one champions of the world."
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 333.0s - 345.0s (Frames 735 - 360): YouTube End Screen Area (12s) */}
      <Sequence from={735} durationInFrames={360}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#060A14",
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, color: "#F59E0B", letterSpacing: 4, marginBottom: 16 }}>
            THANKS FOR WATCHING
          </div>
          <div style={{ fontSize: 56, fontWeight: 900, color: "#FFFFFF", marginBottom: 30 }}>
            Anatomy of a Champion Machine
          </div>

          {/* Reserved placeholders for YouTube End Screen Elements */}
          <div style={{ display: "flex", gap: 60, marginTop: 20 }}>
            <div
              style={{
                width: 320,
                height: 180,
                border: "2px dashed rgba(255, 255, 255, 0.25)",
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255, 255, 255, 0.4)",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              [RECOMMENDED VIDEO]
            </div>
            <div
              style={{
                width: 140,
                height: 140,
                borderRadius: "50%",
                border: "2px dashed rgba(245, 158, 11, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#F59E0B",
                fontSize: 18,
                fontWeight: 800,
                alignSelf: "center",
              }}
            >
              [SUBSCRIBE]
            </div>
            <div
              style={{
                width: 320,
                height: 180,
                border: "2px dashed rgba(255, 255, 255, 0.25)",
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255, 255, 255, 0.4)",
                fontSize: 18,
                fontWeight: 700,
              }}
            >
              [BEST FOR VIEWER]
            </div>
          </div>

          <div style={{ color: "#64748B", fontSize: 16, marginTop: 40 }}>
            Full License Attribution & Manifest: src/assets.manifest.json
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
