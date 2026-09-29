import Stripe from "@/components/Stripe";
import SectionHeader from "@/components/SectionHeader";
import RowList from "@/components/RowList";
import ProjectCard from "@/components/ProjectCard";
import BlogRow from "@/components/BlogRow";
import CtaBanner from "@/components/CtaBanner";
import { awards, counts, experiences, posts, projects } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <SectionHeader title="Experience" count={counts.experience} seeAllHref="/experience" />
      <Stripe />
      {/* Home cukup 3 terbaru; selebihnya di /experience. */}
      <RowList items={experiences.slice(0, 3)} />

      <Stripe />
      <SectionHeader title="Awards" count={counts.awards} seeAllHref="/awards" />
      <Stripe />
      {/* Home cukup 3 terbaru; selebihnya di /awards. */}
      <RowList items={awards.slice(0, 3)} divided />

      <Stripe />
      <SectionHeader title="Project" seeAllHref="/portfolio" />
      <Stripe />
      {/* Home cukup menampilkan 2 project; selebihnya di /portfolio. */}
      {projects.slice(0, 2).map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}

      <Stripe />
      <SectionHeader title="Blog" seeAllHref="/blog" />
      <Stripe />
      <BlogRow items={posts} />

      <Stripe />
      <CtaBanner />
    </>
  );
}
