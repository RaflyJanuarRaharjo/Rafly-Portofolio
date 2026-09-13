import { A } from "@/lib/assets";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <header className="flex w-full flex-col items-center justify-center gap-[40px] pb-[32px]">
      <div className="flex w-full flex-col">
        {/* Cover */}
        <div className="mb-[-104px] h-[290px] w-full overflow-hidden bg-neutral-200">
  <video
    src="/assets/cover.mp4"
    autoPlay
    muted
    loop
    playsInline
    aria-hidden
    className="h-full w-full object-cover"
  />
</div>

        <div className="flex h-[214px] w-full items-end gap-[32px] pl-[80px] pr-[120px]">
          <img
            src={A.avatar}
            alt={profile.name}
            className="size-[167px] shrink-0 rounded-[8px] border-5 border-white object-cover"
          />

          <div className="flex w-[432px] flex-col gap-[4px] pb-[4px]">
            <div className="flex items-center justify-center gap-[16px] p-[8px]">
              <h1 className="text-[32px] font-semibold whitespace-nowrap text-neutral-800">
                {profile.name}
              </h1>
              <span className="flex items-center gap-[8px]">
                <img src={A.badgeVerified} alt="" aria-hidden className="size-[40px]" />
                <img src={A.badgeX} alt="" aria-hidden className="size-[32px]" />
              </span>
            </div>
            <div className="flex items-center justify-start px-[8px]">
              <p className="text-[24px] whitespace-nowrap text-neutral-600">
                {profile.role}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-[913px] flex-col justify-center">
        <p className="text-[24px] leading-[36px] text-neutral-800">{profile.bio}</p>
      </div>
    </header>
  );
}
