import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface Props {
  targetNumber: number;
  label: string;
  rank: string;
  color?: string;
}

export const MedalCounter: React.FC<Props> = ({
  targetNumber,
  label,
  rank,
  color = "#F59E0B",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const countSpring = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 100 },
  });

  const currentCount = Math.round(interpolate(countSpring, [0, 1], [0, targetNumber]));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "36px 56px",
        backgroundColor: "rgba(11, 16, 28, 0.88)",
        backdropFilter: "blur(20px)",
        borderRadius: 32,
        border: `2px solid ${color}44`,
        boxShadow: `0 24px 60px rgba(0, 0, 0, 0.8), 0 0 40px ${color}22`,
      }}
    >
      <div
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 22,
          fontWeight: 700,
          color: "rgba(255, 255, 255, 0.7)",
          textTransform: "uppercase",
          letterSpacing: 3,
          marginBottom: 8,
        }}
      >
        {label}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: 120,
            fontWeight: 900,
            color,
            textShadow: `0 0 35px ${color}66`,
            lineHeight: 1,
          }}
        >
          {currentCount}
        </span>
        <span
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontSize: 32,
            fontWeight: 800,
            color: "#FFFFFF",
          }}
        >
          GOLD MEDALS
        </span>
      </div>

      <div
        style={{
          marginTop: 18,
          padding: "8px 24px",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          borderRadius: 20,
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 24,
          fontWeight: 700,
          color: "#E2E8F0",
        }}
      >
        World Ranking: <span style={{ color }}>{rank}</span>
      </div>
    </div>
  );
};
