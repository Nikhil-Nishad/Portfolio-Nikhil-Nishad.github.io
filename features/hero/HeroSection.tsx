"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Bot, Code2 } from 'lucide-react';
import { Profile } from '@/lib/content';

export const HeroSection: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background Aurora Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full aurora-blur pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full aurora-blur pointer-events-none" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text & Mobile Profile Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Mobile Profile Photo Avatar Header (Displayed on mobile/tablet view < lg) */}
          <div className="flex lg:hidden items-center gap-3.5 glass-card p-2.5 rounded-2xl border border-white/10 w-fit">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-md shadow-blue-500/20 shrink-0">
              <Image
                src="/profile.png"
                alt="Nikhil Nishad"
                width={48}
                height={48}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white font-display leading-tight">{profile.name}</h3>
              <p className="text-xs text-blue-400 font-mono mt-0.5">{profile.title}</p>
            </div>
          </div>

          {/* Status Badge */}
          {profile.status && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profile.status}</span>
            </div>
          )}

          {/* Headline & Subtitle */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-[1.1]">
              Building <span className="text-gradient-accent">intelligent products</span> for real-world problems.
            </h1>
            <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed max-w-xl">
              AI Engineer focused on <span className="text-white font-medium">LLMs, Agentic AI, OCR, Automation</span>, and scalable full-stack web applications.
            </p>
          </div>

          {/* Key Stat Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {profile.stats?.map((stat, idx) => (
              <div key={idx} className="glass-card p-3 rounded-xl border border-white/5 text-left">
                <p className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">{stat.label}</p>
                <p className="text-xs font-bold text-white mt-0.5 truncate">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#projects">
              <Button variant="primary" size="lg">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href={profile.resume} download="Nikhil_Nishad_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-2 text-[#A1A1AA]">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all" aria-label="GitHub Profile">
              <Github className="w-5 h-5" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all" aria-label="LinkedIn Profile">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${profile.email}`} className="p-2.5 rounded-xl border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all" aria-label="Send Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column Portrait - Displayed on Desktop (lg:flex) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden lg:flex lg:col-span-5 justify-center"
        >
          <div className="relative w-full max-w-sm animate-float-slow">
            {/* Soft Ambient Light Glow Behind Portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Seamless Classy Transparent Portrait Container */}
            <div className="relative flex flex-col items-center text-center space-y-4">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72">
                <Image
                  src="/profile.png"
                  alt="Nikhil Nishad - AI Engineer & Full Stack Developer"
                  width={320}
                  height={320}
                  priority
                  className="object-contain w-full h-full drop-shadow-[0_10px_25px_rgba(59,130,246,0.25)] hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="glass-card px-5 py-3 rounded-2xl border border-white/10 shadow-xl backdrop-blur-md">
                <h3 className="text-base font-bold text-white font-display">{profile.name}</h3>
                <p className="text-xs text-blue-400 font-mono mt-0.5">{profile.title}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
