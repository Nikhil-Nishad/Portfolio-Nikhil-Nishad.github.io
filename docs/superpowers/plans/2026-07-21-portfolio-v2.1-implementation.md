# Portfolio v2.1 Implementation Plan — Premium Polish & Case Studies

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Portfolio v2 into Portfolio v2.1 with full styling fixes, upgraded hero storytelling, standalone Project Case Study pages (`/projects/[slug]`), "Currently Building" active work section, "Engineering Philosophy" principles, and enhanced recruiter features.

**Architecture:** Next.js 15 App Router + React 19 + Tailwind CSS v4 (with PostCSS compiler) + Framer Motion. Static content enriched with full case study data. Dynamic routing for `/projects/[slug]`.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, Motion, Lucide Icons, Lenis.

## Global Constraints
- **Tailwind CSS v4:** Processed via `@tailwindcss/postcss` and `postcss.config.mjs`
- **Design Aesthetic:** Dark theme default (`#09090B`), aurora radial glow, glassmorphism (`glass-card`), high-contrast typography
- **Storytelling Flow:** Hero → About → Experience → Featured Projects → Currently Building → Engineering Philosophy → Tech Stack → Achievements → Contact
- **Dynamic Case Study Routes:** `app/projects/[slug]/page.tsx` with static parameter generation (`generateStaticParams`)

---

### Task 1: Update Content Data Schema with Rich Case Studies & New Sections

**Files:**
- Modify: `content/profile.json`
- Modify: `content/projects/elevate-fitness.md`
- Modify: `content/projects/erp-academy.md`
- Modify: `content/projects/event-sarathi.md`
- Modify: `content/projects/ai-ocr-platform.md`
- Create: `content/currently-building.json`
- Create: `content/philosophy.json`
- Modify: `lib/content.ts`

**Interfaces:**
- Consumes: Enriched Markdown frontmatter & JSON content files.
- Produces: `getCurrentlyBuilding()`, `getPhilosophy()`, `getProjectBySlug(slug)` in `lib/content.ts`.

- [ ] **Step 1: Update content/profile.json with recruiter highlights & positioning**

```json
{
  "name": "Nikhil Nishad",
  "title": "AI Engineer & Full Stack Developer",
  "tagline": "Building intelligent products for real-world problems.",
  "subtitle": "AI Engineer focused on LLMs, Agentic AI, OCR, Automation, and scalable full-stack applications.",
  "bio": "Building intelligent products using AI, modern web technologies, and scalable software architecture.",
  "location": "Faridabad, Haryana, India",
  "email": "nikhilnishad1801@gmail.com",
  "phone": "+91 9312340496",
  "github": "https://github.com/Nikhil-Nishad",
  "linkedin": "https://www.linkedin.com/in/nikhilnishad",
  "resume": "/Nikhil_Nishad_Resume.pdf",
  "status": "Available for High-Impact Roles & AI Engineering Consulting",
  "stats": [
    { "label": "Current Role", "value": "AI Engineer @ Venture7" },
    { "label": "Experience", "value": "1+ Year Industry" },
    { "label": "Publication", "value": "ETESM 2025 IEEE" },
    { "label": "Ideathon Win", "value": "1st Prize Winner" }
  ],
  "aboutNarrative": "AI Engineer & Full Stack Developer with hands-on industry experience at Venture7 Technologies, working on client-side AI solutions and scalable web applications. Skilled in MERN stack, LLM integration, prompt engineering, OCR systems, and AI-driven automation pipelines. Passionate about building production-ready AI products and next-generation intelligent SaaS systems."
}
```

- [ ] **Step 2: Create content/currently-building.json**

