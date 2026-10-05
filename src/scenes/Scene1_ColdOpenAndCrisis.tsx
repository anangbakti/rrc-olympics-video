import React from "react";
import { AbsoluteFill, Sequence, staticFile, useCurrentFrame } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { MedalCounter } from "../components/Infographics/MedalCounter";
import { SourceCitation } from "../components/SourceCitation";

export const Scene1_ColdOpenAndCrisis: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ backgroundColor: "#060A12", overflow: "hidden" }}>
      {/* 0.0s - 4.0s (Frames 0 - 120): Cold Open Hook */}
      <Sequence from={0} durationInFrames={120}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#080D18",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#EF4444",
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            The Greatest Sports Transformation in History
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 900,
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.1,
              maxWidth: 1400,
            }}
          >
            From <span style={{ color: "#EF4444" }}>5 Gold Medals</span> in 1988...
            <br />
            To <span style={{ color: "#F59E0B" }}>The #1 Olympic Empire</span> on Earth.
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 4.0s - 11.5s (Frames 120 - 225): AI Stadium Twilight (7.5s) */}
      <Sequence from={120} durationInFrames={225}>
        <KenBurnsImage
          src={staticFile("images/ai/01_stadium_twilight.jpg")}
          durationInFrames={225}
          direction="zoom-in"
        />
        <div
          style={{
            position: "absolute",
            bottom: 180,
            left: 80,
            maxWidth: 1000,
          }}
        >
          <div style={{ fontSize: 64, fontWeight: 900, color: "#FFFFFF", textShadow: "0 4px 20px rgba(0,0,0,0.9)" }}>
            Anatomy of a Champion Machine
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, color: "#F59E0B", marginTop: 8 }}>
            How China Became an Olympic and Asian Games Superpower
          </div>
        </div>
      </Sequence>

      {/* 11.5s - 18.0s (Frames 345 - 195): Archival Stamp (6.5s) */}
      <Sequence from={345} durationInFrames={195}>
        <AbsoluteFill
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0B0F19",
          }}
        >
          <div
            style={{
              padding: "24px 48px",
              border: "4px solid #EF4444",
              borderRadius: 16,
              textAlign: "center",
              transform: "rotate(-3deg)",
            }}
          >
            <div style={{ color: "#EF4444", fontSize: 28, fontWeight: 800, letterSpacing: 6 }}>
              HISTORICAL LABEL (EARLY 20TH CENTURY)
            </div>
            <div style={{ color: "#FFFFFF", fontSize: 68, fontWeight: 900, margin: "12px 0" }}>
              "The Sick Man of East Asia"
            </div>
            <div style={{ color: "#94A3B8", fontSize: 22, fontWeight: 600 }}>
              Zero Global Presence on the International Olympic Stage
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 18.0s - 28.0s (Frames 540 - 300): Seoul 1988 Archival Photo (Beat at 23s / frame 150) */}
      <Sequence from={540} durationInFrames={300}>
        <KenBurnsImage
          src={staticFile("images/stock/01_seoul_1988_stadium.jpg")}
          durationInFrames={300}
          direction="pan-left"
        />
        <SourceCitation text="Source: IOC Archival Record / Seoul Olympic Stadium" />
        {frame >= 540 + 150 && (
          <div
            style={{
              position: "absolute",
              bottom: 180,
              left: 80,
              padding: "16px 28px",
              backgroundColor: "rgba(239, 68, 68, 0.9)",
              borderRadius: 16,
              color: "#FFFFFF",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            Seoul 1988: 1 Gold per 200 Million Citizens
          </div>
        )}
      </Sequence>

      {/* 28.0s - 41.0s (Frames 840 - 390): Medal Counter (13s with beats at 0s, 4s, 9s) */}
      <Sequence from={840} durationInFrames={390}>
        <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <MedalCounter
            targetNumber={5}
            label="Seoul 1988 Olympics"
            rank="#11 Worldwide"
            color="#EF4444"
          />
        </AbsoluteFill>
      </Sequence>

      {/* 41.0s - 53.0s (Frames 1230 - 360): Asian Games Streak */}
      <Sequence from={1230} durationInFrames={360}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0A0E1A",
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 700, color: "#F59E0B", letterSpacing: 4 }}>
            ASIAN GAMES NEW DELHI 1982 TO PRESENT
          </div>
          <div style={{ fontSize: 64, fontWeight: 900, color: "#FFFFFF", marginTop: 12, textAlign: "center" }}>
            40+ Years of Undefeated Overall Dominance
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, color: "#38BDF8", marginTop: 16 }}>
            Never Defeated in 11 Consecutive Asian Games
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 53.0s - 63.0s (Frames 1590 - 300): Beijing Bird's Nest */}
      <Sequence from={1590} durationInFrames={300}>
        <KenBurnsImage
          src={staticFile("images/stock/02_beijing_birds_nest.jpg")}
          durationInFrames={300}
          direction="zoom-out"
        />
        <SourceCitation text="Source: Beijing 2008 Organizing Committee (BOCOG)" />
        <div style={{ position: "absolute", bottom: 180, right: 80 }}>
          <MedalCounter targetNumber={48} label="Beijing 2008 Olympics" rank="#1 Globally" color="#F59E0B" />
        </div>
      </Sequence>

      {/* 63.0s - 79.5s (Frames 1890 - 495): USA vs China Split Bar */}
      <Sequence from={1890} durationInFrames={495}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#090D18",
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: "#F59E0B", letterSpacing: 3, marginBottom: 24 }}>
            THE NEW GLOBAL DUOPOLY: TOKYO 2020 & PARIS 2024
          </div>
          <div style={{ display: "flex", gap: 60, alignItems: "center" }}>
            <div style={{ textAlign: "center", padding: "30px 50px", backgroundColor: "rgba(239, 68, 68, 0.2)", borderRadius: 24, border: "2px solid #EF4444" }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#EF4444" }}>CHINA 🇨🇳</div>
              <div style={{ fontSize: 80, fontWeight: 900, color: "#FFFFFF" }}>40 GOLDS</div>
              <div style={{ color: "#94A3B8", fontSize: 20 }}>Paris 2024</div>
            </div>
            <div style={{ fontSize: 44, fontWeight: 900, color: "#64748B" }}>VS</div>
            <div style={{ textAlign: "center", padding: "30px 50px", backgroundColor: "rgba(59, 130, 246, 0.2)", borderRadius: 24, border: "2px solid #3B82F6" }}>
              <div style={{ fontSize: 32, fontWeight: 900, color: "#3B82F6" }}>USA 🇺🇸</div>
              <div style={{ fontSize: 80, fontWeight: 900, color: "#FFFFFF" }}>40 GOLDS</div>
              <div style={{ color: "#94A3B8", fontSize: 20 }}>Paris 2024</div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
