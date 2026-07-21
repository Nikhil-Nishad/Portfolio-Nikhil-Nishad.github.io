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
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      {/* Background Aurora Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full aurora-blur pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-purple-600/15 rounded-full aurora-blur pointer-events-none" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Status Badge */}
          {profile.status && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{profile.status}</span>
            </div>
          )}

          {/* Headline & Subtitle */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Building <span className="text-gradient-accent">intelligent products</span> for real-world problems.
            </h1>
            <p className="text-[#A1A1AA] text-lg sm:text-xl leading-relaxed max-w-2xl">
              AI Engineer focused on <span className="text-white font-medium">LLMs, Agentic AI, OCR, Automation</span>, and scalable full-stack web applications.
            </p>
          </div>

          {/* Key Stat Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {profile.stats?.map((stat, idx) => (
              <div key={idx} className="glass-card p-3 rounded-xl border border-white/10 text-left">
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
            <a href={profile.resume} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </a>
          </div>

          {/* Social Badges */}
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

        {/* Right Column Profile Card Frame with Portrait Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative w-full max-w-md animate-float-slow">
            {/* Glowing Rim Light */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl blur opacity-40" />
            
            <div className="relative glass-card rounded-3xl p-8 border border-white/15 text-center space-y-6 shadow-2xl">
              <div className="relative w-44 h-44 mx-auto rounded-2xl overflow-hidden bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-1 shadow-lg shadow-blue-500/20">
                <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-[#111113] flex items-center justify-center">
                  <Image
                    src="/profile.png"
                    alt="Nikhil Nishad - AI Engineer & Full Stack Developer"
                    width={220}
                    height={220}
                    priority
                    className="object-cover object-top w-full h-full hover:scale-105 transition-transform duration-500"
                  />
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
                  <p className="text-xs text-[#A1A1AA]">Next.js 15, React, Node, MERN</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
