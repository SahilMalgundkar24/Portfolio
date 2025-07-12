"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Instagram, Linkedin, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Robust scroll lock for navbar link modal only
  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isModalOpen]);

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
          <h1 className="text-xl">Sahil Malgundkar</h1>
        </div>
        <div className="flex gap-3 md:gap-10 items-center">
          {/* Contact Button */}
          <div>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setIsContactModalOpen(true)}
              className="py-2 font-light px-5 md:px-7 rounded-full border border-black"
            >
              <h1 className="text-sm">Contact</h1>
            </motion.button>
          </div>
          {/* Menu Button */}
          <div className="flex gap-3">
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
            <div className="relative w-full h-full flex flex-col justify-between">
              <motion.div
                onClick={toggleModal}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="absolute top-8 right-5 md:right-10 lg:right-16 text-white cursor-pointer"
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

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        delayChildren: 0.7,
                        staggerChildren: 0.12,
                      },
                    },
                  }}
                  className="flex gap-6 mt-12 justify-start items-center flex-wrap"
                >
                  <motion.a
                    href="https://www.instagram.com/sahil_malgundkar_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    variants={{
                      hidden: { opacity: 0, x: 40 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Instagram className="w-7 h-7 hover:text-pink-500 transition-colors" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/sahil-malgundkar-208824261/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    variants={{
                      hidden: { opacity: 0, x: 40 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Linkedin className="w-7 h-7 hover:text-blue-600 transition-colors" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/SahilMalgundkar24"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    variants={{
                      hidden: { opacity: 0, x: 40 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Github className="w-7 h-7 hover:text-gray-300 transition-colors" />
                  </motion.a>
                  {/* Animated Resume Button */}
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={{
                      hidden: { opacity: 0, x: 40 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-block px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-200 ml-2 mt-2"
                  >
                    View Resume
                  </motion.a>
                </motion.div>
              </div>

              {/* Social Icons at the bottom of the modal */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
