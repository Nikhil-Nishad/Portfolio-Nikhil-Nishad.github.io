# Portfolio v2 - Design Specification

**Author:** Nikhil Nishad  
**Role:** AI Engineer & Full Stack Developer  
**Date:** 2026-07-21  
**Version:** 2.0  

---

## 1. Overview & Vision

Portfolio v2 is a premium personal web application engineered to feel like a high-end AI SaaS landing page rather than a traditional developer resume site. It highlights technical depth in AI engineering (LLM integration, Prompt Engineering, Agentic AI, MCP, RAG, OCR/IDP) alongside full-stack engineering excellence (Next.js 15, React 19, TypeScript, Tailwind CSS v4, Node.js, MongoDB).

### Core Goals
- Communicate engineering quality, product thinking, and AI capabilities within 10 seconds.
- Position Nikhil as an **AI Engineer & Full Stack Developer** building intelligent products.
- Achieve Lighthouse scores of 95+ across Performance, Accessibility, Best Practices, and SEO.
- Provide a sleek dark-themed responsive UI with purposeful animations.

---

## 2. Architecture & File Structure

The project uses Next.js 15 with App Router, strict TypeScript, Tailwind CSS v4, and decoupled static content data files.

```text
Portfolio-Nikhil-Nishad.github.io/
├── app/
│   ├── layout.tsx         # Root layout with fonts, ThemeProvider, smooth scroll
│   ├── page.tsx           # Main Portfolio Landing Page
│   ├── globals.css        # Tailwind v4 styles, colors, keyframes, scrollbar
│   ├── sitemap.ts         # Dynamic SEO sitemap
│   └── robots.ts          # SEO robots file
├── components/            # Reusable UI primitives
│   ├── ui/                # Button, Badge, Card, Container, TechChip, SectionHeading
│   └── layout/            # Navbar, Footer, CursorGlow, BackgroundGrid
├── features/              # Feature section modules
│   ├── hero/              # HeroSection, ProfilePortrait, HeroCTA, SocialLinks
│   ├── about/             # AboutSection, StoryCard
│   ├── experience/        # ExperienceTimeline, ExperienceCard
│   ├── projects/          # ProjectGrid, ProjectCard, ProjectFilter
│   ├── skills/            # SkillsSection, SkillBadgeGroup
│   ├── achievements/      # AchievementsGrid, AchievementCard
│   └── contact/           # ContactSection, ContactActions
├── content/               # Static content files (Decoupled data layer)
│   ├── profile.json       # General bio, links, titles
│   ├── experience.json    # Work timeline (Venture7, Cabbalistic)
│   ├── skills.json        # Categorized skills (AI, Frontend, Backend, Automation, OCR, etc.)
│   ├── achievements.json  # Ideathon, Research paper, Certifications
│   └── projects/          # Markdown files for Elevate Fitness, ERP Academy, Event Sarathi, AI OCR
├── lib/                   # Utility helpers (cn, markdown parser, metadata builders)
├── public/                # Static assets (profile image, project thumbnails, resume PDF)
└── legacy/                # Archival folder for old static HTML/CSS files
```

---

## 3. Design System & Tokens

### Color Palette (Dark Theme Default)
- **Background Base (`--bg-base`):** `#09090B`
- **Surface Elevation (`--bg-surface`):** `#111113`
- **Card Surface (`--bg-card`):** `#18181B` / `#1F1F23`
- **Border (`--border-subtle`):** `rgba(255, 255, 255, 0.08)`
- **Text Primary (`--text-primary`):** `#FAFAFA`
- **Text Secondary (`--text-secondary`):** `#A1A1AA`
- **Text Muted (`--text-muted`):** `#71717A`
- **Accent Primary (`--accent-blue`):** `#3B82F6`
- **Accent Secondary (`--accent-purple`):** `#8B5CF6`
- **Status Green (`--accent-green`):** `#22C55E`

