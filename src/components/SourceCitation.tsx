import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export const SourceCitation: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 140 },
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 45,
        left: 55,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 18px",
        backgroundColor: "rgba(10, 16, 28, 0.75)",
        backdropFilter: "blur(12px)",
        borderRadius: 20,
        border: "1px solid rgba(255, 255, 255, 0.14)",
        transform: `translateY(${(1 - entrance) * -20}px)`,
        opacity: entrance,
        zIndex: 40,
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#F59E0B",
          boxShadow: "0 0 10px #F59E0B",
        }}
      />
      <span
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 15,
          fontWeight: 600,
          color: "rgba(255, 255, 255, 0.8)",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
        }}
      >
        {text}
      </span>
    </div>
  );
};
