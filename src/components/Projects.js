import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { MyProjects } from "@/utils/MyProjects";
import { Autoplay, Scrollbar, Navigation } from "swiper";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


function Projects() {
  return (
    <div id="projects" className="min-h-screen mt-40 px-10">
      <div className="py-20">
      <motion.h2 whileInView={{x: 100}} transition={{duration: 1}} className="text-5xl w-max  text-white font-semibold tracking-widest max-sm:text-4xl">
      Unveiling My Tech Showcase
        </motion.h2>
        {/* <div className="w-96 absolute bottom-2 right-1/2 mx-auto h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div> */}
      </div>
      <div className="h-[90vh] mt-20">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Scrollbar, Navigation]}
          className="mySwiper"
        >
          {MyProjects.map((slide) => {
            return (
              <SwiperSlide key={slide.id}>
                <div className="relative">
                  <div className="h-full">
                    <Image src={slide.image} className="object-contain" alt="projectImage" />
                    <div className="bg-black absolute top-0 w-screen h-full bg-opacity-70"></div>
                  </div>
                  <div className="absolute w-1/2 h-full bg-black bg-opacity-50 max-lg:w-full max-lg:text-center lg:top-0 lg:right-0 ">
                    <div className="flex flex-col max-lg:mt-20  gap-8 py-12 justify-evenly items-center h-full text-white max-xs:mt-32">
                      <div className="flex flex-col items-center gap-4">
                      <h3 className=" text-5xl  font-bold underline underline-offset-8 max-sm:text-2xl">{slide.title}</h3>
                      <div className="flex gap-5 ">{slide.key.map((key, ind) => (
                        <p key={ind} className="text-xl max-sm:text-sm">
                        {key}
                        </p>
                      ))}</div>
                      </div>
                      <p className="text-2xl px-4 max-sm:text-lg max-xs:text-sm">{slide.description}</p>
                      <Link href={slide.url} target="_blank">
                        <button className="text-3xl px-6 py-4 bg-gradient-to-r from-violet-600 max-sm:text-xl to-fuchsia-500 rounded-full shadow-2xl shadow-gray-600 hover:bg-fuchsia-100 max-xs:py-2">
                          Visit Site
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
