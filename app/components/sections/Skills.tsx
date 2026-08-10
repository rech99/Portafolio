'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { SectionHeading, SectionReveal } from '@/app/components/ui';

export function Skills() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <SectionReveal id="skills" className="py-2 w-full h-auto md:h-full flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full my-auto">


        <SectionHeading number="04">{t.skills.title}</SectionHeading>


        
        {/* Sleek Matrix Grid: 2 Columns on Mobile, 3 Columns on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
          {t.skills.categories.map((cat, idx) => (
            <div 
              key={cat.name} 
              className="p-3 sm:p-5 bg-zinc-950 border border-zinc-800 flex flex-col justify-between space-y-2 sm:space-y-4 hover:border-zinc-700 transition-colors"
            >
              <div>
                <span className="text-orange-500 font-mono text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider block">
                  0{idx + 1}. Category
                </span>
                <h3 className="font-semibold text-xs sm:text-sm text-white uppercase tracking-wider mb-2 sm:mb-3 border-b border-zinc-800 pb-1 sm:pb-2 truncate">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {cat.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionReveal>
  );
}
