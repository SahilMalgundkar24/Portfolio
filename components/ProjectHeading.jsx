"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectHeading = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 25]);

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["#dddddd", "#0d0d0d"]
  );

  return (
    <motion.div
      ref={containerRef}
      className="relative h-[300vh]"
      style={{ backgroundColor }}
      initial={false}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.h1
          className="text-3xl md:text-7xl lg:text-9xl font-bold text-center text-[#0d0d0d]"
          style={{
            scale,
          }}
        >
          DIVE INT<span className="relative">O</span> MY W
          <span className="relative">O</span>RK
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default ProjectHeading;
