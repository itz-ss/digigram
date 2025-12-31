import React from "react";
import "./style/cloudinaryVideoHero.css";

const text = "LEKSUSS";

const CloudinaryVideoHero = () => {
  return (
    <section className="video-hero">
      {/* Background Video */}
      <video
        className="video-bg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/docq119tm/video/upload/v1765652933/231596_ji0pg8.mp4"
          type="video/mp4"
        />
      </video>

      <div className="video-overlay" />

      {/* Animated Text */}
      <div className="video-text">
        <h1 className="animated-text">
          {text.split("").map((char, index) => (
            <span
              key={index}
              className="char"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {char}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default CloudinaryVideoHero;
