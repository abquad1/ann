import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import { PROFILE } from "@/lib/data";
import "./globals.css";

const head = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-head",
});
const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: `${PROFILE.name} | ${PROFILE.role}`,
  description: `Portfolio of ${PROFILE.name}, ${PROFILE.role.toLowerCase()}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <body className="bg-paper font-body text-[17px] leading-relaxed text-ink">
        {children}
      </body>
    </html>
  );
}
