"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Toast = ({ isVisible, message, onClose }) => {
  const toastVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={toastVariants}
          className="fixed bottom-4 right-4 z-[60] bg-gray-800 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3"
        >
          <CheckCircle size={20} />
          <span className="font-medium">{message}</span>
          <button
            onClick={onClose}
            className="ml-2 text-white hover:text-gray-200 transition-colors"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
