import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

export default function Home() {
  const [loader, setLoader] = useState(true);

  function myloader(){
    setLoader(false)
  }

  useEffect(() => {
    setTimeout(() => {
      myloader()
    }, 3000);
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="Myscroll bg-[#111112] min-h-screen duration-300 overflow-hidden">
          <Head>
            <title>Ayush Kumar || Frontend Developer</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
}
