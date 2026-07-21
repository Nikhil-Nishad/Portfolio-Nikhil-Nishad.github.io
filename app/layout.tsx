import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

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
  description: "Official portfolio of Nikhil Nishad - AI Engineer & Full Stack Developer at Venture7 Technologies. Specializing in LLMs, Agentic AI, RAG, Prompt Engineering, OCR Systems, and high-performance Next.js 15 / MERN stack web products.",
  keywords: [
    "Nikhil Nishad",
    "Nikhil Nishad Portfolio",
    "Nikhil Nishad AI Engineer",
    "Nikhil Nishad Full Stack Developer",
    "AI Engineer",
    "Full Stack Developer",
    "Venture7 Technologies",
    "Next.js 15 Developer",
    "Agentic AI Engineer",
    "LLM Integration Specialist",
    "RAG Specialist",
    "Prompt Engineer",
    "MERN Stack Developer",
    "OCR Processing Engineer",
    "Software Engineer India",
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
    description: "Building intelligent products using AI, LLMs, Agentic workflows, and scalable modern web architecture.",
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
    description: "Building intelligent products using AI, LLMs, Agentic workflows, and scalable modern web architecture.",
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
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    "name": "Nikhil Nishad",
    "url": baseUrl,
    "image": `${baseUrl}/profile.png`,
    "jobTitle": "AI Engineer & Full Stack Developer",
    "description": "AI Engineer & Full Stack Developer specializing in LLMs, Prompt Engineering, Agentic AI, RAG, and high-performance web applications.",
    "worksFor": {
      "@type": "Organization",
      "name": "Venture7 Technologies",
      "url": "https://www.venture7.com"
    },
    "almaMater": {
      "@type": "EducationalOrganization",
      "name": "J.C. Bose University of Science and Technology, YMCA"
    },
    "sameAs": [
      "https://github.com/Nikhil-Nishad",
      "https://www.linkedin.com/in/nikhilnishad"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Large Language Models (LLMs)",
      "Agentic AI",
      "Prompt Engineering",
      "Retrieval-Augmented Generation (RAG)",
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "MERN Stack",
      "Node.js",
      "MongoDB",
      "OCR Document Extraction"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    "url": baseUrl,
    "name": "Nikhil Nishad Portfolio",
    "description": "AI Engineer & Full Stack Developer Portfolio",
    "author": {
      "@id": `${baseUrl}/#person`
    },
    "inLanguage": "en-US"
  };

  return (
    <html lang="en" className={`${displayFont.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#09090B] text-[#FAFAFA] selection:bg-blue-500/30 selection:text-blue-200 font-sans">
        {children}
      </body>
    </html>
  );
}
