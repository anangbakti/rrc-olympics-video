import React from "react";
import { AbsoluteFill, Sequence, staticFile, useCurrentFrame } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { PyramidFunnel } from "../components/Infographics/PyramidFunnel";
import { SourceCitation } from "../components/SourceCitation";

export const Scene5_DarkSideAndModern: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#060A12", overflow: "hidden" }}>
      {/* 253.9s - 267.0s (Frames 0 - 393): Shadowed Tunnel Atmosphere */}
      <Sequence from={0} durationInFrames={393}>
        <KenBurnsImage
          src={staticFile("images/ai/05_shadowed_arena_tunnel.jpg")}
          durationInFrames={393}
          direction="zoom-in"
        />
        <div style={{ position: "absolute", bottom: 180, left: 80, maxWidth: 900, padding: "20px 32px", backgroundColor: "rgba(10, 16, 28, 0.90)", borderRadius: 20, border: "1px solid rgba(239, 68, 68, 0.4)" }}>
          <div style={{ color: "#EF4444", fontSize: 20, fontWeight: 800, letterSpacing: 3 }}>THE DARK SIDE OF JUGUO TIZHI</div>
          <div style={{ color: "#FFFFFF", fontSize: 34, fontWeight: 900, marginTop: 6 }}>
            Extreme Mental Pressure & Early Separation
          </div>
          {frame >= 180 && (
            <div style={{ color: "#FCA5A5", fontSize: 22, marginTop: 8, fontWeight: 600 }}>
              "Thousands of children separated from families at a very young age"
            </div>
          )}
        </div>
      </Sequence>

      {/* 267.0s - 288.0s (Frames 393 - 630): Staged Funnel Elimination */}
      <Sequence from={393} durationInFrames={630}>
        <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <PyramidFunnel />
        </AbsoluteFill>
      </Sequence>

      {/* 288.0s - 298.0s (Frames 1023 - 300): Quan Hongchan (Beat at 150 frames) */}
      <Sequence from={1023} durationInFrames={300}>
        <KenBurnsImage
          src={staticFile("images/stock/10_quan_hongchan_diving.jpg")}
          durationInFrames={300}
          direction="pan-left"
        />
        <SourceCitation text="Source: Olympic Broadcasting Services (OBS) Historical Archive" />
        <div style={{ position: "absolute", bottom: 180, left: 80, padding: "18px 30px", backgroundColor: "rgba(11, 16, 28, 0.88)", borderRadius: 20 }}>
          <div style={{ color: "#38BDF8", fontSize: 20, fontWeight: 800, letterSpacing: 2 }}>THE MODERN GENERATION</div>
          <div style={{ color: "#FFFFFF", fontSize: 34, fontWeight: 900, marginTop: 4 }}>
            Quan Hongchan: Flawless Diving & Relaxed Spirit
          </div>
          {frame >= 1023 + 150 && (
            <div style={{ color: "#F59E0B", fontSize: 22, fontWeight: 700, marginTop: 6 }}>
              A more authentic, playful public persona than previous generations
            </div>
          )}
        </div>
      </Sequence>

      {/* 298.0s - 308.5s (Frames 1323 - 315): Zheng Qinwen (Beat at 165 frames) */}
      <Sequence from={1323} durationInFrames={315}>
        <KenBurnsImage
          src={staticFile("images/stock/11_zheng_qinwen_tennis.jpg")}
          durationInFrames={315}
          direction="zoom-out"
        />
        <SourceCitation text="Source: FFT / Wikimedia Commons (CC BY-SA)" />
        <div style={{ position: "absolute", bottom: 180, right: 80, padding: "18px 30px", backgroundColor: "rgba(11, 16, 28, 0.88)", borderRadius: 20, textAlign: "right" }}>
          <div style={{ color: "#F59E0B", fontSize: 20, fontWeight: 800, letterSpacing: 2 }}>GLOBAL COMMERCIAL SUCCESS</div>
          <div style={{ color: "#FFFFFF", fontSize: 34, fontWeight: 900, marginTop: 4 }}>
            Zheng Qinwen: Paris 2024 Olympic Gold Champion
          </div>
          {frame >= 1323 + 165 && (
            <div style={{ color: "#38BDF8", fontSize: 22, fontWeight: 700, marginTop: 6 }}>
              Global contracts (Nike, Rolex, Wilson) — a stark contrast to the past
            </div>
          )}
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
