import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { portfolioConfig } from "@/config/portfolio.config";
import DrawBackground from "@/components/DrawBackground";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioConfig.seo.url),
  title: {
    default: 'Портфолио',
    template: `%s - Портфолио`,
  },
  description: portfolioConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
 <body className={`${poppins.variable} ${rubik.variable} bg-[#E6E7EB]`}>
    <main
      data-draw-surface
      className={cn(
        "relative isolate overflow-hidden h-dvh min-h-screen pt-14 pb-4 px-40 max-md:p-4 max-sm:pt-20 break-words bg-transparent bg-[radial-gradient(#2f7df4_1px,transparent_1px)] [background-size:16px_16px]"
      )}
    >
      <DrawBackground />

      <div
        data-app-content
        className="relative z-10 flex h-full items-center justify-between"
      >
        <Navbar />
        {children}
      </div>
    </main>
  </body>
    </html>
  );
}
