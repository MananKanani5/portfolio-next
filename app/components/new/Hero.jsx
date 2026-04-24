import React from "react";
import Link from "next/link";

import {
  RiArrowRightUpLine,
  RiGithubFill,
  RiLinkedinBoxFill,
} from "@remixicon/react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="h-[100dvh] w-full bg-secondary px-5 pb-0 overflow-hidden"
      data-theme="dark"
    >
      <div className="container mx-auto relative rounded-full flex flex-col  h-full justify-end items-center gap-10">
        {/* Pill for available for freelance */}
        <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-fit -mb-3 z-10 animate__animated animate__fadeInUp">
          <div className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-60 animate-ping"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </div>

          <h5 className="text-lighttext text-sm md:text-base font-medium">
            Available for Freelance
          </h5>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col gap-4 items-center justify-center z-10 text-center">
          <h1 className="text-4xl lg:text-7xl text-lighttext font-bold animate__animated animate__fadeInUp">
            I'm Manan Kanani
          </h1>
          <h2 className="text-xl lg:text-3xl text-lighttext font-medium animate__animated animate__fadeInUp">
            Skilled Full-Stack Developer
          </h2>
        </div>

        <Image
          src="/new/heroImg.png"
          alt="hero_Main_img"
          width={600}
          height={558}
          className="max-sm:h-[400px] object-cover z-10 animate__animated animate__fadeInUp"
        />
        <Image
          src="/new/bg-blur.png"
          alt="bgblur_img"
          width={700}
          height={558}
          className="absolute -bottom-2 right-0 w-full h-full z-0 animate__animated animate__fadeIn animate__slower"
        />

        <div className="px-2 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-fit absolute bottom-8 left-0 right-0 mx-auto z-10 flex items-center gap-3 animate__animated animate__fadeInUp">
          <Link
            href={"/portfolio"}
            className="text-sm lg:text-base font-medium flex items-center gap-1 bg-lighttext py-3 px-8 lg:py-4 lg:px-10 rounded-full"
          >
            Projects
            <RiArrowRightUpLine />
          </Link>
          <Link
            href={"/about"}
            className="text-lighttext text-sm lg:text-base font-medium flex items-center gap-1 py-3 px-4 lg:py-4 lg:px-5"
          >
            About Me
            <RiArrowRightUpLine />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
