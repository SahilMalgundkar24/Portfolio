"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectCard = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.08 * index }}
    className="group flex flex-col bg-[#141414] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-colors duration-300"
  >
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-[16/10] overflow-hidden"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-80" />
      <div className="absolute top-4 left-4">
        <span className="text-xs px-3 py-1 rounded-full bg-black/60 text-gray-400 backdrop-blur-sm">
          {project.year}
        </span>
      </div>
    </Link>

    <div className="p-6 flex flex-col flex-1">
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-gray-500 border border-gray-800"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group/title inline-flex items-start gap-2 mb-3"
      >
        <h2 className="text-white text-lg md:text-xl font-semibold group-hover/title:text-gray-300 transition-colors leading-snug">
          {project.title}
        </h2>
        <span className="text-gray-500 shrink-0 opacity-0 group-hover/title:opacity-100 transition-opacity">
          ↗
        </span>
      </Link>

      <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors w-fit"
      >
        Open project <span>→</span>
      </Link>
    </div>
  </motion.article>
);

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <header className="px-5 md:px-10 lg:px-16 py-6 flex items-center justify-between border-b border-gray-800/60">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          Back to home
        </Link>
        <span className="text-sm text-gray-500 hidden sm:block">
          Sahil Malgundkar
        </span>
      </header>

      <main className="px-5 md:px-10 lg:px-16 py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 lg:mb-16"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            All Projects
          </h1>
          <p className="text-gray-400 max-w-xl text-sm md:text-base">
            AI systems, full-stack applications, and client work — built for
            scale, performance, and real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </main>

      <footer className="px-5 md:px-10 lg:px-16 py-8 border-t border-gray-800/60">
        <p className="text-gray-600 text-xs">
          © 2026 Sahil Malgundkar — AI Engineer & Full Stack Developer
        </p>
      </footer>
    </div>
  );
};

export default ProjectsPage;
