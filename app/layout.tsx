import type { Metadata, Viewport } from "next";
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

const baseUrl = "https://portfolio-nikhil-nishad.github.io";

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Nikhil Nishad | AI Engineer & Full Stack Developer",
    template: "%s | Nikhil Nishad",
  },
  description: "AI Engineer & Full Stack Developer specializing in LLMs, Prompt Engineering, Agentic AI, RAG, OCR Document Processing, and scalable web applications.",
  keywords: [
    "Nikhil Nishad",
    "AI Engineer",
    "Full Stack Developer",
    "Next.js 15",
    "LLMs",
    "Agentic AI",
    "RAG",
    "Prompt Engineering",
    "MERN Stack",
    "OCR",
    "Venture7 Technologies",
    "Software Developer",
  ],
  authors: [{ name: "Nikhil Nishad", url: baseUrl }],
  creator: "Nikhil Nishad",
  publisher: "Nikhil Nishad",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Nikhil Nishad | AI Engineer & Full Stack Developer",
    description: "Building intelligent products using AI, modern web technologies, and scalable software architecture.",
    url: baseUrl,
    siteName: "Nikhil Nishad Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Nikhil Nishad - AI Engineer & Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Nishad | AI Engineer & Full Stack Developer",
    description: "Building intelligent products using AI, modern web technologies, and scalable software architecture.",
    images: ["/profile.png"],
    creator: "@nikhilnishad",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nikhil Nishad",
    "url": baseUrl,
    "image": `${baseUrl}/profile.png`,
    "jobTitle": "AI Engineer & Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Venture7 Technologies"
    },
    "sameAs": [
      "https://github.com/Nikhil-Nishad",
      "https://www.linkedin.com/in/nikhilnishad"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Large Language Models",
      "Agentic AI",
      "Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "Next.js",
      "React",
      "TypeScript",
      "MERN Stack",
      "Node.js",
      "MongoDB"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#09090B] text-[#FAFAFA] selection:bg-blue-500/30 selection:text-blue-200">
        {children}
      </body>
    </html>
  );
}
