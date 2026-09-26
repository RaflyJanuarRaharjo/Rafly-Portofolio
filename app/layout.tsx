import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import SiteBackground from "@/components/SiteBackground";
import AutoMusic from "@/components/AutoMusic";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafly Januar Raharjo — UI/UX Designer",
  description:
    "Portofolio UI/UX Designer: experience, awards, project, dan blog.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={GeistSans.variable}>
      <body className="bg-white font-sans text-neutral-800">
        <SiteBackground />
        <AutoMusic />
        <div className="relative z-10 flex justify-center px-0 min-[1440px]:px-[175px]">
          <div className="flex w-full max-w-[1089px] flex-col items-start border-l border-r border-neutral-300 bg-white">
            <SiteChrome />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}