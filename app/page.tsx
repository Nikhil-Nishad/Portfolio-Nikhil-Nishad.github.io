import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CursorGlow } from '@/components/layout/CursorGlow';
import { HeroSection } from '@/features/hero/HeroSection';
import { AboutSection } from '@/features/about/AboutSection';
import { ExperienceSection } from '@/features/experience/ExperienceSection';
import { SkillsSection } from '@/features/skills/SkillsSection';
import { ProjectsSection } from '@/features/projects/ProjectsSection';
import { CurrentlyBuildingSection } from '@/features/building/CurrentlyBuildingSection';
import { PhilosophySection } from '@/features/philosophy/PhilosophySection';
import { AchievementsSection } from '@/features/achievements/AchievementsSection';
import { ContactSection } from '@/features/contact/ContactSection';
import {
  getProfile,
  getExperience,
  getSkills,
  getAchievements,
  getProjects,
  getCurrentlyBuilding,
  getPhilosophy,
} from '@/lib/content';

export default function Home() {
  const profile = getProfile();
  const experience = getExperience();
  const skills = getSkills();
  const achievements = getAchievements();
  const projects = getProjects();
  const building = getCurrentlyBuilding();
  const philosophy = getPhilosophy();

  return (
    <main className="relative bg-[#09090B] text-[#FAFAFA] min-h-screen selection:bg-blue-500/30 selection:text-blue-200">
      <CursorGlow />
      <Navbar resumeUrl={profile.resume} />
      <HeroSection profile={profile} />
      <AboutSection profile={profile} />
      <ExperienceSection experience={experience} />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <CurrentlyBuildingSection building={building} />
      <PhilosophySection philosophy={philosophy} />
      <AchievementsSection achievements={achievements} />
      <ContactSection profile={profile} />
      <Footer github={profile.github} linkedin={profile.linkedin} email={profile.email} />
    </main>
  );
}
