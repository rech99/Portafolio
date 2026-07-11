'use client';

import { useState } from 'react';
import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md border-b border-blue-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors"
        >
          {t.siteConfig.name}
        </a>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm items-center">
          <li>
            <a
              href="#about"
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              {t.nav.about}
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              {t.nav.experience}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              {t.nav.skills}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              {t.nav.projects}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-teal-400 dark:hover:text-teal-400 transition-colors"
            >
              {t.nav.contact}
            </a>
          </li>
          
          {/* Language Toggle (Desktop) */}
          <li className="border-l border-blue-500/30 pl-8">
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'px-3 py-1 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'px-3 py-1 rounded-lg glass-card text-slate-300 hover:text-slate-100 cursor-pointer'}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={language === 'es' ? 'px-3 py-1 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'px-3 py-1 rounded-lg glass-card text-slate-300 hover:text-slate-100 cursor-pointer'}
              >
                ES
              </button>
            </div>
          </li>
        </ul>

        {/* Hamburger Toggle (Mobile) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 glass-card rounded-lg transition-colors hover:border-blue-500/40 z-50 relative cursor-pointer"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer (Sidebar) */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-64 bg-slate-950/95 backdrop-blur-lg border-l border-blue-500/20 p-6 pt-24 flex flex-col gap-6 shadow-2xl transition-transform duration-350 ease-in-out z-40 md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6 text-base">
          <li>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-300 hover:text-teal-400 py-1 transition-colors"
            >
              {t.nav.about}
            </a>
          </li>
          <li>
            <a
              href="#experience"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-300 hover:text-teal-400 py-1 transition-colors"
            >
              {t.nav.experience}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-300 hover:text-teal-400 py-1 transition-colors"
            >
              {t.nav.skills}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-300 hover:text-teal-400 py-1 transition-colors"
            >
              {t.nav.projects}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-gray-300 hover:text-teal-400 py-1 transition-colors"
            >
              {t.nav.contact}
            </a>
          </li>
          
          {/* Mobile Language Toggle */}
          <li className="border-t border-blue-500/10 pt-6 mt-4">
            <span className="block text-xs text-slate-400 mb-3 uppercase tracking-wider">Idioma / Language</span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setLanguage('en');
                  setIsMenuOpen(false);
                }}
                className={language === 'en' ? 'flex-1 py-2 text-center text-sm rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'flex-1 py-2 text-center text-sm rounded-lg glass-card text-slate-300 hover:text-slate-100 cursor-pointer'}
              >
                EN
              </button>
              <button
                onClick={() => {
                  setLanguage('es');
                  setIsMenuOpen(false);
                }}
                className={language === 'es' ? 'flex-1 py-2 text-center text-sm rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'flex-1 py-2 text-center text-sm rounded-lg glass-card text-slate-300 hover:text-slate-100 cursor-pointer'}
              >
                ES
              </button>
            </div>
          </li>
        </ul>
      </div>

      {/* Backdrop overlay when open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
}


