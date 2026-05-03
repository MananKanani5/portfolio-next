import { RiArrowRightUpLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMe = () => {
  const images = [
    {
      src: "/images/technologies/nodejs.jpg",
      alt: "Node.js",
      title: "Node.js",
    },
    {
      src: "/images/technologies/express.jpg",
      alt: "Express",
      title: "Express",
    },
    { src: "/images/technologies/next.jpg", alt: "Next.js", title: "Next.js" },
    {
      src: "/images/technologies/postgres.jpg",
      alt: "PostgreSQL",
      title: "PostgreSQL",
    },
    { src: "/images/technologies/prisma.jpg", alt: "Prisma", title: "Prisma" },
  ];

  return (
    <section
      className="container mx-auto relative flex flex-col md:flex-row h-full justify-center items-center gap-15 md:gap-28 max-w-[1280px] overflow-hidden py-24 md:py-36 max-sm:px-5 z-10 bg-white"
      data-theme="light"
      id="about"
    >
      <div className="w-full md:w-1/2">
        <h2 className="font-bold text-4xl mb-8">About Me</h2>
        <p>
          <span className="font-semibold block mb-4">
            Building, shipping, and getting better at it since 2020.
          </span>
          I'm a full-stack developer{" "}
          <span className="font-semibold">based in Mumbai</span> who builds web
          apps end to end, from the interface people see to the systems running
          underneath. I’ve worked across HR platforms to AI-powered applications
          to developer tools used across the globe.{" "}
          <span className="block mt-4">
            I write code I won't regret reading six months later.
          </span>
        </p>
        <Link
          className="text-primary hover:text-primaryHover font-semibold duration-300 w-fit flex gap-1 animate__animated animate__fadeIn mt-9"
          href={"/about"}
        >
          Read More <RiArrowRightUpLine />
        </Link>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <div className="bg-[#efefef] py-10 px-5 flex flex-col items-center justify-center rounded-2xl gap-5 overflow-hidden">
          <h3 className="text-md md:text-lg font-medium">
            What Powers My Apps
          </h3>
          <div className="flex items-center justify-between gap-2 md:gap-5">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={100}
                height={100}
                title={image.title}
                className="w-12 md:w-20 rounded-xl animate__animated animate__fadeIn"
              />
            ))}
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-[#efefef] py-10 px-5 flex flex-col items-center justify-center rounded-2xl gap-5 w-1/2">
            <h3 className="text-5xl font-bold -mb-2">4+</h3>
            <p className="text-md md:text-lg font-medium text-center">
              Years of Experience
            </p>
          </div>
          <div className="bg-[#efefef] py-10 px-5 flex flex-col items-center justify-center rounded-2xl gap-5 w-1/2">
            <h3 className="text-5xl font-bold -mb-2">15+</h3>
            <p className="text-md md:text-lg font-medium text-center">
              Projects Delivered
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