```json
[
  {
    "id": "portfolio-v2",
    "title": "Portfolio v2.1 — AI SaaS Web Platform",
    "status": "In Active Development",
    "description": "Building a high-performance, dark-themed portfolio architecture with Next.js 15, dynamic case study pages, and tailored recruiter metrics.",
    "techStack": ["Next.js 15", "TypeScript", "Tailwind v4", "Motion"]
  },
  {
    "id": "elevate-v2",
    "title": "Elevate Fitness v2 — Agentic Fitness Engine",
    "status": "R&D Phase",
    "description": "Upgrading exercise tracking with real-time vision pose feedback and autonomous multi-agent workout plan generation.",
    "techStack": ["Agentic AI", "MCP Servers", "Supabase", "Next.js"]
  },
  {
    "id": "ai-career-copilot",
    "title": "AI Job Copilot & Resume Optimizer",
    "status": "Prototype",
    "description": "Developing an LLM agent that parses job descriptions, analyzes skill gaps, and tailors candidate portfolios automatically.",
    "techStack": ["Python", "LangChain", "OpenAI API", "Node.js"]
  }
]
```

- [ ] **Step 3: Create content/philosophy.json**

```json
[
  {
    "id": "ai-first",
    "title": "AI-First Product Thinking",
    "icon": "Bot",
    "description": "AI shouldn't be a gimmick—it must solve core user pain points. I integrate LLMs, OCR pipelines, and automation to streamline real workflows."
  },
  {
    "id": "performance",
    "title": "Performance & Zero Bloat",
    "icon": "Zap",
    "description": "Speed is a feature. I optimize images, minimize bundle size, and enforce strict Lighthouse 95+ performance targets."
  },
  {
    "id": "architecture",
    "title": "Scalable Code & Strict Types",
    "icon": "Code",
    "description": "Clean folder structure, strict TypeScript types, and decoupled static data ensure the codebase stays maintainable and production-ready."
  },
  {
    "id": "accessibility",
    "title": "Accessibility & Mobile First",
    "icon": "Smartphone",
    "description": "Treating mobile users as first-class citizens with thumb-friendly tap targets, WCAG AA compliance, and fluid responsiveness."
  }
]
```

- [ ] **Step 4: Enrich content/projects/ markdown files with full Case Study sections**

Enrich `content/projects/elevate-fitness.md`:
```markdown
---
title: "Elevate Fitness – AI-Powered Fitness App"
subtitle: "Interactive AI workout & personalized nutrition engine"
category: "AI & Automation"
featured: true
order: 1
liveUrl: "https://elevate-your-fitness.vercel.app/"
githubUrl: "https://github.com/Nikhil-Nishad"
techStack: ["Next.js", "Supabase", "ShadCN", "Tailwind CSS", "Agentic AI", "MCP"]
metrics: "Published IEEE/ETESM Research Paper"
overview: "Elevate Fitness is an AI-driven fitness and diet customization platform designed to solve static workout plan limitations through hyper-personalization."
problem: "Traditional fitness applications offer rigid, one-size-fits-all workout plans that ignore individual recovery rate, user preference, and real-time equipment access."
solution: "Engineered a personalized AI workout and diet generation engine using LLM prompt pipelines, interactive SVG exercise demos, and custom health tools (BMI calculator & calorie counters)."
architecture: "Built on Next.js App Router for frontend speed, with Supabase managing authentication and user state, integrated with Agentic AI modules and Model Context Protocol (MCP) servers."
challenges: "Ensuring AI-generated diet plans adhered strictly to dietary constraints while rendering responsive SVG pose animations smoothly on mobile viewports."
lessonsLearned: "Direct LLM prompt engineering requires strict output validation schemas to prevent hallucinated calorie calculations."
futureImprovements: "Integrating camera-based pose estimation for real-time rep counting during exercise routines."
---
Elevate Fitness combines AI-driven workout customization with interactive SVG exercise guidance and nutrition planning. The platform's hyper-personalization algorithms were formally published in the ETESM 2025 International Conference.
```

