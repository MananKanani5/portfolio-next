import React from "react";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";

export const metadata = {
  title: "About Me | Manan Kanani - Full Stack Developer",
  description:
    "Learn about Manan Kanani, a professional Full Stack Developer based in Mumbai with 3+ years of experience in full-stack development using MERN Stack.",
  keywords: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
  ],
};

const AboutPage = () => {
  return (
    <>
      <AboutSection />
      <ExperienceSection />
    </>
  );
};

export default AboutPage;
