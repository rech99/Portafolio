'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-cyan-500/20 bg-[#030712] font-mono text-xs">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="text-slate-500 text-[10px]">
          // STATUS: ONLINE // CACHE: ACTIVE // SYSTEM: PORTAFOLIO_V1
        </p>
        
        <p className="text-slate-400">
          © {currentYear} {t.siteConfig.name}. {t.footer.rights}
        </p>
        
        <nav className="flex gap-3 justify-center">
          {t.siteConfig.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="text-cyan-400 hover:text-cyan-300 transition-colors border border-cyan-500/10 hover:border-cyan-500/30 px-3 py-1 rounded bg-[#080d1c]/40"
              target="_blank"
              rel="noopener noreferrer"
            >
              [{social.name.toLowerCase()}]
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
