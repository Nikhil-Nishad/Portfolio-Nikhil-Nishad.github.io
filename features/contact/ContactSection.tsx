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

        <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-gradient">
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
          <a href={profile.resume} download="Nikhil_Nishad_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </Button>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
};
