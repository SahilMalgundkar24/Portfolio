"use client";
import React from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="w-full h-auto px-16 py-5 flex justify-between items-center">
      <div>
        <h1 className="text-2xl">SM</h1>
      </div>
      <div className="flex gap-10 items-center">
        <div className="flex gap-3">
          <h2 className="font-light">Menu</h2>
          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            whileTap={{ scale: 0.8 }}
          >
            <Menu strokeWidth={0.5} />
          </motion.div>
        </div>
        <div>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            whileTap={{ scale: 0.8 }}
            className="py-2 font-light px-7 rounded-full border border-black"
          >
            <h1 className="text-sm">Contact</h1>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
