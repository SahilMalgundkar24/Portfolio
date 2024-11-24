"use client";
import React from "react";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const word1 = "Design.";
  const word2 = "Develop.";
  const word3 = "Deliver.";
  const word4 = "Impact.";

  const letterAnimation = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
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
              className="w-auto h-auto py-2 lg:py-4 px-5 lg:px-12 font-medium border border-black rounded-lg"
            >
              <h1 className="uppercase text-sm lg:text-lg benzin-semi">
                REQUEST A WEBSITE
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* <div className="absolute -bottom-5 left-16">
        <div className="relative w-44 h-44">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full animate-spin-slow"
          >
            <path
              id="circlePath"
              d="M50,50 m-32,0 a32,32 0 1,1 64,0 a32,32 0 1,1 -64,0"
              fill="none"
            />
            <text className="text-[9px] fill-current">
              <textPath href="#circlePath" startOffset="0">
                EXPLORE MY WORK • EXPLORE MY WORK •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <MoveUpRight size={64} strokeWidth={1} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
