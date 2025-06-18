import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import "animate.css";

export const metadata = {
  title: "Manan Kanani | Full Stack Developer",
  description:
    "Full stack developer with 3+ years of experience, delivering 30+ web projects with strong UI/UX and robust backend solutions.",
  keywords: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Web Developer Portfolio",
    "Frontend Developer",
  ],
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectSection isHome={true} />
    </>
  );
}