Enrich `content/projects/erp-academy.md`:
```markdown
---
title: "ERP Academy – AI-Driven SAP Training Platform"
subtitle: "Production-grade training platform with automated AI blogging"
category: "Full Stack"
featured: true
order: 2
liveUrl: "https://erp-academy.vercel.app/"
githubUrl: "https://github.com/Nikhil-Nishad"
techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "MDX", "n8n", "Vercel"]
metrics: "95+ Lighthouse Score"
overview: "ERP Academy is a modern SAP training platform featuring automated AI-assisted content publishing pipelines."
problem: "Manual creation and publishing of specialized SAP technical training articles is slow and resource-intensive for educational creators."
solution: "Built a production-grade SAP training web platform using Next.js 15 App Router, coupled with a self-hosted n8n automation workflow that generates, reviews, and deploys technical MDX blog posts."
architecture: "Next.js 15 App Router static generation for high-speed page loads, backed by n8n workflow triggers and GitHub Actions CI/CD preview deployments."
challenges: "Automating structured MDX document creation while enforcing strict SEO schema metadata (Schema.org, dynamic sitemaps, robots.txt)."
lessonsLearned: "Decoupling content generation into n8n workflows guarantees continuous publication without bloat in the main codebase."
futureImprovements: "Adding an interactive SAP module quiz bot powered by custom RAG knowledge bases."
---
ERP Academy delivers high-performance SAP training content powered by automated content pipelines. Engineered to achieve 95+ Lighthouse scores across all metrics.
```

Enrich `content/projects/event-sarathi.md`:
```markdown
---
title: "Event Sarathi – Event Vendor Marketplace"
subtitle: "Marketplace connecting vendors with event organizers"
category: "SaaS"
featured: true
order: 3
liveUrl: "https://www.eventsarthi.com/"
githubUrl: "https://github.com/Nikhil-Nishad"
techStack: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "SEO"]
metrics: "1st Prize Ideathon & 60% Boost in Organic Traffic"
overview: "Event Sarathi is a comprehensive wedding and event vendor marketplace connecting event planners with verified service providers."
problem: "Event hosts in regional markets struggle to find transparent vendor pricing and verified service reviews."
solution: "Developed a full-stack MERN marketplace platform featuring vendor catalog onboarding, lead inquiry forms, and targeted SEO content strategies."
architecture: "React.js frontend single-page application with Express.js REST APIs and MongoDB database schemas for vendor profiles and customer leads."
challenges: "Optimizing organic search visibility against established market competitors."
lessonsLearned: "Implementing structured schema metadata and Google Search Console tracking generated a 60% increase in organic traffic within 90 days."
futureImprovements: "Integrating instant WhatsApp lead notification bots for vendors upon customer inquiry."
---
Event Sarathi won 1st Prize at the Inter-University Ideathon 2024 among 20+ competing teams, onboarding over 20+ vendors and driving substantial organic growth.
```

Enrich `content/projects/ai-ocr-platform.md`:
```markdown
---
title: "AI OCR Document Processing Platform"
subtitle: "Intelligent document data extraction & JSON parsing"
category: "AI & Automation"
featured: true
order: 4
githubUrl: "https://github.com/Nikhil-Nishad"
techStack: ["Python", "Node.js", "OCR Engine", "LLM Parsing", "MongoDB"]
metrics: "Structured JSON Output Parsing"
overview: "An enterprise document intelligence POC designed to extract key tabular data from invoices and receipts."
problem: "Manual data entry from client invoices and receipts is error-prone and time-consuming."
solution: "Engineered an intelligent OCR extraction pipeline that combines computer vision text extraction with LLM post-processing to output validated JSON schemas."
architecture: "Python OCR engine API combined with Node.js backend processing queues and MongoDB document storage."
challenges: "Handling low-contrast document scans and varied invoice layouts."
lessonsLearned: "Using LLMs as a secondary parsing layer after raw OCR text extraction dramatically improves structured field accuracy."
futureImprovements: "Supporting multi-page PDF batch processing with automated validation webhooks."
---
Developed as a high-accuracy client proof-of-concept, transforming unstructured document scans into standardized JSON data for enterprise business applications.
```

- [ ] **Step 5: Update lib/content.ts to export new interfaces & helpers**

Update `lib/content.ts` to include:
```typescript
export interface CurrentlyBuildingItem {
  id: string;
  title: string;
  status: string;
  description: string;
  techStack: string[];
}

export interface PhilosophyItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  featured: boolean;
  order: number;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
  metrics?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  challenges?: string;
  lessonsLearned?: string;
  futureImprovements?: string;
  content: string;
}

// Add getCurrentlyBuilding(), getPhilosophy(), and getProjectBySlug(slug)
```

