import React from "react";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { TelemetryOverlay } from "../components/Infographics/TelemetryOverlay";
import { SourceCitation } from "../components/SourceCitation";

export const Scene4_SportsScience: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#060A12", overflow: "hidden" }}>
      {/* 226.5s - 237.0s (Frames 0 - 315): Biomechanics Lab + HUD */}
      <Sequence from={0} durationInFrames={315}>
        <KenBurnsImage
          src={staticFile("images/stock/09_sports_biomechanics_lab.jpg")}
          durationInFrames={315}
          direction="zoom-in"
        />
        <SourceCitation text="Source: China Institute of Sports Science (CISS)" />
        <TelemetryOverlay />
        <div style={{ position: "absolute", bottom: 180, left: 80, padding: "16px 28px", backgroundColor: "rgba(11, 16, 28, 0.88)", borderRadius: 16 }}>
          <div style={{ color: "#38BDF8", fontSize: 20, fontWeight: 700, letterSpacing: 2 }}>PILLAR THREE: SCIENCE & BIOMECHANICS</div>
          <div style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 900, marginTop: 4 }}>High-Speed Sensors & Millimeter Precision</div>
        </div>
      </Sequence>

      {/* 237.0s - 253.9s (Frames 315 - 507): Wind Tunnel Lasers (Beat 1: Swimmer drag, Beat 2: Cycling posture) */}
      <Sequence from={315} durationInFrames={507}>
        <KenBurnsImage
          src={staticFile("images/ai/04_wind_tunnel_lasers.jpg")}
          durationInFrames={507}
          direction="pan-right"
        />
        <TelemetryOverlay />
        <div style={{ position: "absolute", bottom: 180, left: 80, maxWidth: 900, padding: "20px 32px", backgroundColor: "rgba(6, 12, 22, 0.92)", borderRadius: 20, border: "1px solid rgba(16, 185, 129, 0.4)" }}>
          <div style={{ color: "#10B981", fontSize: 20, fontWeight: 800, letterSpacing: 3 }}>AEROSPACE TECHNOLOGY TRANSFER</div>
          <div style={{ color: "#FFFFFF", fontSize: 34, fontWeight: 900, marginTop: 6 }}>
            Rocket Wind Tunnels Repurposed for Olympic Athletes
          </div>
          <div style={{ color: "#94A3B8", fontSize: 20, marginTop: 6 }}>
            Testing body drag and posture for swimmers, rowers, and track cyclists
          </div>
        </div>
      </Sequence>
    </AbsoluteFill>
  );
};
