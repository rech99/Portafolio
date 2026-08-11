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
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between font-mono text-xs">
        {/* Brand Ident */}
        <a 
          href="#" 
          onClick={(e) => handleSmoothScroll(e, 'hero')}
          className="font-semibold text-white tracking-widest uppercase hover:text-orange-500 transition-colors flex items-center gap-2 group"
        >
          <span className="w-2 h-2 bg-orange-500 inline-block group-hover:scale-125 transition-transform" />
          <span>{t.siteConfig.name}</span>
        </a>

        {/* Minimalist Language Switcher */}
        <div className="flex items-center border border-zinc-800 bg-zinc-950 p-0.5 font-mono text-[11px]">
          <button
            onClick={() => setLanguage('en')}
            className={`px-2 py-0.5 transition-colors cursor-pointer ${
              language === 'en'
                ? 'text-white font-medium bg-zinc-800'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('es')}
            className={`px-2 py-0.5 transition-colors cursor-pointer ${
              language === 'es'
                ? 'text-white font-medium bg-zinc-800'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            ES
          </button>
        </div>
      </div>
    </header>
  );
}

