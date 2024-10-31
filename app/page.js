"use client";
import React from "react";
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

export default function Home() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <HorizontalScroll />
        <Skills />
        <ProjectHeading />
        <ProjectSection />
        <ImageGallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
