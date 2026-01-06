import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import { STORY_SCENES } from "./storyConfig"; // all the scenes in one place
import { useSceneImageMotion, useSceneTextMotion } from "../../hooks/useSceneMotion";
import PersistentGuide from "./PersistentGuide";
import "./style/storyContainer.css";

const StoryContainer = () => {
  const ref = useRef(null); // ref to the scroll container
  const totalScenes = STORY_SCENES.length; // total number of scenes

  /* -------------------------------------------
     SCROLL TIMELINE (single source of truth)
  ------------------------------------------- */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  /* -------------------------------------------
     ACTIVE SCENE (REACTIVE + STABLE)
     Use ROUND, not FLOOR, to avoid early cut-off
  ------------------------------------------- */
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(
      totalScenes - 1,
      Math.round(v * (totalScenes - 1))
    );
    setActiveIndex(index);
  });

  /* -------------------------------------------
     RENDER
  ------------------------------------------- */
  return (
    <section
      ref={ref}
      className="story-container"
      style={{ height: `${(totalScenes + 1) * 100}vh` }}
    >
       <PersistentGuide scrollYProgress={scrollYProgress} />
      {STORY_SCENES.map((scene, index) => {
        const start = index / totalScenes;
        const end = (index + 1) / totalScenes;

        const imageMotion = useSceneImageMotion(
          scrollYProgress,
          start,
          end
        );

        const textMotion = useSceneTextMotion(
          scrollYProgress,
          start,
          end
        );

        const isActive = index === activeIndex;

        return (
          <motion.div
            key={scene.id}
            className="story-scene"
            style={{
              opacity: imageMotion.opacity,
              zIndex: isActive ? 2 : 1,
              pointerEvents: isActive ? "auto" : "none",
            }}
          >
            <scene.Component
              imageMotion={imageMotion}
              textMotion={textMotion}
            />
          </motion.div>
        );
      })}
    </section>
  );
};

export default StoryContainer;
