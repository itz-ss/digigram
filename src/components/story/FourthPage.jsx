import { motion } from "framer-motion";
import "./style/firstPage.css";

const FourthPage = ({ imageMotion, textMotion }) => {
  
  return (
    <section className="story-section">
      <div className="story-inner">
        {/* IMAGE */}
        <motion.div
          className="story-image"
          style={{
            opacity: imageMotion.opacity,
            scale: imageMotion.scale,
            filter: imageMotion.filter,
          }}
        >
          <img src="assets/story/04.jpg" alt="" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="story-text "
          style={{
            opacity: textMotion.opacity,
            scale: textMotion.scale,
            filter: textMotion.filter,
          }}
        >
          <h2>Moments like these don’t happen by accident.</h2>
          <p>They are shaped with intention.<br/>
  Across spaces, stories, screens, and scenes.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FourthPage;
