import React from "react";
import { AbsoluteFill, staticFile } from "remotion";

export const ThumbnailA: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#060A14", overflow: "hidden" }}>
      {/* Background Split: Left Dark Archival Stadium, Right Glowing Golden Podium */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 0, width: "50%", overflow: "hidden" }}>
        <img
          src={staticFile("images/stock/01_seoul_1988_stadium.jpg")}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(100%) contrast(1.3) brightness(0.6)" }}
        />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(239, 68, 68, 0.25)" }} />
        <div style={{ position: "absolute", bottom: 60, left: 60, padding: "12px 28px", backgroundColor: "rgba(239, 68, 68, 0.9)", borderRadius: 16 }}>
          <span style={{ fontSize: 32, fontWeight: 900, color: "#FFFFFF" }}>1988: 5 GOLDS</span>
        </div>
      </div>

      <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: "50%", overflow: "hidden" }}>
        <img
          src={staticFile("images/ai/06_podium_silhouette.jpg")}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", filter: "contrast(1.2) brightness(0.85)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #060A14 0%, transparent 40%)" }} />
        <div style={{ position: "absolute", bottom: 60, right: 60, padding: "12px 28px", backgroundColor: "#F59E0B", borderRadius: 16 }}>
          <span style={{ fontSize: 32, fontWeight: 900, color: "#000000" }}>TODAY: #1 ON EARTH</span>
        </div>
      </div>

      {/* Center High-Impact Typography Badge */}
      <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            padding: "24px 60px",
            backgroundColor: "rgba(6, 10, 20, 0.94)",
            border: "4px solid #F59E0B",
            borderRadius: 30,
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.95), 0 0 50px rgba(245, 158, 11, 0.4)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 130, fontWeight: 900, color: "#FFFFFF", letterSpacing: 4, lineHeight: 0.95, textTransform: "uppercase" }}>
            BRED <span style={{ color: "#F59E0B" }}>TO WIN</span>
          </div>
          <div style={{ fontSize: 32, fontWeight: 800, color: "#E2E8F0", marginTop: 16, letterSpacing: 3 }}>
            THE SECRET OLYMPIC MACHINE
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
