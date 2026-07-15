'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/95 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_1px_20px_rgba(6,182,212,0.05)]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between font-mono">
        {/* Logo / Brand Name */}
        <a 
          href="#" 
          className="text-base md:text-lg font-bold text-cyan-400 hover:text-cyan-350 transition-colors flex items-center gap-2"
        >
          <span className="text-cyan-500 text-glow-cyan">&gt;_</span>
          <span>{t.siteConfig.name}</span>
        </a>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 text-xs items-center">
          <li>
            <a
              href="#about"
              className="text-slate-400 hover:text-cyan-400 hover:text-glow-cyan transition-colors"
            >
              [{t.nav.about.toLowerCase()}]
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-slate-400 hover:text-cyan-400 hover:text-glow-cyan transition-colors"
            >
              [{t.nav.experience.toLowerCase()}]
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-slate-400 hover:text-cyan-400 hover:text-glow-cyan transition-colors"
            >
              [{t.nav.skills.toLowerCase()}]
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-slate-400 hover:text-cyan-400 hover:text-glow-cyan transition-colors"
            >
              [{t.nav.projects.toLowerCase()}]
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-slate-400 hover:text-cyan-400 hover:text-glow-cyan transition-colors"
            >
              [{t.nav.contact.toLowerCase()}]
            </a>
          </li>
          
          {/* Language Toggle (Desktop) */}
          <li className="border-l border-cyan-550/20 pl-6 flex items-center gap-2">
            <span className="text-[10px] text-slate-500">LANG:</span>
            <div className="flex gap-1.5">
              <button
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'px-2 py-0.5 rounded border border-cyan-500/40 bg-cyan-950/40 text-cyan-400 text-[10px] font-semibold' : 'px-2 py-0.5 rounded border border-transparent text-slate-400 hover:text-slate-200 cursor-pointer text-[10px]'}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={language === 'es' ? 'px-2 py-0.5 rounded border border-cyan-500/40 bg-cyan-950/40 text-cyan-400 text-[10px] font-semibold' : 'px-2 py-0.5 rounded border border-transparent text-slate-400 hover:text-slate-200 cursor-pointer text-[10px]'}
              >
                ES
              </button>
            </div>
          </li>
        </ul>
 
        {/* Mobile Language Toggle (hidden on desktop) */}
        <div className="flex gap-1.5 md:hidden">
          <button
            onClick={() => setLanguage('en')}
            className={language === 'en' ? 'px-2 py-0.5 rounded border border-cyan-500/40 bg-cyan-950/40 text-cyan-400 text-[10px] font-semibold' : 'px-2 py-0.5 rounded border border-transparent text-slate-400 text-[10px]'}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('es')}
            className={language === 'es' ? 'px-2 py-0.5 rounded border border-cyan-500/40 bg-cyan-950/40 text-cyan-400 text-[10px] font-semibold' : 'px-2 py-0.5 rounded border border-transparent text-slate-400 text-[10px]'}
          >
            ES
          </button>
        </div>
      </div>
    </nav>
  );
}
