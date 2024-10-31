"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ProjectHeading = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform for text scale and opacity
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 15]);
  const opacity = useTransform(scrollYProgress, [0.4, 0.6], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  // Smooth scaling
  const smoothScale = useSpring(scale, { stiffness: 80, damping: 30 });

  // Background color transition
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.4, 0.7],
    ["#e0dfdb", "#000000"]
  );

  return (
    <motion.div
      ref={containerRef}
      className="relative h-[300vh]"
      style={{ backgroundColor }}
    >
      <motion.div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        style={{ opacity }}
      >
        <motion.h1
          className="text-9xl font-bold text-center"
          style={{ scale: smoothScale }}
        >
          DIVE INT<span className="relative">O</span> MY W
          <span className="relative">O</span>RK
        </motion.h1>
      </motion.div>

      {scrollYProgress.current > 0.7 && (
        <motion.div
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center"
          style={{ opacity: contentOpacity }}
        >
          {/* Additional content */}
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectHeading;
