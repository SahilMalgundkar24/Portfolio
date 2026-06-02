"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [scrollRange, setScrollRange] = useState({ distance: 0, stopAt: 1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const calculate = () => {
      if (!textRef.current) return;

      const text = textRef.current;
      const totalWidth = text.scrollWidth;
      const viewportWidth = window.innerWidth;
      const distance = Math.max(0, totalWidth - viewportWidth);

      const stopWord = "impact";
      const stopIndex = text.textContent.indexOf(stopWord);
      const charWidth =
        text.textContent.length > 0
          ? text.offsetWidth / text.textContent.length
          : 0;
      const stopOffset = stopIndex >= 0 ? stopIndex * charWidth : distance;

      const stopAt =
        distance > 0
          ? Math.min(1, Math.max(0, stopOffset / distance))
          : 1;

      setScrollRange({ distance, stopAt });
    };

    calculate();

    window.addEventListener("resize", calculate);
    const timer = setTimeout(calculate, 500);

    return () => {
      window.removeEventListener("resize", calculate);
      clearTimeout(timer);
    };
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, scrollRange.stopAt, 1],
    [0, -scrollRange.distance, -scrollRange.distance]
  );

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
        <motion.div style={{ x }} className="flex flex-nowrap will-change-transform">
          <div className="relative">
            <h1
              ref={textRef}
              className="text-4xl lg:text-8xl font-bold whitespace-nowrap pl-16"
            >
              <AnimatedWord isSingleLetter={true}>I</AnimatedWord>
              <AnimatedWord>engineer</AnimatedWord>
              <span className="relative inline-block">
                <AnimatedWord>intelligent</AnimatedWord>
                <AnimatedImage
                  src="/images/interactive.png"
                  alt="Intelligent"
                  className="absolute -top-56 lg:-top-64 left-0 rounded-full w-72"
                />
              </span>
              <AnimatedWord>AI</AnimatedWord>
              <span className="relative inline-block">
                <AnimatedWord>systems</AnimatedWord>
                <AnimatedImage
                  src="/images/visual.png"
                  alt="AI Systems"
                  className="absolute -bottom-40 lg:-bottom-60 left-0 rounded-lg w-80"
                />
              </span>
              <AnimatedWord>and</AnimatedWord>
              <AnimatedWord>full-stack</AnimatedWord>
              <span className="relative inline-block">
                <AnimatedWord>applications,</AnimatedWord>
                <AnimatedImage
                  src="/images/blend.png"
                  alt="Applications"
                  className="absolute -top-44 lg:-top-60 left-0 rounded-lg w-72"
                />
              </span>
              <AnimatedWord>combining </AnimatedWord>
              <AnimatedWord>LLMs, </AnimatedWord>
              <AnimatedWord>RAG </AnimatedWord>
              <AnimatedWord>pipelines </AnimatedWord>
              <AnimatedWord>and </AnimatedWord>
              <span className="relative inline-block">
                <AnimatedWord>scalable</AnimatedWord>
                <AnimatedImage
                  src="/images/seamless.png"
                  alt="Scalable"
                  className="absolute -bottom-36 lg:-bottom-52 left-0 rounded-lg w-80"
                />
              </span>
              <AnimatedWord>architectures</AnimatedWord>
              <AnimatedWord>to</AnimatedWord>
              <AnimatedWord>deliver</AnimatedWord>
              <AnimatedWord>measurable</AnimatedWord>
              <AnimatedWord>impact</AnimatedWord>
            </h1>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
