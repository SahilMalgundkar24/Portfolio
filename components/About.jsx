"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div id="about" className="px-16 py-16 w-full gap-40">
        <div className="flex justify-between items-center my-16">
          <h1 className="text-6xl w-auto">ABOUT</h1>
          <div className="w-full ml-12">
            <div className="bg-black opacity-[30%] w-full h-[1px]"></div>
          </div>
        </div>

        <div className="flex w-full justify-between">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="w-1/2 h-full bg-black"
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
            className="ml-12"
          >
            I'm Sahil Malgundkar, a Computer Engineering student passionate
            about blending creativity with technical expertise to build
            impactful digital solutions. From building interactive interfaces to
            developing robust applications, I emphasize user-centered design and
            functionality to create seamless digital experiences.<br></br>
            <br></br>
            In addition to my technical pursuits, I hold the position of
            Marketing Secretary at the Computer Engineering Students’ Society,
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
