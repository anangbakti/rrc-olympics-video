import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

interface Props {
  src: string;
  durationInFrames: number;
  direction?: "zoom-in" | "zoom-out" | "pan-left" | "pan-right";
  alt?: string;
}

export const KenBurnsImage: React.FC<Props> = ({
  src,
  durationInFrames,
  direction = "zoom-in",
}) => {
  const frame = useCurrentFrame();

  const progress = Math.min(1, Math.max(0, frame / Math.max(1, durationInFrames)));

  let scale = 1.0;
  let translateX = 0;
  let translateY = 0;

  if (direction === "zoom-in") {
    scale = interpolate(progress, [0, 1], [1.0, 1.10]);
  } else if (direction === "zoom-out") {
    scale = interpolate(progress, [0, 1], [1.12, 1.02]);
  } else if (direction === "pan-left") {
    scale = 1.08;
    translateX = interpolate(progress, [0, 1], [25, -25]);
  } else if (direction === "pan-right") {
    scale = 1.08;
    translateX = interpolate(progress, [0, 1], [-25, 25]);
  }

  // Smooth fade-in over first 12 frames
  const opacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity, overflow: "hidden", backgroundColor: "#060910" }}>
      <img
        src={src}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
          filter: "contrast(1.06) brightness(0.92)",
        }}
      />
      {/* Subtle Bottom & Top Cinematic Shadow Gradients */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to top, rgba(7, 11, 20, 0.92) 0%, rgba(7, 11, 20, 0.2) 35%, transparent 60%, rgba(7, 11, 20, 0.6) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
