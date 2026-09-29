import Stripe from "@/components/Stripe";
import SectionHeader from "@/components/SectionHeader";
import RowList from "@/components/RowList";
import { awards, counts } from "@/lib/data";

export const metadata = { title: "Awards — Rafly Januar Raharjo" };

export default function AwardsPage() {
  return (
    <>
      <SectionHeader title="Awards" count={counts.awards} />
      <Stripe />
      <RowList items={awards} divided />
      <Stripe />
    </>
  );
}
