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
        <SectionHeading className="text-slate-100">{t.skills.title}</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.skills.categories.map((cat) => (
            <div 
              key={cat.name} 
              className="reveal-item p-6 glass-card rounded-xl border border-white/5 hover:border-teal-500/20 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-lg font-semibold text-teal-400 mb-4 border-b border-white/5 pb-2">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 text-xs glass rounded-full text-slate-300 hover:text-slate-100 hover:border-teal-500/20 transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







