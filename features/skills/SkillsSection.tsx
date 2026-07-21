"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SkillCategory } from '@/lib/content';

export const SkillsSection: React.FC<{ skills: SkillCategory[] }> = ({ skills }) => {
  return (
    <section id="skills" className="py-24 border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="Technical Proficiency"
          title="Skills & AI Capability Stack"
          description="Categorized expertise in artificial intelligence, full-stack web engineering, and document automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className="h-full flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold font-display text-white text-gradient-accent">
                    {category.category}
                  </h3>
                  <p className="text-xs text-[#71717A] mt-1">{category.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="hover:border-blue-400/50 hover:text-white">
                      {skill}
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
