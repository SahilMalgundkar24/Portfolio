"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/utils/useMousePosition";
import Navbar from "./Navbar";
import ContactModal from "./ContactModal";

const Hero = () => {
  const word1 = "Design.";
  const word2 = "Develop.";
  const word3 = "Deliver.";
  const word4 = "Impact.";

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const letterAnimation = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 40;

  const ref = useRef(null);

  const [localPos, setLocalPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setLocalPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        className="py-10 w-full h-auto px-16 relative mask"
        animate={{
          WebkitMaskPosition: `${localPos.x - size / 2}px ${
            localPos.y - size / 2
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <div className="py-3 flex justify-center gap-3">
          <motion.h1
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="my-1 benzin-semi justify-center text-3xl md:text-5xl lg:text-8xl flex"
          >
            {word1.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                variants={letterAnimation}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h1
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="my-1 benzin-semi justify-center text-3xl md:text-5xl lg:text-8xl flex"
          >
            {word2.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                variants={letterAnimation}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div className="w-full flex mt-1 md:mt-3 justify-center h-auto py-3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-auto h-auto py-2 px-3 md:px-10 font-medium border border-black rounded-lg"
          >
            <h1 className="uppercase text-sm text-center md:text-lg">
              I build full-stack web apps that merge creativity with
              functionality.
            </h1>
          </motion.div>
        </div>
        <div className="py-3 flex justify-center gap-3">
          <motion.h1
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="justify-center benzin-semi text-3xl md:text-5xl lg:text-8xl flex"
          >
            {word3.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                variants={letterAnimation}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h1
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
            className="my-1 benzin-semi justify-center text-3xl md:text-5xl lg:text-8xl flex"
          >
            {word4.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                variants={letterAnimation}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div className="relative justify-center w-full flex">
          <div className="relative w-auto h-full">
            <div className="absolute bottom-10 lg:-left-24 md:-left-16 -left-12">
              <img
                src="/images/arrow.png"
                alt="Arrow Image"
                style={{ width: "20%", height: "auto" }}
              />
            </div>

            <div
              style={{ transform: "rotate(-3deg)" }}
              className="w-auto flex mt-5 lg:mt-14 justify-center h-auto py-3"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
                className="w-auto h-auto py-2 lg:py-4 px-5 lg:px-12 font-medium border border-black rounded-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-200"
              >
                <h1 className="uppercase text-sm lg:text-lg benzin-semi">
                  REQUEST A WEBSITE
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="py-10 w-full h-auto px-16 relative">
        <div className="py-3 flex justify-center gap-3">
          <motion.h1 className="my-1 benzin-semi justify-center text-3xl md:text-5xl lg:text-8xl flex">
            {word1.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                variants={letterAnimation}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h1 className="my-1 benzin-semi justify-center text-3xl md:text-5xl lg:text-8xl flex">
            {word2.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                variants={letterAnimation}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div className="w-full flex mt-1 md:mt-3 justify-center h-auto py-3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-auto h-auto py-2 px-3 md:px-10 font-medium border border-black rounded-lg"
          >
            <h1 className="uppercase text-sm text-center md:text-lg">
              I build full-stack web apps that merge creativity with
              functionality.
            </h1>
          </motion.div>
        </div>
        <div className="py-3 flex justify-center gap-3">
          <motion.h1 className="justify-center benzin-semi text-3xl md:text-5xl lg:text-8xl flex">
            {word3.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                variants={letterAnimation}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h1 className="my-1 benzin-semi justify-center text-3xl md:text-5xl lg:text-8xl flex">
            {word4.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                variants={letterAnimation}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <div className="relative justify-center w-full flex">
          <div className="relative w-auto h-full">
            <div className="absolute bottom-10 lg:-left-24 md:-left-16 -left-12">
              <img
                src="/images/arrow.png"
                alt="Arrow Image"
                style={{ width: "20%", height: "auto" }}
              />
            </div>

            <div
              style={{ transform: "rotate(-3deg)" }}
              className="w-auto flex mt-5 lg:mt-14 justify-center h-auto py-3"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactModalOpen(true)}
                className="w-auto h-auto py-2 lg:py-4 px-5 lg:px-12 font-medium border border-black rounded-lg cursor-pointer hover:bg-black hover:text-white transition-all duration-200"
              >
                <h1 className="uppercase text-sm lg:text-lg benzin-semi">
                  REQUEST A WEBSITE
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default Hero;
