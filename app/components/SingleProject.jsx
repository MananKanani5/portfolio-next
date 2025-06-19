import { RiArrowRightUpLine, RiGithubFill } from "@remixicon/react";
import ProjectGallery from "./ProjectGallery";
import DescriptionToggle from "./DescriptionToggle";

export default function SingleProject({ project }) {
  return (
    <section className="w-full relative bg-lighttext z-40">
      <div className="max-w-[1280px] mx-auto py-20 flex flex-col gap-5 max-sm:px-5">
        <div className="flex justify-between items-center max-sm:flex-col animate__animated animate__fadeIn">
          <div>
            <h1 className="text-3xl font-bold mb-5">{project.title}</h1>
            <ul className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <li className="bg-white px-3 py-1 rounded-md" key={index}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex max-sm:flex-col gap-3 max-sm:w-full max-sm:mt-5">
            {project.githubLink !== "NA" && (
              <a
                href={project.githubLink}
                className="bg-[#510451] hover:bg-[#510451da] duration-300 w-fit max-sm:w-full max-sm:justify-center px-3 py-2 text-lighttext rounded-lg flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiGithubFill /> View on GitHub
              </a>
            )}

            {project.previewLink !== "NA" && (
              <a
                href={project.previewLink}
                className="bg-primary hover:bg-primaryHover duration-300 w-fit max-sm:w-full max-sm:justify-center px-3 py-2 text-lighttext rounded-lg flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview <RiArrowRightUpLine />
              </a>
            )}
          </div>
        </div>

        <hr className="my-2 text-[#00000020] animate__animated animate__fadeIn" />

        <DescriptionToggle description={project.description} />

        <hr className="my-2 text-[#00000020] animate__animated animate__fadeIn" />

        <ProjectGallery project={project} />
      </div>
    </section>
  );
}
