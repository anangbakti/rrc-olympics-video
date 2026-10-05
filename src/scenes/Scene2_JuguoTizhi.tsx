import React from "react";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { SourceCitation } from "../components/SourceCitation";

export const Scene2_JuguoTizhi: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#060A12", overflow: "hidden" }}>
      {/* 79.5s - 87.0s (Frames 0 - 225): Title Card */}
      <Sequence from={0} durationInFrames={225}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0B101C",
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: "#F59E0B", letterSpacing: 4 }}>
            PILLAR ONE: THE CORE ENGINE
          </div>
          <div style={{ fontSize: 110, fontWeight: 900, color: "#EF4444", margin: "16px 0", letterSpacing: 6 }}>
            举国体制
          </div>
          <div style={{ fontSize: 52, fontWeight: 800, color: "#FFFFFF" }}>
            "Juguo Tizhi" — The Whole-Nation System
          </div>
          <div style={{ fontSize: 22, color: "#94A3B8", marginTop: 12 }}>
            Mobilizing the entire country's resources toward global sporting triumph
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 87.0s - 98.0s (Frames 225 - 330): Selection Pyramid */}
      <Sequence from={225} durationInFrames={330}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#080D18",
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 700, color: "#38BDF8", letterSpacing: 3, marginBottom: 16 }}>
            EARLY CHILDHOOD SCOUTING (AGES 4 TO 6)
          </div>
          <div style={{ fontSize: 56, fontWeight: 900, color: "#FFFFFF", marginBottom: 30 }}>
            Physical Biometric Screening in Kindergartens
          </div>
          <div style={{ display: "flex", gap: 30 }}>
            <div style={{ padding: "24px 36px", backgroundColor: "rgba(30, 41, 59, 0.8)", borderRadius: 20, textAlign: "center" }}>
              <div style={{ fontSize: 40 }}>📏</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#F59E0B", marginTop: 8 }}>Wingspan Ratio</div>
            </div>
            <div style={{ padding: "24px 36px", backgroundColor: "rgba(30, 41, 59, 0.8)", borderRadius: 20, textAlign: "center" }}>
              <div style={{ fontSize: 40 }}>🤸‍♂️</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#38BDF8", marginTop: 8 }}>Joint Flexibility</div>
            </div>
            <div style={{ padding: "24px 36px", backgroundColor: "rgba(30, 41, 59, 0.8)", borderRadius: 20, textAlign: "center" }}>
              <div style={{ fontSize: 40 }}>⚡</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: "#10B981", marginTop: 8 }}>Muscle Fiber Density</div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 98.0s - 106.0s (Frames 555 - 240): Gymnastics Stock Photo (8s) */}
      <Sequence from={555} durationInFrames={240}>
        <KenBurnsImage
          src={staticFile("images/stock/03_gymnastics_youth_academy.jpg")}
          durationInFrames={240}
          direction="zoom-in"
        />
        <SourceCitation text="Source: General Administration of Sport of China (GASC)" />
        <div style={{ position: "absolute", bottom: 180, left: 80, padding: "16px 28px", backgroundColor: "rgba(11, 16, 28, 0.85)", borderRadius: 16, color: "#FFFFFF", fontSize: 28, fontWeight: 800 }}>
          Over 3,000 Specialized Sports Boarding Schools
        </div>
      </Sequence>

      {/* 106.0s - 114.0s (Frames 795 - 240): AI Training Compound (8s) */}
      <Sequence from={795} durationInFrames={240}>
        <KenBurnsImage
          src={staticFile("images/ai/02_training_compound_dust.jpg")}
          durationInFrames={240}
          direction="pan-right"
        />
        <div style={{ position: "absolute", bottom: 180, right: 80, padding: "16px 28px", backgroundColor: "rgba(11, 16, 28, 0.85)", borderRadius: 16, color: "#F59E0B", fontSize: 28, fontWeight: 800 }}>
          Dedicated Training Compounds Across All Provinces
        </div>
      </Sequence>

      {/* 114.0s - 127.0s (Frames 1035 - 390): State Funding Badge */}
      <Sequence from={1035} durationInFrames={390}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#0A0F1D" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#10B981", letterSpacing: 4 }}>
            TOTAL STATE INVESTMENT
          </div>
          <div style={{ fontSize: 96, fontWeight: 900, color: "#10B981", margin: "16px 0" }}>
            100% FUNDED
          </div>
          <div style={{ display: "flex", gap: 30 }}>
            <span style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", padding: "12px 24px", backgroundColor: "rgba(255,255,255,0.08)", borderRadius: 16 }}>✓ Full Board & Nutrition</span>
            <span style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", padding: "12px 24px", backgroundColor: "rgba(255,255,255,0.08)", borderRadius: 16 }}>✓ World-Class Facilities</span>
            <span style={{ fontSize: 24, fontWeight: 700, color: "#FFFFFF", padding: "12px 24px", backgroundColor: "rgba(255,255,255,0.08)", borderRadius: 16 }}>✓ Elite Coaching Staff</span>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 127.0s - 134.0s (Frames 1425 - 210): Weightlifting Chalk (7s) */}
      <Sequence from={1425} durationInFrames={210}>
        <KenBurnsImage
          src={staticFile("images/stock/04_weightlifting_chalk_hands.jpg")}
          durationInFrames={210}
          direction="zoom-out"
        />
        <div style={{ position: "absolute", bottom: 180, left: 80, padding: "16px 28px", backgroundColor: "rgba(239, 68, 68, 0.9)", borderRadius: 16, color: "#FFFFFF", fontSize: 28, fontWeight: 800 }}>
          Militaristic Repetitions: 6 to 8 Hours Daily
        </div>
      </Sequence>

      {/* 134.0s - 141.4s (Frames 1635 - 222): Zero Human Error */}
      <Sequence from={1635} durationInFrames={222}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080C16" }}>
          <div style={{ fontSize: 64, fontWeight: 900, color: "#FFFFFF", textAlign: "center" }}>
            "Eradicating Human Error"
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#F59E0B", marginTop: 16 }}>
            Thousands of repetitions so victory becomes pure reflex on competition day
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
