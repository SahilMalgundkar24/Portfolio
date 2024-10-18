"use client";
import React, { useState, useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import HorizontalScroll from "@/components/HorizontalScroll";

export default function Home() {
  // const [isBgBlack, setIsBgBlack] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const projectSection = document.getElementById("project-section");
  //     const sectionTop = projectSection?.offsetTop;
  //     const scrollY = window.scrollY;

  //     // Trigger the background change when the scroll position reaches the ProjectSection
  //     if (sectionTop && scrollY >= sectionTop - 100) {
  //       setIsBgBlack(true);
  //     } else {
  //       setIsBgBlack(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <div>
        {/* <div
          style={{
            backgroundImage: "url(/images/BgLines.svg)", 
            backgroundSize: "cover", 
            backgroundPosition: "center",
            height: "auto",
            width: "100%",
          }}
        >
          <Navbar />
          <Hero />
        </div> */}
        <Navbar />
        <Hero />
        <About />
        <HorizontalScroll />
        <Skills />
        <ProjectSection />
        <ImageGallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
