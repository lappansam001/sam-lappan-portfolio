import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sam Lappan — AI Web Developer",
  description:
    "I turn complicated Excel processes into simple web tools. Five tools built and shipped for a national publisher.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.className} ${display.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}