import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { WordTimestamp } from "../types";

interface Props {
  words: WordTimestamp[];
}

export const KineticSubtitle: React.FC<Props> = ({ words }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Find index of currently spoken word
  const activeIndex = words.findIndex(
    (w) => frame >= w.startFrame && frame <= w.endFrame
  );

  // If no word is active, check if we are within 10 frames of a word
  const nearestWordIndex = words.findIndex(
    (w) => frame >= w.startFrame - 8 && frame <= w.endFrame + 15
  );

  if (nearestWordIndex === -1 && activeIndex === -1) {
    return null; // Don't show subtitles during long silence or outro
  }

  const centerIndex = activeIndex !== -1 ? activeIndex : nearestWordIndex;

  // Window of words to display (3 words before, active, 3 words after)
  const windowStart = Math.max(0, centerIndex - 3);
  const windowEnd = Math.min(words.length, centerIndex + 5);
  const visibleWords = words.slice(windowStart, windowEnd);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 85,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
        zIndex: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px 12px",
          maxWidth: 1280,
          padding: "16px 28px",
          backgroundColor: "rgba(10, 15, 26, 0.88)",
          backdropFilter: "blur(16px)",
          borderRadius: 24,
          border: "1px solid rgba(255, 255, 255, 0.12)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
        }}
      >
        {visibleWords.map((item, idx) => {
          const globalIdx = windowStart + idx;
          const isActive = globalIdx === activeIndex;

          const popSpring = spring({
            frame: frame - item.startFrame,
            fps,
            config: { damping: 14, stiffness: 200 },
          });

          const scale = isActive
            ? interpolate(popSpring, [0, 1], [1.0, 1.12], { extrapolateRight: "clamp" })
            : 1.0;

          return (
            <span
              key={`${globalIdx}-${item.word}`}
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
                fontSize: 34,
                fontWeight: isActive ? 800 : 600,
                color: isActive ? "#FBBF24" : "rgba(255, 255, 255, 0.85)",
                textShadow: isActive
                  ? "0 0 20px rgba(251, 191, 36, 0.75)"
                  : "0 2px 4px rgba(0, 0, 0, 0.8)",
                transform: `scale(${scale})`,
                transition: "color 0.1s ease",
                display: "inline-block",
              }}
            >
              {item.word}
            </span>
          );
        })}
      </div>
    </div>
  );
};
