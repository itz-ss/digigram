import { motion } from "framer-motion";
import { useRef } from "react";
import { useStoryMotion } from "../hooks/useStoryMotion";
import "./style/FirstPage.css";

const ThirdPage = ({ image, title, text }) => {
  const ref = useRef(null);

 const {
       textX,
       textOpacity,
       imageScale,
       imageOpacity,
     } = useStoryMotion(ref, "pause");
   
  return (
    <section ref={ref} className="story-section">
      {/* IMAGE */}
      <motion.div
        className="story-image right"
        style={{ scale: imageScale, opacity: imageOpacity }}
      >
        <img src="assets/story/03.jpg" alt="" />
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="story-text left"
        style={{ opacity: textOpacity, x: textX }}
      >
        <h2>The best moments are never loud.</h2>
        <p>They don’t try to impress. <br/>
            They simply belong.</p>
      </motion.div>
    </section>
  );
};

export default ThirdPage;
