'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { SectionHeading, SectionReveal } from '@/app/components/ui';

export function Skills() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <SectionReveal id="skills" className="py-2 w-full h-auto md:h-full flex flex-col justify-start md:justify-center">
      <div className="max-w-6xl mx-auto w-full my-0 md:my-auto">

        <SectionHeading number="04">{t.skills.title}</SectionHeading>
        
        {/* MOBILE VIEW (< md): Compact 2-Column Grid fitting 100% in viewport without scrolling */}
        <div className="grid grid-cols-2 md:hidden gap-2 pb-2">
          {t.skills.categories.map((cat) => (
            <div 
              key={cat.name} 
              className="p-2.5 bg-zinc-950 border border-zinc-800 border-t-2 border-t-orange-500 flex flex-col justify-between"
            >
              <div>
                <div className="border-b border-zinc-800 pb-1 mb-1.5">
                  <h3 className="font-semibold text-[10.5px] text-white uppercase tracking-wider truncate">
                    {cat.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {cat.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-1.5 py-0.5 text-[9.5px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP VIEW (>= md): Full 3-Column Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
          {t.skills.categories.map((cat, idx) => (
            <div 
              key={cat.name} 
              className="p-5 bg-zinc-950 border border-zinc-800 flex flex-col justify-between space-y-4 hover:border-zinc-700 transition-colors group cursor-pointer"
            >
              <div>
                <span className="text-orange-500 font-mono text-[10px] font-semibold uppercase tracking-wider block">
                  0{idx + 1}. Category
                </span>
                <h3 className="font-semibold text-sm text-white uppercase tracking-wider mb-3 border-b border-zinc-800 pb-2">
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-2.5 py-1 text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
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
