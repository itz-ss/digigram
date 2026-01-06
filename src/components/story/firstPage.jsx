import { motion } from "framer-motion";
import "./style/firstPage.css";

const FirstPage = ({ imageMotion, textMotion }) => {
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
          <img src="/assets/story/01.jpg" alt="" />
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
          <h2>Some moments stay with us.</h2>
          <p>
            Not because they were planned.
            <br />
            But because they were felt.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstPage;
