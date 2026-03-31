'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { SectionHeading } from '@/app/components/ui';

export function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="experience"
      className="py-14 md:py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading className="text-purple-100">{t.experience.title}</SectionHeading>
        
        <div className="space-y-12">
          {t.experience.items.map((exp) => (
            <article
              key={exp.id}
              className="reveal-item reveal-delay-1 relative pl-8 border-l-2 border-purple-500/50"
            >
              <div 
                className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50"
                aria-hidden="true"
              />
              
              <header className="mb-3">
                <h3 className="text-2xl font-semibold text-purple-100">
                  {exp.title}
                </h3>
                <p className="text-purple-300">
                  {exp.company} • {exp.period}
                </p>
              </header>
              
              <p className="text-purple-200 leading-relaxed">
                {exp.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}







