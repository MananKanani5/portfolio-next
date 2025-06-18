"use client";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ProjectGallery = ({ project }) => {
  return (
    <PhotoProvider maskOpacity={0.7}>
      <div className="flex max-w-full overflow-hidden gap-5 items-start mt-5 flex-wrap justify-start ">
        {project.gallery.map((projectImg, index) => {
          return (
            <PhotoView key={index} src={projectImg}>
              <img
                className="w-[calc(25%-1rem)] max-sm:w-[calc(50%-0.7rem)] object-contain rounded-lg cursor-pointer animate__animated animate__fadeInUp border border-[#00000010]"
                src={projectImg}
                loading="lazy"
                key={index}
              />
            </PhotoView>
          );
        })}
      </div>
    </PhotoProvider>
  );
};

export default ProjectGallery;
