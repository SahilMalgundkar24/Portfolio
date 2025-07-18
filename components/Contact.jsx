"use client";
import React, { useState } from "react";
import ContactModal from "./ContactModal";

const Contact = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <>
      <div className="px-5 md:px-10 lg:px-16 bg-[#0d0d0d] pt-3 lg:pt-28 pb-7">
        <h1 className="text-3xl md:text-4xl lg:text-6xl py-1 font-bold text-transparent text-center bg-clip-text bg-gradient-to-b from-[#1B1B1B] to-[#818181]">
          Let's work together
        </h1>
        <div className="w-full p-2 flex justify-center">
          <div
            onClick={() => setIsContactModalOpen(true)}
            className="h-auto px-5 lg:px-9 py-3 lg:py-5 text-xs md:text-base bg-[#A8A8A8] hover:bg-[#919191] rounded-full cursor-pointer "
          >
            <h1 className="font-semibold">Drop me a Hi!</h1>
          </div>
        </div>
        <div className="bg-[#B5B5B5] mt-9 opacity-35 w-full h-[1px]"></div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Contact;
