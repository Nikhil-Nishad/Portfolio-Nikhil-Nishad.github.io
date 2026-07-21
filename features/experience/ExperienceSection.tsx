"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ExperienceItem } from '@/lib/content';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC<{ experience: ExperienceItem[] }> = ({ experience }) => {
  return (
    <section id="experience" className="py-20 border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="Career History"
          title="Professional Experience"
          description="Client-side engineering, AI deployment, and full-stack software development."
        />

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-12 pl-6 md:pl-10">
          {experience.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#09090B]" />

              <Card className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-blue-400" />
                      {item.role}
                    </h3>
                    <p className="text-sm text-blue-400 font-medium">{item.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#71717A] bg-[#111113] px-3 py-1 rounded-full border border-white/5 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    {item.period}
                  </div>
                </div>

                <p className="text-sm text-[#A1A1AA]">{item.description}</p>

                <ul className="space-y-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.techStack.map((tech) => (
                    <Badge key={tech} variant="accent">
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
