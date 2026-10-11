import React from "react";
import { AbsoluteFill, staticFile } from "remotion";

export const ThumbnailC: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#060A14", overflow: "hidden" }}>
      <img
        src={staticFile("images/stock/02_shichahai_sports_school.jpg")}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.2) brightness(0.7)" }}
      />
      <AbsoluteFill style={{ background: "radial-gradient(circle at center, transparent 20%, rgba(6, 10, 20, 0.88) 100%)" }} />

      <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            padding: "28px 64px",
            backgroundColor: "rgba(5, 9, 18, 0.94)",
            border: "4px solid #EF4444",
            borderRadius: 30,
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.95), 0 0 50px rgba(239, 68, 68, 0.35)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 120, fontWeight: 900, color: "#FFFFFF", letterSpacing: 4, lineHeight: 0.95 }}>
            THE <span style={{ color: "#EF4444" }}>0.1%</span> MACHINE
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, color: "#FBBF24", marginTop: 16, letterSpacing: 3 }}>
            3,000 SCHOOLS • SCOUTED AT AGE 4
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
