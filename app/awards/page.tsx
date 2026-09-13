import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stripe from "@/components/Stripe";
import SectionHeader from "@/components/SectionHeader";
import Row from "@/components/Row";
import { awards, counts } from "@/lib/data";

export const metadata = { title: "Awards — Rafly Januar Raharjo" };

export default function AwardsPage() {
  return (
    <>
      <Hero />
      <Stripe />
      <Navbar />
      <Stripe />

      <SectionHeader title="Awards" count={counts.awards} />
      <Stripe />
      {awards.map((item) => (
        <Row key={item.title} {...item} divided />
      ))}
      <Stripe />
    </>
  );
}
