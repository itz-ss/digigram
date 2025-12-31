import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./style/firstPage.css";

const FirstPage = ({ image, title, text }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });

  // Image motion (subtle, elegant)
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.08]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0]);

  // Text motion
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.2]);
  const textX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-90, 0, -10, -40]);

  return (
    <section ref={ref} className="story-section">
      {/* IMAGE */}
      <motion.div
        className="story-image right"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <img src="assets/story/01.jpg" alt="" />
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="story-text left"
        style={{ opacity: textOpacity, x: textX }}
      >
        <h2>Some moments stay with us.</h2>
        <p>Not because they were planned. <br/>
          But because they were felt.</p>
      </motion.div>
    </section>
  );
};

export default FirstPage;
