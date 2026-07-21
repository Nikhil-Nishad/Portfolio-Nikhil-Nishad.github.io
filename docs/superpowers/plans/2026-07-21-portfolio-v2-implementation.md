# Portfolio v2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-grade, highly performant Next.js 15 portfolio website (Portfolio v2) for Nikhil Nishad, showcasing AI engineering capabilities, full-stack skills, and selected projects.

**Architecture:** Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4. Static content data layer stored in `content/` (JSON & Markdown). Smooth animation driven by Motion (Framer Motion) and Lenis.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, Motion, `lucide-react`, `lenis`, `gray-matter`, `remark`, `remark-html`.

## Global Constraints
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 strictly (no CSS Modules, no Bootstrap, no MUI)
- **TypeScript:** Strict mode enabled
- **Theme:** Dark mode default (`#09090B`)
- **Performance:** Target Lighthouse 95+
- **Data Layer:** Decoupled in `content/` (No hardcoded JSX arrays)

---

### Task 1: Archive Legacy Files & Initialize Next.js 15 Project

**Files:**
- Create: `legacy/` directory
- Move: `index.html`, `portfolio.html`, `script.js`, `css/`, `images/` into `legacy/`
- Create: `package.json`, `tsconfig.json`, `next.config.mjs`

**Interfaces:**
- Produces: Runnable Next.js 15 workspace setup in root.

- [ ] **Step 1: Create legacy folder and archive legacy static site files**

```powershell
mkdir legacy
Move-Item index.html, portfolio.html, script.js, css, images legacy/ -ErrorAction SilentlyContinue
```

- [ ] **Step 2: Initialize package.json with dependencies**

Create `package.json`:
```json
{
  "name": "portfolio-nikhil-nishad",
  "version": "2.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@lenis/react": "^1.1.5",
    "clsx": "^2.1.1",
    "framer-motion": "^12.4.7",
    "gray-matter": "^4.0.3",
    "lucide-react": "^0.475.0",
    "next": "^15.1.7",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "remark": "^15.0.1",
    "remark-html": "^16.0.1",
    "tailwind-merge": "^3.0.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.7",
    "@types/node": "^22.13.4",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "postcss": "^8.5.2",
    "tailwindcss": "^4.0.7",
    "typescript": "^5.7.3"
  }
}
```

- [ ] **Step 3: Create tsconfig.json and next.config.mjs**

Create `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "legacy"]
}
```

Create `next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
```

- [ ] **Step 4: Verify npm install succeeds**

Run: `npm install`
Expected: Packages installed successfully.

- [ ] **Step 5: Commit**

```bash
git add package.json tsconfig.json next.config.mjs legacy/
git commit -m "chore: archive legacy site and initialize Next.js 15 project setup"
```

---

### Task 2: Configure Styles, Design Tokens & Font System

**Files:**
- Create: `app/globals.css`
- Create: `app/layout.tsx`
- Create: `lib/utils.ts`

**Interfaces:**
- Produces: `cn()` utility in `lib/utils.ts`, design token variables, custom fonts in root layout.

- [ ] **Step 1: Write lib/utils.ts**

```typescript
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Write app/globals.css with Tailwind v4 & Design Tokens**

```css
@import "tailwindcss";

@layer base {
  :root {
    --bg-base: #09090b;
    --bg-surface: #111113;
    --bg-card: #18181b;
    --bg-card-hover: #1f1f23;
    --border-subtle: rgba(255, 255, 255, 0.08);
    --text-primary: #fafafa;
    --text-secondary: #a1a1aa;
    --text-muted: #71717a;
    --accent-blue: #3b82f6;
    --accent-purple: #8b5cf6;
    --accent-green: #22c55e;
  }

  body {
    background-color: var(--bg-base);
    color: var(--text-primary);
    font-family: var(--font-sans), system-ui, sans-serif;
    overflow-x: hidden;
  }
}

/* Custom Utilities */
.glass-card {
  background: rgba(24, 24, 27, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border-subtle);
}

