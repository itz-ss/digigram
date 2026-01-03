import { motion } from "framer-motion";
import { useRef } from "react";
import { useStoryMotion } from "../hooks/useStoryMotion";
import "./style/firstPage.css";

const SixPage = ({ image, title, text }) => {
  const ref = useRef(null);

  const {
        textX,
        textOpacity,
        imageScale,
        imageOpacity,
      } = useStoryMotion(ref, "invite");
 
  return (
    <section ref={ref} className="story-section">
      {/* IMAGE */}
      <motion.div
        className="story-image left"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <img src="assets/story/06.jpg" alt="" />
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="story-text right"
        style={{ opacity: textOpacity, x: textX }}
      >
        <h2>Let’s create something people remember.</h2>
        <p>However it needs to exist.<br/>
Wherever it needs to live.</p>
      </motion.div>
    </section>
  );
};

export default SixPage;
