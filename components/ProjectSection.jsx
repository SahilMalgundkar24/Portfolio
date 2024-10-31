import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectSection = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Projects data
  const projects = [
    {
      title: "Project One",
      color: "bg-green-500",
      description: "First project description",
    },
    {
      title: "Project Two",
      color: "bg-emerald-500",
      description: "Second project description",
    },
    {
      title: "Project Three",
      color: "bg-teal-500",
      description: "Third project description",
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full bg-black">
      {/* Sticky left panel */}
      <div className="sticky top-0 h-screen w-[40%] p-16 float-left">
        <h1 className="text-6xl mb-3 text-white">MY PROJECTS</h1>
        <p className="text-sm text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum error
          natus, tempora, quibusdam praesentium voluptatem dignissimos similique
          expedita ullam, totam quae fugiat rerum?
        </p>
      </div>

      {/* Scrolling right panels */}
      <div className="ml-[40%] relative">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="h-screen p-16 flex flex-col justify-center"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            }}
            viewport={{ once: false, margin: "-20%" }}
          >
            <div
              className={`w-full h-full ${project.color} rounded-lg shadow-lg`}
            />
            <motion.h2
              className="text-white text-2xl mt-6"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
              viewport={{ once: false }}
            >
              {project.title}
            </motion.h2>
            <motion.p
              className="text-gray-400 mt-2"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                },
              }}
              viewport={{ once: false }}
            >
              {project.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
