"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";

const ProjectRow = ({ project, index }) => {
  const isReversed = index % 2 !== 0;
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      viewport={{ once: true, margin: "-80px" }}
      className={`flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 lg:gap-16 items-center mb-20 lg:mb-32 last:mb-0`}
    >
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full lg:w-[55%] shrink-0"
      >
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-gray-800 group-hover:border-gray-600 transition-colors duration-300">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      </Link>

      <div className="w-full lg:w-[45%] flex flex-col justify-center">
        <span className="text-5xl md:text-6xl font-bold text-gray-800 leading-none mb-4">
          {number}
        </span>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/title inline-flex items-start gap-2 mb-4"
        >
          <h2 className="text-white text-2xl md:text-3xl font-semibold group-hover/title:text-gray-300 transition-colors">
            {project.title}
          </h2>
          <span className="text-gray-500 mt-1 opacity-0 group-hover/title:opacity-100 transition-all duration-300">
            ↗
          </span>
        </Link>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-white border border-gray-700 rounded-full px-5 py-2.5 w-fit hover:bg-white hover:text-black transition-colors duration-300"
        >
          View project
          <span>→</span>
        </Link>
      </div>
    </motion.article>
  );
};

const ProjectSection = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0d0d0d]">
      <div className="px-5 md:px-10 lg:px-16 pt-12 lg:pt-20 pb-4">
        <div className="flex justify-between items-center mb-6 lg:mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-white">
            MY PROJECTS
          </h1>
          <div className="w-full ml-5 lg:ml-12">
            <div className="bg-white opacity-[15%] w-full h-[1px]" />
          </div>
        </div>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl">
          AI-powered systems and full-stack applications — from RAG pipelines
          and document verification to blockchain-backed mobile platforms.
        </p>
      </div>

      <div className="px-5 md:px-10 lg:px-16 pb-10 lg:pb-16">
        {featuredProjects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="px-5 md:px-10 lg:px-16 pb-16 lg:pb-28 flex justify-center">
        <Link href="/projects">
          <motion.span
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 text-sm md:text-base font-medium text-black bg-white rounded-full px-8 py-4 hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
          >
            View all projects
            <span className="text-lg">→</span>
          </motion.span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;
