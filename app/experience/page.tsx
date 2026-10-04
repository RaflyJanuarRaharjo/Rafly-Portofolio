import Stripe from "@/components/Stripe";
import SectionHeader from "@/components/SectionHeader";
import RowList from "@/components/RowList";
import { counts, experiences } from "@/lib/data";

export const metadata = { title: "Experience - Rafly Januar Raharjo" };

export default function ExperiencePage() {
  return (
    <>
      <SectionHeader title="Experience" count={counts.experience} />
      <Stripe />
      <RowList items={experiences} />
      <Stripe />
    </>
  );
}
