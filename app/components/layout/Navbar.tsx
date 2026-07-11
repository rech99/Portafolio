'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-md border-b border-blue-500/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a 
          href="#" 
          className="text-lg md:text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors truncate max-w-[65%] md:max-w-none"
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
                className={language === 'en' ? 'px-3 py-1 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/30 text-xs font-semibold' : 'px-3 py-1 rounded-lg glass-card text-slate-300 hover:text-slate-100 cursor-pointer text-xs'}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={language === 'es' ? 'px-3 py-1 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/30 text-xs font-semibold' : 'px-3 py-1 rounded-lg glass-card text-slate-300 hover:text-slate-100 cursor-pointer text-xs'}
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
            className={language === 'en' ? 'px-2.5 py-1 rounded-md bg-blue-600 text-white text-xs font-semibold shadow-md shadow-blue-500/30' : 'px-2.5 py-1 rounded-md glass-card text-slate-300 text-xs'}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('es')}
            className={language === 'es' ? 'px-2.5 py-1 rounded-md bg-blue-600 text-white text-xs font-semibold shadow-md shadow-blue-500/30' : 'px-2.5 py-1 rounded-md glass-card text-slate-300 text-xs'}
          >
            ES
          </button>
        </div>
      </div>
    </nav>
  );
}
