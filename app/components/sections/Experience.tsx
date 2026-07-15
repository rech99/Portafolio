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
      <div className="max-w-5xl mx-auto terminal-card reveal-item">
        <div className="terminal-header">
          <div className="terminal-dots">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
          </div>
          <span>[SYS_MODULE_02: WORK_EDUCATION]</span>
          <span>QUERY: SUCCESS</span>
        </div>
        
        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-teal-400 border-b border-white/5 pb-3">
              {t.experience.title}
            </h3>
            
            <div className="space-y-10 border-l-2 border-blue-500/30 pl-6 ml-2">
              {t.experience.items.map((exp) => (
                <article
                  key={exp.id}
                  className="reveal-item relative"
                >
                  <div 
                    className="absolute -left-[31px] top-[6px] w-4.5 h-4.5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 border-4 border-slate-950"
                    aria-hidden="true"
                  />
                  
                  <header className="mb-3">
                    <h4 className="text-xl font-semibold text-slate-100">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-teal-400">
                      {exp.company} • {exp.period}
                    </p>
                  </header>
                  
                  <ul className="list-disc pl-4 space-y-2 text-sm text-slate-300 leading-relaxed">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-teal-400 border-b border-white/5 pb-3">
              {t.education.title}
            </h3>
            
            <div className="space-y-10 border-l-2 border-blue-500/30 pl-6 ml-2">
              {t.education.items.map((edu) => (
                <article
                  key={edu.id}
                  className="reveal-item relative"
                >
                  <div 
                    className="absolute -left-[31px] top-[6px] w-4.5 h-4.5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 border-4 border-slate-950"
                    aria-hidden="true"
                  />
                  
                  <header className="mb-3">
                    <h4 className="text-xl font-semibold text-slate-100">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-teal-400">
                      {edu.institution} • {edu.period}
                    </p>
                  </header>
                  
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {edu.details}
                  </p>
                </article>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}







