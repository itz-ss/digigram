import { motion } from "framer-motion";
import "./style/firstPage.css";

const ThirdPage = ({ imageMotion, textMotion }) => {
    
  return (
    <section className="story-section">
      <div className="story-inner reverse">
        {/* IMAGE */}
        <motion.div
          className="story-image"
          style={{
            opacity: imageMotion.opacity,
            scale: imageMotion.scale,
            filter: imageMotion.filter,
          }}
        >
          <img src="assets/story/03.jpg" alt="" />
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
          <h2>The best moments are never loud.</h2>
          <p>They don’t try to impress. <br/>
              They simply belong.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ThirdPage;
