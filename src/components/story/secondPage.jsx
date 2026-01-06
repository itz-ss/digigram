import { motion } from "framer-motion";
import "./style/firstPage.css";

const SecondPage = ({ imageMotion, textMotion }) => {
  
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
          <img src="assets/story/02.jpg" alt="" />
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
          <h2>People don’t remember formats.</h2>
          <p>They remember how something made them feel. <br/>
          The warmth. The connection. The moment.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SecondPage;
