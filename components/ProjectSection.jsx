import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Projects data with images and links
  const projects = [
    {
      title: "Adzeeny.com",
      image: "/images/ProjectOne.png",
      description:
        "Adzeeny.com is a sleek marketing agency website I designed, showcasing their expertise in web development, content marketing, and video editing. The site features an engaging layout and seamless navigation, effectively highlighting their services to attract potential clients.",
      link: "https://adzeeny.com",
    },
    {
      title: "ODOP Application",
      image: "/images/ProjectTwo.png",
      description:
        "Developed a cross-platform app to empower artisans, featuring workshops, job portals, machinery rentals, and community networking. Integrated blockchain for authenticity, machine learning for recommendations, and a Django backend for secure, efficient management.",
      link: "https://youtu.be/b-pQvemBHus?si=y-lcYHj-DqQV31hH",
    },
    {
      title: "Project Three",
      image: "/images/ProjectOne.png",
      description: "Third project description",
      link: "https://project-three.com",
    },
  ];

  return (
    <div id="projects" ref={containerRef} className="relative w-full bg-black">
      {/* Sticky left panel */}
      <div className="sticky top-0 h-screen w-[40%] p-16 float-left">
        <h1 className="text-6xl mb-3 text-white">MY PROJECTS</h1>
        <p className="text-sm text-white">
          Discover my work across various projects, where I bring together
          design and technology to create impactful digital solutions and
          engaging user experiences.
        </p>
      </div>

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
            <div className="w-full h-full relative rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
            <Link
              href={project.link}
              className="group inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-white text-2xl mt-6 hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2">
                {project.title}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  →
                </span>
              </h2>
            </Link>
            <p className="text-gray-400 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
