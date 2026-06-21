"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/banner.jpg",
  "/bannerb.jpg",
  "/bannerc.jpg",
  "/bannerd.jpg",
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: "85vh" }}
    >
      {/* SLIDER BACKGROUND */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${images[currentSlide]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.55)" }}
      />

      {/* THEME OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(103,141,88,.70), rgba(116,211,174,.40))",
        }}
      />

      {/* FLOATING SHAPES */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{
          position: "absolute",
          top: "80px",
          left: "50px",
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background: "rgba(166,196,138,.25)",
          filter: "blur(70px)",
        }}
      />

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: "80px",
          right: "50px",
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          background: "rgba(221,151,135,.25)",
          filter: "blur(80px)",
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1100px",
          width: "100%",
          padding: "0 24px",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: "900",
            lineHeight: "1.1",
            textShadow: "0 4px 20px rgba(0,0,0,.4)",
            marginBottom: "20px",
          }}
        >
          Get your tasks done by skilled freelancers
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.2rem",
            lineHeight: "1.7",
            color: "#f5f5f5",
          }}
        >
          Post a task, receive competitive proposals from talented freelancers,
          hire the best match, and get your work completed quickly and securely
          in one powerful marketplace.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* POST TASK */}
          <Link href="/dashboard/client/tasks/new">
            <motion.button
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "white",
                color: "#678d58",
                padding: "14px 34px",
                borderRadius: "999px",
                border: "none",
                fontSize: "17px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 10px 25px rgba(0,0,0,.25)",
                transition: "0.3s",
              }}
            >
              Post a Task
            </motion.button>
          </Link>

          {/* BROWSE TASKS */}
          <Link href="/browse-tasks">
            <motion.button
              whileHover={{
                scale: 1.08,
                y: -3,
                backgroundColor: "#ffffff",
                color: "#678d58",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "transparent",
                color: "white",
                padding: "14px 34px",
                borderRadius: "999px",
                border: "2px solid white",
                fontSize: "17px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Browse Tasks
            </motion.button>
          </Link>
        </motion.div>

        {/* SLIDER DOTS */}
        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {images.map((_, index) => (
            <div
              key={index}
              style={{
                width: currentSlide === index ? "28px" : "10px",
                height: "10px",
                borderRadius: "20px",
                background:
                  currentSlide === index
                    ? "#ffffff"
                    : "rgba(255,255,255,0.5)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;