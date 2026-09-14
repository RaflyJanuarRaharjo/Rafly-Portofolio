import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stripe from "@/components/Stripe";
import SectionHeader from "@/components/SectionHeader";
import Row from "@/components/Row";
import ProjectCard from "@/components/ProjectCard";
import BlogRow from "@/components/BlogRow";
import CtaBanner from "@/components/CtaBanner";
import { awards, counts, experiences, posts, projects } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stripe />
      <Navbar />
      <Stripe />

      <SectionHeader title="Experience" count={counts.experience} seeAllHref="/experience" />
      <Stripe />
      {experiences.map((item) => (
        <Row key={item.title} {...item} />
      ))}

      <Stripe />
      <SectionHeader title="Awards" count={counts.awards} seeAllHref="/awards" />
      <Stripe />
      {awards.map((item) => (
        <Row key={item.title} {...item} divided />
      ))}

      <Stripe />
      <SectionHeader title="Project" seeAllHref="/portfolio" />
      <Stripe />
      <ProjectCard project={projects[0]} />

      <Stripe />
      <SectionHeader title="Blog" seeAllHref="/blog" />
      <Stripe />
      <BlogRow items={posts} />

      <Stripe />
      <CtaBanner />
    </>
  );
}
