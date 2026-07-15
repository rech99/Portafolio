'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: '00_INIT' },
  { id: 'about', label: '01_ABOUT' },
  { id: 'experience', label: '02_WORK' },
  { id: 'skills', label: '03_SKILLS' },
  { id: 'projects', label: '04_PROJECTS' },
  { id: 'contact', label: '05_CONTACT' }
];

export function HUDNavigation() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4 font-mono text-[10px] select-none items-center">
      {/* Top vertical indicator line */}
      <div className="h-24 w-[1px] bg-gradient-to-b from-transparent to-cyan-500/30" />
      
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className="relative flex items-center justify-center w-6 h-6 group transition-all duration-300"
        >
          {/* Label positioned absolutely on the left, keeping the node perfectly centered */}
          <span 
            className={`absolute right-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap ${
              activeSection === section.id ? 'text-cyan-400 text-glow-cyan' : 'text-slate-500'
            }`}
          >
            {section.label}
          </span>

          {/* Node aligned on the center line */}
          <div
            className={`w-2 h-2 border transition-all duration-300 rotate-45 ${
              activeSection === section.id
                ? 'bg-cyan-400 border-cyan-400 scale-125 shadow-[0_0_8px_rgba(6,182,212,0.8)]'
                : 'bg-transparent border-slate-600 group-hover:border-cyan-500/50'
            }`}
          />
        </a>
      ))}
      
      {/* Bottom vertical indicator line */}
      <div className="h-24 w-[1px] bg-gradient-to-t from-transparent to-cyan-500/30" />
    </div>
  );
}
