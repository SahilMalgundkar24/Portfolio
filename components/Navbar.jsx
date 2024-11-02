"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsModalOpen(false);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const sideModalVariants = {
    hidden: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
  };

  const navItems = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "Skills", id: "skills" },
    { title: "Projects", id: "projects" },
  ];

  return (
    <>
      <nav className="w-full h-auto px-5 md:px-10 lg:px-16 py-5 flex justify-between items-center">
        <div>
          <h1 className="text-2xl">SM</h1>
        </div>
        <div className="flex gap-3 md:gap-10 items-center">
          <div>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="py-2 font-light px-5 md:px-7 rounded-full border border-black"
            >
              <h1 className="text-sm">Contact</h1>
            </motion.button>
          </div>
          <div className="flex gap-3">
            <h2 className="font-light">Menu</h2>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={toggleModal}
              className="cursor-pointer"
            >
              <Menu strokeWidth={0.5} />
            </motion.div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sideModalVariants}
            className="fixed top-0 right-0 w-4/5 md:w-1/2 lg:w-2/5 h-full bg-black z-50"
          >
            <div className="relative w-full h-full">
              <motion.div
                onClick={toggleModal}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="absolute top-8 right-8 text-white cursor-pointer"
              >
                <X size={24} />
              </motion.div>

              {/* Modal Content */}
              <div className="text-white p-10 md:p-16 flex flex-col items-start justify-center h-full">
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        delayChildren: 0.3,
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                  className="space-y-10"
                >
                  {navItems.map((item) => (
                    <motion.li
                      key={item.id}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="text-3xl md:text-5xl hover:text-gray-300 cursor-pointer"
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.title}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
