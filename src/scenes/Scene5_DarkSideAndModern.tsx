import React from "react";
import { AbsoluteFill, Sequence, staticFile, OffthreadVideo } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { SourceCitation } from "../components/SourceCitation";

export const Scene5_DarkSideAndModern: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#060A12", overflow: "hidden" }}>
      {/* 253.9s - 257.9s (Frames 0 - 120): Veo Shadowed Tunnel Video (4.0s) */}
      <Sequence from={0} durationInFrames={120}>
        <OffthreadVideo src={staticFile("videos/veo/07_stadium_tunnel_walk.mp4")} style={{ width: "100%", height: "100%", objectFit: "cover" }} muted />
        <div style={{ position: "absolute", bottom: 180, left: 80, padding: "16px 28px", backgroundColor: "rgba(10, 16, 28, 0.9)", borderRadius: 16, borderLeft: "6px solid #EF4444" }}>
          <div style={{ color: "#EF4444", fontSize: 20, fontWeight: 800, letterSpacing: 3 }}>THE DARK SIDE OF JUGUO TIZHI</div>
          <div style={{ color: "#FFFFFF", fontSize: 32, fontWeight: 900, marginTop: 4 }}>Extreme Mental Pressure & Isolation</div>
        </div>
      </Sequence>

      {/* 257.9s - 261.9s (Frames 120 - 120): Separation Card (4.0s) */}
      <Sequence from={120} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#090D18" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#EF4444", letterSpacing: 4, marginBottom: 12 }}>EARLY SEPARATION</div>
          <div style={{ fontSize: 58, fontWeight: 900, color: "#FFFFFF", textAlign: "center", maxWidth: 1100 }}>
            "Thousands of Children Separated from Families at Age 5"
          </div>
          <div style={{ fontSize: 22, color: "#FCA5A5", marginTop: 12 }}>Seeing parents only once or twice a year during intensive training</div>
        </AbsoluteFill>
      </Sequence>

      {/* 261.9s - 267.0s (Frames 240 - 153): Academic Sacrifices (5.1s) */}
      <Sequence from={240} durationInFrames={153}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#070B14" }}>
          <div style={{ padding: "30px 50px", backgroundColor: "rgba(239, 68, 68, 0.12)", border: "2px solid #EF4444", borderRadius: 20, textAlign: "center" }}>
            <div style={{ fontSize: 30, fontWeight: 800, color: "#EF4444" }}>EDUCATIONAL DEFICIT</div>
            <div style={{ fontSize: 56, fontWeight: 900, color: "#FFFFFF", margin: "10px 0" }}>Limited Academic Schooling</div>
            <div style={{ fontSize: 22, color: "#CBD5E1" }}>Athletes spend up to 8 hours daily training with minimal conventional education</div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 267.0s - 271.0s (Frames 393 - 120): The Brutal Funnel Title (4.0s) */}
      <Sequence from={393} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#0A0E1A" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#F59E0B", letterSpacing: 4, marginBottom: 12 }}>THE PYRAMIDAL SELECTION</div>
          <div style={{ fontSize: 68, fontWeight: 900, color: "#FFFFFF", textAlign: "center" }}>A Brutal Funnel of Elimination</div>
          <div style={{ fontSize: 24, color: "#94A3B8", marginTop: 10 }}>Only a fraction of 1% will ever stand on the podium</div>
        </AbsoluteFill>
      </Sequence>

      {/* 271.0s - 275.0s (Frames 513 - 120): Funnel Base (4.0s) */}
      <Sequence from={513} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080C16" }}>
          <div style={{ padding: "28px 50px", backgroundColor: "rgba(30, 41, 59, 0.9)", border: "2px solid #38BDF8", borderRadius: 20, textAlign: "center", width: 600 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#38BDF8" }}>LEVEL 1 • BASE</div>
            <div style={{ fontSize: 64, fontWeight: 900, color: "#FFFFFF", margin: "6px 0" }}>300,000+</div>
            <div style={{ fontSize: 22, color: "#CBD5E1" }}>Kindergarten Children Biometrically Screened</div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 275.0s - 279.0s (Frames 633 - 120): Funnel Mid-Tier (4.0s) */}
      <Sequence from={633} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#060A14" }}>
          <div style={{ padding: "28px 50px", backgroundColor: "rgba(30, 41, 59, 0.9)", border: "2px solid #F59E0B", borderRadius: 20, textAlign: "center", width: 600 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#F59E0B" }}>LEVEL 2 • PROVINCIAL SQUAD</div>
            <div style={{ fontSize: 64, fontWeight: 900, color: "#FFFFFF", margin: "6px 0" }}>30,000</div>
            <div style={{ fontSize: 22, color: "#CBD5E1" }}>Full-Time Boarding School Athletes</div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 279.0s - 283.0s (Frames 753 - 120): Funnel Peak (4.0s) */}
      <Sequence from={753} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#090D18" }}>
          <div style={{ padding: "28px 50px", backgroundColor: "rgba(239, 68, 68, 0.2)", border: "2px solid #EF4444", borderRadius: 20, textAlign: "center", width: 600 }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#EF4444" }}>LEVEL 3 • OLYMPIC PODIUM</div>
            <div style={{ fontSize: 64, fontWeight: 900, color: "#EF4444", margin: "6px 0" }}>~40 GOLDS</div>
            <div style={{ fontSize: 22, color: "#FFFFFF" }}>The Remaining 99.9% Are Filtered Out</div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 283.0s - 288.0s (Frames 873 - 150): The 99.9% Fate (5.0s) */}
      <Sequence from={873} durationInFrames={150}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#070B14" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#94A3B8", letterSpacing: 4, marginBottom: 12 }}>THE UNSEEN TOLL</div>
          <div style={{ fontSize: 54, fontWeight: 900, color: "#FFFFFF", textAlign: "center", maxWidth: 1100 }}>
            Tens of Thousands Eliminated by Age 18
          </div>
          <div style={{ fontSize: 24, color: "#EF4444", marginTop: 14 }}>
            Struggling to reintegrate into modern society after decades of isolated training
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 288.0s - 291.5s (Frames 1023 - 105): Quan Hongchan Spotlight Card (3.5s) */}
      <Sequence from={1023} durationInFrames={105}>
        <AbsoluteFill style={{ overflow: "hidden", backgroundColor: "#060A14" }}>
          {/* Blurred Atmospheric Backdrop */}
          <img
            src={staticFile("images/stock/10_quan_hongchan_diving.jpg")}
            alt=""
            style={{
              position: "absolute",
              width: "120%",
              height: "120%",
              left: "-10%",
              top: "-10%",
              objectFit: "cover",
              filter: "blur(32px) brightness(0.25)",
              transform: "scale(1.1)",
            }}
          />
          <AbsoluteFill
            style={{
              background:
                "radial-gradient(circle at center, transparent 30%, rgba(6, 10, 20, 0.88) 100%)",
            }}
          />

          {/* Spotlight Centered Layout: Full Uncut Photo + Context Panel */}
          <AbsoluteFill
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 70,
              padding: "0 120px",
            }}
          >
            {/* Framed Square Aspect Ratio Card (Uncut 100% visible photo) */}
            <div
              style={{
                width: 540,
                height: 540,
                borderRadius: 24,
                overflow: "hidden",
                border: "3px solid rgba(56, 189, 248, 0.6)",
                boxShadow:
                  "0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(56, 189, 248, 0.25)",
                backgroundColor: "#0B101C",
                flexShrink: 0,
              }}
            >
              <img
                src={staticFile("images/stock/10_quan_hongchan_diving.jpg")}
                alt="Quan Hongchan Olympic Diving Champion"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Right Documentary Infographic Panel */}
            <div
              style={{
                maxWidth: 700,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 18px",
                  backgroundColor: "rgba(56, 189, 248, 0.2)",
                  border: "1px solid #38BDF8",
                  borderRadius: 12,
                  width: "fit-content",
                  color: "#38BDF8",
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: 2,
                }}
              >
                THE MODERN GENERATION
              </div>
              <div
                style={{
                  fontSize: 52,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  lineHeight: 1.15,
                }}
              >
                Quan Hongchan <span style={{ color: "#F59E0B", fontSize: 32, fontWeight: 800 }}>• 全红婵</span>
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: "#38BDF8",
                  fontWeight: 700,
                }}
              >
                3x Olympic Gold Champion (Tokyo 2020 & Paris 2024)
              </div>
              <div
                style={{
                  fontSize: 21,
                  color: "#CBD5E1",
                  lineHeight: 1.5,
                }}
              >
                Achieved historic perfect-10 dives at just age 14, becoming a global icon beloved for her joy, honesty, and grounded spirit.
              </div>
            </div>
          </AbsoluteFill>
          <SourceCitation text="Source: Olympic Broadcasting Services (OBS) Historical Archive" />
        </AbsoluteFill>
      </Sequence>

      {/* 291.5s - 295.0s (Frames 1128 - 105): Quan Hongchan Persona (3.5s) */}
      <Sequence from={1128} durationInFrames={105}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#090E1A" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#F59E0B", letterSpacing: 4, marginBottom: 12 }}>NEW ERA CHARISMA</div>
          <div style={{ fontSize: 62, fontWeight: 900, color: "#FFFFFF", textAlign: "center", maxWidth: 1100 }}>
            Authentic, Playful, and Unscripted
          </div>
          <div style={{ fontSize: 24, color: "#38BDF8", marginTop: 12 }}>Beloved for her humorous interviews and collection of plush toys</div>
        </AbsoluteFill>
      </Sequence>

      {/* 295.0s - 298.0s (Frames 1233 - 90): Generational Shift (3.0s) */}
      <Sequence from={1233} durationInFrames={90}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#060A14" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#10B981", letterSpacing: 4 }}>A SHIFT FROM THE PAST</div>
          <div style={{ fontSize: 64, fontWeight: 900, color: "#FFFFFF", marginTop: 8 }}>From Soldiers of the State to Global Personalities</div>
        </AbsoluteFill>
      </Sequence>

      {/* 298.0s - 301.5s (Frames 1323 - 105): Zheng Qinwen Photo (3.5s) */}
      <Sequence from={1323} durationInFrames={105}>
        <KenBurnsImage src={staticFile("images/stock/11_zheng_qinwen_tennis.jpg")} durationInFrames={105} direction="zoom-out" />
        <SourceCitation text="Source: FFT / Wikimedia Commons (CC BY-SA)" />
        <div style={{ position: "absolute", bottom: 180, right: 80, padding: "16px 28px", backgroundColor: "rgba(11, 16, 28, 0.9)", borderRadius: 16, borderLeft: "6px solid #F59E0B" }}>
          <div style={{ color: "#F59E0B", fontSize: 20, fontWeight: 800, letterSpacing: 2 }}>PARIS 2024 HISTORIC GOLD</div>
          <div style={{ color: "#FFFFFF", fontSize: 34, fontWeight: 900, marginTop: 4 }}>Zheng Qinwen: Queen Wen of Tennis</div>
        </div>
      </Sequence>

      {/* 301.5s - 305.0s (Frames 1428 - 105): Roland Garros Triumph (3.5s) */}
      <Sequence from={1428} durationInFrames={105}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080C18" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#38BDF8", letterSpacing: 4, marginBottom: 12 }}>HISTORIC FIRST</div>
          <div style={{ fontSize: 62, fontWeight: 900, color: "#FFFFFF", textAlign: "center" }}>First Asian Olympic Singles Gold</div>
          <div style={{ fontSize: 24, color: "#CBD5E1", marginTop: 12 }}>Trained partially in private European academies — blending state and market</div>
        </AbsoluteFill>
      </Sequence>

      {/* 305.0s - 308.5s (Frames 1533 - 105): Commercial Success (3.5s) */}
      <Sequence from={1533} durationInFrames={105}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#0A0F1D" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#10B981", letterSpacing: 4, marginBottom: 12 }}>COMMERCIAL POWERHOUSE</div>
          <div style={{ fontSize: 58, fontWeight: 900, color: "#FFFFFF", textAlign: "center" }}>Global Endorsements (Nike, Rolex, Wilson)</div>
          <div style={{ fontSize: 24, color: "#F59E0B", marginTop: 12 }}>A stark contrast to the secluded state champions of the 1980s</div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
