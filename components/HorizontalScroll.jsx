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

  // Animation variants for text reveal
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for images
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const AnimatedWord = ({ children, isSingleLetter = false }) => (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={textVariants}
      className={`inline-block ${
        isSingleLetter ? "mx-3 font-bold" : "mr-3 md:mr-7 lg:mr-10"
      }`}
    >
      {children}
    </motion.span>
  );

  const AnimatedImage = ({ src, alt, className }) => (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={imageVariants}
    />
  );

  return (
    <section ref={containerRef} className="relative h-[300vh] hidden md:block">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex flex-nowrap">
          <div className="relative">
            <h1
              ref={textRef}
              className="text-4xl lg:text-8xl font-bold whitespace-nowrap pl-16"
            >
              <AnimatedWord isSingleLetter={true}>I</AnimatedWord>
              <AnimatedWord>craft</AnimatedWord>
              <span className="relative inline-block">
                <AnimatedWord>interactive</AnimatedWord>
                <AnimatedImage
                  src="./images/interactive.png"
                  alt="Interactive"
                  className="absolute -top-56 lg:-top-64 left-0 rounded-full w-72"
                />
              </span>
              <AnimatedWord>visually</AnimatedWord>
              <span className="relative inline-block">
                <AnimatedWord>appealing</AnimatedWord>
                <AnimatedImage
                  src="./images/visual.png"
                  alt="Appealing"
                  className="absolute -bottom-40 lg:-bottom-60 left-0 rounded-lg w-80"
                />
              </span>
              <AnimatedWord>web</AnimatedWord>
              <AnimatedWord>applications,</AnimatedWord>
              <span className="relative inline-block">
                <AnimatedWord>blending</AnimatedWord>
                <AnimatedImage
                  src="./images/blend.png"
                  alt="Blending"
                  className="absolute -top-44 lg:-top-60 left-0 rounded-lg w-72"
                />
              </span>
              <AnimatedWord>creativity </AnimatedWord>
              <AnimatedWord>with </AnimatedWord>
              <AnimatedWord>code </AnimatedWord>
              <AnimatedWord>to </AnimatedWord>
              <AnimatedWord>deliver </AnimatedWord>
              <span className="relative inline-block">
                <AnimatedWord>seamless</AnimatedWord>
                <AnimatedImage
                  src="./images/seamless.png"
                  alt="Seamless"
                  className="absolute -bottom-36 lg:-bottom-52 left-0 rounded-lg w-80"
                />
              </span>
              <AnimatedWord>digital</AnimatedWord>
              <AnimatedWord>experiences</AnimatedWord>
            </h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
