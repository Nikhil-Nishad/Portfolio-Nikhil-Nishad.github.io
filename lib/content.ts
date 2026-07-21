import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resume: string;
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
      content,
    };
  });

  return projects.sort((a, b) => a.order - b.order);
}
