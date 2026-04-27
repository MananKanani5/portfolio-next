import React from "react";
import Link from "next/link";

import {
  RiArrowDownLine,
  RiArrowRightLine,
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
      <div className="container mx-auto relative rounded-full flex flex-col  h-full justify-between items-center gap-10 max-w-[1280px] overflow-visible">
        <div className="flex flex-col gap-8 z-10 items-center justify-center pt-[50%] md:pt-[12%]">
        {/* Pill for available for freelance */}
          <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-fit -mb-3 z-10 animate__animated animate__fadeInUp">
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-60 animate-ping"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
            </div>

            <h5 className="text-lighttext text-sm md:text-base">
              Available for Freelance
            </h5>
          </div>

          {/* Hero Content */}
          <div className="flex flex-col gap-4 items-center justify-center z-10 text-center">
            <h1 className="text-[34px] lg:text-6xl text-lighttext font-bold animate__animated animate__fadeInUp">
              I'm Manan Kanani
            </h1>
            <h2 className="text-xl lg:text-2xl text-lighttext font-medium animate__animated animate__fadeInUp">
              Skilled Full-Stack Developer
            </h2>
          </div>
        </div>

        <Image
          src="/new/heroImg.png"
          alt="hero_Main_img"
          width={500}
          height={500}
          className="md:w-2/6 max-sm:h-[300px] object-cover z-10 animate__animated animate__fadeInUp"
        />    

        {/* Button for Projects and About Me */}
        <div className="px-2 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] w-fit absolute bottom-8 left-0 right-0 mx-auto z-10 flex items-center gap-3 animate__animated animate__fadeInUp">
          <Link
            href={"/portfolio"}
            className="text-sm lg:text-base font-medium flex items-center gap-1 bg-lighttext py-3 px-8 lg:py-3 lg:px-8 rounded-full"
          >
            Projects
            <RiArrowRightUpLine />
          </Link>
          <Link
            href={"/about"}
            className="text-lighttext text-sm lg:text-base font-medium flex items-center gap-1 py-3 px-4 lg:py-3 lg:px-4"
          >
            About Me
            <RiArrowRightUpLine />
          </Link>
        </div>


        {/* Social Links */}
        <div className="absolute left-5 right-0 w-fit bottom-50 md:bottom-20 flex flex-col items-center gap-6 z-10 animate__animated animate__fadeInUp">
        <a
              className="text-lighttext hover:scale-110 duration-300 "
              href="https://github.com/MananKanani5/"
              target="_blank"
              aria-label="Visit Manan Kanani's GitHub profile"
              title="GitHub"
            >
              <RiGithubFill />
            </a>
            <a
              className="text-lighttext hover:scale-110 duration-300 "
              href="https://www.linkedin.com/in/manan-kanani/"
              target="_blank"
              aria-label="Visit Manan Kanani's LinkedIn profile"
              title="LinkedIn"
            >
              <RiLinkedinBoxFill />
            </a>
            <a
              className="text-lighttext hover:scale-110 duration-300 "
              href="https://leetcode.com/manankanani/"
              target="_blank"
              aria-label="Visit Manan Kanani's LeetCode profile"
              title="LeetCode"
            >
              <Image
                src="/icons/leetcode.svg"
                alt="leetcode"
                width={21}
                height={21}
                className="duration-300"
              />
            </a>
        </div>


        <Link href="#about" className="absolute bottom-61 md:bottom-30 -right-6 w-fit h-fit flex gap-2 items-center z-10 animate__animated animate__fadeInUp rotate-90 text-lighttext text-sm tracking-wide group">
          Scroll Down
          <RiArrowRightLine className="text-lighttext group-hover:translate-x-1 duration-300" />
        </Link>
      </div>

      <Image
          src="/new/bg-blur.png"
          alt="bgblur_img"
          width={800}
          height={500}
          className="absolute -bottom-2 left-0 right-0 w-full  z-0 animate__animated animate__fadeIn animate__slower h-full"
        />
    </section>
  );
};

export default Hero;
