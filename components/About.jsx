"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div
        id="about"
        className="px-5 md:px-10 lg:px-16 py-0 lg:py-16 w-full gap-40"
      >
        <div className="flex justify-between items-center my-0 lg:my-16">
          <h1 className="text-3xl md:text-4xl lg:text-6xl w-auto">ABOUT</h1>
          <div className="w-full ml-5 lg:ml-12">
            <div className="bg-black opacity-[30%] w-full h-[1px]"></div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-0 gap-5 w-full justify-between">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="w-full lg:mt-0 mt-5 px-16 lg:px-0 lg:w-1/2 h-full items-center"
          >
            <img
              src="/images/myself.png"
              alt="AboutMeImage"
              className="object-contain"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="ml-0 lg:ml-12 lg:text-base text-sm text-justify"
          >
            I'm Sahil Malgundkar, an AI Engineer and Full-Stack Developer with
            2+ years of experience building production-grade AI systems and
            web/mobile applications. I've delivered 15+ production-ready
            applications for clients and developed AI solutions across LLMs,
            NLP, and RAG architectures.<br></br>
            <br></br>
            I'm a two-time national-level hackathon winner, including 1st Place
            at Smart India Hackathon 2024, India's largest hackathon with
            50,000+ teams nationwide. My work spans from building AI-powered systems and intelligent applications to developing scalable, production-ready web platforms.<br></br>
            <br></br>
            I completed my B.E. in Computer Engineering from MCT's Rajiv Gandhi Institute of Technology, Mumbai University, and previously served as President of the Computer Engineering Student's Society, leading a 90+ member team to organize 10+ technical events and a national-level hackathon. My focus is on building AI-driven products that create measurable impact.

          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
