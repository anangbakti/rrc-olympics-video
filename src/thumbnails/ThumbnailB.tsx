import React from "react";
import { AbsoluteFill, staticFile } from "remotion";

export const ThumbnailB: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#060A14", overflow: "hidden" }}>
      <img
        src={staticFile("images/ai/03_diving_depth_concept.jpg")}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.25) brightness(0.75)" }}
      />
      <AbsoluteFill style={{ background: "radial-gradient(circle at center, transparent 30%, rgba(6, 10, 20, 0.85) 100%)" }} />

      <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            padding: "28px 64px",
            backgroundColor: "rgba(5, 9, 18, 0.94)",
            border: "4px solid #10B981",
            borderRadius: 30,
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.95), 0 0 50px rgba(16, 185, 129, 0.35)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 110, fontWeight: 900, color: "#FFFFFF", letterSpacing: 4, lineHeight: 0.95 }}>
            ENGINEERED <span style={{ color: "#10B981" }}>FOR GOLD</span>
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, color: "#F59E0B", marginTop: 16, letterSpacing: 3 }}>
            BIOMECHANICS • ROCKET SCIENCE • PROJECT 119
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
