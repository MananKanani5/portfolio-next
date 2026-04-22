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
    <section className=" w-full bg-secondary p-5 pb-0 overflow-hidden ">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center max-sm:flex-col">
        <div className="flex flex-col gap-44 max-sm:gap-14 max-sm:mt-14 max-sm:z-50">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl text-lighttext font-bold animate__animated animate__fadeInUp">
              I'm Manan Kanani
            </h1>
            <h2 className="text-3xl max-sm:text-2xl text-lighttext animate__animated animate__fadeInUp">
              Skilled Full-Stack Developer
            </h2>
            <Link
              className="text-primaryHover hover:text-primary duration-300 font-semibold w-fit flex gap-1 animate__animated animate__fadeInUp"
              href={"/about"}
            >
              About Me <RiArrowRightUpLine />
            </Link>
          </div>

          <div className="flex gap-5 animate__animated animate__fadeInUp">
            <a
              className="text-lighttext hover:scale-110 duration-300 "
              href="https://github.com/MananKanani5/"
              target="_blank"
              aria-label="Visit Manan Kanani's GitHub profile"
            >
              <RiGithubFill />
            </a>
            <a
              className="text-lighttext hover:scale-110 duration-300 "
              href="https://www.linkedin.com/in/manan-kanani/"
              target="_blank"
              aria-label="Visit Manan Kanani's LinkedIn profile"
            >
              <RiLinkedinBoxFill />
            </a>
            <a
              className="text-lighttext hover:scale-110 duration-300 "
              href="https://leetcode.com/manankanani/"
              target="_blank"
              aria-label="Visit Manan Kanani's LeetCode profile"
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
        </div>
        <div>
          {/* <Image
            src={"/images/technologies/mongodb.jpg"}
            alt="MongoDB"
            width={65}
            height={65}
            className="absolute rounded-full right-[40%] top-[25%] animate__animated animate__pulse animate__infinite animate__slow max-sm:hidden z-50"
          />
          <Image
            src={"/images/technologies/express.jpg"}
            alt="Express.js"
            width={70}
            height={70}
            className="absolute rounded-full right-[10%] top-[35%] animate__animated animate__pulse animate__infinite animate__slow max-sm:hidden z-50"
          />
          <Image
            src={"/images/technologies/react.jpg"}
            alt="React.js"
            width={60}
            height={60}
            className="absolute rounded-full right-[45%] top-[55%] animate__animated animate__pulse animate__infinite animate__slow max-sm:hidden z-50"
          />
          <Image
            src={"/images/technologies/nodejs.jpg"}
            alt="Node.js"
            width={65}
            height={65}
            className="absolute rounded-full right-[5%] top-[65%] animate__animated animate__pulse animate__infinite animate__slow max-sm:hidden z-50"
          /> */}

          <Image
            className="z-40 relative max-sm:scale-110 animate__animated animate__fadeIn "
            src="/images/heroImg.png"
            alt="hero_Main_img"
            width={678}
            height={558}
            unoptimized={true}
            priority={true}
          />
          <Image
            className="absolute top-20 max-sm:hidden right-0 opacity-70 animate__animated animate__fadeIn"
            src="/images/heroBgStyle.webp"
            width={909}
            height={1018}
            alt="hero_main_bg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
