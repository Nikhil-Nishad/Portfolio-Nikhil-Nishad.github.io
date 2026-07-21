# Technical Architecture

Project

Portfolio v2

Framework

Next.js 15

---

# Tech Stack

## Frontend

- Next.js 15 (App Router)
- React 19
- TypeScript
- TailwindCSS v4

---

## UI

- shadcn/ui
- Magic UI
- Aceternity UI
- React Bits
- 21st.dev Components
- Lucide Icons

---

## Animation

- Motion
- GSAP
- Lenis
- React Spring

Use the best tool for each interaction.

Avoid using all libraries everywhere.

---

## Content

- MDX
- Markdown
- Static JSON

---

## Styling

TailwindCSS only.

No CSS Modules.

No Bootstrap.

No Material UI.

---

# Folder Structure

app/

components/

features/

content/

hooks/

lib/

utils/

styles/

public/

types/

---

# Component Structure

components

Navbar

Footer

Hero

ProjectCard

Timeline

Badge

Button

TechStack

ExperienceCard

SectionHeading

ThemeToggle

BackgroundEffects

CursorGlow

---

# Feature Modules

features/

about/

experience/

projects/

skills/

achievements/

contact/

Each feature owns

components

hooks

types

data

---

# Content Structure

content/

projects/

experience/

skills/

achievements/

blog/

future/

Every project stored as markdown.

Avoid hardcoded JSX.

---

# Assets

public/

images

icons

logos

resume.pdf

project thumbnails

og images

profile image

---

# State Management

Local State

React

Global

Minimal

Use Context only if required.

No Redux.

---

# Routing

/

Main Portfolio

/blog

Future

/projects

Future

/resume

PDF

/robots.txt

/sitemap.xml

Automatically generated.

---

# Theme

Dark

Default

Light

Optional

Use next-themes.

---

# SEO

Metadata API

Open Graph

Twitter Cards

Schema.org

Canonical URLs

Dynamic Sitemap

Robots.txt

LLM.txt

RSS (Future)

---

# Performance

Target

Lighthouse 95+

Optimize

Images

Fonts

JS Bundle

Animations

Lazy Loading

Code Splitting

Dynamic Imports

---

# Image Strategy

Use next/image

Formats

WebP

AVIF

Priority

Hero Image

Lazy

Everything else

---

# Fonts

Geist

Inter

JetBrains Mono

Use next/font

---

# Animations

Hero

Motion

Scroll

GSAP

Smooth Scroll

Lenis

Physics

React Spring

Avoid duplicate animation responsibilities.

---

# Icons

Lucide

Simple Icons

Avoid heavy icon libraries.

---

# Deployment

Platform

Vercel

Version Control

GitHub

Environment Variables

Vercel Environment

---

# Analytics

Vercel Analytics

Speed Insights

Google Analytics (Optional)

Plausible (Optional)

---

# Code Standards

TypeScript Strict

ESLint

Prettier

Absolute Imports

Reusable Components

No duplicated code

Server Components first

Client Components only when necessary

---

# Naming Convention

Components

PascalCase

Hooks

camelCase

Folders

kebab-case

Files

PascalCase

Types

PascalCase

Constants

UPPER_CASE

---

# Data Strategy

Projects

Markdown

Experience

JSON

Skills

JSON

Achievements

Markdown

No hardcoded arrays inside components.

---

# Security

No secrets in client.

Validate external links.

Sanitize markdown.

Use rel="noopener noreferrer"

---

# Git Strategy

main

Production

develop

Development

feature/*

Feature branches

---

# CI/CD

GitHub

↓

Lint

↓

Type Check

↓

Build

↓

Deploy Preview

↓

Production

---

# Future Integrations

MDX Blog

AI Chat Assistant

GitHub Activity

Now Playing

RSS Feed

Project CMS

Newsletter

Open Source Dashboard

LeetCode Stats

GitHub Contribution Graph

Interactive Resume

Case Studies

Project Search

Command Palette

Terminal Mode

AI Playground

---

# Definition of Done

- Modular architecture
- Reusable components
- Mobile-first
- SEO optimized
- Accessible
- Fast
- Easy to extend
- Production ready
- Clean folder structure
- Excellent developer experience