import Stripe from "@/components/Stripe";
import SectionHeader from "@/components/SectionHeader";
import Row from "@/components/Row";
import { counts, experiences } from "@/lib/data";

export const metadata = { title: "Experience — Rafly Januar Raharjo" };

export default function ExperiencePage() {
  return (
    <>
      <SectionHeader title="Experience" count={counts.experience} />
      <Stripe />
      {experiences.map((item) => (
        <Row key={item.title} {...item} />
      ))}
      <Stripe />
    </>
  );
}
