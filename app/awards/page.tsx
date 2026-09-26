import Stripe from "@/components/Stripe";
import SectionHeader from "@/components/SectionHeader";
import Row from "@/components/Row";
import { awards, counts } from "@/lib/data";

export const metadata = { title: "Awards — Rafly Januar Raharjo" };

export default function AwardsPage() {
  return (
    <>
      <SectionHeader title="Awards" count={counts.awards} />
      <Stripe />
      {awards.map((item) => (
        <Row key={item.title} {...item} divided />
      ))}
      <Stripe />
    </>
  );
}
