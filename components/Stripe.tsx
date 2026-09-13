import { A } from "@/lib/assets";

/** Pita garis-miring pemisah antar section (Frame 46 di Figma). */
export default function Stripe() {
  return (
    <div className="relative h-[36px] w-full overflow-hidden md:h-[52px] lg:h-[70px]">
      <div className="absolute inset-0 border-t border-b border-neutral-300 bg-neutral-100" />
      <img
        src={A.stripe}
        alt=""
        aria-hidden
        className="absolute left-[-174px] top-0 h-full w-[1554px] max-w-none"
      />
    </div>
  );
}
