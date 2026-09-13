import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stripe from "@/components/Stripe";
import SectionHeader from "@/components/SectionHeader";
import BlogRow from "@/components/BlogRow";
import { posts } from "@/lib/data";

export const metadata = { title: "Blog — Rafly Januar Raharjo" };

export default function BlogPage() {
  return (
    <>
      <Hero />
      <Stripe />
      <Navbar />
      <Stripe />

      <SectionHeader title="Blog" />
      <Stripe />
      <BlogRow items={posts} />
      <Stripe />
    </>
  );
}
