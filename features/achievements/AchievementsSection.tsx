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
