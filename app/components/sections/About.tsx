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
      className="py-14 md:py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading className="text-purple-100">{t.about.title}</SectionHeading>
        
        <div className="space-y-6">
          {t.about.content.map((paragraph, index) => (
            <p
              key={index}
              className="reveal-item text-lg text-purple-100 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}