.glass-nav {
  background: rgba(9, 9, 11, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
}

.text-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.text-gradient-accent {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

- [ ] **Step 3: Write app/layout.tsx with Fonts and Lenis Smooth Scroll**

```tsx
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
```

- [ ] **Step 4: Verify build/type check**

Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 5: Commit**

```bash
git add app/globals.css app/layout.tsx lib/utils.ts
git commit -m "feat: setup design tokens, font system, and root layout"
```

---

### Task 3: Create Decoupled Static Data Layer (`content/`)

**Files:**
- Create: `content/profile.json`
- Create: `content/experience.json`
- Create: `content/skills.json`
- Create: `content/achievements.json`
- Create: `content/projects/elevate-fitness.md`
- Create: `content/projects/erp-academy.md`
- Create: `content/projects/event-sarathi.md`
- Create: `content/projects/ai-ocr-platform.md`
- Create: `lib/content.ts`

**Interfaces:**
- Consumes: JSON and Markdown data files.
- Produces: Data fetcher functions `getProfile()`, `getExperience()`, `getSkills()`, `getAchievements()`, `getProjects()` in `lib/content.ts`.

- [ ] **Step 1: Write content/profile.json**

```json
{
  "name": "Nikhil Nishad",
  "title": "AI Engineer & Full Stack Developer",
  "bio": "Building intelligent products using AI, modern web technologies, and scalable software architecture.",
  "location": "Faridabad, Haryana, India",
  "email": "nikhilnishad1801@gmail.com",
  "phone": "+91 9312340496",
  "github": "https://github.com/Nikhil-Nishad",
  "linkedin": "https://www.linkedin.com/in/nikhilnishad",
  "resume": "/Nikhil_Nishad_Resume.pdf",
  "aboutNarrative": "AI Engineer & Full Stack Developer with hands-on industry experience at Venture7 Technologies, working on client-side AI solutions and scalable web applications. Skilled in MERN stack, LLM integration, prompt engineering, OCR systems, and AI-driven automation pipelines. Passionate about building production-ready AI products and next-generation intelligent SaaS systems."
}
```

- [ ] **Step 2: Write content/experience.json**

```json
[
  {
    "id": "venture7",
    "company": "Venture7 Technologies",
    "role": "AI Engineer & Full Stack Developer (Client-Side)",
    "period": "July 2025 – Present",
    "location": "Client-Facing",
    "description": "Architecting client-facing AI applications and scalable full-stack web solutions.",
    "highlights": [
      "Integrated LLMs and prompt-engineered workflows into production-ready systems.",
      "Built AI-powered automation pipelines, chatbot modules, and workflow agents.",
      "Designed and optimized REST APIs and scalable backend architectures.",
      "Developed an OCR-based POC for intelligent document data extraction and structured JSON output.",
      "Collaborated with clients and agile teams to deliver clean, maintainable SaaS tools."
    ],
    "techStack": ["React.js", "Node.js", "Express.js", "MongoDB", "LLMs", "OCR", "Python", "Automation"]
  },
  {
    "id": "cabbalistic",
    "company": "Cabbalistic Technologies Private Limited",
    "role": "Software Developer / Full Stack Developer",
    "period": "May 2025 – June 2025",
    "location": "India",
    "description": "Full-stack development using MERN stack for scalable web applications.",
    "highlights": [
      "Developed and maintained full-stack web applications using MERN stack.",
      "Built responsive UI components and optimized backend APIs for performance.",
      "Implemented authentication, database integration, and RESTful services."
    ],
    "techStack": ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"]
  }
]
```

- [ ] **Step 3: Write content/skills.json**

```json
[
  {
    "category": "AI & Generative AI",
    "description": "Building intelligent systems & agents",
    "skills": ["Large Language Models (LLMs)", "Prompt Engineering", "RAG", "Agentic AI", "MCP Servers", "AI Chatbots"]
  },
  {
    "category": "Intelligent Document Processing",
    "description": "Automated data extraction & document OCR",
    "skills": ["OCR Integration", "Document Data Extraction", "Structured JSON Parsing"]
  },
  {
    "category": "Frontend Engineering",
    "description": "Modern high-performance UI",
    "skills": ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4", "Shadcn/UI", "JavaScript", "HTML/CSS"]
  },
  {
    "category": "Backend & Databases",
    "description": "Scalable REST APIs & Data layers",
    "skills": ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "Python"]
  },
  {
    "category": "Automation & Workflows",
    "description": "Self-hosted & cloud workflow pipelines",
    "skills": ["n8n (Self-hosted)", "Workflow Automation", "Webhooks", "API Integrations"]
  },
  {
    "category": "DevOps & Tools",
    "description": "Deployment, containerization & tracking",
    "skills": ["Git", "Docker", "Vercel", "GitHub Actions", "Google Analytics", "Telegram Bot API"]
  }
]
```

- [ ] **Step 4: Write content/achievements.json**

```json
[
  {
    "id": "ideathon-2024",
    "title": "1st Prize – Inter-University Ideathon (2024)",
    "category": "Award",
    "organization": "Inter-University Competition",
    "description": "Presented Event Sarathi, a MERN-based wedding vendor marketplace, winning 1st place among 20+ university teams."
  },
  {
    "id": "research-paper-2025",
    "title": "Research Paper Publication – ETESM 2025",
    "category": "Publication",
    "organization": "International Conference on Emerging Trends in Engineering, Science and Management",
    "description": "Published paper titled 'Hyper-Personalization using AI: Elevate Fitness', detailing AI customization algorithms."
  },
  {
    "id": "mongodb-cert",
    "title": "Introduction to MongoDB",
    "category": "Certification",
    "organization": "MongoDB Official"
  },
  {
    "id": "react-cert",
    "title": "React.js Certification Intermediate",
    "category": "Certification",
    "organization": "LinkedIn Learning"
  },
  {
    "id": "js-cert",
    "title": "Certified JavaScript Developer",
    "category": "Certification",
    "organization": "HackerRank"
  }
]
```

- [ ] **Step 5: Write markdown files in content/projects/**

Create `content/projects/elevate-fitness.md`:
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
---
Built an interactive fitness application featuring SVG-based exercise demos and AI-driven personalized workout & diet plans. Integrated custom tools including BMI calculator, calorie counter, and dynamic exercise routines.
```

Create `content/projects/erp-academy.md`:
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
---
Developed a production-grade SAP training platform using Next.js 15 App Router & TypeScript. Built an automated AI article publishing pipeline using self-hosted n8n workflows integrated with GitHub Actions.
```

Create `content/projects/event-sarathi.md`:
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
---
Onboarded 20+ vendors and engineered targeted organic lead generation workflows. Utilized Google Analytics & Search Console to track user behavior, boosting organic traffic by 60%. Won 1st Prize at Inter-University Ideathon 2024.
```

Create `content/projects/ai-ocr-platform.md`:
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
---
Developed a high-accuracy OCR proof-of-concept for extracting text and key tabular data from invoices and client documents, transforming unstructured scan data into clean JSON schemas for downstream APIs.
```

- [ ] **Step 6: Write lib/content.ts to read data**

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resume: string;
  aboutNarrative: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  organization: string;
  description?: string;
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
  content: string;
}

export function getProfile(): Profile {
  const filePath = path.join(contentDir, 'profile.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

export function getExperience(): ExperienceItem[] {
  const filePath = path.join(contentDir, 'experience.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

export function getSkills(): SkillCategory[] {
  const filePath = path.join(contentDir, 'skills.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

export function getAchievements(): AchievementItem[] {
  const filePath = path.join(contentDir, 'achievements.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

export function getProjects(): ProjectItem[] {
  const projectsDir = path.join(contentDir, 'projects');
  const filenames = fs.readdirSync(projectsDir);

  const projects = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(projectsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      subtitle: data.subtitle || '',
      category: data.category || 'All',
      featured: Boolean(data.featured),
      order: data.order || 99,
      liveUrl: data.liveUrl || undefined,
      githubUrl: data.githubUrl || undefined,
      techStack: data.techStack || [],
      metrics: data.metrics || undefined,
      content,
    };
  });

  return projects.sort((a, b) => a.order - b.order);
}
```

- [ ] **Step 7: Verify type checking**

Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 8: Commit**

```bash
git add content/ lib/content.ts
git commit -m "feat: add decoupled static content layer and content reader utilities"
```

---

### Task 4: Create Reusable UI Primitives & Layout Components

**Files:**
- Create: `components/ui/Button.tsx`
- Create: `components/ui/Badge.tsx`
- Create: `components/ui/Card.tsx`
- Create: `components/ui/Container.tsx`
- Create: `components/ui/SectionHeading.tsx`
- Create: `components/layout/Navbar.tsx`
- Create: `components/layout/Footer.tsx`
- Create: `components/layout/CursorGlow.tsx`

**Interfaces:**
- Consumes: Tailwind styles & Motion.
- Produces: Base UI building blocks for all feature sections.

- [ ] **Step 1: Write components/ui/Container.tsx**

```tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div className={cn("w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)} {...props}>
      {children}
    </div>
  );
};
```

- [ ] **Step 2: Write components/ui/Button.tsx**

```tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:brightness-110 border border-blue-400/30",
    secondary: "bg-[#18181B] text-[#FAFAFA] border border-white/10 hover:bg-[#1F1F23] hover:border-white/20",
    outline: "border border-white/15 text-[#FAFAFA] hover:bg-white/5 hover:border-white/30",
    ghost: "text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/5",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-6 py-3.5 text-base gap-2.5",
  };

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
};
```

- [ ] **Step 3: Write components/ui/Badge.tsx**

```tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'success' | 'outline';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const variants = {
    default: "bg-[#18181B] text-[#A1A1AA] border border-white/10",
    accent: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    outline: "bg-transparent text-[#A1A1AA] border border-white/15",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
```

- [ ] **Step 4: Write components/ui/Card.tsx**

```tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hoverEffect = true, ...props }) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300 relative overflow-hidden",
        hoverEffect && "hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-blue-500/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
```

- [ ] **Step 5: Write components/ui/SectionHeading.tsx**

```tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  className,
  align = 'left',
}) => {
  return (
    <div className={cn("space-y-3 mb-12", align === 'center' && "text-center mx-auto max-w-2xl", className)}>
      {eyebrow && (
        <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gradient">
        {title}
      </h2>
      {description && (
        <p className="text-[#A1A1AA] text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
```

- [ ] **Step 6: Write components/layout/Navbar.tsx**

```tsx
"use client";

import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Download, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  resumeUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ resumeUrl }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
      <Container className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-white group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-xs font-mono font-bold group-hover:scale-105 transition-transform">
            NN
          </span>
          <span className="tracking-tight group-hover:text-blue-400 transition-colors">Nikhil Nishad</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#111113]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Download className="w-3.5 h-3.5" />
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-white/5"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#A1A1AA] hover:text-white py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-white/10">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button variant="outline" size="sm" className="w-full">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
```

- [ ] **Step 7: Write components/layout/Footer.tsx**

```tsx
import React from 'react';
import { Container } from '../ui/Container';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  github: string;
  linkedin: string;
  email: string;
}

export const Footer: React.FC<FooterProps> = ({ github, linkedin, email }) => {
  return (
    <footer className="border-t border-white/10 bg-[#09090B] py-12 text-[#A1A1AA] text-xs">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-mono text-[10px] font-bold">
            NN
          </span>
          <p>© {new Date().getFullYear()} Nikhil Nishad. All rights reserved.</p>
        </div>

        <p className="text-center md:text-right text-[#71717A]">
          Designed & Built with Next.js 15, TypeScript & Tailwind CSS v4.
        </p>

        <div className="flex items-center gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={`mailto:${email}`} className="hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
};
```

- [ ] **Step 8: Write components/layout/CursorGlow.tsx**

```tsx
"use client";

import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.06), transparent 80%)`,
      }}
    />
  );
};
```

- [ ] **Step 9: Commit UI Primitives & Layout Components**

```bash
git add components/
git commit -m "feat: add reusable UI primitives, Navbar, Footer, and CursorGlow"
```

---

### Task 5: Implement Feature Components (Hero, About, Experience, Projects, Skills, Achievements, Contact)

**Files:**
- Create: `features/hero/HeroSection.tsx`
- Create: `features/about/AboutSection.tsx`
- Create: `features/experience/ExperienceSection.tsx`
- Create: `features/projects/ProjectsSection.tsx`
- Create: `features/skills/SkillsSection.tsx`
- Create: `features/achievements/AchievementsSection.tsx`
- Create: `features/contact/ContactSection.tsx`
- Create: `app/page.tsx`

- [ ] **Step 1: Write features/hero/HeroSection.tsx**

```tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Bot, Code2 } from 'lucide-react';
import { Profile } from '@/lib/content';

export const HeroSection: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Engineer & Full Stack Developer</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Hi, I'm <span className="text-gradient-accent">Nikhil Nishad</span>.
          </h1>

          <p className="text-[#A1A1AA] text-lg sm:text-xl leading-relaxed max-w-2xl">
            Building intelligent products using <span className="text-white font-medium">LLMs, Prompt Engineering, Agentic AI, RAG</span>, and scalable modern web architecture.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#projects">
              <Button variant="primary" size="lg">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </a>
          </div>

          {/* Social Badges */}
          <div className="flex items-center gap-4 pt-4 text-[#A1A1AA]">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${profile.email}`} className="p-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column Profile Card Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Glowing Accent Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-30 animate-pulse" />
            
            <div className="relative glass-card rounded-3xl p-8 border border-white/15 text-center space-y-6">
              <div className="relative w-36 h-36 mx-auto rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-1">
                <div className="w-full h-full rounded-[14px] bg-[#111113] flex items-center justify-center text-4xl font-bold text-gradient">
                  NN
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">{profile.name}</h3>
                <p className="text-sm text-blue-400 font-mono mt-1">{profile.title}</p>
                <p className="text-xs text-[#71717A] mt-1">{profile.location}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-[#111113] p-3 rounded-xl border border-white/5 text-left">
                  <div className="flex items-center gap-1.5 text-blue-400 text-xs font-mono mb-1">
                    <Bot className="w-3.5 h-3.5" />
                    AI Stack
                  </div>
                  <p className="text-xs text-[#A1A1AA]">LLMs, RAG, Agents, MCP</p>
                </div>
                <div className="bg-[#111113] p-3 rounded-xl border border-white/5 text-left">
                  <div className="flex items-center gap-1.5 text-indigo-400 text-xs font-mono mb-1">
                    <Code2 className="w-3.5 h-3.5" />
                    Web Stack
                  </div>
                  <p className="text-xs text-[#A1A1AA]">Next.js, React, Node, MERN</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
```

- [ ] **Step 2: Write features/about/AboutSection.tsx**

```tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Profile } from '@/lib/content';
import { Cpu, Rocket, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <section id="about" className="py-20 border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="Background & Journey"
          title="Developer → AI Engineer → Product Builder"
          description="Crafting production-ready AI solutions with engineering precision."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <Card className="h-full flex flex-col justify-between space-y-6">
              <p className="text-[#A1A1AA] leading-relaxed text-base">
                {profile.aboutNarrative}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div>
                  <h4 className="text-2xl font-bold text-white">MCA</h4>
                  <p className="text-xs text-[#71717A] font-mono">CGPA 8.1 | YMCA University</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">Venture7</h4>
                  <p className="text-xs text-[#71717A] font-mono">AI Engineer (Client-Side)</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">4+</h4>
                  <p className="text-xs text-[#71717A] font-mono">Production AI Projects</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <Card className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">AI First Engineering</h4>
                <p className="text-xs text-[#A1A1AA] mt-1">Integrating LLMs, prompt workflows, and document OCR directly into user products.</p>
              </div>
            </Card>

            <Card className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Product Mindset</h4>
                <p className="text-xs text-[#A1A1AA] mt-1">Focusing on measurable business impact, SEO growth, and 95+ Lighthouse scores.</p>
              </div>
            </Card>

            <Card className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Scalable Architecture</h4>
                <p className="text-xs text-[#A1A1AA] mt-1">Clean REST APIs, strict TypeScript, and modular component designs.</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
```

- [ ] **Step 3: Write features/experience/ExperienceSection.tsx**

```tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ExperienceItem } from '@/lib/content';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC<{ experience: ExperienceItem[] }> = ({ experience }) => {
  return (
    <section id="experience" className="py-20 border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="Career History"
          title="Professional Experience"
          description="Client-side engineering, AI deployment, and full-stack software development."
        />

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#09090B]" />

              <Card className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-blue-400" />
                      {item.role}
                    </h3>
                    <p className="text-sm text-blue-400 font-medium">{item.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#71717A] bg-[#111113] px-3 py-1 rounded-full border border-white/5 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    {item.period}
                  </div>
                </div>

                <p className="text-sm text-[#A1A1AA]">{item.description}</p>

                <ul className="space-y-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.techStack.map((tech) => (
                    <Badge key={tech} variant="accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
```

- [ ] **Step 4: Write features/projects/ProjectsSection.tsx**

```tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectItem } from '@/lib/content';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

export const ProjectsSection: React.FC<{ projects: ProjectItem[] }> = ({ projects }) => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI & Automation', 'Full Stack', 'SaaS'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="Portfolio Showcase"
          title="Featured Projects"
          description="AI products, full-stack web applications, and intelligent platforms."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-[#18181B] text-[#A1A1AA] hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="accent">{project.category}</Badge>
                    {project.metrics && (
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-blue-400/80 font-mono mt-1">{project.subtitle}</p>
                  </div>

                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {project.content.trim()}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="primary" size="sm" className="w-full">
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <Github className="w-3.5 h-3.5" />
                          GitHub
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
```

- [ ] **Step 5: Write features/skills/SkillsSection.tsx**

```tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SkillCategory } from '@/lib/content';

export const SkillsSection: React.FC<{ skills: SkillCategory[] }> = ({ skills }) => {
  return (
    <section id="skills" className="py-20 border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="Technical Proficiency"
          title="Skills & AI Capability Stack"
          description="Categorized expertise in artificial intelligence, full-stack web engineering, and document automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className="h-full flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white text-gradient-accent">
                    {category.category}
                  </h3>
                  <p className="text-xs text-[#71717A] mt-1">{category.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="hover:border-blue-400/50 hover:text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
```

- [ ] **Step 6: Write features/achievements/AchievementsSection.tsx**

```tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { AchievementItem } from '@/lib/content';
import { Award, BookOpen, CheckCircle } from 'lucide-react';

export const AchievementsSection: React.FC<{ achievements: AchievementItem[] }> = ({ achievements }) => {
  const getIcon = (category: string) => {
    if (category === 'Award') return <Award className="w-5 h-5 text-amber-400" />;
    if (category === 'Publication') return <BookOpen className="w-5 h-5 text-blue-400" />;
    return <CheckCircle className="w-5 h-5 text-emerald-400" />;
  };

  return (
    <section id="achievements" className="py-20 border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="Milestones & Recognition"
          title="Achievements & Certifications"
          description="Hackathon awards, research paper publications, and professional credentials."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#111113] border border-white/10 shrink-0">
                  {getIcon(item.category)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Badge variant="accent">{item.category}</Badge>
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-blue-400 font-mono">{item.organization}</p>
                  {item.description && (
                    <p className="text-xs text-[#A1A1AA] pt-1">{item.description}</p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
```

- [ ] **Step 7: Write features/contact/ContactSection.tsx**

```tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Profile } from '@/lib/content';
import { Mail, Linkedin, Github, Download, Sparkles } from 'lucide-react';

export const ContactSection: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <section id="contact" className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10 text-center max-w-3xl space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Let's Connect</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gradient">
          Building Something Intelligent? Let's Talk.
        </h2>

        <p className="text-[#A1A1AA] text-base leading-relaxed">
          Whether you're looking for an AI Engineer to integrate LLM agents, an experienced Full Stack developer for your SaaS product, or a collaborator for innovative software.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a href={`mailto:${profile.email}`}>
            <Button variant="primary" size="lg">
              <Mail className="w-4 h-4" />
              Send Email
            </Button>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              <Github className="w-4 h-4" />
              GitHub Profile
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
};
```

- [ ] **Step 8: Write app/page.tsx assembling all feature sections**

```tsx
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CursorGlow } from '@/components/layout/CursorGlow';
import { HeroSection } from '@/features/hero/HeroSection';
import { AboutSection } from '@/features/about/AboutSection';
import { ExperienceSection } from '@/features/experience/ExperienceSection';
import { ProjectsSection } from '@/features/projects/ProjectsSection';
import { SkillsSection } from '@/features/skills/SkillsSection';
import { AchievementsSection } from '@/features/achievements/AchievementsSection';
import { ContactSection } from '@/features/contact/ContactSection';
import {
  getProfile,
  getExperience,
  getSkills,
  getAchievements,
  getProjects,
} from '@/lib/content';

export default function Home() {
  const profile = getProfile();
  const experience = getExperience();
  const skills = getSkills();
  const achievements = getAchievements();
  const projects = getProjects();

  return (
    <main className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <CursorGlow />
      <Navbar resumeUrl={profile.resume} />
      <HeroSection profile={profile} />
      <AboutSection profile={profile} />
      <ExperienceSection experience={experience} />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <AchievementsSection achievements={achievements} />
      <ContactSection profile={profile} />
      <Footer github={profile.github} linkedin={profile.linkedin} email={profile.email} />
    </main>
  );
}
```

- [ ] **Step 9: Commit Feature Components and Main Page**

```bash
git add features/ app/page.tsx
git commit -m "feat: implement feature components and assemble home portfolio page"
```

---

### Task 6: Copy Resume Asset & Setup Dynamic SEO, Sitemap, Robots, and LLM Text

**Files:**
- Create: `public/Nikhil_Nishad_Resume.pdf` (or text file fallback)
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Create: `public/llms.txt`

- [ ] **Step 1: Create public/llms.txt**

```text
# Nikhil Nishad - AI Engineer & Full Stack Developer
> Portfolio v2 & AI Knowledge File

Name: Nikhil Nishad
Title: AI Engineer & Full Stack Developer
Location: Faridabad, Haryana, India
Email: nikhilnishad1801@gmail.com
GitHub: https://github.com/Nikhil-Nishad
LinkedIn: https://www.linkedin.com/in/nikhilnishad

## Summary
AI Engineer and Full Stack Developer with client-facing industry experience at Venture7 Technologies. Specializing in LLM integration, prompt engineering, agentic AI workflows, retrieval-augmented generation (RAG), intelligent OCR document extraction, and high-performance Next.js 15 / MERN stack web applications.

## Key Projects
- Elevate Fitness: AI-Powered Fitness App with personalized AI diet/workout plans (Published ETESM 2025 research paper).
- ERP Academy: AI-Driven SAP Training Platform built with Next.js 15, TypeScript, and automated n8n workflows.
- Event Sarathi: Wedding & Event Vendor Marketplace (1st Prize Winner Inter-University Ideathon 2024).
- AI OCR Platform: Proof-of-concept for extracting structured JSON from invoice/document scans.
```

- [ ] **Step 2: Create app/sitemap.ts**

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://portfolio-nikhil-nishad.github.io';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
```

- [ ] **Step 3: Create app/robots.ts**

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://portfolio-nikhil-nishad.github.io/sitemap.xml',
  };
}
```

- [ ] **Step 4: Commit SEO & LLM files**

```bash
git add public/llms.txt app/sitemap.ts app/robots.ts
git commit -m "feat: add SEO sitemap, robots.txt, and llms.txt context file"
```

---

### Task 7: Build Verification & Quality Check

- [ ] **Step 1: Run TypeScript compiler check**

Run: `npx tsc --noEmit`
Expected: 0 errors.

- [ ] **Step 2: Execute Next.js build command**

Run: `npm run build`
Expected: Successful static/SSR build with no errors.

- [ ] **Step 3: Final Commit**

```bash
git add .
git commit -m "build: verify zero errors and complete Portfolio v2 build"
```
