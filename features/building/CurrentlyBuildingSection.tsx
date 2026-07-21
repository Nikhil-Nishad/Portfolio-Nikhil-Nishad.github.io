"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { CurrentlyBuildingItem } from '@/lib/content';
import { Flame } from 'lucide-react';

export const CurrentlyBuildingSection: React.FC<{ building: CurrentlyBuildingItem[] }> = ({ building }) => {
  return (
    <section id="building" className="py-24 border-t border-white/5 bg-[#09090B]">
      <Container>
        <SectionHeading
          eyebrow="Active Innovation"
          title="Currently Building"
          description="A look at current R&D projects, AI copilots, and active product experiments."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {building.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between space-y-4 border border-blue-500/20 shadow-lg shadow-blue-500/5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Flame className="w-3.5 h-3.5 animate-pulse" />
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-display text-white text-gradient-accent">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {item.techStack.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-[11px]">
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
