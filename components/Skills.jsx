import React, { useState } from "react";
import { motion } from "framer-motion";

const SkillCard = ({ number, title, subtitle, isFullWidth = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`${
        isFullWidth ? "w-full" : "w-[31%]"
      } h-auto px-7 py-5 border border-[#BEBEBE] rounded-3xl overflow-hidden relative`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Overlay */}
      <motion.div
        initial={{ clipPath: "circle(0% at 0% 0%)" }}
        animate={{
          clipPath: isHovered ? "circle(150% at 0% 0%)" : "circle(0% at 0% 0%)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full bg-black z-0"
      />

      <div className="relative z-10">
        <h1
          className={`font-bold text-3xl mb-10 ${
            isHovered ? "text-white" : "text-[#BEBEBE]"
          }`}
        >
          {number}
        </h1>
        <h1
          className={`font-medium text-xl ${
            isHovered ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h1>
        <h1
          className={`font-medium text-lg ${
            isHovered ? "text-gray-300" : "text-[#9D9D9D]"
          }`}
        >
          {subtitle}
        </h1>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      number: "O1",
      title: "Frontend Development",
      subtitle: "ReactJS/NextJS",
    },
    {
      number: "O2",
      title: "Backend Development",
      subtitle: "NodeJS/ExpressJs/MongoDB",
    },
    {
      number: "O3",
      title: "Mobile App Development",
      subtitle: "React Native",
    },
  ];

  return (
    <div className="p-16">
      <div className="flex justify-between items-center my-16">
        <div className="w-full mr-12">
          <div className="bg-black opacity-[30%] w-full h-[1px]"></div>
        </div>
        <h1 className="text-6xl w-auto">SKILLS</h1>
      </div>

      <div className="w-full flex justify-between mb-7">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            number={skill.number}
            title={skill.title}
            subtitle={skill.subtitle}
          />
        ))}
      </div>

      <SkillCard
        number="O4"
        title="UI/UX Developer"
        subtitle="Figma"
        isFullWidth={true}
      />
    </div>
  );
};

export default Skills;
