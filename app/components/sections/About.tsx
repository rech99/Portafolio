'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { SectionHeading, SectionReveal, SplitReveal } from '@/app/components/ui';

export function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <SectionReveal id="about" className="py-2 w-full h-auto md:h-full flex flex-col justify-center" direction="left">
      <div className="max-w-6xl mx-auto w-full my-auto">




        <SectionHeading number="01">{t.about.title}</SectionHeading>


        
        <SplitReveal
          left={
            <div className="space-y-6 text-base md:text-lg text-zinc-300 leading-relaxed font-normal">
              {t.about.content.map((paragraph, index) => (
                <p key={index} className="text-zinc-300">
                  {paragraph}
                </p>
              ))}
            </div>
          }
          right={
            <div className="border border-zinc-800 bg-zinc-950 p-6 divide-y divide-zinc-800 text-xs">
              <div className="pb-4 font-semibold text-white tracking-wide uppercase">
                Engineering Principles
              </div>
              
              <div className="py-4 space-y-1">
                <span className="text-orange-500 font-mono font-semibold">01. Architecture</span>
                <p className="text-zinc-300 font-sans text-sm font-normal">
                  Modularity, high cohesion, and scalable separation of concerns across backend and frontend stacks.
                </p>
              </div>

              <div className="py-4 space-y-1">
                <span className="text-orange-500 font-mono font-semibold">02. Security First</span>
                <p className="text-zinc-300 font-sans text-sm font-normal">
                  Proactive OWASP compliance, secure auth pipelines, data integrity, and strict input validation.
                </p>
              </div>

              <div className="pt-4 space-y-1">
                <span className="text-orange-500 font-mono font-semibold">03. Performance</span>
                <p className="text-zinc-300 font-sans text-sm font-normal">
                  Optimized SQL queries, caching via Redis, async execution with Celery, and lean client code.
                </p>
              </div>
            </div>
          }
        />
      </div>
    </SectionReveal>
  );
}










