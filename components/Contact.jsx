import React from "react";

const Contact = () => {
  return (
    <>
      <div className="px-5 md:px-10 lg:px-16 bg-black pt-3 lg:pt-28 pb-7">
        <h1 className="text-3xl md:text-4xl lg:text-6xl py-1 font-bold text-transparent text-center bg-clip-text bg-gradient-to-b from-[#1B1B1B] to-[#818181]">
          Let's work together
        </h1>
        <div className="w-full p-2 flex justify-center">
          <div className="h-auto px-5 lg:px-9 py-3 lg:py-5 text-xs md:text-base bg-[#A8A8A8] rounded-full">
            <h1>sahilmalgundkar321@gmail.com</h1>
          </div>
        </div>
        <div className="bg-[#B5B5B5] mt-9 opacity-35 w-full h-[1px]"></div>
      </div>
    </>
  );
};

export default Contact;
