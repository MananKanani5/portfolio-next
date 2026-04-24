import Hero from "./components/new/Hero";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import "animate.css";

export const metadata = {
  title: "Manan Kanani | Full Stack Developer",
  description:
    "Full stack developer with 3+ years of experience, delivering 30+ web projects with strong UI/UX and robust backend solutions.",
  alternates: {
    canonical: "https://manankanani.in",
  },
  keywords: [
    "Manan Kanani",
    "Full Stack Developer Mumbai",
    "MERN Stack Developer",
    "React Developer Mumbai",
    "Node.js Developer",
    "Web Developer Portfolio",
    "Hire Full Stack Developer",
    "JavaScript Developer",
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
