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
import ProjectHeading from "@/components/ProjectHeading";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <HorizontalScroll />
        <Skills />
        <ProjectHeading />
        {/* <ProjectSection /> */}
        {/* <ImageGallery /> */}
        {/* <Contact />
        <Footer /> */}
      </div>
    </>
  );
}
