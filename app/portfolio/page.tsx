import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stripe from "@/components/Stripe";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata = { title: "Portfolio — Rafly Januar Raharjo" };

export default function PortfolioPage() {
  return (
    <>
      <Hero />
      <Stripe />
      <Navbar />
      <Stripe />

      <SectionHeader title="Project" count={projects.length} />
      <Stripe />
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
      <Stripe />
    </>
  );
}
