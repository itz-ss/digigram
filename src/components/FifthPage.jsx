import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./style/FirstPage.css";

const FifthPage = ({ image, title, text }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });

  // Image motion (subtle, elegant)
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.08]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0]);

  // Text motion
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [40, 0, 0, -40]
  );

  return (
    <section ref={ref} className="story-section">
      {/* IMAGE */}
      <motion.div
        className="story-image right"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <img src="assets/story/05.jpg" alt="" />
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="story-text left"
        style={{ opacity: textOpacity, y: textY }}
      >
        <h2>We don’t sell services.</h2>
        <p>We sell emotions.<br/>
We create memorable moments — not just outputs.</p>
      </motion.div>
    </section>
  );
};

export default FifthPage;
