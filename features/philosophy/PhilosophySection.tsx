"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { PhilosophyItem } from '@/lib/content';
import { Bot, Zap, Code, Smartphone } from 'lucide-react';

export const PhilosophySection: React.FC<{ philosophy: PhilosophyItem[] }> = ({ philosophy }) => {
  const getIcon = (iconName: string) => {
    if (iconName === 'Bot') return <Bot className="w-5 h-5 text-blue-400" />;
    if (iconName === 'Zap') return <Zap className="w-5 h-5 text-amber-400" />;
    if (iconName === 'Code') return <Code className="w-5 h-5 text-indigo-400" />;
    return <Smartphone className="w-5 h-5 text-emerald-400" />;
  };

  return (
    <section id="philosophy" className="py-20 border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="Core Values"
          title="Engineering Philosophy"
          description="How software, systems, and product experiences are built."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophy.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
            >
              <Card className="h-full flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[#111113] border border-white/10 w-fit">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
