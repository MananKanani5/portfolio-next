import React from "react";
import ProjectSection from "../components/ProjectSection";

export const metadata = {
  title: "Portfolio | Manan Kanani - Full Stack Developer",
  description:
    "Explore the professional web development portfolio of Manan Kanani, a Full Stack Developer. Showcasing 30+ responsive, full-stack projects built with React, Node.js, and MongoDB.",
  alternates: {
    canonical: "https://manankanani.in/portfolio",
  },
  keywords: [
    "Manan Kanani Portfolio",
    "Full Stack Developer Projects",
    "MERN Stack Projects",
    "React Projects",
    "Node.js Projects",
    "Web Development Portfolio Mumbai",
    "JavaScript Projects",
  ],
};

const PortfolioPage = () => {
  return <ProjectSection isHome={false} />;
};

export default PortfolioPage;
