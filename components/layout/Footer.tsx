import React from 'react';
import Image from 'next/image';
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
        <div className="flex items-center gap-3">
          <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/20 shrink-0">
            <Image
              src="/profile.png"
              alt="Nikhil Nishad"
              width={28}
              height={28}
              className="object-cover object-top w-full h-full"
            />
          </div>
          <p>© {new Date().getFullYear()} Nikhil Nishad. All rights reserved.</p>
        </div>

        <p className="text-center md:text-right text-[#71717A]">
          Designed & Built with Next.js 15, TypeScript & Tailwind CSS v4.
        </p>

        <div className="flex items-center gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub Profile">
            <Github className="w-4 h-4" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn Profile">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={`mailto:${email}`} className="hover:text-white transition-colors" aria-label="Send Email">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
};
