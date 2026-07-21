import React from 'react';
import { notFound } from 'next/navigation';
import { getProjects, getProjectBySlug, getProfile } from '@/lib/content';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CursorGlow } from '@/components/layout/CursorGlow';
import { ArrowLeft, ExternalLink, Github, Sparkles, Cpu, Wrench, Lightbulb, Rocket, Target, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const profile = getProfile();

  if (!project) {
    notFound();
  }

  return (
    <main className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <CursorGlow />
      <Navbar resumeUrl={profile.resume} />

      <article className="pt-32 pb-24">
        <Container className="max-w-4xl space-y-12">
          {/* Back Navigation Button */}
          <Link href="/#projects">
            <Button variant="ghost" size="sm" className="mb-4 text-[#A1A1AA] hover:text-white">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio Projects
            </Button>
          </Link>

          {/* Case Study Header */}
          <div className="space-y-6 border-b border-white/10 pb-10">
            <div className="flex items-center gap-3">
              <Badge variant="accent">{project.category}</Badge>
              {project.metrics && (
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {project.metrics}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gradient">
              {project.title}
            </h1>

            <p className="text-[#A1A1AA] text-lg leading-relaxed">
              {project.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="md">
                    <ExternalLink className="w-4 h-4" />
                    Visit Live Application
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="md">
                    <Github className="w-4 h-4" />
                    GitHub Source
                  </Button>
                </a>
              )}
            </div>
          </div>

          {/* Tech Stack Matrix */}
          <div className="glass-card rounded-2xl p-6 space-y-3">
            <h3 className="text-xs font-mono text-blue-400 uppercase tracking-widest font-semibold">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="default" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Detailed Case Study Sections */}
          <div className="space-y-10">
            {project.overview && (
              <section className="space-y-3">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  Executive Overview
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed text-base">{project.overview}</p>
              </section>
            )}

            {project.problem && (
              <section className="glass-card rounded-2xl p-6 space-y-3 border-l-4 border-l-red-500">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-400" />
                  The Problem Statement
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed text-sm">{project.problem}</p>
              </section>
            )}

            {project.solution && (
              <section className="glass-card rounded-2xl p-6 space-y-3 border-l-4 border-l-emerald-500">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  The Engineering Solution
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed text-sm">{project.solution}</p>
              </section>
            )}

            {project.architecture && (
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-indigo-400" />
                  System Architecture
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed text-base">{project.architecture}</p>
              </section>
            )}

            {project.challenges && (
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-amber-400" />
                  Technical Challenges
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed text-base">{project.challenges}</p>
              </section>
            )}

            {project.lessonsLearned && (
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  Key Lessons Learned
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed text-base">{project.lessonsLearned}</p>
              </section>
            )}

            {project.futureImprovements && (
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-purple-400" />
                  Roadmap & Future Improvements
                </h2>
                <p className="text-[#A1A1AA] leading-relaxed text-base">{project.futureImprovements}</p>
              </section>
            )}
          </div>
        </Container>
      </article>

      <Footer github={profile.github} linkedin={profile.linkedin} email={profile.email} />
    </main>
  );
}
