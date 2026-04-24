"use client";
import Image from "next/image";
import React from "react";

const AboutSection = () => {
  const programmingLanguages = [
    { src: "/images/technologies/js.jpg", alt: "JavaScript" },
    { src: "/images/technologies/typescript.jpg", alt: "TypeScript" },
    { src: "/images/technologies/java.jpg", alt: "Java" },
  ];

  const frontend = [
    { src: "/images/technologies/html.jpg", alt: "HTML" },
    { src: "/images/technologies/css.jpg", alt: "CSS" },
    { src: "/images/technologies/react.jpg", alt: "React" },
    { src: "/images/technologies/bootstrap.jpg", alt: "Bootstrap" },
    { src: "/images/technologies/tailwind.jpg", alt: "Tailwind CSS" },
  ];

  const backend = [
    { src: "/images/technologies/nodejs.jpg", alt: "Node.js" },
    { src: "/images/technologies/express.jpg", alt: "Express" },
    { src: "/images/technologies/mysql.jpg", alt: "MySQL" },
    { src: "/images/technologies/mongodb.jpg", alt: "MongoDB" },
    { src: "/images/technologies/postgres.jpg", alt: "PostgreSQL" },
    { src: "/images/technologies/prisma.jpg", alt: "Prisma" },
  ];

  const tools = [
    { src: "/images/technologies/git.jpg", alt: "Git" },
    { src: "/images/technologies/github.jpg", alt: "GitHub" },
    { src: "/images/technologies/wordpress.jpg", alt: "WordPress" },
    { src: "/images/technologies/figma.jpg", alt: "Figma" },
    { src: "/images/technologies/canva.jpg", alt: "Canva" },
  ];

  return (
    <section className="w-full relative bg-lighttext z-40" data-theme="light">
      <div className="max-w-[1280px] mx-auto py-20 max-sm:px-5">
        <div className="aboutDetails">
          <h2 className="text-5xl text-center text-secondary font-bold mb-4 animate__animated animate__fadeIn">
            About Me
          </h2>
          <p className="animate__animated animate__fadeIn text-pretty text-center">
            On a journey since February 2020, building full-stack web
            applications and constantly evolving as a developer. I focus on
            writing clean code, crafting smooth user experiences, and building
            things that work well in the real world. <br />
            When I’m not coding, I enjoy playing carrom, cricket, and watching
            series.
          </p>
        </div>

        <div className="skills flex justify-between gap-24 mt-10 max-sm:flex-col">
          <div className="frontend w-1/4 animate__animated animate__fadeIn max-sm:w-full">
            <p className="text-center mb-5 font-medium">Frontend</p>
            <div className="flex flex-wrap justify-center gap-3">
              {frontend.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={100}
                  className="w-16 max-sm:w-20 rounded-lg animate__animated animate__fadeIn"
                />
              ))}
            </div>
          </div>

          <div className="backend w-1/4 animate__animated animate__fadeIn max-sm:w-full">
            <p className="text-center mb-5 font-medium">Backend and Database</p>
            <div className="flex flex-wrap justify-center gap-3">
              {backend.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={100}
                  className="w-16 max-sm:w-20 rounded-lg animate__animated animate__fadeIn"
                />
              ))}
            </div>
          </div>

          <div className="languages w-1/4 animate__animated animate__fadeIn max-sm:w-full">
            <p className="text-center mb-5 font-medium">
              Programming Languages
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {programmingLanguages.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={100}
                  className="w-16 max-sm:w-20 rounded-lg animate__animated animate__fadeIn"
                />
              ))}
            </div>
          </div>

          <div className="tools w-1/4 animate__animated animate__fadeIn max-sm:w-full">
            <p className="text-center mb-5 font-medium">Tools</p>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((image, index) => (
                <Image
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={100}
                  className="w-16 max-sm:w-20 rounded-lg animate__animated animate__fadeIn"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
