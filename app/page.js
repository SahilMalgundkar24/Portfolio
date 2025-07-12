"use client";
import React, { useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import HorizontalScroll from "@/components/HorizontalScroll";
import ProjectHeading from "@/components/ProjectHeading";
import Lenis from "@studio-freight/lenis";
import Insights from "@/components/Insights";

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
        <HorizontalScroll />
        <Skills />
        <Insights />
        <ProjectHeading />
        <ProjectSection />
        <ImageGallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
