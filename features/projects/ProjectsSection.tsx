"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ProjectItem } from '@/lib/content';
import { ExternalLink, Github, FileText } from 'lucide-react';
import Link from 'next/link';

export const ProjectsSection: React.FC<{ projects: ProjectItem[] }> = ({ projects }) => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AI & Automation', 'Full Stack', 'SaaS'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 border-t border-white/5">
      <Container>
        <SectionHeading
          eyebrow="Portfolio Showcase"
          title="Featured Projects"
          description="Explore high-impact AI products, full-stack applications, and detailed case studies."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-[#18181B] text-[#A1A1AA] hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="accent">{project.category}</Badge>
                    {project.metrics && (
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-blue-400/80 font-mono mt-1">{project.subtitle}</p>
                  </div>

                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {project.content.trim()}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Link href={`/projects/${project.slug}`} className="flex-1">
                      <Button variant="primary" size="sm" className="w-full">
                        <FileText className="w-3.5 h-3.5" />
                        Case Study
                      </Button>
                    </Link>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary" size="sm">
                          <ExternalLink className="w-3.5 h-3.5" />
                          Demo
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <Github className="w-3.5 h-3.5" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
