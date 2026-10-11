import React from "react";
import { AbsoluteFill, Sequence, staticFile, OffthreadVideo } from "remotion";
import { KenBurnsImage } from "../components/KenBurnsImage";
import { MedalCounter } from "../components/Infographics/MedalCounter";
import { SourceCitation } from "../components/SourceCitation";

export const Scene1_ColdOpenAndCrisis: React.FC = () => {

  return (
    <AbsoluteFill style={{ backgroundColor: "#060A12", overflow: "hidden" }}>
      {/* 0.0s - 3.5s (Frames 0 - 105): Hook Headline (3.5s) */}
      <Sequence from={0} durationInFrames={105}>
        <AbsoluteFill
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#080D18",
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: "#EF4444", letterSpacing: 4, textTransform: "uppercase", marginBottom: 16 }}>
            The Greatest Sports Transformation in History
          </div>
          <div style={{ fontSize: 74, fontWeight: 900, color: "#FFFFFF", textAlign: "center", lineHeight: 1.1, maxWidth: 1400 }}>
            From <span style={{ color: "#EF4444" }}>5 Gold Medals</span> in 1988...
            <br />
            To <span style={{ color: "#F59E0B" }}>The #1 Olympic Empire</span> on Earth.
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 3.5s - 7.5s (Frames 105 - 120): Veo Stadium Dusk Video (4.0s) */}
      <Sequence from={105} durationInFrames={120}>
        <OffthreadVideo
          src={staticFile("videos/veo/01_stadium_exterior.mp4")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          muted
        />
        <div style={{ position: "absolute", bottom: 160, left: 80, padding: "16px 28px", backgroundColor: "rgba(6, 10, 20, 0.85)", borderRadius: 16, borderLeft: "6px solid #EF4444" }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#F59E0B", letterSpacing: 2 }}>BEIJING OLYMPIC GREEN</div>
          <div style={{ fontSize: 36, fontWeight: 900, color: "#FFFFFF", marginTop: 4 }}>The Monument of State Ambition</div>
        </div>
      </Sequence>

      {/* 7.5s - 11.5s (Frames 225 - 120): Documentary Title Badge (4.0s) */}
      <Sequence from={225} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#070B16" }}>
          <div style={{ padding: "30px 60px", backgroundColor: "rgba(15, 23, 42, 0.8)", border: "2px solid rgba(245, 158, 11, 0.4)", borderRadius: 24, textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.8)" }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#38BDF8", letterSpacing: 4 }}>INVESTIGATIVE ESSAY</div>
            <div style={{ fontSize: 68, fontWeight: 900, color: "#FFFFFF", margin: "14px 0" }}>Anatomy of a Champion Machine</div>
            <div style={{ fontSize: 26, fontWeight: 600, color: "#F59E0B" }}>How China Built an Olympic and Asian Games Superpower</div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 11.5s - 15.0s (Frames 345 - 105): Archival Stamp (3.5s) */}
      <Sequence from={345} durationInFrames={105}>
        <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#0B0F19" }}>
          <div style={{ padding: "28px 56px", border: "5px solid #EF4444", borderRadius: 20, textAlign: "center", transform: "rotate(-3deg)", backgroundColor: "rgba(239, 68, 68, 0.08)" }}>
            <div style={{ color: "#EF4444", fontSize: 24, fontWeight: 800, letterSpacing: 6 }}>HISTORICAL LABEL (EARLY 20TH CENTURY)</div>
            <div style={{ color: "#FFFFFF", fontSize: 72, fontWeight: 900, margin: "12px 0" }}>"The Sick Man of East Asia"</div>
            <div style={{ color: "#94A3B8", fontSize: 22, fontWeight: 600 }}>Zero Medals • Zero Presence on the International Olympic Stage</div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 15.0s - 18.0s (Frames 450 - 90): Cold War Context (3.0s) */}
      <Sequence from={450} durationInFrames={90}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#060A14" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#94A3B8", letterSpacing: 3, marginBottom: 16 }}>1984 LOS ANGELES DEBUT</div>
          <div style={{ fontSize: 64, fontWeight: 900, color: "#FFFFFF", textAlign: "center" }}>15 Golds at Los Angeles 1984</div>
          <div style={{ fontSize: 24, color: "#EF4444", fontWeight: 700, marginTop: 12 }}>Flattered by Eastern Bloc Boycott — True Trial Awaited at Seoul</div>
        </AbsoluteFill>
      </Sequence>

      {/* 18.0s - 22.0s (Frames 540 - 120): Seoul 1988 Stadium Photo (4.0s) */}
      <Sequence from={540} durationInFrames={120}>
        <KenBurnsImage src={staticFile("images/stock/01_seoul_1988_stadium.jpg")} durationInFrames={120} direction="pan-left" />
        <SourceCitation text="Source: IOC Archival Record / Seoul Olympic Stadium 1988" />
        <div style={{ position: "absolute", bottom: 180, left: 80, padding: "16px 28px", backgroundColor: "rgba(11, 16, 28, 0.9)", borderRadius: 16, borderLeft: "6px solid #EF4444" }}>
          <div style={{ fontSize: 20, color: "#EF4444", fontWeight: 800 }}>SEOUL 1988 OLYMPIC GAMES</div>
          <div style={{ fontSize: 32, color: "#FFFFFF", fontWeight: 900 }}>The First Full Superpower Showdown</div>
        </div>
      </Sequence>

      {/* 22.0s - 25.5s (Frames 660 - 105): Seoul Disaster Breakdown (3.5s) */}
      <Sequence from={660} durationInFrames={105}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#0A0D18" }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: "#EF4444", letterSpacing: 4 }}>THE TRAUMA OF 1988</div>
          <div style={{ fontSize: 88, fontWeight: 900, color: "#EF4444", margin: "10px 0" }}>TOTAL COLLAPSE</div>
          <div style={{ fontSize: 28, color: "#FFFFFF", textAlign: "center" }}>
            Over 1 Billion Citizens — Only <span style={{ color: "#F59E0B", fontWeight: 900 }}>5 Gold Medals</span>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 25.5s - 29.0s (Frames 765 - 105): Ratio Callout (3.5s) */}
      <Sequence from={765} durationInFrames={105}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080C16" }}>
          <div style={{ padding: "30px 50px", backgroundColor: "rgba(239, 68, 68, 0.12)", border: "2px solid #EF4444", borderRadius: 20, textAlign: "center" }}>
            <div style={{ fontSize: 32, fontWeight: 900, color: "#EF4444" }}>1 GOLD MEDAL</div>
            <div style={{ fontSize: 52, fontWeight: 900, color: "#FFFFFF", margin: "8px 0" }}>Per 200 Million Citizens</div>
            <div style={{ fontSize: 20, color: "#94A3B8" }}>Ranked #11 Worldwide behind East Germany, USSR, and South Korea</div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 29.0s - 33.0s (Frames 870 - 120): Medal Counter Seoul 1988 (4.0s) */}
      <Sequence from={870} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#060A14" }}>
          <MedalCounter targetNumber={5} label="Seoul 1988 Official Record" rank="#11 Worldwide" color="#EF4444" />
        </AbsoluteFill>
      </Sequence>

      {/* 33.0s - 37.0s (Frames 990 - 120): Public Backlash Card (4.0s) */}
      <Sequence from={990} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#0A0E1A" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#F59E0B", letterSpacing: 4, marginBottom: 12 }}>DOMESTIC OUTCRY</div>
          <div style={{ fontSize: 56, fontWeight: 900, color: "#FFFFFF", textAlign: "center", maxWidth: 1100 }}>
            "National Humiliation and Intense Public Backlash"
          </div>
          <div style={{ fontSize: 22, color: "#94A3B8", marginTop: 14 }}>
            Athletic heroes received harsh criticism — the state realized the amateur model had failed
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 37.0s - 41.0s (Frames 1110 - 120): The State Vow (4.0s) */}
      <Sequence from={1110} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080C16" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#10B981", letterSpacing: 4 }}>THE PIVOT</div>
          <div style={{ fontSize: 72, fontWeight: 900, color: "#FFFFFF", margin: "12px 0" }}>"Never Again."</div>
          <div style={{ fontSize: 26, color: "#F59E0B", fontWeight: 700 }}>Mobilizing Full State Power Toward Total Olympic Dominance</div>
        </AbsoluteFill>
      </Sequence>

      {/* 41.0s - 45.0s (Frames 1230 - 120): Asian Games Streak Card (4.0s) */}
      <Sequence from={1230} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#0A0E1A" }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: "#F59E0B", letterSpacing: 4 }}>ASIAN GAMES DOMINANCE</div>
          <div style={{ fontSize: 68, fontWeight: 900, color: "#FFFFFF", marginTop: 12, textAlign: "center" }}>
            40+ Years Undefeated
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#38BDF8", marginTop: 14 }}>
            Unbroken #1 Streak from New Delhi 1982 to Hangzhou 2023
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 45.0s - 49.0s (Frames 1350 - 120): Asian Games Medal Stat (4.0s) */}
      <Sequence from={1350} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#060A14" }}>
          <div style={{ display: "flex", gap: 50 }}>
            <div style={{ padding: "26px 44px", backgroundColor: "rgba(16, 185, 129, 0.12)", borderRadius: 20, border: "2px solid #10B981", textAlign: "center" }}>
              <div style={{ fontSize: 64, fontWeight: 900, color: "#10B981" }}>11 STREAK</div>
              <div style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 700, marginTop: 6 }}>Consecutive Asian Games Titles</div>
            </div>
            <div style={{ padding: "26px 44px", backgroundColor: "rgba(245, 158, 11, 0.12)", borderRadius: 20, border: "2px solid #F59E0B", textAlign: "center" }}>
              <div style={{ fontSize: 64, fontWeight: 900, color: "#F59E0B" }}>201 GOLDS</div>
              <div style={{ color: "#FFFFFF", fontSize: 22, fontWeight: 700, marginTop: 6 }}>Hangzhou 2023 Record Sweep</div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 49.0s - 53.0s (Frames 1470 - 120): Stepping Stone To Global (4.0s) */}
      <Sequence from={1470} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080D18" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#94A3B8", letterSpacing: 4, marginBottom: 12 }}>THE GLOBAL GOAL</div>
          <div style={{ fontSize: 60, fontWeight: 900, color: "#FFFFFF", textAlign: "center", maxWidth: 1100 }}>
            Asia Was Only The Proving Ground
          </div>
          <div style={{ fontSize: 26, color: "#EF4444", fontWeight: 800, marginTop: 14 }}>
            The Ultimate Target: Topping the Summer Olympic Medal Table
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 53.0s - 57.0s (Frames 1590 - 120): Beijing Bird's Nest Photo (4.0s) */}
      <Sequence from={1590} durationInFrames={120}>
        <KenBurnsImage src={staticFile("images/stock/02_beijing_birds_nest.jpg")} durationInFrames={120} direction="zoom-out" />
        <SourceCitation text="Source: Beijing 2008 Organizing Committee (BOCOG)" />
        <div style={{ position: "absolute", bottom: 180, left: 80, padding: "16px 28px", backgroundColor: "rgba(11, 16, 28, 0.9)", borderRadius: 16, borderLeft: "6px solid #F59E0B" }}>
          <div style={{ fontSize: 20, color: "#F59E0B", fontWeight: 800 }}>BEIJING 2008 SUMMER OLYMPICS</div>
          <div style={{ fontSize: 34, color: "#FFFFFF", fontWeight: 900 }}>The 100-Year Olympic Dream Realized</div>
        </div>
      </Sequence>

      {/* 57.0s - 61.0s (Frames 1710 - 120): Beijing 2008 Medal Triumph (4.0s) */}
      <Sequence from={1710} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#070B16" }}>
          <MedalCounter targetNumber={48} label="Beijing 2008 Olympics" rank="#1 Globally" color="#F59E0B" />
        </AbsoluteFill>
      </Sequence>

      {/* 61.0s - 65.0s (Frames 1830 - 120): Milestone Card (4.0s) */}
      <Sequence from={1830} durationInFrames={120}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#090D1A" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#38BDF8", letterSpacing: 4 }}>HISTORIC MILESTONE</div>
          <div style={{ fontSize: 62, fontWeight: 900, color: "#FFFFFF", margin: "14px 0", textAlign: "center" }}>
            First Asian Nation to Top the Olympic Medal Table
          </div>
          <div style={{ fontSize: 24, color: "#94A3B8" }}>Ending 72 years of uninterrupted US and Soviet/Russian monopoly</div>
        </AbsoluteFill>
      </Sequence>

      {/* 65.0s - 69.5s (Frames 1950 - 135): Tokyo 2020 Battle (4.5s) */}
      <Sequence from={1950} durationInFrames={135}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080C16" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#F59E0B", letterSpacing: 3, marginBottom: 20 }}>TOKYO 2020: THE THIN MARGIN</div>
          <div style={{ display: "flex", gap: 50, alignItems: "center" }}>
            <div style={{ textAlign: "center", padding: "24px 44px", backgroundColor: "rgba(239, 68, 68, 0.2)", borderRadius: 20, border: "2px solid #EF4444" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#EF4444" }}>CHINA 🇨🇳</div>
              <div style={{ fontSize: 68, fontWeight: 900, color: "#FFFFFF" }}>38 GOLDS</div>
            </div>
            <div style={{ fontSize: 36, fontWeight: 900, color: "#64748B" }}>VS</div>
            <div style={{ textAlign: "center", padding: "24px 44px", backgroundColor: "rgba(59, 130, 246, 0.2)", borderRadius: 20, border: "2px solid #3B82F6" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#3B82F6" }}>USA 🇺🇸</div>
              <div style={{ fontSize: 68, fontWeight: 900, color: "#FFFFFF" }}>39 GOLDS</div>
            </div>
          </div>
          <div style={{ color: "#94A3B8", fontSize: 20, marginTop: 16 }}>Decided by a single gold on the final day</div>
        </AbsoluteFill>
      </Sequence>

      {/* 69.5s - 74.5s (Frames 2085 - 150): Paris 2024 Dead Heat (5.0s) */}
      <Sequence from={2085} durationInFrames={150}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#060A14" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#10B981", letterSpacing: 3, marginBottom: 20 }}>PARIS 2024: HISTORIC DEAD HEAT</div>
          <div style={{ display: "flex", gap: 50, alignItems: "center" }}>
            <div style={{ textAlign: "center", padding: "24px 44px", backgroundColor: "rgba(239, 68, 68, 0.25)", borderRadius: 20, border: "3px solid #EF4444" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#EF4444" }}>CHINA 🇨🇳</div>
              <div style={{ fontSize: 72, fontWeight: 900, color: "#FFFFFF" }}>40 GOLDS</div>
            </div>
            <div style={{ fontSize: 36, fontWeight: 900, color: "#F59E0B" }}>TIED</div>
            <div style={{ textAlign: "center", padding: "24px 44px", backgroundColor: "rgba(59, 130, 246, 0.25)", borderRadius: 20, border: "3px solid #3B82F6" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: "#3B82F6" }}>USA 🇺🇸</div>
              <div style={{ fontSize: 72, fontWeight: 900, color: "#FFFFFF" }}>40 GOLDS</div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 74.5s - 79.5s (Frames 2235 - 150): Hook Climax (5.0s) */}
      <Sequence from={2235} durationInFrames={150}>
        <AbsoluteFill style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#080D18" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#F59E0B", letterSpacing: 4, marginBottom: 16 }}>THE CENTRAL QUESTION</div>
          <div style={{ fontSize: 64, fontWeight: 900, color: "#FFFFFF", textAlign: "center", maxWidth: 1200, lineHeight: 1.2 }}>
            How Did A Nation With Almost No Winter or Summer Olympic Tradition
            <br />
            <span style={{ color: "#EF4444" }}>Engineer This Unstoppable Medal Machine?</span>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
