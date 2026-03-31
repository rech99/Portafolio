'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { SectionHeading } from '@/app/components/ui';

export function Skills() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="skills"
      className="py-14 md:py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading className="text-purple-100">{t.skills.title}</SectionHeading>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {t.skills.items.map((skill) => (
            <div 
              key={skill} 
              className="reveal-item reveal-delay-1 p-4 glass-card glass-hover rounded-xl text-center transition-all duration-300 text-purple-100"
            >
              <span className="font-medium">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







