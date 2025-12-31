import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./style/firstPage.css";

const FourthPage = ({ image, title, text }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });

  // Image motion
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
        className="story-image left"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <img src="assets/story/04.jpg" alt="" />
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="story-text right"
        style={{ opacity: textOpacity, y: textY }}
      >
        <h2>Moments like these don’t happen by accident.</h2>
        <p>They are shaped with intention.<br/>
Across spaces, stories, screens, and scenes.</p>
      </motion.div>
    </section>
  );
};

export default FourthPage;
