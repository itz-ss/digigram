import { motion } from "framer-motion";
import "./style/firstPage.css";

const FifthPage = ({ imageMotion, textMotion }) => {
  
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
          <img src="assets/story/05.jpg" alt="" />
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
          <h2>We don’t sell services.</h2>
          <p>We sell emotions.<br/>
  We create memorable moments — not just outputs.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FifthPage;
