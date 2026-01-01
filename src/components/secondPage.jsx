import { motion } from "framer-motion";
import { useRef } from "react";
import { useStoryMotion } from "../hooks/useStoryMotion";
import "./style/firstPage.css";

const SecondPage = ({ image, title, text }) => {
  const ref = useRef(null);
  
    const {
      textX,
      textOpacity,
      imageScale,
      imageOpacity,
    } = useStoryMotion(ref, "insight");
  

  return (
    <section ref={ref} className="story-section">
      {/* IMAGE */}
      <motion.div
        className="story-image left"
        style={{ scale: imageScale, opacity: imageOpacity }}
      > 
        <img src="assets/story/02.jpg" alt="" />
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="story-text right"
        style={{ opacity: textOpacity, x: textX }}
      >
        <h2>People don’t remember formats.</h2>
        <p>They remember how something made them feel. <br/>
        The warmth. The connection. The moment.</p>
      </motion.div>
    </section>
  );
};

export default SecondPage;
