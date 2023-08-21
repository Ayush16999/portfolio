import Image from "next/image";
import React, { useEffect, useState } from "react";
import AyushPic from "../../public/ayush.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";


const Hero = () => {
  return (
    <div
      id="home"
      className="text-white flex flex-row-reverse justify-center items-center gap-4 min-h-[100vh] max-lg:flex-col max-xl:gap-0 "
    >
      <motion.div 
      initial={{x: 200, opacity: 0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{duration: 1}}
      className="mb-20 bg-gradient-to-t from-gray-700 to-gray-100 rounded-3xl w-[400px] h-[400px] xl:w-[600px] xl:h-[500px] max-xl:mb-0 max-lg:mt-20 max-sm:w-[300px] max-sm:h-[300px] max-xs:mt-28">
        <Image
          src={AyushPic}
          className="object-contain hover:scale-105 duration-500 cursor-pointer rounded-3xl w-full h-full backdrop-blur-xl"
          alt="heroPhoto"
        />
      </motion.div>
      <motion.div 
      initial={{x: -200, opacity: 0}}
      whileInView={{x: 0, opacity: 1}}
      transition={{duration: 1}}
      className="flex flex-col py-4 text-center font-bold mt-40 px-4 max-lg:mt-8">
        <p className="tracking-wide text-gray-400 text-sm xl:text-lg max-xs:text-xs">
          Let's Build Something Together
        </p>
        <h1 className="text-5xl xl:text-7xl max-sm:text-4xl max-xs:text-3xl">
          Hi, I'm <span className="myname">Ayush</span>{" "}
        </h1>
        <h1 className="text-5xl mt-4 xl:text-7xl max-sm:text-4xl max-xs:text-2xl">
          Working As Front-End
          <div className="mt-2 text-yellow-400 ">
            <marquee direction="up" height="50px">
              <div className="py-4 text-center">Web Developer</div>
              <div className="py-4 text-center">Android Developer</div>
              <div className="py-4 text-center">Ios Developer</div>
            </marquee>
          </div>
        </h1>
        <p className="text-center text-gray-400 w-[30rem] mx-auto md:w-[40rem] mt-8 text-sm xl:text-lg max-sm:w-full">
          I'm a front-end developer specializing in building (and occasionally
          designing ) exceptional digital experiences. Currently, I'm focused on
          building responsive front-end web applications as well as android and
          ios applications, While learning backend technologies.
        </p>
        <motion.div 
        initial={{y: 100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1, type: 'spring'}}
        className="mt-10 flex justify-evenly w-full items-center">
          <div className="cursor-pointer p-4 rounded-full shadow-2xl text-2xl shadow-white">
           <Link href={'https://www.linkedin.com/in/ayush-kumar-29a327253/'} target="_blank">
           <FaLinkedinIn />
           </Link>
          </div>
          <div className="cursor-pointer p-4 rounded-full shadow-2xl text-2xl shadow-white">
            {/*  */}
            <Link href={'https://github.com/Ayush16999/'} target="_blank">
            <FaGithub />
            </Link>
          </div>
          <div className="cursor-pointer p-4 rounded-full shadow-2xl text-2xl shadow-white">
            {/*  */}
            <ScrollLink to="contact" smooth={true}>
            <AiOutlineMail />
            </ScrollLink>
          </div>
          <div className="cursor-pointer p-4 rounded-full shadow-2xl text-2xl shadow-white">
            {/*  */}
            <Link href={'/Ayush-resume.pdf'}>
            <BsFillPersonLinesFill />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
