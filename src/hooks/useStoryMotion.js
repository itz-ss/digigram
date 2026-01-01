import { useScroll, useTransform } from "framer-motion";

/**
 * Story motion presets
 * These are EMOTIONS, not animations
 */
const PRESETS = {
  opening: {
    textX: [-50, 0, 0, -40],
    imageScale: [1, 1.05, 1.08],
    imageOpacity: [1, 1, 0.25, 0],
  },

  insight: {
    textX: [40, 0, 0, 30],
    imageScale: [1, 1.04, 1.06],
    imageOpacity: [1, 1, 0.2, 0],
  },

  pause: {
    textX: [-20, 0, 0, -15],
    imageScale: [1, 1.02, 1.03],
    imageOpacity: [1, 1, 0.15, 0],
  },

  craft: {
    textX: [40, 0, 0, 35],
    imageScale: [1, 1.05, 1.07],
    imageOpacity: [1, 1, 0.2, 0],
  },

  belief: {
    textX: [-25, 0, 0, -20],
    imageScale: [1, 1.03, 1.04],
    imageOpacity: [1, 1, 0.15, 0],
  },

  invite: {
    textX: [20, 0, 0, 15],
    imageScale: [1, 1.02, 1.03],
    imageOpacity: [1, 1, 0.1, 0],
  },
};

export function useStoryMotion(ref, type = "opening") {
  const preset = PRESETS[type];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });

  /* TEXT — vanish while still in view */
  const textX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.55, 0.75],
    preset.textX
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.55, 0.75],
    [0, 1, 1, 0]
  );

  /* IMAGE — linger longer than text */
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    preset.imageScale
  );

  const imageOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.85, 1],
    preset.imageOpacity
  );

  return {
    textX,
    textOpacity,
    imageScale,
    imageOpacity,
  };
}
