"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Download, Menu, X } from 'lucide-react';

interface NavbarProps {
  resumeUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ resumeUrl }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Building', href: '/#building' },
    { name: 'Philosophy', href: '/#philosophy' },
    { name: 'Achievements', href: '/#achievements' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <Container className="flex items-center justify-between">
        {/* Brand Logo with Profile Avatar Photo (Visible on all screens including mobile top-left) */}
        <Link href="/" className="flex items-center gap-2.5 font-bold text-base text-white group">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-blue-400 transition-colors shadow-md shadow-blue-500/10 shrink-0">
            <Image
              src="/profile.png"
              alt="Nikhil Nishad"
              width={32}
              height={32}
              className="object-cover object-top w-full h-full"
            />
          </div>
          <span className="tracking-tight font-display font-bold group-hover:text-blue-400 transition-colors">
            Nikhil Nishad
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#111113]/80 px-2 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Resume Download Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a href={resumeUrl} download="Nikhil_Nishad_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Download className="w-3.5 h-3.5" />
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-white/5"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#A1A1AA] hover:text-white py-1"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-white/10">
            <a href={resumeUrl} download="Nikhil_Nishad_Resume.pdf" target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button variant="outline" size="sm" className="w-full">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
