# Nikhil Nishad — Portfolio v2.1 🚀

> **AI Engineer & Full Stack Developer** | Personal SaaS Web Application & Product Showcase

[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Lighthouse 95+](https://img.shields.io/badge/Lighthouse-95%2B-green?style=for-the-badge&logo=lighthouse)](https://portfolio-nikhil-nishad.github.io)

---

## 🌟 Overview

**Portfolio v2.1** is a high-performance personal web platform engineered to communicate technical depth in **AI engineering** (LLM integration, Prompt Engineering, Agentic AI, MCP, RAG, OCR/IDP document extraction) alongside full-stack engineering excellence (Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4, MERN Stack).

It highlights real-world products, technical case studies, professional client experience at **Venture7 Technologies**, research publications, and open-source contributions through a modern, dark-themed SaaS aesthetic inspired by Vercel, Linear, and Stripe.

---

## ✨ Key Features & Architecture

- **High-Performance Next.js 15 App Router:** 100% static page generation (SSG) with fast load times and optimized bundle size.
- **Decoupled Content Data Layer:** Content decoupled into `content/` (`profile.json`, `experience.json`, `skills.json`, `achievements.json`, `projects/*.md`), keeping code clean and maintainable.
- **Storytelling Flow:**
  - **Hero:** Positioning, stat pills, resume download, and seamless transparent portrait.
  - **About:** Journey narrative from Full Stack Developer → AI Engineer → Product Builder.
  - **Experience:** Interactive vertical timeline detailing client AI workflows at Venture7 Technologies & Cabbalistic Tech.
  - **Skills & AI Stack:** Categorized badges covering AI/LLMs, OCR, Frontend, Backend, Automation (n8n), and DevOps.
  - **Featured Projects:** Project cards with category filters (*All, AI & Automation, Full Stack, SaaS*), live demos, and GitHub links.
  - **Dynamic Case Studies:** Deep technical case study routes at `/projects/[slug]` with problem, solution, architecture, challenges, and lessons learned.
  - **Currently Building:** Active R&D experiments and AI copilot projects.
  - **Engineering Philosophy:** 4 core principles (AI-First Mindset, Performance, Scalable Code, Mobile-First).
  - **Achievements:** Ideathon 1st Prize, ETESM 2025 IEEE research publication, and official certifications.
- **Top-Notch SEO & AI Crawlers:** Embedded Schema.org (`Person`, `WebSite`), OpenGraph, Twitter Cards, `sitemap.xml`, `robots.txt`, and `public/llms.txt`.
- **First-Class Mobile Experience:** Thumb-friendly tap targets, top-left avatar header on mobile, and smooth responsiveness.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router), React 19 |
| **Language** | TypeScript (Strict mode) |
| **Styling** | Tailwind CSS v4, PostCSS, Custom Design Tokens |
| **Typography** | `Plus_Jakarta_Sans`, `Inter`, `JetBrains_Mono` (Google Fonts) |
| **Icons & Motion** | `lucide-react`, Motion (Framer Motion), Lenis Smooth Scroll |
| **Data Layer** | Static JSON, Markdown (`gray-matter`, `remark`, `remark-html`) |

---

## 📁 Repository Structure

```text
Portfolio-Nikhil-Nishad.github.io/
├── app/                   # Next.js 15 App Router pages & API routes
│   ├── layout.tsx         # Root layout with Google Fonts, SEO metadata & Schema.org
│   ├── page.tsx           # Homepage assembling all feature sections
│   ├── projects/[slug]/   # Dynamic SSG project case study pages
│   ├── globals.css        # Tailwind CSS v4 @theme tokens & styles
│   ├── sitemap.ts         # Dynamic XML sitemap generator
│   └── robots.ts          # Search engine crawler rules
├── components/            # Reusable UI & Layout primitives
│   ├── ui/                # Button, Badge, Card, Container, SectionHeading
│   └── layout/            # Navbar, Footer, CursorGlow
├── features/              # Feature modules (Hero, About, Experience, Projects, etc.)
├── content/               # Decoupled static data layer (JSON & Markdown)
│   ├── profile.json       # Personal details, stats, resume path
│   ├── experience.json    # Work history
│   ├── skills.json        # Categorized skills matrix
│   ├── achievements.json  # Awards, publications & certifications
│   ├── currently-building.json # Active R&D work
│   ├── philosophy.json    # Core engineering principles
│   └── projects/          # Markdown case studies
├── lib/                   # Content fetcher utilities (`lib/content.ts`, `lib/utils.ts`)
├── public/                # Static assets (profile image, resume PDF, favicons, llms.txt)
└── legacy/                # Archival folder preserving original static HTML/CSS files
```

---

## 🚀 Local Development Setup

### Prerequisites
- **Node.js:** v18.0.0 or higher
- **Package Manager:** `pnpm` (or `npm`)

### Installation & Execution

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nikhil-Nishad/Portfolio-Nikhil-Nishad.github.io.git
   cd Portfolio-Nikhil-Nishad.github.io
   ```

2. **Checkout the `v2.0` branch:**
   ```bash
   git checkout v2.0
   ```

3. **Install dependencies:**
   ```bash
   pnpm install
   ```

4. **Run the local development server:**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production:**
   ```bash
   pnpm build
   ```

---

## 📬 Contact & Connect

- **Email:** [nikhilnishad1801@gmail.com](mailto:nikhilnishad1801@gmail.com)
- **LinkedIn:** [linkedin.com/in/nikhilnishad](https://www.linkedin.com/in/nikhilnishad)
- **GitHub:** [github.com/Nikhil-Nishad](https://github.com/Nikhil-Nishad)
- **Live Portfolio:** [portfolio-nikhil-nishad.github.io](https://portfolio-nikhil-nishad.github.io)

---

© 2026 Nikhil Nishad. All rights reserved.
