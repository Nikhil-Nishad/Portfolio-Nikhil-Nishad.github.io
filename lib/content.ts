import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export interface StatItem {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline?: string;
  subtitle?: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resume: string;
  status?: string;
  stats?: StatItem[];
  aboutNarrative: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: string;
  organization: string;
  description?: string;
}

export interface CurrentlyBuildingItem {
  id: string;
  title: string;
  status: string;
  description: string;
  techStack: string[];
}

export interface PhilosophyItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  featured: boolean;
  order: number;
  liveUrl?: string;
  githubUrl?: string;
  techStack: string[];
  metrics?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  challenges?: string;
  lessonsLearned?: string;
  futureImprovements?: string;
  content: string;
}

export function getProfile(): Profile {
  const filePath = path.join(contentDir, 'profile.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

export function getExperience(): ExperienceItem[] {
  const filePath = path.join(contentDir, 'experience.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

export function getSkills(): SkillCategory[] {
  const filePath = path.join(contentDir, 'skills.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

export function getAchievements(): AchievementItem[] {
  const filePath = path.join(contentDir, 'achievements.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

export function getCurrentlyBuilding(): CurrentlyBuildingItem[] {
  const filePath = path.join(contentDir, 'currently-building.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

export function getPhilosophy(): PhilosophyItem[] {
  const filePath = path.join(contentDir, 'philosophy.json');
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
}

export function getProjects(): ProjectItem[] {
  const projectsDir = path.join(contentDir, 'projects');
  const filenames = fs.readdirSync(projectsDir);

  const projects = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(projectsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      subtitle: data.subtitle || '',
      category: data.category || 'All',
      featured: Boolean(data.featured),
      order: data.order || 99,
      liveUrl: data.liveUrl || undefined,
      githubUrl: data.githubUrl || undefined,
      techStack: data.techStack || [],
      metrics: data.metrics || undefined,
      overview: data.overview || undefined,
      problem: data.problem || undefined,
      solution: data.solution || undefined,
      architecture: data.architecture || undefined,
      challenges: data.challenges || undefined,
      lessonsLearned: data.lessonsLearned || undefined,
      futureImprovements: data.futureImprovements || undefined,
      content,
    };
  });

  return projects.sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  const projects = getProjects();
  return projects.find((p) => p.slug === slug);
}
