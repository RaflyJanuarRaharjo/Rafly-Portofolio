import { A } from "@/lib/assets";

/** Pita garis-miring pemisah antar section (Frame 46 di Figma). */
export default function Stripe() {
  return (
    <div className="h-[70px] w-full overflow-hidden relative">
      <div className="absolute inset-0 bg-neutral-100 border-t border-b border-neutral-300" />
      <img
        src={A.stripe}
        alt=""
        aria-hidden
        className="absolute left-[-174px] top-0 h-[69px] w-[1554px] max-w-none"
      />
    </div>
  );
}
