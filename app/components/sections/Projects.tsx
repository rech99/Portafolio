'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { SectionHeading } from '@/app/components/ui';

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="projects"
      className="py-14 md:py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading className="text-purple-100">{t.projects.title}</SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-5">
          {t.projects.items.map((project) => (
            <div 
              key={project.id} 
              className="reveal-item reveal-delay-2 flex flex-col glass-card glass-hover rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-400" />
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-purple-100">
                  {project.title}
                </h3>
                
                <p className="text-purple-200 mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs glass rounded-full text-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-purple-300 hover:text-purple-200 hover:underline text-sm font-medium transition-colors"
                  >
                    {project.viewProject} →
                  </a>
                  <a
                    href="#"
                    className="text-purple-300 hover:text-purple-200 hover:underline text-sm font-medium transition-colors"
                  >
                    {project.github} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







