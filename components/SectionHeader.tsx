import Link from "next/link";

type Props = {
  title: string;
  count?: number;
  seeAllHref?: string;
};

export default function SectionHeader({ title, count, seeAllHref }: Props) {
  return (
    <div className="flex h-[114px] w-full items-center justify-between px-[80px] py-[32px]">
      <div className="flex items-center gap-[16px] p-[8px]">
        <h2 className="text-[32px] font-medium text-neutral-800">{title}</h2>
        {count !== undefined && (
          <span className="flex size-[42px] items-center justify-center border border-neutral-200 bg-neutral-100 text-[24px] font-medium text-neutral-600">
            {count}
          </span>
        )}
      </div>

      {seeAllHref && (
        <Link
          href={seeAllHref}
          className="flex h-[42px] w-[120px] items-center justify-center border border-neutral-200 bg-neutral-100 text-[24px] font-medium text-neutral-600"
        >
          See all
        </Link>
      )}
    </div>
  );
}
