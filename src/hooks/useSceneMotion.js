import { useTransform } from "framer-motion";

export function useSceneImageMotion(
  scrollYProgress,
  start,
  end
) {
  const sceneSpan = end - start;
  const transition = sceneSpan * 0.25;

  const timing = [
    start,
    start + transition,
    end - transition,
    end,
  ];

  const opacity = useTransform(
    scrollYProgress,
    timing,
    [0, 0, 1, 0]
  );

  // const scale = useTransform(
  //   scrollYProgress,
  //   timing,
  //   [1, 1.04, 1.04, 1.1]
  // );

  const scale = 1;

  const filter = useTransform(
    scrollYProgress,
    timing,
    [
      "blur(2px)",
      "blur(0px)",
      "blur(0px)",
      "blur(2px)",
    ]
  );

  return { opacity, scale, filter };
}

export function useSceneTextMotion(
  scrollYProgress,
  start,
  end
) {
  const sceneSpan = end - start;
  const transition = sceneSpan * 0.25;

  const timing = [
    start,
    start + transition,
    end - transition,
    end,
  ];

  const opacity = useTransform(
    scrollYProgress,
    timing,
    [0, 0, 1, 0]
  );

  // KEEP TEXT PERFECTLY STILL
  const scale = 1;

  const filter = useTransform(
    scrollYProgress,
    timing,
    [
      "blur(2px)",
      "blur(0px)",
      "blur(0px)",
      "blur(2px)",
    ]
  );

  return { opacity, scale, filter };
}
