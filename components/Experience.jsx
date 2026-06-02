"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const experiences = [
  {
    company: "Sunrisers Hyderabad",
    role: "Full-Stack Developer",
    period: "Feb 2026 — Apr 2026",
    type: "Contract",
    link: "https://www.sunrisershyderabad.in/",
    highlights: [
      "Built the official Sunrisers Hyderabad website using Next.js and React for millions of IPL fans.",
      "Integrated real-time match data APIs handling 600,000+ requests/hour during live games with zero downtime.",
      "Optimised Core Web Vitals through code splitting, image optimisation, and lazy loading.",
    ],
  },
  {
    company: "Epic Bite",
    role: "Full-Stack Developer",
    period: "Sep 2025 — Nov 2025",
    type: "Contract",
    link: "http://myepicbite.com/",
    highlights: [
      "Architected a complete content-driven platform (web + mobile) using Next.js, React Native, and Supabase.",
      "Designed scalable content management workflows, reducing publishing time by 40%.",
      "Improved audience engagement by 30% through responsive UI redesign and performance optimisations.",
    ],
  },
];

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -6 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    viewport={{ once: true }}
    className="w-full lg:w-[48%] h-auto px-7 py-7 bg-[#0d0d0d] border border-gray-800 rounded-3xl hover:border-gray-600 transition-colors duration-300"
  >
    <div className="flex justify-between items-start mb-5">
      <div>
        {exp.link ? (
          <Link
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2"
          >
            <h2 className="font-semibold text-xl text-white group-hover:text-gray-300 transition-colors">
              {exp.company}
            </h2>
            <span className="text-gray-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
              ↗
            </span>
          </Link>
        ) : (
          <h2 className="font-semibold text-xl text-white">{exp.company}</h2>
        )}
        <p className="text-gray-400 text-sm mt-1">{exp.role}</p>
      </div>
      <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-400">
        {exp.type}
      </span>
    </div>

    <p className="text-sm text-gray-500 mb-5 pb-5 border-b border-gray-800">
      {exp.period}
    </p>

    <ul className="space-y-3">
      {exp.highlights.map((item, i) => (
        <li key={i} className="text-sm text-gray-300 leading-relaxed flex gap-3">
          <span className="text-gray-600 mt-1 shrink-0">:</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => {
  return (
    <div id="experience" className="px-5 md:px-10 lg:px-16 py-8 lg:py-16">
      <div className="flex justify-between items-center my-4 lg:my-16">
        <h1 className="text-3xl md:text-4xl lg:text-6xl w-auto">EXPERIENCE</h1>
        <div className="w-full ml-5 lg:ml-12">
          <div className="bg-black opacity-[30%] w-full h-[1px]"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.company} exp={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
