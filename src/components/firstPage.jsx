import { motion } from "framer-motion";
import { useRef } from "react";
import { useStoryMotion } from "../hooks/useStoryMotion";
import "./style/firstPage.css";

const FirstPage = () => {
  const ref = useRef(null);

  const {
    textX,
    textOpacity,
    imageScale,
    imageOpacity,
  } = useStoryMotion(ref, "opening");

  return (
    <section ref={ref} className="story-section">
      {/* IMAGE */}
      <motion.div
        className="story-image right"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <img src="/assets/story/01.jpg" alt="" />
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="story-text left"
        style={{ x: textX, opacity: textOpacity }}
      >
        <h2>Some moments stay with us.</h2>
        <p>
          Not because they were planned.
          <br />
          But because they were felt.
        </p>
      </motion.div>
    </section>
  );
};

export default FirstPage;
