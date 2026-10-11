import React from "react";
import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { SourceCitation } from "../components/SourceCitation";

export const Scene2_JuguoTizhi: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#060A12", overflow: "hidden" }}>
      {/* 79.5s - 83.0s (Frames 0 - 105): Pillar One Badge (3.5s) */}
      <Sequence from={0} durationInFrames={105}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#0B101C" }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#F59E0B", letterSpacing: 4, marginBottom: 12 }}>PILLAR ONE: THE CORE ENGINE</div>
          <div style={{ fontSize: 72, fontWeight: 900, color: "#FFFFFF", textAlign: "center" }}>The Whole-Nation System</div>
          <div style={{ fontSize: 24, color: "#94A3B8", marginTop: 10 }}>Mobilizing 1.4 Billion People Toward One Goal</div>
        </AbsoluteFill>
      </Sequence>

      {/* 83.0s - 87.0s (Frames 105 - 120): Chinese Title Reveal (4.0s) */}
      <Sequence from={105} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080D1A" }}>
          <div style={{ fontSize: 130, fontWeight: 900, color: "#EF4444", letterSpacing: 8, lineHeight: 1 }}>举国体制</div>
          <div style={{ fontSize: 44, fontWeight: 800, color: "#FFFFFF", marginTop: 16 }}>"JUGUO TIZHI"</div>
          <div style={{ fontSize: 22, color: "#F59E0B", fontWeight: 700, marginTop: 8 }}>Total State Mobilization for Global Sporting Triumph</div>
        </AbsoluteFill>
      </Sequence>

      {/* 87.0s - 90.5s (Frames 225 - 105): Scouting Concept (3.5s) */}
      <Sequence from={225} durationInFrames={105}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#090E1C" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#38BDF8", letterSpacing: 3, marginBottom: 14 }}>EARLY CHILDHOOD SCOUTING</div>
          <div style={{ fontSize: 60, fontWeight: 900, color: "#FFFFFF", textAlign: "center", maxWidth: 1100 }}>
            Biometric Screening in Kindergartens
          </div>
          <div style={{ fontSize: 26, color: "#F59E0B", fontWeight: 700, marginTop: 12 }}>Scouts target children as young as 4 to 6 years old</div>
        </AbsoluteFill>
      </Sequence>

      {/* 90.5s - 94.0s (Frames 330 - 105): Biometrics: Wingspan (3.5s) */}
      <Sequence from={330} durationInFrames={105}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#070B16" }}>
          <div style={{ padding: "32px 60px", backgroundColor: "rgba(30, 41, 59, 0.9)", border: "3px solid #F59E0B", borderRadius: 24, textAlign: "center" }}>
            <div style={{ fontSize: 56 }}>📏</div>
            <div style={{ fontSize: 48, fontWeight: 900, color: "#F59E0B", marginTop: 10 }}>Wingspan-to-Height Ratio</div>
            <div style={{ fontSize: 22, color: "#CBD5E1", marginTop: 8 }}>Measuring ape index for future swimmers & divers</div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 94.0s - 98.0s (Frames 435 - 120): Biometrics: Flexibility & Muscle (4.0s) */}
      <Sequence from={435} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", gap: 40, alignItems: "center", justifyContent: "center", backgroundColor: "#080C18" }}>
          <div style={{ padding: "30px 44px", backgroundColor: "rgba(30, 41, 59, 0.9)", border: "2px solid #38BDF8", borderRadius: 20, textAlign: "center" }}>
            <div style={{ fontSize: 50 }}>🤸‍♂️</div>
            <div style={{ fontSize: 32, fontWeight: 900, color: "#38BDF8", marginTop: 8 }}>Joint Flexibility</div>
            <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 6 }}>Ankle & shoulder elasticity tests</div>
          </div>
          <div style={{ padding: "30px 44px", backgroundColor: "rgba(30, 41, 59, 0.9)", border: "2px solid #10B981", borderRadius: 20, textAlign: "center" }}>
            <div style={{ fontSize: 50 }}>⚡</div>
            <div style={{ fontSize: 32, fontWeight: 900, color: "#10B981", marginTop: 8 }}>Fast-Twitch Muscle Fibers</div>
            <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 6 }}>Biopsy & explosive force screening</div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 98.0s - 102.0s (Frames 555 - 120): Youth Gymnastics Spotlight Card (4.0s) */}
      <Sequence from={555} durationInFrames={120}>
        <AbsoluteFill style={{ overflow: "hidden", backgroundColor: "#060A14" }}>
          {/* Blurred Atmospheric Backdrop */}
          <img
            src={staticFile("images/stock/03_gymnastics_youth_academy.jpg")}
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

          {/* Spotlight Layout: Full Uncut Portrait Photo + Context Panel */}
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
            {/* Framed 0.725 Aspect Ratio Card (Uncut 100% visible photo) */}
            <div
              style={{
                width: 470,
                height: 650,
                borderRadius: 24,
                overflow: "hidden",
                border: "3px solid rgba(239, 68, 68, 0.6)",
                boxShadow:
                  "0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(239, 68, 68, 0.25)",
                backgroundColor: "#0B101C",
                flexShrink: 0,
              }}
            >
              <img
                src={staticFile("images/stock/03_gymnastics_youth_academy.jpg")}
                alt="State Youth Gymnastics Academy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Right Documentary Infographic Panel */}
            <div
              style={{
                maxWidth: 720,
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
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                  border: "1px solid #EF4444",
                  borderRadius: 12,
                  width: "fit-content",
                  color: "#EF4444",
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: 2,
                }}
              >
                SPECIALIZED BOARDING SCHOOLS
              </div>
              <div
                style={{
                  fontSize: 50,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  lineHeight: 1.15,
                }}
              >
                Early Childhood Extraction
              </div>
              <div
                style={{
                  fontSize: 24,
                  color: "#F59E0B",
                  fontWeight: 700,
                }}
              >
                Separated from Families for Full-Time Athletics
              </div>
              <div
                style={{
                  fontSize: 21,
                  color: "#CBD5E1",
                  lineHeight: 1.5,
                }}
              >
                Children aged 4 to 6 scouted across China are funneled into over 3,000 sports academies, undergoing relentless joint conditioning before standard schooling.
              </div>
            </div>
          </AbsoluteFill>
          <SourceCitation text="Source: General Administration of Sport of China (GASC)" />
        </AbsoluteFill>
      </Sequence>

      {/* 102.0s - 106.0s (Frames 675 - 120): 3000 Schools Stat (4.0s) */}
      <Sequence from={675} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#060A14" }}>
          <div style={{ fontSize: 110, fontWeight: 900, color: "#F59E0B" }}>3,000+</div>
          <div style={{ fontSize: 44, fontWeight: 800, color: "#FFFFFF", marginTop: 8 }}>Specialized Sports Boarding Schools</div>
          <div style={{ fontSize: 22, color: "#94A3B8", marginTop: 12 }}>Funneling hundreds of thousands of children nationwide</div>
        </AbsoluteFill>
      </Sequence>

      {/* 106.0s - 110.0s (Frames 795 - 120): Shichahai Sports School Archival (4.0s) */}
      <Sequence from={795} durationInFrames={120}>
        <KenBurnsImage src={staticFile("images/stock/02_shichahai_sports_school.jpg")} durationInFrames={120} direction="zoom-in" />
        <SourceCitation text="Source: Beijing Municipal Sports Bureau / Shichahai Sports School" />
        <div style={{ position: "absolute", bottom: 180, left: 80, padding: "16px 28px", backgroundColor: "rgba(11, 16, 28, 0.9)", borderRadius: 16, borderLeft: "6px solid #F59E0B" }}>
          <div style={{ fontSize: 20, color: "#F59E0B", fontWeight: 800 }}>PROVINCIAL TRAINING BASES</div>
          <div style={{ fontSize: 32, color: "#FFFFFF", fontWeight: 900 }}>Beijing Shichahai Sports School • 什刹海体校</div>
          <div style={{ fontSize: 18, color: "#94A3B8", marginTop: 4 }}>Cradle of Olympic champions & closed-loop state athletics</div>
        </div>
      </Sequence>

      {/* 110.0s - 114.0s (Frames 915 - 120): Military Regimen (4.0s) */}
      <Sequence from={915} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#090D18" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#EF4444", letterSpacing: 4, marginBottom: 12 }}>CLOSED-LOOP TRAINING</div>
          <div style={{ fontSize: 58, fontWeight: 900, color: "#FFFFFF", textAlign: "center", maxWidth: 1100 }}>
            365 Days a Year Military Discipline
          </div>
          <div style={{ fontSize: 24, color: "#CBD5E1", marginTop: 12 }}>No outside distractions — every hour scheduled by the state</div>
        </AbsoluteFill>
      </Sequence>

      {/* 114.0s - 118.0s (Frames 1035 - 120): 100% State Funded Badge (4.0s) */}
      <Sequence from={1035} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#0A0F1D" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#10B981", letterSpacing: 4 }}>TOTAL STATE INVESTMENT</div>
          <div style={{ fontSize: 110, fontWeight: 900, color: "#10B981", margin: "10px 0" }}>100% FUNDED</div>
          <div style={{ fontSize: 26, color: "#FFFFFF", fontWeight: 700 }}>Zero Financial Cost to the Athlete's Family</div>
        </AbsoluteFill>
      </Sequence>

      {/* 118.0s - 122.5s (Frames 1155 - 135): State Coverage Package (4.5s) */}
      <Sequence from={1155} durationInFrames={135}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080C16" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#38BDF8", letterSpacing: 3, marginBottom: 20 }}>ALL EXPENSES STATE-SUBSIDIZED</div>
          <div style={{ display: "flex", gap: 24 }}>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", padding: "16px 28px", backgroundColor: "rgba(255,255,255,0.08)", borderRadius: 16 }}>✓ Full Room & Board</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", padding: "16px 28px", backgroundColor: "rgba(255,255,255,0.08)", borderRadius: 16 }}>✓ Elite Nutrition</span>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#FFFFFF", padding: "16px 28px", backgroundColor: "rgba(255,255,255,0.08)", borderRadius: 16 }}>✓ World-Class Coaches</span>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 122.5s - 127.0s (Frames 1290 - 135): Training Volume Comparison (4.5s) */}
      <Sequence from={1290} durationInFrames={135}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#090E1A" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#F59E0B", letterSpacing: 4, marginBottom: 16 }}>TRAINING VOLUME RATIO</div>
          <div style={{ display: "flex", gap: 50, alignItems: "center" }}>
            <div style={{ padding: "26px 44px", backgroundColor: "rgba(239, 68, 68, 0.2)", borderRadius: 20, border: "2px solid #EF4444", textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#EF4444" }}>JUGUO TIZHI</div>
              <div style={{ fontSize: 64, fontWeight: 900, color: "#FFFFFF" }}>6–8 HOURS</div>
              <div style={{ color: "#94A3B8", fontSize: 18 }}>Daily Full-Time Regime</div>
            </div>
            <div style={{ fontSize: 32, fontWeight: 900, color: "#64748B" }}>VS</div>
            <div style={{ padding: "26px 44px", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: 20, border: "2px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#94A3B8" }}>WESTERN CLUBS</div>
              <div style={{ fontSize: 64, fontWeight: 900, color: "#FFFFFF" }}>2–3 HOURS</div>
              <div style={{ color: "#64748B", fontSize: 18 }}>After-School Practice</div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 127.0s - 131.0s (Frames 1425 - 120): Weightlifting Spotlight Card (4.0s) */}
      <Sequence from={1425} durationInFrames={120}>
        <AbsoluteFill style={{ overflow: "hidden", backgroundColor: "#060A14" }}>
          <img src={staticFile("images/stock/04_weightlifting_chalk_hands.jpg")} alt="" style={{ position: "absolute", width: "120%", height: "120%", left: "-10%", top: "-10%", objectFit: "cover", filter: "blur(30px) brightness(0.28)", transform: "scale(1.1)" }} />
          <AbsoluteFill style={{ background: "radial-gradient(circle at center, transparent 30%, rgba(6, 10, 20, 0.85) 100%)" }} />
          <AbsoluteFill style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 60, padding: "0 120px" }}>
            <div style={{ width: 440, height: 640, borderRadius: 24, overflow: "hidden", border: "3px solid rgba(239, 68, 68, 0.6)", boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(239, 68, 68, 0.3)", backgroundColor: "#0B101C", flexShrink: 0 }}>
              <img src={staticFile("images/stock/04_weightlifting_chalk_hands.jpg")} alt="Li Fabin Olympic Weightlifting" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 18px", backgroundColor: "rgba(239, 68, 68, 0.2)", border: "1px solid #EF4444", borderRadius: 12, width: "fit-content", color: "#EF4444", fontSize: 18, fontWeight: 800, letterSpacing: 2 }}>
                MILITARISTIC DRILL CASE STUDY
              </div>
              <div style={{ fontSize: 54, fontWeight: 900, color: "#FFFFFF", lineHeight: 1.1 }}>
                Li Fabin <span style={{ color: "#F59E0B", fontSize: 34, fontWeight: 800 }}>• 李发彬</span>
              </div>
              <div style={{ fontSize: 24, color: "#38BDF8", fontWeight: 700 }}>2x Olympic Gold Champion (Tokyo 2020 & Paris 2024)</div>
              <div style={{ fontSize: 22, color: "#CBD5E1", lineHeight: 1.5 }}>Honed through endless repetitions until snatching hundreds of kilograms becomes pure autonomic reflex.</div>
            </div>
          </AbsoluteFill>
          <SourceCitation text="Source: Olympic Archival Record / China News Service" />
        </AbsoluteFill>
      </Sequence>

      {/* 131.0s - 134.5s (Frames 1545 - 105): Li Fabin Stat Card (3.5s) */}
      <Sequence from={1545} durationInFrames={105}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080C18" }}>
          <div style={{ display: "flex", gap: 40 }}>
            <div style={{ padding: "30px 50px", backgroundColor: "rgba(245, 158, 11, 0.15)", borderRadius: 24, border: "2px solid #F59E0B", textAlign: "center" }}>
              <div style={{ color: "#F59E0B", fontSize: 72, fontWeight: 900 }}>310 kg+</div>
              <div style={{ color: "#FFFFFF", fontSize: 24, fontWeight: 700, marginTop: 8 }}>Olympic Record Total Lift</div>
            </div>
            <div style={{ padding: "30px 50px", backgroundColor: "rgba(16, 185, 129, 0.15)", borderRadius: 24, border: "2px solid #10B981", textAlign: "center" }}>
              <div style={{ color: "#10B981", fontSize: 72, fontWeight: 900 }}>100%</div>
              <div style={{ color: "#FFFFFF", fontSize: 24, fontWeight: 700, marginTop: 8 }}>Execution Precision</div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 134.5s - 138.0s (Frames 1650 - 105): Eradicating Human Error (3.5s) */}
      <Sequence from={1650} durationInFrames={105}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080C16" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#EF4444", letterSpacing: 4, marginBottom: 12 }}>THE PHILOSOPHY</div>
          <div style={{ fontSize: 72, fontWeight: 900, color: "#FFFFFF", textAlign: "center" }}>"Eradicating Human Error"</div>
        </AbsoluteFill>
      </Sequence>

      {/* 138.0s - 141.4s (Frames 1755 - 102): Pure Reflex (3.4s) */}
      <Sequence from={1755} durationInFrames={102}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#060A14" }}>
          <div style={{ fontSize: 28, fontWeight: 800, color: "#F59E0B", maxWidth: 1000, textAlign: "center", lineHeight: 1.4 }}>
            "Thousands of repetitions so victory becomes pure reflex on competition day."
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
