import React from "react";
import Image from "next/image";
import { MySkills } from "@/utils/MySkills";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen w-full">
      <div className="relative px-4 md:px-20">
        <h2 className="text-6xl border-b-4 border-violet-600 w-max  text-white font-bold max-sm:text-4xl">
          My Expertise
        </h2>
        {/* <div className="w-72 absolute -bottom-4 left-40 mx-auto h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div> */}
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-20 mt-20 lg:mt-40">
          {MySkills.map((skill) => {
            return (
              <motion.div 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{ type: 'spring', duration: 2}}
              key={skill.id} className="p-6 shadow-xl shadow-gray-500 rounded-xl hover:scale-105 ease-in duration-300 text-white font-bold text-2xl max-xl:text-lg">
                <div className="grid grid-cols-2 gap-4 ">
                  <div className="m-auto max-md:w-40 max-xs:w-24">
                    <Image src={skill.image} width="64px" height="64px" alt="skills" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{skill.name}</h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
