import React from "react";
import { AbsoluteFill } from "remotion";

export const CinematicWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#070B12", overflow: "hidden" }}>
      {/* Main Content */}
      <AbsoluteFill>{children}</AbsoluteFill>

      {/* Subtle Cinematic Vignette */}
      <AbsoluteFill
        style={{
          pointerEvents: "none",
          background: "radial-gradient(ellipse at center, transparent 55%, rgba(5, 8, 15, 0.75) 100%)",
        }}
      />

      {/* Film Grain Texture via SVG Noise Filter */}
      <AbsoluteFill style={{ pointerEvents: "none", opacity: 0.04 }}>
        <svg width="100%" height="100%">
          <filter id="cinematic-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#cinematic-grain)" />
        </svg>
      </AbsoluteFill>

      {/* Cinematic Letterbox Slim Accents (Top & Bottom subtle borders) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 18,
          backgroundColor: "#05070D",
          zIndex: 100,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 18,
          backgroundColor: "#05070D",
          zIndex: 100,
        }}
      />
    </AbsoluteFill>
  );
};
