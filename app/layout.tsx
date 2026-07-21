import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Nikhil Nishad | AI Engineer & Full Stack Developer",
  description: "AI Engineer & Full Stack Developer specializing in LLMs, Prompt Engineering, Agentic AI, RAG, and high-performance web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <body className="antialiased min-h-screen bg-[#09090B] text-[#FAFAFA] selection:bg-blue-500/30 selection:text-blue-200">
        {children}
      </body>
    </html>
  );
}
