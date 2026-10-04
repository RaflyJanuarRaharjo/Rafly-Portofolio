import Stripe from "@/components/Stripe";
import SectionHeader from "@/components/SectionHeader";
import ProjectFilter from "@/components/ProjectFilter";
import { projects } from "@/lib/data";

export const metadata = { title: "Portfolio - Rafly Januar Raharjo" };

export default function PortfolioPage() {
  return (
    <>
      <SectionHeader title="Project" count={projects.length} />
      <Stripe />
      <ProjectFilter projects={projects} />
      <Stripe />
    </>
  );
}
