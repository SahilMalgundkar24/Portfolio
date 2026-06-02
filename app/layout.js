import "./globals.css";
import React from "react";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "Sahil Malgundkar | AI Engineer & Full Stack Developer",
  description:
    "AI Engineer and Full-Stack Developer building production-grade AI systems, RAG pipelines, and scalable web applications. 1.5+ years experience, SIH 2024 Winner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
