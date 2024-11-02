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
              src="/images/AboutMe.png"
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
            I'm Sahil Malgundkar, a Computer Engineering student passionate
            about blending creativity with technical expertise to build
            impactful digital solutions. From building interactive interfaces to
            developing robust applications, I emphasize user-centered design and
            functionality to create seamless digital experiences.<br></br>
            <br></br>
            In addition to my technical pursuits, I hold the position of
            Marketing Secretary at the Computer Engineering Students' Society,
            where I've honed my leadership and collaboration skills. This role
            has allowed me to connect with industry professionals, organize tech
            events, and create valuable opportunities for my peers. <br></br>
            <br></br>I constantly seek new challenges and learning
            opportunities, integrating emerging technologies like blockchain and
            machine learning into my projects. My goal is to innovate and drive
            positive change, using technology to solve real-world problems and
            make a meaningful impact in the tech community.
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
