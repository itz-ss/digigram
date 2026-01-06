import { motion, useTransform } from "framer-motion";
import "./style/PersistentGuide.css";

const PersistentGuide = ({ scrollYProgress }) => {
  // Very subtle drift tied to scroll (safe range)
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Optional: gentle fade in/out at start/end of story
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      className="persistent-guide"
      style={{ y, opacity }}
    >
      {/* Placeholder – replace later */}
      <div className="guide-placeholder">
        {/* 🎥 */}
        <img src="/assets/story/guide.png" alt="Guide Icon" />
      </div>
    </motion.div>
  );
};

export default PersistentGuide;
