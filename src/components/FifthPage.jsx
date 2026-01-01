import { motion } from "framer-motion";
import { useRef } from "react";
import { useStoryMotion } from "../hooks/useStoryMotion";
import "./style/FirstPage.css";

const FifthPage = ({ image, title, text }) => {
  const ref = useRef(null);

 const {
        textX,
        textOpacity,
        imageScale,
        imageOpacity,
      } = useStoryMotion(ref, "belief");
 
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
        style={{ opacity: textOpacity, x: textX }}
      >
        <h2>We don’t sell services.</h2>
        <p>We sell emotions.<br/>
We create memorable moments — not just outputs.</p>
      </motion.div>
    </section>
  );
};

export default FifthPage;
