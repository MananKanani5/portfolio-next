import SingleProject from "@/app/components/SingleProject";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch(
    "https://manankanani5.github.io/portfolio-data/Projects.json"
  );
  const projects = await res.json();
  return projects.map((project) => ({ slug: project.slug }));
}

async function getProject(slug) {
  const res = await fetch(
    "https://manankanani5.github.io/portfolio-data/Projects.json"
  );
  const projects = await res.json();
  return projects.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const project = await getProject(awaitedParams.slug);

  if (!project) {
    notFound();
  }

  return {
    title: `${project.title} | Manan Kanani - Full Stack Developer`,
    description: `Explore "${
      project.title
    }", a full-stack web development project by Manan Kanani. Built using ${project.techStack.join(
      ", "
    )}.`,
    keywords: [
      project.title,
      ...project.techStack,
      "Manan kanani",
      "Full Stack Developer",
      "Web Developer Portfolio",
    ],
  };
}

export default async function PortfolioDetails({ params }) {
  const awaitedParams = await params;
  const project = await getProject(awaitedParams.slug);

  return <SingleProject project={project} />;
}
