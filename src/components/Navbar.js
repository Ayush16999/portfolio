import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../public/logo.png";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {

  const [shadow, setShadow] = useState(false)

  function openSideMenu() {
    document.querySelector(".sideMenu").classList.add("translate-x-0");
    document.querySelector(".sideMenu").classList.remove("translate-x-full");
  }

  function closeSideMenu() {
    document.querySelector(".sideMenu").classList.add("translate-x-full");
    document.querySelector(".sideMenu").classList.remove("translate-x-0");
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90){
        setShadow(true)
      }else{
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  },[])

  return (
    <div className={shadow ? "text-white shadow-lg shadow-violet-500 bg-[#111112] fixed top-0 z-[999] w-screen" : "text-white bg-[#111112] fixed top-0 z-[999] w-screen"}>
      <div className="px-8 flex justify-between items-center max-xs:px-2">
        <div className="relative">
          <Link href={"/"}>
            <Image src={logo} width={150} height={0} alt="logo" />
          </Link>
          <div className="w-1/2 absolute bottom-8 right-4 mx-auto h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
        </div>
        <ul className="hidden md:flex gap-10 text-xl">
          <ScrollLink
            className="cursor-pointer font-semibold"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-150}
          >
            <li>Home</li>
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer font-semibold"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
          >
            <li>About</li>
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer font-semibold"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
          >
            <li>Skills</li>
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer font-semibold"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
          >
            <li>Projects</li>
          </ScrollLink>
          <ScrollLink
            className="cursor-pointer font-semibold"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
          >
            <li>Contact</li>
          </ScrollLink>
        </ul>
        <div className="cursor-pointer md:hidden max-xs:mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 max-sm:w-6 max-sm:h-6"
            onClick={openSideMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <div className="sideMenu fixed translate-x-full right-0 top-0 w-full h-screen bg-black/70 duration-300 md:hidden">
        <div className="fixed right-0 top-0 w-3/4 sm:w-[60%] md:w-[45%] h-screen bg-[#111112]">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 absolute top-8 right-4 rounded-full shadow-2xl shadow-gray-200 z-20"
              onClick={closeSideMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div className="flex flex-col justify-center items-center h-screen">
            {/* <div className="flex justify-center items-center px-4 mt-10">
              <p className="text-center text-xl text-violet-500">Lets build something creative and turn creativity into reality with coding </p>
            </div> */}
            <ul className="flex flex-col justify-evenly h-1/2 text-3xl ">
              <ScrollLink
                className="cursor-pointer font-semibold"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
              >
                <li>Home</li>
              </ScrollLink>
              <ScrollLink
                className="cursor-pointer font-semibold"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
              >
                <li>About</li>
              </ScrollLink>
              <ScrollLink
                className="cursor-pointer font-semibold"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
              >
                <li>Skills</li>
              </ScrollLink>
              <ScrollLink
                className="cursor-pointer font-semibold"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
              >
                <li>Projects</li>
              </ScrollLink>
              <ScrollLink
                className="cursor-pointer font-semibold"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
              >
                <li>Contact</li>
              </ScrollLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
