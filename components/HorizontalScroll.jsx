"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [stopPercentage, setStopPercentage] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (textRef.current) {
      const text = textRef.current;
      const totalWidth = text.scrollWidth;
      const viewportWidth = window.innerWidth;
      const experiencesIndex = text.textContent.indexOf("experiences");
      const experiencesOffset =
        experiencesIndex * (text.offsetWidth / text.textContent.length);
      const stopPercentage = Math.max(
        0,
        (experiencesOffset - viewportWidth) / (totalWidth - viewportWidth)
      );
      setStopPercentage(stopPercentage);
    }
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, stopPercentage, 1],
    ["0%", `${-stopPercentage * 100}%`, `${-stopPercentage * 100}%`]
  );

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex flex-nowrap">
          <div className="relative">
            <h1
              ref={textRef}
              className="text-8xl font-bold whitespace-nowrap pl-16"
            >
              I craft{" "}
              <span className="relative">
                interactive
                <img
                  src="./images/interactive.png"
                  alt="Interasasactive"
                  className="absolute -top-64 left-0 rounded-full w-72"
                />
              </span>
              , visually{" "}
              <span className="relative">
                appealing
                <img
                  src="./images/visual.png"
                  alt="Appealing"
                  className="absolute -bottom-60 left-0 rounded-lg w-80"
                />
              </span>{" "}
              web applications,
              <span className="relative">
                blending
                <img
                  src="./images/blend.png"
                  alt="Blending"
                  className="absolute -top-60 left-0 rounded-lg w-72"
                />
              </span>{" "}
              creativity with code to deliver{" "}
              <span className="relative">
                seamless
                <img
                  src="./images/seamless.png"
                  alt="Seamless"
                  className="absolute -bottom-52 left-0 rounded-lg w-80"
                />
              </span>{" "}
              digital experiences
            </h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
