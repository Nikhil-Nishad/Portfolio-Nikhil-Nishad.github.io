"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
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
