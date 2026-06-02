"use client";
import React, { useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const [revealed, setRevealed] = useState(false);

  useLayoutEffect(() => {
    setRevealed(false);
    const timer = setTimeout(() => setRevealed(true), 580);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {!revealed && (
        <div
          className="fixed inset-0 bg-[#0d0d0d] z-[200]"
          aria-hidden="true"
        />
      )}

      <motion.div
        key={pathname}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: revealed ? 0 : 1 }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "top" }}
        className="fixed inset-0 bg-[#0d0d0d] z-[200] pointer-events-none"
      />

      <div
        className="min-h-screen"
        style={{
          opacity: revealed ? 1 : 0,
          pointerEvents: revealed ? "auto" : "none",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;