- [ ] **Step 6: Verify build/type check**

Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 7: Commit**

```bash
git add content/ lib/content.ts
git commit -m "feat: enrich project case studies and add currently-building & philosophy content models"
```

---

### Task 2: Build Upgrade Components (Hero, CurrentlyBuilding, Philosophy, RecruiterBadge)

**Files:**
- Modify: `features/hero/HeroSection.tsx`
- Create: `features/building/CurrentlyBuildingSection.tsx`
- Create: `features/philosophy/PhilosophySection.tsx`
- Modify: `components/layout/Navbar.tsx`

**Interfaces:**
- Consumes: Enriched content data and Motion animations.
- Produces: Upgraded storytelling Hero, Currently Building, and Philosophy UI sections.

- [ ] **Step 1: Upgrade features/hero/HeroSection.tsx with Version 2.1 specs**

Key updates in `HeroSection.tsx`:
- Headline: *"Building intelligent products for real-world problems."*
- Subtitle: *"AI Engineer focused on LLMs, Agentic AI, OCR, Automation, and scalable full-stack applications."*
- Highlight Stat Pills (Current Role, 1+ Year Experience, Research Publication, Ideathon Winner).
- Glowing Status Badge ("Open to High-Impact Roles & AI Engineering").
- Glass container profile card with subtle floating animation and glowing border.

- [ ] **Step 2: Create features/building/CurrentlyBuildingSection.tsx**

Renders active work items (Portfolio v2.1, Elevate Fitness v2, AI Job Copilot) in sleek glass cards with glowing status indicators.

- [ ] **Step 3: Create features/philosophy/PhilosophySection.tsx**

Renders the 4 engineering principles (AI-First Mindset, Performance & Speed, Scalable Architecture, Accessibility & Mobile First) with Lucide icons and hover elevation.

- [ ] **Step 4: Commit Upgraded Components**

```bash
git add features/ components/
git commit -m "feat: implement upgraded storytelling Hero, Currently Building, and Philosophy sections"
```

---

### Task 3: Create Dynamic Project Case Study Pages (`app/projects/[slug]/page.tsx`)

**Files:**
- Create: `app/projects/[slug]/page.tsx`

**Interfaces:**
- Consumes: `getProjectBySlug(slug)` and `getProjects()` for `generateStaticParams()`.
- Produces: Individual case study page routes (`/projects/elevate-fitness`, `/projects/erp-academy`, `/projects/event-sarathi`, `/projects/ai-ocr-platform`).

- [ ] **Step 1: Write app/projects/[slug]/page.tsx**

```tsx
import React from 'react';
import { notFound } from 'next/navigation';
import { getProjects, getProjectBySlug, getProfile } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CursorGlow } from '@/components/layout/CursorGlow';
import { ArrowLeft, ExternalLink, Github, Sparkles, CheckCircle2, Cpu, Wrench, Lightbulb, Rocket } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const profile = getProfile();

  if (!project) {
    notFound();
  }

  return (
    <main className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen">
      <CursorGlow />
      <Navbar resumeUrl={profile.resume} />

      <article className="pt-32 pb-24">
        <Container className="max-w-4xl space-y-12">
          {/* Back Button */}
          <Link href="/#projects">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
          </Link>

          {/* Case Study Header */}
          <div className="space-y-4 border-b border-white/10 pb-8">
            <div className="flex items-center gap-3">
              <Badge variant="accent">{project.category}</Badge>
              {project.metrics && (
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {project.metrics}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gradient">
              {project.title}
            </h1>

            <p className="text-[#A1A1AA] text-lg leading-relaxed">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="md">
                    <ExternalLink className="w-4 h-4" />
                    Visit Live Product
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="md">
                    <Github className="w-4 h-4" />
                    Source Code
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="glass-card rounded-2xl p-6 space-y-3">
            <h3 className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="default" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Structured Case Study Sections */}
          <div className="space-y-10">
            {project.overview && (
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  Executive Overview
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed text-base">{project.overview}</p>
              </section>
            )}

            {project.problem && (
              <section className="glass-card rounded-2xl p-6 space-y-3 border-l-4 border-l-red-500">
                <h2 className="text-xl font-bold text-white">The Problem</h2>
                <p className="text-[#A1A1AA] leading-relaxed text-sm">{project.problem}</p>
              </section>
            )}

            {project.solution && (
              <section className="glass-card rounded-2xl p-6 space-y-3 border-l-4 border-l-emerald-500">
                <h2 className="text-xl font-bold text-white">The Solution</h2>
                <p className="text-[#A1A1AA] leading-relaxed text-sm">{project.solution}</p>
              </section>
            )}

            {project.architecture && (
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-indigo-400" />
                  System Architecture
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed text-base">{project.architecture}</p>
              </section>
            )}

            {project.challenges && (
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-amber-400" />
                  Engineering Challenges
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed text-base">{project.challenges}</p>
              </section>
            )}

            {project.lessonsLearned && (
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  Key Lessons Learned
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed text-base">{project.lessonsLearned}</p>
              </section>
            )}

            {project.futureImprovements && (
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-purple-400" />
                  Future Improvements Roadmap
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed text-base">{project.futureImprovements}</p>
              </section>
            )}
          </div>
        </Container>
      </article>

      <Footer github={profile.github} linkedin={profile.linkedin} email={profile.email} />
    </main>
  );
}
```

