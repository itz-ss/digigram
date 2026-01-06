import { motion } from "framer-motion";
import "./style/firstPage.css";

const SixPage = ({ imageMotion, textMotion }) => {
  
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
          <img src="assets/story/06.jpg" alt="" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="story-text"
          style={{
            opacity: textMotion.opacity,
            scale: textMotion.scale,
            filter: textMotion.filter,
          }}
        >
          <h2>Let’s create something people remember.</h2>
          <p>However it needs to exist.<br/>
  Wherever it needs to live.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SixPage;
