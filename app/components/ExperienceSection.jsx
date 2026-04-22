"use client";
import React, { useState } from "react";
import Accordians from "./Accordions";
import {
  RiArrowDropDownLine,
  RiArrowDropRightLine,
  RiArrowRightUpLine,
  RiCheckboxCircleFill,
} from "@remixicon/react";

const expirence = [
  {
    role: "Full Stack Developer Intern",
    company: "Enpointe IT Services",
    year: "January 2025 - Present",
    content: [
      "Developing the backend for YRF HRMS using Node.js, Express, PostgreSQL, TypeScript & Prisma.",
      "Designing and optimizing database schemas & APIs for efficient HR operations.",
    ],
    projects: {
      "YRF - HRMS": "#",
    },
  },
  {
    role: "Website Developer and Developer",
    company: "Digital Expeditor",
    year: "June 2022 - August 2023",
    content: [
      "Delivered 5 WordPress websites and managed hosting services.",
      "Created 150+ graphics, including logos and social media content.",
    ],
    projects: {
      "Joolt Luxe": "https://jooltluxe.io/",
      "Passport Academy": "https://passportacademy.net/",
    },
  },
  {
    role: "Website Developer",
    company: "QuickWeb Technologies",
    year: "February 2020 - June 2022",
    content: [
      "Developed 20+ websites using various technologies while collaborating with 5+ clients.",
      "Created 100+ graphic design assets, including logos, social media posts, brochures, and visiting cards.",
    ],
    projects: {
      "MM Sarkar Taxi Services": "https://mmsarkartaxiservices.in/",
    },
  },
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full relative z-40">
      <div className="max-w-[1280px] mx-auto py-20 max-sm:px-5">
        <h2 className="text-5xl text-center text-secondary font-bold mb-14 animate__animated animate__fadeIn ">
          Experience
        </h2>
        {expirence.map((exp, index) => (
          <Accordians
            key={index}
            isActive={activeIndex === index}
            onClick={() => toggleAccordion(index)}
          >
            <div
              className={`flex justify-between items-center px-9 py-7 mb-5 rounded-lg hover:cursor-pointer duration-300 max-sm:flex-col-reverse ${
                activeIndex === index
                  ? "bg-secondary text-lighttext"
                  : "bg-lighttext"
              } `}
            >
              <div>
                <h2 className="font-semibold text-lg max-sm:text-center">
                  {exp.role}
                </h2>
                <h2 className="max-sm:text-center">{exp.company}</h2>
              </div>
              <div className="flex items-center">
                <h2 className="font-semibold">{exp.year}</h2>
                {activeIndex === index ? (
                  <RiArrowDropDownLine className="text-2xl" />
                ) : (
                  <RiArrowDropRightLine className="text-2xl" />
                )}
              </div>
            </div>
            {activeIndex === index && (
              <div className="p-8 rounded-lg -mt-5 bg-lighttext mb-5 animate__animated animate__fadeIn">
                <ul className="flex flex-col gap-2 mb-7">
                  {exp.content.map((item, idx) => (
                    <li key={idx}>
                      <RiCheckboxCircleFill className="inline-block text-secondary" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                <div>
                  <h3 className="font-semibold mb-2 max-sm:mb-4">
                    Projects Related to {exp.company}
                  </h3>
                  <ul className="flex max-sm:flex-col max-sm:gap-2 gap-5">
                    {Object.entries(exp.projects).map(([name, url]) => (
                      <li key={name}>
                        {url === "#" ? (
                          <p className="text-primary mt-1 hover:text-primaryHover font-semibold duration-300 flex gap-1">
                            {name}
                          </p>
                        ) : (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(event) => event.stopPropagation()}
                            className="text-primary mt-1 hover:text-primaryHover font-semibold duration-300 flex gap-1"
                          >
                            {name} <RiArrowRightUpLine />
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </Accordians>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
