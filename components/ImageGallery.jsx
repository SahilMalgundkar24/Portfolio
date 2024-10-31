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

  // Array of image paths with variable heights and aspect ratios
  const images = [
    { src: "/images/SahilMalgundkar.jpg", height: "h-[400px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[500px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[450px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[550px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[350px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[600px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[450px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[500px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[400px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[550px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[350px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[600px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[450px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[500px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[400px]" },
    { src: "/images/SahilMalgundkar.jpg", height: "h-[550px]" },
  ];

  return (
    <div ref={ref} className="w-full min-h-[150vh] bg-black relative">
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
  );
};

export default ImageGallery;
