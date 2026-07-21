"use client";

import React, { useState, useEffect } from 'react';
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
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-2xl' : 'bg-transparent py-5'}`}>
      <Container className="flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-white group">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-xs font-mono font-bold group-hover:scale-105 transition-transform">
            NN
          </span>
          <span className="tracking-tight group-hover:text-blue-400 transition-colors">Nikhil Nishad</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#111113]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
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

        {/* Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Download className="w-3.5 h-3.5" />
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-white/5"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
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
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
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
