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
    <section id="about" className="py-24 border-t border-white/5">
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

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">MCA</h3>
                  <p className="text-xs text-[#71717A] font-mono mt-0.5">CGPA 8.1 | YMCA University</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">Venture7</h3>
                  <p className="text-xs text-[#71717A] font-mono mt-0.5">AI Engineer (Client-Side)</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-display">4+</h3>
                  <p className="text-xs text-[#71717A] font-mono mt-0.5">Production AI Systems</p>
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
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white font-display">AI-First Engineering</h4>
                <p className="text-xs text-[#A1A1AA] mt-1">Integrating LLMs, prompt workflows, and document OCR directly into user products.</p>
              </div>
            </Card>

            <Card className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                <Rocket className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white font-display">Product Mindset</h4>
                <p className="text-xs text-[#A1A1AA] mt-1">Focusing on measurable business impact, SEO growth, and 95+ Lighthouse scores.</p>
              </div>
            </Card>

            <Card className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white font-display">Scalable Architecture</h4>
                <p className="text-xs text-[#A1A1AA] mt-1">Clean REST APIs, strict TypeScript, and modular component designs.</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
