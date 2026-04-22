import React from "react";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";

export const metadata = {
  title: "About Me | Manan Kanani - Full Stack Developer",
  description:
    "Learn about Manan Kanani, a professional Full Stack Developer based in Mumbai with 3+ years of experience in full-stack development using MERN Stack.",
  alternates: {
    canonical: "https://manankanani.in/about",
  },
  keywords: [
    "Manan Kanani",
    "About Manan Kanani",
    "Full Stack Developer Mumbai",
    "MERN Stack Developer",
    "TypeScript Developer",
    "Web Development Experience",
    "React Developer",
    "Node.js Developer",
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
