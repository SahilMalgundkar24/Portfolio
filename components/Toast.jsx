"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

const Toast = ({ isVisible, message, onClose, variant = "success" }) => {
  const isError = variant === "error";

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
          className={`fixed bottom-4 right-4 z-[350] max-w-sm px-6 py-4 rounded-lg shadow-lg flex items-start gap-3 ${
            isError ? "bg-red-900 text-white" : "bg-gray-800 text-white"
          }`}
        >
          {isError ? (
            <AlertCircle size={20} className="shrink-0 mt-0.5" />
          ) : (
            <CheckCircle size={20} className="shrink-0 mt-0.5" />
          )}
          <span className="font-medium text-sm leading-snug">{message}</span>
          <button
            onClick={onClose}
            className="ml-auto text-white/80 hover:text-white transition-colors shrink-0"
            aria-label="Dismiss"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
