import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import SiteBackground from "@/components/SiteBackground";
import AutoMusic from "@/components/AutoMusic";
import SiteChrome from "@/components/SiteChrome";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import LangToggle from "@/components/LangToggle";
import { LangProvider } from "@/lib/i18n";
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
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="bg-white font-sans text-neutral-800">
        <LangProvider>
          <SiteBackground />
          <AutoMusic />
          <LangToggle />
          <ThemeToggle />
          <div className="relative z-10 flex justify-center px-0 min-[1440px]:px-[175px]">
            <div className="flex w-full max-w-[1089px] flex-col items-start border-l border-r border-neutral-300 bg-white">
              <SiteChrome />
              {children}
              <Footer />
            </div>
          </div>
        </LangProvider>
      </body>
    </html>
  );
}