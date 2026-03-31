'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-purple-500/20 bg-footer">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-purple-200 mb-4">
          © {currentYear} {t.siteConfig.name}. {t.footer.rights}
        </p>
        
        <nav className="flex gap-6 justify-center">
          {t.siteConfig.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="text-purple-300 hover:text-purple-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
