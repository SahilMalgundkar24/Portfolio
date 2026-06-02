"use client";
import React, { useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import ProjectHeading from "@/components/ProjectHeading";
import Lenis from "@studio-freight/lenis";
import Insights from "@/components/Insights";
import Experience from "@/components/Experience";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lenis = new Lenis();

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <ProjectHeading />
        <ProjectSection />
        <Insights />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
