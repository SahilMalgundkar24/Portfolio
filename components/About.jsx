"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="px-16 py-16 w-full flex gap-40 justify-between">
        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
          className="text-6xl w-auto"
        >
          ABOUT
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
          corporis ipsam fugiat dolorum reiciendis explicabo voluptatum
          consequuntur fuga quam facilis ipsa velit rerum qui quaerat
          laboriosam, hic, laborum eveniet numquam porro. Cupiditate in quidem
          quibusdam, similique accusamus minima cum dolor<br></br>
          <br></br>
          tempore dolorem. Necessitatibus, ipsum voluptates impedit
          reprehenderit nemo nihil aliquid perferendis facilis saepe incidunt
          velit sed accusantium minima eligendi magni laborum vitae asperiores
          unde libero hic repellendus sit praesentium commodi. <br></br>
          <br></br>Ipsum corporis corrupti, totam minima nemo quod eveniet
          laborum suscipit officia tenetur possimus rem architecto blanditiis!
          Quo molestias vel ducimus explicabo illum, magni a necessitatibus
          ipsum numquam.
        </motion.div>
      </div>
    </>
  );
};

export default About;
