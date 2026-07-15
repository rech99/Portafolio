'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { SectionHeading } from '@/app/components/ui';

export function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="about"
      className="py-14 md:py-16 px-6 glow-ambient-left"
    >
      <div className="max-w-4xl mx-auto terminal-card reveal-item">
        <div className="terminal-header">
          <div className="terminal-dots">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
          </div>
          <span>[SYS_MODULE_01: ABOUT_ME]</span>
          <span>STATUS: ONLINE</span>
        </div>
        
        <div className="p-8 md:p-12">
          <SectionHeading className="text-slate-100 text-glow-cyan font-mono">{t.about.title}</SectionHeading>
          
          <div className="space-y-6">
            {t.about.content.map((paragraph, index) => (
              <p
                key={index}
                className="reveal-item text-base md:text-lg text-slate-300 leading-relaxed font-light"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}







