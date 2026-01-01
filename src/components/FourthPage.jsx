import { motion } from "framer-motion";
import { useRef } from "react";
import { useStoryMotion } from "../hooks/useStoryMotion";
import "./style/firstPage.css";

const FourthPage = ({ image, title, text }) => {
  const ref = useRef(null);

 const {
        textX,
        textOpacity,
        imageScale,
        imageOpacity,
      } = useStoryMotion(ref, "craft");
 

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
        style={{ opacity: textOpacity, x: textX }}
      >
        <h2>Moments like these don’t happen by accident.</h2>
        <p>They are shaped with intention.<br/>
Across spaces, stories, screens, and scenes.</p>
      </motion.div>
    </section>
  );
};

export default FourthPage;
