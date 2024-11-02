"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ImageGallery = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Very minimal transforms for each column
  const columnTransforms = [
    useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]),
    useTransform(scrollYProgress, [0, 1], ["0%", "10%"]),
    useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]),
    useTransform(scrollYProgress, [0, 1], ["0%", "10%"]),
  ];

  const images = [
    { src: "/images/imagegallery1.png", height: "h-[400px]" },
    { src: "/images/imagegallery5.png", height: "h-[500px]" },
    { src: "/images/imagegallery3.png", height: "h-[450px]" },
    { src: "/images/imagegallery4.png", height: "h-[550px]" },
    { src: "/images/imagegallery4.png", height: "h-[350px]" },
    { src: "/images/imagegallery2.png", height: "h-[600px]" },
    { src: "/images/imagegallery3.png", height: "h-[450px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[500px]" },
    { src: "/images/imagegallery9.png", height: "h-[400px]" },
    { src: "/images/imagegallery6.png", height: "h-[550px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[350px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[600px]" },
    { src: "/images/imagegallery8.png", height: "h-[400px]" },
    { src: "/images/imagegallery10.png", height: "h-[500px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[400px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[550px]" },
  ];

  return (
    <div className=" hidden lg:block bg-black">
      <div className="px-5 md:px-10 lg:px-16 py-7">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-white">
          Creative Showcase
        </h1>
        <p className="text-xs lg:text-lg w-full lg:w-1/2 mt-3 text-white">
          Explore a collection of my recent UI designs and web projects. Each
          image captures the creativity, functionality, and user-focused
          approach I bring to every project.
        </p>
      </div>
      <div ref={ref} className="w-full min-h-[150vh] mt-7 bg-black relative">
        <div className="sticky top-0 h-screen w-full flex overflow-hidden">
          {[0, 1, 2, 3].map((columnIndex) => (
            <motion.div
              key={columnIndex}
              style={{
                y: columnTransforms[columnIndex],
                translateY: columnTransforms[columnIndex],
              }}
              className="w-1/4 mx-2 h-full overflow-hidden"
            >
              {images
                .slice(columnIndex * 4, columnIndex * 4 + 4)
                .map((img, index) => (
                  <div
                    key={index}
                    className={`w-full ${img.height} mb-4 overflow-hidden`}
                  >
                    <img
                      src={img.src}
                      alt={`Gallery Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
