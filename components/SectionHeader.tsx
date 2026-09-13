import Link from "next/link";

type Props = {
  title: string;
  count?: number;
  seeAllHref?: string;
};

export default function SectionHeader({ title, count, seeAllHref }: Props) {
  return (
    <div className="flex w-full items-center justify-between px-[16px] py-[18px] md:px-[48px] md:py-[24px] lg:h-[114px] lg:px-[80px] lg:py-[32px]">
      <div className="flex items-center gap-[10px] lg:gap-[16px] lg:p-[8px]">
        <h2 className="text-[20px] font-medium text-neutral-800 md:text-[26px] lg:text-[32px]">
          {title}
        </h2>
        {count !== undefined && (
          <span className="flex size-[30px] items-center justify-center border border-neutral-200 bg-neutral-100 text-[15px] font-medium text-neutral-600 md:size-[36px] md:text-[19px] lg:size-[42px] lg:text-[24px]">
            {count}
          </span>
        )}
      </div>

      {seeAllHref && (
        <Link
          href={seeAllHref}
          className="flex h-[30px] w-[80px] shrink-0 items-center justify-center border border-neutral-200 bg-neutral-100 text-[14px] font-medium text-neutral-600 transition-colors hover:bg-neutral-200 md:h-[36px] md:w-[100px] md:text-[18px] lg:h-[42px] lg:w-[120px] lg:text-[24px]"
        >
          See all
        </Link>
      )}
    </div>
  );
}
