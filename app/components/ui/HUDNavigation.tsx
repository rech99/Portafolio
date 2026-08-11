'use client';

import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export function HUDNavigation() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    window.dispatchEvent(new CustomEvent('deck:goto-slide', { detail: { id } }));

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Listen to custom deck slide change event
    const handleDeckSlide = (e: Event) => {
      const customEv = e as CustomEvent;
      if (customEv.detail?.id) {
        setActiveSection(customEv.detail.id);
      }
    };

    window.addEventListener('deck:slide-change', handleDeckSlide);

    // Fallback to scroll position for continuous scroll mode
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
    return () => {
      window.removeEventListener('deck:slide-change', handleDeckSlide);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3 font-mono text-[10px] select-none items-end">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleNavClick(e, section.id)}
            className={`flex items-center gap-3 transition-colors py-1 cursor-pointer group ${
              isActive ? 'text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <span className="tracking-wider uppercase">{section.label}</span>
            <span 
              className={`h-px transition-all duration-300 ${
                isActive ? 'w-6 bg-orange-500' : 'w-2 bg-zinc-800 group-hover:w-4 group-hover:bg-zinc-600'
              }`} 
            />
          </a>
        );
      })}
    </aside>
  );
}
