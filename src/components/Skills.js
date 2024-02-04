import React from "react";
import Image from "next/image";
import { MySkills } from "@/utils/MySkills";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen w-full">
      <div className="relative px-4 md:px-20">
        <motion.h2 whileInView={{x: 100}} transition={{duration: 1}} className="text-5xl w-max  text-white font-semibold tracking-widest max-sm:text-4xl">
        Dive into my areas of expertise
        </motion.h2>
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
              key={skill.id} className="p-6 border border-white/10 rounded-xl hover:scale-105 ease-in duration-300 text-white font-bold text-2xl max-xl:text-lg">
                <div className="grid grid-cols-2 gap-4 ">
                  <div className="m-auto w-full scale-75">
                    <Image src={skill.image} width={250} height={250} alt="skills" />
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
