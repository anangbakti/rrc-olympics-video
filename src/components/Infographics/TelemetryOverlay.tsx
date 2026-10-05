import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const TelemetryOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 15 } });

  // Animated telemetry numbers
  const cdValue = (0.218 + Math.sin(frame * 0.1) * 0.005).toFixed(3);
  const angleValue = (38.4 + Math.cos(frame * 0.08) * 0.3).toFixed(1);

  return (
    <div
      style={{
        position: "absolute",
        top: 90,
        right: 80,
        width: 440,
        padding: "26px",
        backgroundColor: "rgba(6, 12, 22, 0.88)",
        backdropFilter: "blur(20px)",
        borderRadius: 24,
        border: "1px solid rgba(16, 185, 129, 0.4)",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(16, 185, 129, 0.15)",
        opacity: entrance,
        transform: `translateX(${interpolate(entrance, [0, 1], [40, 0])}px)`,
        zIndex: 30,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          paddingBottom: 10,
          marginBottom: 16,
        }}
      >
        <span style={{ color: "#10B981", fontSize: 14, fontWeight: 800, letterSpacing: 2 }}>
          BIOMECHANICS HUD // LIVE
        </span>
        <span style={{ color: "#34D399", fontSize: 12, fontWeight: 700 }}>● SENSORS ONLINE</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "#94A3B8", fontSize: 16, fontWeight: 600 }}>Diving Angle Precision:</span>
          <span style={{ color: "#FFFFFF", fontSize: 20, fontWeight: 800, fontFamily: "monospace" }}>
            {angleValue}° <span style={{ color: "#10B981", fontSize: 12 }}>±0.2mm</span>
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "#94A3B8", fontSize: 16, fontWeight: 600 }}>Wind Tunnel Drag (Cd):</span>
          <span style={{ color: "#F59E0B", fontSize: 20, fontWeight: 800, fontFamily: "monospace" }}>
            {cdValue}
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "#94A3B8", fontSize: 16, fontWeight: 600 }}>Technology Origin:</span>
          <span style={{ color: "#38BDF8", fontSize: 16, fontWeight: 700 }}>
            Aerospace Rocket Tech
          </span>
        </div>
      </div>
    </div>
  );
};
