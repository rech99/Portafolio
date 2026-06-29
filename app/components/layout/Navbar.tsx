'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md border-b border-blue-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors"
        >
          {t.siteConfig.name}
        </a>
        
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
          
          {/* Language Toggle */}
          <li className="border-l border-blue-500/30 pl-8">
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'px-3 py-1 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'px-3 py-1 rounded-lg glass-card text-slate-300 hover:text-slate-100'}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={language === 'es' ? 'px-3 py-1 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'px-3 py-1 rounded-lg glass-card text-slate-300 hover:text-slate-100'}
              >
                ES
              </button>
            </div>
          </li>
        </ul>

        <button 
          className="md:hidden p-2 glass-card rounded-lg transition-colors hover:border-blue-500/40"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

