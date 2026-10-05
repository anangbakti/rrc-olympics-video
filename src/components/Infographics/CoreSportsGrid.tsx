import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const SPORTS = [
  { name: "Diving", subtitle: "The 'Dream Team' (90%+ Gold Sweep)", icon: "🏊‍♂️", highlight: true },
  { name: "Table Tennis", subtitle: "Undisputed Global Monopoly", icon: "🏓", highlight: true },
  { name: "Weightlifting", subtitle: "Maximum Gold Density", icon: "🏋️‍♂️", highlight: false },
  { name: "Gymnastics", subtitle: "Technical Perfection", icon: "🤸‍♂️", highlight: false },
  { name: "Shooting", subtitle: "Extreme Precision", icon: "🎯", highlight: false },
  { name: "Badminton", subtitle: "Relentless Dominance", icon: "🏸", highlight: false },
];

export const CoreSportsGrid: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 1200,
        padding: "36px",
        backgroundColor: "rgba(10, 16, 28, 0.88)",
        backdropFilter: "blur(20px)",
        borderRadius: 36,
        border: "1px solid rgba(245, 158, 11, 0.35)",
        boxShadow: "0 25px 60px rgba(0, 0, 0, 0.85)",
      }}
    >
      <div
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 22,
          fontWeight: 800,
          color: "#F59E0B",
          letterSpacing: 3,
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        Strategy: The 6 Core Monopoly Disciplines
      </div>
      <div
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 18,
          color: "#94A3B8",
          marginBottom: 24,
        }}
      >
        High Medal Returns, Low Corporate Western Competition
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "18px",
          width: "100%",
        }}
      >
        {SPORTS.map((sport, i) => {
          const cardSpring = spring({
            frame: frame - i * 6,
            fps,
            config: { damping: 14, stiffness: 120 },
          });

          return (
            <div
              key={sport.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px 20px",
                backgroundColor: sport.highlight
                  ? "rgba(245, 158, 11, 0.16)"
                  : "rgba(30, 41, 59, 0.7)",
                borderRadius: 20,
                border: sport.highlight
                  ? "2px solid #F59E0B"
                  : "1px solid rgba(255, 255, 255, 0.12)",
                opacity: cardSpring,
                transform: `scale(${interpolate(cardSpring, [0, 1], [0.85, 1.0])})`,
              }}
            >
              <div style={{ fontSize: 44, marginBottom: 8 }}>{sport.icon}</div>
              <div
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginBottom: 4,
                }}
              >
                {sport.name}
              </div>
              <div
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: sport.highlight ? "#FBBF24" : "#94A3B8",
                  textAlign: "center",
                }}
              >
                {sport.subtitle}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