- [ ] **Step 2: Update ProjectsSection.tsx to include links to Case Studies**

Add a "Case Study" button linking to `/projects/${project.slug}` on each card.

- [ ] **Step 3: Verify build/type check**

Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 4: Commit**

```bash
git add app/projects/ features/projects/
git commit -m "feat: implement dynamic project case study pages (/projects/[slug])"
```

---

### Task 4: Re-assemble Main Page & Run Verification

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Assembles: Hero, About, Experience, Projects, CurrentlyBuilding, Philosophy, Skills, Achievements, Contact into main page.

- [ ] **Step 1: Update app/page.tsx with new sections**

```tsx
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CursorGlow } from '@/components/layout/CursorGlow';
import { HeroSection } from '@/features/hero/HeroSection';
import { AboutSection } from '@/features/about/AboutSection';
import { ExperienceSection } from '@/features/experience/ExperienceSection';
import { ProjectsSection } from '@/features/projects/ProjectsSection';
import { CurrentlyBuildingSection } from '@/features/building/CurrentlyBuildingSection';
import { PhilosophySection } from '@/features/philosophy/PhilosophySection';
import { SkillsSection } from '@/features/skills/SkillsSection';
import { AchievementsSection } from '@/features/achievements/AchievementsSection';
import { ContactSection } from '@/features/contact/ContactSection';
import {
  getProfile,
  getExperience,
  getSkills,
  getAchievements,
  getProjects,
  getCurrentlyBuilding,
  getPhilosophy,
} from '@/lib/content';

export default function Home() {
  const profile = getProfile();
  const experience = getExperience();
  const skills = getSkills();
  const achievements = getAchievements();
  const projects = getProjects();
  const building = getCurrentlyBuilding();
  const philosophy = getPhilosophy();

  return (
    <main className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <CursorGlow />
      <Navbar resumeUrl={profile.resume} />
      <HeroSection profile={profile} />
      <AboutSection profile={profile} />
      <ExperienceSection experience={experience} />
      <ProjectsSection projects={projects} />
      <CurrentlyBuildingSection building={building} />
      <PhilosophySection philosophy={philosophy} />
      <SkillsSection skills={skills} />
      <AchievementsSection achievements={achievements} />
      <ContactSection profile={profile} />
      <Footer github={profile.github} linkedin={profile.linkedin} email={profile.email} />
    </main>
  );
}
```

- [ ] **Step 2: Run TypeScript compiler check**

Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 3: Run Next.js production build**

Run: `pnpm run build`
Expected: Successful build generating static routes for homepage and all project case study pages (`/projects/elevate-fitness`, `/projects/erp-academy`, etc.).

- [ ] **Step 4: Commit & Push to v2.0 branch**

```bash
git add .
git commit -m "feat: complete Portfolio v2.1 with full styling fix, storytelling hero, case study pages, and active building sections"
git push origin v2.0
```
