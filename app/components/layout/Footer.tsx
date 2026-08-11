'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-2.5 px-4 sm:px-6 border-t border-zinc-800/80 bg-zinc-950 font-mono text-[11px] text-zinc-500">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        
        {/* Minimal Copyright */}
        <p className="text-zinc-400 font-normal text-[10px] sm:text-[11px] truncate">
          © {currentYear} {t.siteConfig.name}
        </p>

        {/* Clean Understated Social Links */}
        <div className="flex items-center gap-2.5 sm:gap-3 text-zinc-500 text-[10px] sm:text-[11px] flex-shrink-0">
          <a
            href="https://www.linkedin.com/in/raul-enrique-campbell-hidalgo-80868527a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="https://github.com/rech99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href="mailto:rech_99@hotmail.com"
            className="hover:text-zinc-200 transition-colors"
          >
            {language === 'es' ? 'Contacto' : 'Contact'}
          </a>
        </div>

      </div>
    </footer>
  );
}
