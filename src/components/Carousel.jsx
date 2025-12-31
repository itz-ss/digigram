import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style/carousel.css";

/* =========================
   CONFIG
========================= */
const IMAGES = [
  "/assets/carousel/01.jpg",
  "/assets/carousel/02.jpg",
  "/assets/carousel/03.jpg",
  "/assets/carousel/04.jpg",
  "/assets/carousel/05.jpg",
];

const AUTOPLAY_DELAY = 7000;
const AUTOPLAY_RESUME_DELAY = 2500;
const SWIPE_THRESHOLD = 60;

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const autoplayRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  const startX = useRef(0);
  const isInteracting = useRef(false);

  /* =========================
     AUTOPLAY
  ========================= */
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      if (!isInteracting.current) next();
    }, AUTOPLAY_DELAY);

    return () => clearInterval(autoplayRef.current);
  }, []);

  const markInteraction = () => {
    isInteracting.current = true;
    clearTimeout(resumeTimeoutRef.current);

    resumeTimeoutRef.current = setTimeout(() => {
      isInteracting.current = false;
    }, AUTOPLAY_RESUME_DELAY);
  };

  /* =========================
     NAVIGATION
  ========================= */
  const next = () => {
    markInteraction();
    setIndex((i) => (i + 1) % IMAGES.length);
  };

  const prev = () => {
    markInteraction();
    setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  };

  /* =========================
     TOUCH
  ========================= */
  const onTouchStart = (e) => {
    markInteraction();
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - startX.current;
    if (delta > SWIPE_THRESHOLD) prev();
    if (delta < -SWIPE_THRESHOLD) next();
  };

  return (
    <section
      className="carousel"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="carousel__frame">
        <div className="carousel__viewport">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={IMAGES[index]}
              alt=""
              className="carousel__image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            />
          </AnimatePresence>
        </div>
      </div>

      <button className="carousel__nav left" onClick={prev}>
        ‹
      </button>
      <button className="carousel__nav right" onClick={next}>
        ›
      </button>
    </section>
  );
}
