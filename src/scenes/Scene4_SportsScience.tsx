import React from "react";
import { AbsoluteFill, Sequence, staticFile, OffthreadVideo } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { TelemetryOverlay } from "../components/Infographics/TelemetryOverlay";
import { SourceCitation } from "../components/SourceCitation";

export const Scene4_SportsScience: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#060A12", overflow: "hidden" }}>
      {/* 226.5s - 230.0s (Frames 0 - 105): Biomechanics Lab (3.5s) */}
      <Sequence from={0} durationInFrames={105}>
        <KenBurnsImage src={staticFile("images/stock/09_sports_biomechanics_lab.jpg")} durationInFrames={105} direction="zoom-in" />
        <SourceCitation text="Source: China Institute of Sports Science (CISS)" />
        <TelemetryOverlay />
        <div style={{ position: "absolute", bottom: 180, left: 80, padding: "16px 28px", backgroundColor: "rgba(11, 16, 28, 0.9)", borderRadius: 16, borderLeft: "6px solid #38BDF8" }}>
          <div style={{ color: "#38BDF8", fontSize: 20, fontWeight: 700, letterSpacing: 2 }}>CHINA INSTITUTE OF SPORTS SCIENCE</div>
          <div style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 900, marginTop: 4 }}>High-Speed Sensors & Motion Capture</div>
        </div>
      </Sequence>

      {/* 230.0s - 233.5s (Frames 105 - 105): Pillar Three Title Card (3.5s) */}
      <Sequence from={105} durationInFrames={105}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080C16" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#38BDF8", letterSpacing: 4, marginBottom: 12 }}>PILLAR THREE: SCIENCE & ENGINEERING</div>
          <div style={{ fontSize: 68, fontWeight: 900, color: "#FFFFFF", textAlign: "center" }}>Not Just Sweat. Pure Physics.</div>
          <div style={{ fontSize: 24, color: "#94A3B8", marginTop: 10 }}>Analyzing every joint torque and launch angle</div>
        </AbsoluteFill>
      </Sequence>

      {/* 233.5s - 237.0s (Frames 210 - 105): Millimeter Precision (3.5s) */}
      <Sequence from={210} durationInFrames={105}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#0A0E1A" }}>
          <div style={{ padding: "30px 50px", backgroundColor: "rgba(56, 189, 248, 0.12)", border: "2px solid #38BDF8", borderRadius: 20, textAlign: "center" }}>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#38BDF8" }}>MILLIMETER RESOLUTION</div>
            <div style={{ fontSize: 62, fontWeight: 900, color: "#FFFFFF", margin: "10px 0" }}>Takeoff Angle AI Analysis</div>
            <div style={{ fontSize: 22, color: "#CBD5E1" }}>Synchronizing divers' entry within 0.05 seconds of each other</div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 237.0s - 241.0s (Frames 315 - 120): Veo Wind Tunnel Video (4.0s) */}
      <Sequence from={315} durationInFrames={120}>
        <OffthreadVideo src={staticFile("videos/veo/06_aerospace_wind_tunnel.mp4")} style={{ width: "100%", height: "100%", objectFit: "cover" }} muted />
        <TelemetryOverlay />
        <div style={{ position: "absolute", bottom: 180, left: 80, padding: "16px 28px", backgroundColor: "rgba(6, 12, 22, 0.9)", borderRadius: 16, borderLeft: "6px solid #10B981" }}>
          <div style={{ color: "#10B981", fontSize: 20, fontWeight: 800, letterSpacing: 3 }}>AEROSPACE TECHNOLOGY TRANSFER</div>
          <div style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 900, marginTop: 4 }}>Rocket Wind Tunnels Repurposed For Athletes</div>
        </div>
      </Sequence>

      {/* 241.0s - 245.0s (Frames 435 - 120): CASC Rocket Science Badge (4.0s) */}
      <Sequence from={435} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#060A14" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#F59E0B", letterSpacing: 4, marginBottom: 12 }}>CHINA ACADEMY OF LAUNCH VEHICLE TECHNOLOGY</div>
          <div style={{ fontSize: 64, fontWeight: 900, color: "#FFFFFF", textAlign: "center", maxWidth: 1100 }}>
            Aerodynamic Drag Reduction
          </div>
          <div style={{ fontSize: 24, color: "#10B981", marginTop: 12 }}>Testing posture for cyclists, rowers, and world-record swimmers</div>
        </AbsoluteFill>
      </Sequence>

      {/* 245.0s - 249.0s (Frames 555 - 120): Aerodynamic Margins (4.0s) */}
      <Sequence from={555} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", gap: 50, alignItems: "center", justifyContent: "center", backgroundColor: "#080D18" }}>
          <div style={{ padding: "28px 44px", backgroundColor: "rgba(16, 185, 129, 0.15)", borderRadius: 20, border: "2px solid #10B981", textAlign: "center" }}>
            <div style={{ fontSize: 68, fontWeight: 900, color: "#10B981" }}>-3.5%</div>
            <div style={{ fontSize: 22, color: "#FFFFFF", fontWeight: 700, marginTop: 6 }}>Aerodynamic Drag Reduction</div>
          </div>
          <div style={{ padding: "28px 44px", backgroundColor: "rgba(56, 189, 248, 0.15)", borderRadius: 20, border: "2px solid #38BDF8", textAlign: "center" }}>
            <div style={{ fontSize: 68, fontWeight: 900, color: "#38BDF8" }}>0.01s</div>
            <div style={{ fontSize: 22, color: "#FFFFFF", fontWeight: 700, marginTop: 6 }}>The Margin of Olympic Gold</div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 249.0s - 253.9s (Frames 675 - 147): Scientific Superiority (4.9s) */}
      <Sequence from={675} durationInFrames={147}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#090E1A" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#F59E0B", letterSpacing: 4, marginBottom: 12 }}>THE CONCLUSION</div>
          <div style={{ fontSize: 60, fontWeight: 900, color: "#FFFFFF", textAlign: "center", maxWidth: 1100 }}>
            Engineering Everyday Mortals Into Unstoppable Champions
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
