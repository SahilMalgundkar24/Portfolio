import "./globals.css";
import React from "react";
import { Montserrat } from "next/font/google";
import PageTransition from "@/components/PageTransition";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Sahil Malgundkar | AI Engineer & Full Stack Developer",
  description:
    "AI Engineer and Full-Stack Developer building production-grade AI systems, RAG pipelines, and scalable web applications. 2+ years experience, SIH 2024 Winner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={`${montserrat.className} antialiased`}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
