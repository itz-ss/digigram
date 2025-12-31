import React from "react";
import { motion } from "framer-motion";
import "./style/welcome.css";

// ✨ Fade-in animation presets
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

const WelcomeSection = () => {
  return (
    <>
      {/* 🌐 Section 1 – Dr. Achal Gupta */}
      <section className="welcome-section">
        <div className="welcome-container">
          <div className="welcome-row">
            {/* Left Side – Image Grid */}
            <div className="image-column">
              <motion.div
                className="image-grid"
                variants={fadeIn("left", 0)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.img
                  src="/assets/welcome/home.png"
                  alt="Dr. Achal Gupta"
                  className="grid-image main-img"
                  variants={fadeIn("up", 0.1)}
                  whileHover={{
                  
                    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.25)",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </motion.div>
            </div>

            {/* Right Side – Text */}
            <div className="text-column">
              <motion.div
                className="welcome-content"
                variants={fadeIn("right", 0.1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h1 className="welcome-title">
                 LEKSUSS
                </motion.h1>

                <motion.p className="welcome-text">
                 Lekuss is a performance-driven digital marketing agency focused on helping brands grow and
                  scale their online revenue through strategic, results-oriented marketing solutions. Specializing in
                   performance marketing and affiliate growth, the agency prioritizes measurable outcomes over vanity 
                   metrics, ensuring that every campaign is aligned with clear business objectives. By combining strategic
                    planning with deep market insights, Blends Ads Media helps brands strengthen their digital presence, reach
                     high-intent audiences, and achieve consistent growth in competitive online environments.
                </motion.p>

                <motion.p
                  className="doctorName"
                  initial={{ scale: 1, color: "#003366" }}
                  animate={{
                    scale: [1, 1.05, 1],
                    color: ["#003366", "#007bff", "#003366"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  Performance that scales. Growth you can measure.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default WelcomeSection;