### Typography & Spacing
- **Fonts:** `Inter` / `Geist` (Headings & Body), `JetBrains Mono` (Code & Tech Badges).
- **Radius:** `14px` (Buttons), `20px` (Cards), `24px` (Images & Portrait).
- **Max Width:** `1280px` for main grid container, `760px` for text content blocks.

---

## 4. Information Architecture & Content Model

### Hero Section
- **Heading:** "Hi, I'm Nikhil. AI Engineer & Full Stack Developer"
- **Subtitle:** "Building intelligent products using AI, modern web technologies, and scalable software architecture."
- **Action CTAs:** "View Projects" (smooth scroll) & "Download Resume".
- **Social Badges:** GitHub (`Nikhil-Nishad`), LinkedIn (`nikhilnishad`), Email (`nikhilnishad1801@gmail.com`).
- **Profile Card:** High-resolution portrait on right (desktop) / top (mobile) with subtle ambient glow and float effect.

### About Section
- **Narrative:** Developer → AI Engineer → Product Builder. Highlighting hands-on client AI work at Venture7 Technologies. Max 250 words.

### Experience Timeline
- **Venture7 Technologies** (*July 2025 - Present*): AI Engineer & Full Stack Developer. LLM integrations, OCR POC, n8n workflows, REST APIs.
- **Cabbalistic Technologies** (*May 2025 - June 2025*): Software Developer / Full Stack Developer. MERN applications, API optimizations, authentication.

### Featured Projects
1. **Elevate Fitness** – AI-Powered Fitness App (Next.js, Supabase, Agentic AI, MCP, published research paper).
2. **ERP Academy** – AI-Driven SAP Training Platform (Next.js 15, TypeScript, n8n blog automation, 95+ Lighthouse score).
3. **Event Sarathi** – Wedding & Event Vendor Marketplace (MERN Stack, 1st Prize Ideathon Winner, 60% organic traffic boost).
4. **AI OCR Platform** – Intelligent Document Processing POC (OCR extraction, structured JSON parsing).

### Categorized Skills
- **AI & GenAI:** LLMs, Prompt Engineering, RAG, Agentic AI, MCP Servers, Chatbots.
- **Document Intelligence:** OCR Integration, Document Data Extraction, Structured JSON Parsing.
- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, ShadCN.
- **Backend & Databases:** Node.js, Express.js, REST APIs, MongoDB, MySQL, Python.
- **Automation & Workflows:** n8n (Self-hosted), Webhooks, Workflow Agents.
- **DevOps & Tools:** Git, Docker, GitHub Actions, Vercel, Google Analytics.

### Achievements & Certifications
- 🏆 1st Prize Inter-University Ideathon (2024) - Event Sarathi
- 📄 Research Paper Publication (ETESM 2025) - "Hyper-Personalization using AI: Elevate Fitness"
- 🎓 Certifications: MongoDB Official, React.js Intermediate (LinkedIn Learning), HackerRank Certified JS Developer

### Contact & Footer
- Direct CTAs for Email (`nikhilnishad1801@gmail.com`), LinkedIn, GitHub, Resume download.
- Footer with copyright notice and technical credits.

---

## 5. Animation & Motion Specification

- **Lenis Smooth Scroll:** Provides fluid momentum scrolling across anchor navigation.
- **Cursor Spotlight:** Desktop-only ambient cursor glow following mouse movement across glass cards.
- **Scroll Reveal:** Viewport-triggered fade & slide-up entrances (`once: true`) with staggered delays.
- **Card Hover:** Subtle elevation (`translateY(-4px)`), gradient border highlight, image scale (`scale(1.03)`).
- **Reduced Motion:** Full support via `prefers-reduced-motion: reduce`.

---

## 6. Non-Functional & SEO Requirements
- Lighthouse 95+ score target across all metrics.
- OpenGraph metadata, Schema.org JSON-LD structured data, dynamic `sitemap.xml`, `robots.txt`, and `llms.txt`.
- WCAG AA accessibility compliance with visible keyboard focus states and clean alt text.
