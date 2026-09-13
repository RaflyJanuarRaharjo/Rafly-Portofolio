"use client";

import { useState } from "react";
import { A } from "@/lib/assets";

type Props = {
  title: string;
  org: string;
  year: string;
  logo?: string;
  divided?: boolean;
  bullets?: string[];
  images?: string[];
};

export default function Row({
  title,
  org,
  year,
  logo,
  divided,
  bullets,
  images,
}: Props) {
  const [open, setOpen] = useState(false);
  const expandable = Boolean(bullets?.length);

  return (
    <div
      className={`flex w-full flex-col items-start bg-white px-[16px] py-[16px] md:px-[48px] md:py-[20px] lg:px-[80px] lg:py-[24px] ${
        divided ? "border-t border-neutral-300" : ""
      }`}
    >
      <div className="flex w-full items-center justify-between gap-[10px] lg:p-[8px]">
        <div className="flex min-w-0 items-center gap-[10px] lg:gap-[16px]">
          {logo && (
            <div className="flex size-[48px] shrink-0 items-center justify-center bg-neutral-100 md:size-[68px] lg:size-[89px]">
              <img src={logo} alt="" aria-hidden className="size-full object-cover" />
            </div>
          )}
          <div className="flex min-w-0 flex-col justify-center gap-[4px] md:gap-[10px] lg:gap-[16px]">
            <p className="text-[16px] font-medium text-neutral-800 md:text-[22px] lg:text-[32px]">
              {title}
            </p>
            <p className="text-[13px] text-neutral-600 md:text-[17px] lg:text-[24px]">
              {org}
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-[8px] lg:gap-[16px]">
          <span className="flex h-[26px] w-[52px] items-center justify-center border border-neutral-200 text-[13px] font-medium text-neutral-600 md:h-[34px] md:w-[66px] md:text-[17px] lg:h-[42px] lg:w-[80px] lg:text-[24px]">
            {year}
          </span>

          {expandable ? (
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? `Tutup ${title}` : `Buka ${title}`}
              className="flex size-[30px] cursor-pointer items-center justify-center lg:size-[40px]"
            >
              <img
                src={A.iconChevron}
                alt=""
                aria-hidden
                className={`size-[18px] rotate-90 transition-transform duration-200 lg:size-[24px] ${
                  open ? "scale-y-[-1]" : ""
                }`}
              />
            </button>
          ) : (
            <img
              src={A.iconChevron}
              alt=""
              aria-hidden
              className="size-[18px] rotate-90 lg:size-[24px]"
            />
          )}
        </div>
      </div>

      {expandable && (
        <div
          className={`grid w-full transition-all duration-300 ${
            open ? "grid-rows-[1fr] pt-[16px] lg:pt-[32px]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="list-disc ps-[20px] text-[13px] leading-[22px] text-neutral-600 md:ps-[28px] md:text-[17px] md:leading-[28px] lg:ps-[36px] lg:text-[24px] lg:leading-[36px]">
              {bullets!.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="mt-[16px] flex flex-wrap items-start gap-[12px] md:gap-[20px] lg:mt-[32px] lg:gap-[32px]">
              {[0, 1].map((i) =>
                images?.[i] ? (
                  <img
                    key={i}
                    src={images[i]}
                    alt=""
                    aria-hidden
                    className="h-[90px] w-[calc(50%-6px)] max-w-[259px] rounded-[8px] object-cover md:h-[130px] lg:h-[156px] lg:w-[259px]"
                  />
                ) : (
                  <div
                    key={i}
                    className="h-[90px] w-[calc(50%-6px)] max-w-[259px] rounded-[8px] bg-[#d9d9d9] md:h-[130px] lg:h-[156px] lg:w-[259px]"
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
