import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ProjectSection from "./ProjectSection";
import ImageGallery from "./ImageGallery";
import Contact from "./Contact";
import Footer from "./Footer";

const ProjectHeading = () => {
  const containerRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 30]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.7], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0.5 && !isZoomed) {
        setIsZoomed(true);
      }
      if (latest > 0.7 && !showContent) {
        setShowContent(true);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, isZoomed, showContent]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <motion.div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        style={{ opacity }}
      >
        <motion.h1
          className="text-9xl font-bold text-center"
          style={{ scale: smoothScale }}
        >
          DIVE INT<span className="relative">O</span> MY W
          <span className="relative">O</span>RK
        </motion.h1>
      </motion.div>

      {showContent && (
        <motion.div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center">
          <ProjectSection />
          <ImageGallery />
          <Contact />
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default ProjectHeading;
