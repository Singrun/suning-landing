import type { Metadata } from "next";
import { Cormorant_Garamond, Newsreader } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const newsreader = Newsreader({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "SUNING — Artist",
  description:
    "Contemporary artist SUNING — sculpture, architecture, and cross-cultural visual storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${newsreader.variable} h-full`}
    >
      <body className="min-h-full bg-[#faf7f2] text-[#1c1917] antialiased">
        {children}
      </body>
    </html>
  );
}
