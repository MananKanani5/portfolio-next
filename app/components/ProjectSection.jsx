"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";
import Project from "./Project";

const ProjectSection = ({ isHome }) => {
  const [Projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const url =
          "https://manankanani5.github.io/portfolio-data/Projects.json";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const result = await response.json();
        setProjects(isHome ? result.slice(-3) : result);
      } catch (err) {
        console.error(err);
        setError(err.message);
      }
    };

    fetchProjects();
  }, [isHome]);

  return (
    <section className=" w-full relative  z-40">
      <div className="max-w-[1280px] mx-auto py-20 max-sm:px-5">
        <div className="flex justify-between items-center max-sm:flex-col max-sm:items-start">
          <div className={`${isHome ? "" : "w-full text-center"}`}>
            <h2 className="text-5xl text-secondary font-bold mb-4 animate__animated animate__fadeIn">
              Projects
            </h2>
            <p className="animate__animated animate__fadeIn">
              Discover my portfolio featuring a variety of projects.
            </p>
          </div>
          <div className={`${isHome ? "block" : "hidden"}`}>
            <Link
              className="text-primary hover:text-primaryHover font-semibold duration-300 w-fit flex gap-1 max-sm:mt-3 animate__animated animate__fadeIn"
              href={"/portfolio"}
            >
              See All Projects <RiArrowRightUpLine />
            </Link>
          </div>
        </div>

        <div className="flex gap-5 mt-7 flex-wrap justify-start">
          {[...Projects].reverse().map((project) => (
            <Project
              to={project.slug}
              key={project.id}
              className="w-[calc(33%-1.25rem)] max-w-[33%]"
            >
              <img
                className="animate__animated animate__fadeIn"
                loading="lazy"
                src={project.imgLink}
                alt={project.title}
              />
              <h1 className="text-center text-xl text-lighttext mb-2">
                {project.title}
              </h1>
            </Project>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
