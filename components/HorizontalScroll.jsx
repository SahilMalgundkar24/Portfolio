import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalScroll = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex flex-nowrap">
          <h1 className="text-9xl font-bold whitespace-nowrap pl-16">
            I CREATE BLAH BLAH AND I WILL LIKE TO DO ANYTHING THING WHICH I WILL
            LIKE
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
