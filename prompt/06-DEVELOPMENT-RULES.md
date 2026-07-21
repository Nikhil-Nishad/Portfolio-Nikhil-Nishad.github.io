# Development Rules

Project: Portfolio v2

Purpose

Maintain clean, scalable, production-quality code.

---

# General Rules

- Mobile First
- TypeScript Strict
- Component Driven
- Reusable Code
- No Duplication
- Readability over cleverness

---

# Framework

Next.js App Router

Server Components by default.

Client Components only when necessary.

---

# Styling

TailwindCSS v4 only.

Do NOT use

- Bootstrap
- CSS Modules
- Styled Components
- Material UI
- Chakra UI

---

# Components

One responsibility per component.

Keep components under ~200 lines when practical.

Prefer composition over inheritance.

---

# Folder Rules

One feature

↓

Own folder

↓

Own components

↓

Own hooks

↓

Own types

↓

Own data

---

# Naming

Components

PascalCase

Hooks

camelCase

Utilities

camelCase

Folders

kebab-case

---

# Imports

Absolute Imports

No deep relative imports.

---

# State

Local First

Context only when needed.

No Redux.

No unnecessary global state.

---

# Data

Projects

Markdown

Experience

JSON

Skills

JSON

Achievements

Markdown

Never hardcode data inside JSX.

---

# Performance

Lazy Load

Dynamic Import

Image Optimization

Code Splitting

Minimal JS

---

# Images

next/image

WebP

AVIF

Lazy Load

Priority only for Hero

---

# SEO

Metadata API

OpenGraph

Twitter Cards

Structured Data

Canonical URL

Sitemap

Robots

LLMs.txt

---

# Accessibility

Keyboard Navigation

ARIA Labels

Alt Text

Visible Focus

Reduced Motion

Color Contrast

---

# Security

No secrets in frontend.

Validate external links.

Use

rel="noopener noreferrer"

Never expose API keys.

---

# Animations

Use

Motion

GSAP

Lenis

React Spring

Do not animate everything.

Only animate meaningful interactions.

---

# Error Handling

Graceful fallback

404 Page

Error Boundary

Loading States

Empty States

---

# Code Quality

ESLint

Prettier

Strict TypeScript

No any

Meaningful comments only.

---

# Git Workflow

main

Production

develop

Development

feature/*

Feature Work

Small commits.

Clear commit messages.

---

# Deployment

GitHub

↓

Preview Deployment

↓

Review

↓

Production

---

# Testing Checklist

Desktop

Tablet

Mobile

Dark Mode

Accessibility

Performance

SEO

Cross Browser

---

# Lighthouse Targets

Performance

95+

Accessibility

100

Best Practices

100

SEO

100

---

# Browser Support

Chrome

Edge

Firefox

Safari

Latest 2 versions

---

# AI Development Rules

When generating code

- Prefer reusable components.
- Never duplicate layouts.
- Extract constants.
- Use design tokens.
- Keep files modular.
- Avoid unnecessary dependencies.
- Follow existing architecture.
- Maintain consistent naming.
- Optimize for readability.

---

# Definition of Done

✓ Clean Architecture

✓ Responsive

✓ Accessible

✓ SEO Optimized

✓ Modular

✓ Performant

✓ Reusable Components

✓ Production Ready

✓ Easy to Maintain

✓ Easy to Extend