import React from "react";

const Skills = () => {
  return (
    <>
      <div className="p-16">
        <h1 className="text-6xl text-center mb-10">SKILLS</h1>
        <div className="w-full flex justify-between mb-7">
          <div className="w-[31%] h-auto px-7 py-5 border border-[#D9D9D9] rounded-3xl">
            <h1 className="font-bold text-3xl text-[#D9D9D9] mb-10">O1</h1>
            <h1 className="font-medium text-xl">Frontend Developement</h1>
            <h1 className="font-medium text-lg text-[#9D9D9D]">
              ReactJS/NextJS
            </h1>
          </div>
          <div className="w-[31%] h-auto px-7 py-5 border border-[#D9D9D9] rounded-3xl">
            <h1 className="font-bold text-3xl text-[#D9D9D9] mb-10">O2</h1>
            <h1 className="font-medium text-xl">Backend Developement</h1>
            <h1 className="font-medium text-lg text-[#9D9D9D]">
              NodeJS/ExpressJs/MongoDB
            </h1>
          </div>
          <div className="w-[31%] h-auto px-7 py-5 border border-[#D9D9D9] rounded-3xl">
            <h1 className="font-bold text-3xl text-[#D9D9D9] mb-10">O3</h1>
            <h1 className="font-medium text-xl">Mobile App Development</h1>
            <h1 className="font-medium text-lg text-[#9D9D9D]">React Native</h1>
          </div>
        </div>
        <div className="w-full h-auto px-7 py-5 border border-[#D9D9D9] rounded-3xl">
          <h1 className="font-bold text-3xl text-[#D9D9D9] mb-10">O4</h1>
          <h1 className="font-medium text-xl">UI/UX Developer</h1>
          <h1 className="font-medium text-lg text-[#9D9D9D]">Figma</h1>
        </div>
      </div>
    </>
  );
};

export default Skills;
