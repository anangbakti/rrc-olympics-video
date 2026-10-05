import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const PyramidFunnel: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase 1 (0 - 180 frames): Base of pyramid
  const phase1Spring = spring({ frame, fps, config: { damping: 14 } });

  // Phase 2 (180 - 390 frames): 0.1% Olympic podium stat
  const phase2Spring = spring({ frame: frame - 180, fps, config: { damping: 14 } });

  // Phase 3 (390 - 630 frames): The human cost callout
  const phase3Spring = spring({ frame: frame - 390, fps, config: { damping: 14 } });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 1100,
        padding: "40px",
        backgroundColor: "rgba(10, 16, 28, 0.90)",
        backdropFilter: "blur(20px)",
        borderRadius: 36,
        border: "1px solid rgba(239, 68, 68, 0.3)",
        boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8)",
      }}
    >
      <div
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontSize: 24,
          fontWeight: 800,
          color: "#EF4444",
          letterSpacing: 3,
          textTransform: "uppercase",
          marginBottom: 24,
        }}
      >
        The Pyramid of Juguo Tizhi
      </div>

      {/* Layer 1: Base - 3,000 Sports Schools (Phase 1) */}
      <div
        style={{
          width: "100%",
          padding: "20px",
          backgroundColor: "rgba(30, 41, 59, 0.85)",
          borderRadius: 20,
          marginBottom: 16,
          border: "1px solid rgba(255, 255, 255, 0.12)",
          opacity: phase1Spring,
          transform: `scale(${interpolate(phase1Spring, [0, 1], [0.92, 1.0])})`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ color: "#94A3B8", fontSize: 18, fontWeight: 700 }}>STAGE 1: GRASSROOTS RECRUITMENT</div>
          <div style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 900 }}>3,000+ Specialized Sports Boarding Schools</div>
        </div>
        <div style={{ color: "#38BDF8", fontSize: 26, fontWeight: 800 }}>Ages 4 – 6 Scouting</div>
      </div>

      {/* Layer 2: Middle Funnel - Elimination (Phase 2) */}
      <div
        style={{
          width: "75%",
          padding: "20px",
          backgroundColor: "rgba(239, 68, 68, 0.18)",
          borderRadius: 20,
          marginBottom: 16,
          border: "2px solid rgba(239, 68, 68, 0.5)",
          opacity: phase2Spring,
          transform: `scale(${interpolate(phase2Spring, [0, 1], [0.92, 1.0])})`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ color: "#FCA5A5", fontSize: 18, fontWeight: 700 }}>STAGE 2: BRUTAL ELIMINATION RATE</div>
          <div style={{ color: "#EF4444", fontSize: 32, fontWeight: 900 }}>Over 99% Eliminated or Injured</div>
        </div>
        <div style={{ color: "#F59E0B", fontSize: 36, fontWeight: 900 }}>0.1% REACH PODIUM</div>
      </div>

      {/* Layer 3: The Human Cost Sub-Card (Phase 3) */}
      <div
        style={{
          width: "75%",
          padding: "18px 24px",
          backgroundColor: "rgba(15, 23, 42, 0.95)",
          borderRadius: 18,
          border: "1px solid rgba(245, 158, 11, 0.35)",
          opacity: phase3Spring,
          transform: `translateY(${interpolate(phase3Spring, [0, 1], [20, 0])}px)`,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div style={{ fontSize: 32 }}>⚠️</div>
        <div>
          <div style={{ color: "#F59E0B", fontSize: 18, fontWeight: 800, textTransform: "uppercase" }}>
            The Human Cost: Little Formal Academic Education
          </div>
          <div style={{ color: "#CBD5E1", fontSize: 18, fontWeight: 500, marginTop: 4 }}>
            Athletes focused 6–8 hours daily on physical repetitions, leaving tens of thousands struggling to integrate into normal society.
          </div>
        </div>
      </div>
    </div>
  );
};
