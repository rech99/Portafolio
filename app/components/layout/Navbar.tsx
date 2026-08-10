'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('deck:goto-slide', { detail: { id } }));

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between font-mono text-xs">
        {/* Brand Ident */}
        <a 
          href="#" 
          onClick={(e) => handleSmoothScroll(e, 'hero')}
          className="font-semibold text-white tracking-widest uppercase hover:text-orange-500 transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-orange-500 inline-block" />
          <span>{t.siteConfig.name}</span>
        </a>
        
        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 text-zinc-400 uppercase tracking-wider text-[11px] lg:text-xs">
          <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            {t.nav.about}
          </a>
          <a href="#education" onClick={(e) => handleSmoothScroll(e, 'education')} className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            {t.education.title}
          </a>
          <a href="#experience" onClick={(e) => handleSmoothScroll(e, 'experience')} className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            {t.nav.experience}
          </a>
          <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            {t.nav.skills}
          </a>
          <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            {t.nav.projects}
          </a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            {t.nav.contact}
          </a>
        </nav>






        {/* Language Selector (Sharp Box Buttons) */}
        <div className="flex items-center gap-1 border border-zinc-800 p-0.5 bg-zinc-900/60">
          <button
            onClick={() => setLanguage('en')}
            className={`px-2.5 py-1 text-[11px] font-mono tracking-wider transition-colors cursor-pointer ${
              language === 'en'
                ? 'bg-zinc-100 text-zinc-950 font-bold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('es')}
            className={`px-2.5 py-1 text-[11px] font-mono tracking-wider transition-colors cursor-pointer ${
              language === 'es'
                ? 'bg-zinc-100 text-zinc-950 font-bold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            ES
          </button>
        </div>
      </div>
    </header>
  );
}

