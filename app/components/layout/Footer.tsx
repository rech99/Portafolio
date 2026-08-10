'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-2.5 px-4 sm:px-6 border-t border-zinc-800/80 bg-zinc-950/90 backdrop-blur-sm font-mono text-[11px] text-zinc-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-zinc-400 text-center sm:text-left">
          © {currentYear} {t.siteConfig.name}
        </p>



        <div className="flex items-center gap-3 sm:gap-4 text-zinc-400">
          <a
            href="https://www.linkedin.com/in/raul-enrique-campbell-hidalgo-80868527a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LINKEDIN ↗
          </a>

          <span>•</span>
          <a
            href="https://github.com/rech99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GITHUB ↗
          </a>
          <span>•</span>
          <a
            href="mailto:rech_99@hotmail.com"
            className="hover:text-white transition-colors"
          >
            EMAIL ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
