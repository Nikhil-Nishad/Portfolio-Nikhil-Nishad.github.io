import React from 'react';
import { Container } from '../ui/Container';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  github: string;
  linkedin: string;
  email: string;
}

export const Footer: React.FC<FooterProps> = ({ github, linkedin, email }) => {
  return (
    <footer className="border-t border-white/10 bg-[#09090B] py-12 text-[#A1A1AA] text-xs">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-mono text-[10px] font-bold">
            NN
          </span>
          <p>© {new Date().getFullYear()} Nikhil Nishad. All rights reserved.</p>
        </div>

        <p className="text-center md:text-right text-[#71717A]">
          Designed & Built with Next.js 15, TypeScript & Tailwind CSS v4.
        </p>

        <div className="flex items-center gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={`mailto:${email}`} className="hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
};
