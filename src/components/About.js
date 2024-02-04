import Image  from "next/image";
import React from "react";
import AboutPic from "../../public/about.jpg";
import { motion } from "framer-motion";


const About = () => {
  return (
    <div id="about" className="text-white mt-20 flex flex-col justify-evenly min-h-[100vh]">
      <div className="relative md:px-20 px-4">
        <p className=""></p>
        <motion.h2 whileInView={{x: 100}} transition={{duration: 1}} className="text-5xl flex w-max border-violet-600 font-semibold tracking-widest  max-sm:text-4xl">Unmasking My Tale </motion.h2>
        {/* <div className="w-60 absolute -bottom-2 left-40 mx-auto h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div> */}
      </div>

      <motion.div 
       initial={{y: 100, opacity: 0.3}}
       whileInView={{y: 0, opacity: 1}}
       transition={{duration: 0.5, type: 'keyframes'}}
      className="flex justify-center py-8 mt-8 gap-8 mx-auto items-center h-full w-full max-lg:flex-col-reverse">
        <motion.div 
       
        className="w-1/2 text-lg max-lg:w-full px-4 max-lg:text-xl max-sm:text-lg">
          <p className="py-2 px-4">
            <span className="text-4xl mb-4 font-normal max-lg:text-5xl max-sm:text-3xl"> I Specialize </span>
            in building
            <span className="text-[#FF884B] font-normal">
              {" "}
              mobile responsive front-end UI applications{" "}
            </span>
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using
            <span className="text-[#FF884B] font-normal">
              {" "}
              HTML, CSS, Javascript, and React{" "}
            </span>
            , I am a quick learner and can pick up new tech stacks as needed. I
            believe that being a great developer is not using one specific
            language, but choosing the best tool for the job.
          </p>
          <p className="py-8 px-4">
            I believe that design is about more than just making things look
            pretty –
            <span className="font-normal text-[#FF884B]">
              {" "}
              it's about solving problems and creating intuitive, enjoyable
              experiences for users.
            </span>
          </p>
          <p className="py-2 px-4">
            Whether I'm working on a website, mobile app, or other digital
            product,
            <span className="text-[#FF884B] font-normal">
              {" "}
              I bring my commitment to design excellence and user-centered
              thinking{" "}
            </span>
            to every project I work on. I look forward to the opportunity to
            bring my skills and passion to your next project.
          </p>
        </motion.div>
        <div className="w-96 relative max-md:mt-10 max-lg:w-3/4">
          <motion.div
          // initial={{x:200}}
          // whileInView={{x: 0}}
          // transition={{duration: 0.5, ease: 'linear'}}
          >
          <Image
            src={AboutPic}
            className="rounded-xl hover:scale-110  duration-500 z-[999]"
            alt="aboutPhoto"
          />
          </motion.div>
          <motion.div
          // initial={{x:-200}}
          // whileInView={{x: 0}}
          // transition={{duration: 0.2, ease: 'linear'}}
          className="bg-black w-full h-full bg-opacity-70 absolute top-0 rounded-xl cursor-pointer hover:scale-110 duration-500"></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
