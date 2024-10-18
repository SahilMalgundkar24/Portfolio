"use client";
import React from "react";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const word1 = "Design. Develop.";
  const word3 = "Deliver. Impact.";

  const letterAnimation = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="py-10 w-full h-auto px-16 relative">
      <div className="py-3">
        <motion.h1 className="my-1 benzin-semi justify-center text-8xl flex">
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
      </div>

      <div className="w-full flex mt-3 justify-center h-auto py-3">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="w-auto h-auto py-2 px-10 font-medium border border-black rounded-lg"
        >
          <h1 className="uppercase text-lg">
            I build full-stack web apps that merge creativity with
            functionality.
          </h1>
        </motion.div>
      </div>
      <div className="py-3">
        <motion.h1 className="justify-center benzin-semi text-8xl flex">
          {word3.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              variants={letterAnimation}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      <div
        style={{ transform: "rotate(-3deg)" }}
        className="w-full flex mt-14 justify-center h-auto py-3"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="w-auto h-auto py-4 px-12 font-medium border border-black rounded-lg"
        >
          <h1 className="uppercase text-lg benzin-semi">REQEST A WEBSITE</h1>
        </motion.div>
      </div>

      <div className="absolute bottom-14 left-1/3">
        <img
          src="/images/arrow.png"
          alt="Arrow Image"
          style={{ width: "15%", height: "auto" }}
        />
      </div>

      <div className="absolute -bottom-5 left-16">
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
      </div>
    </div>
  );
};

export default Hero;
