"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

const images = [
  "/banner.jpg",
  "/bannerb.jpg",
  "/bannerc.jpg",
  "/bannerd.jpg",
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [role, setRole] = useState(null);

  // 🔐 SESSION + AUTO REFRESH
  useEffect(() => {
    const loadSession = async () => {
      try {
        const res = await authClient.getSession();
        const user = res?.data?.user;
        setRole(user?.role || null);
      } catch {
        setRole(null);
      }
    };

    loadSession();

    const interval = setInterval(() => {
      loadSession();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 🎞 SLIDER
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const isLoggedIn = !!role;

  const showPostTask = !isLoggedIn || role === "client";
  const showBrowseTasks =
    !isLoggedIn || role === "freelancer" || role === "admin";

  return (
    <section
      className="relative overflow-hidden flex items-center justify-center"
      style={{ minHeight: "85vh" }}
    >
      {/* BACKGROUND SLIDER */}
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
          }}
        />
      </AnimatePresence>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/55" />
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
            fontSize: "clamp(2.3rem, 5vw, 4rem)",
            fontWeight: "900",
            lineHeight: "1.1",
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
            margin: "20px auto",
            fontSize: "1.15rem",
            lineHeight: "1.7",
          }}
        >
          Post tasks, receive proposals, hire freelancers, and complete work easily in one marketplace.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          {showPostTask && (
            <Link href="/dashboard/client/tasks/new">
              <button
                style={{
                  background: "white",
                  color: "#678d58",
                  padding: "14px 32px",
                  borderRadius: "999px",
                  fontWeight: "700",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Post a Task
              </button>
            </Link>
          )}

          {showBrowseTasks && (
            <Link href="/browse-tasks">
              <button
                style={{
                  background: "transparent",
                  color: "white",
                  padding: "14px 32px",
                  borderRadius: "999px",
                  fontWeight: "700",
                  border: "2px solid white",
                  cursor: "pointer",
                }}
              >
                Browse Tasks
              </button>
            </Link>
          )}
        </motion.div>

        {/* 🔵 DOTS (RESTORED) */}
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