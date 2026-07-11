'use client';

import { useState } from 'react';
import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { SectionHeading } from '@/app/components/ui';

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = t.projects.items;
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(projects.length / itemsPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const visibleProjects = projects.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section id="projects" className="py-14 md:py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading className="text-slate-100">{t.projects.title}</SectionHeading>
        
        <div className="relative">
          {/* Carousel Container */}
          <div className="grid md:grid-cols-3 gap-5 min-h-[500px]">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="reveal-item reveal-delay-2 flex flex-col glass-card glass-hover rounded-xl overflow-hidden transition-all duration-300 animate-fadeIn"
              >
                {/* Project Image */}
                <div className="h-48 relative w-full overflow-hidden bg-slate-900 border-b border-white/5">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-600 to-teal-400" />
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-slate-100">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-4 flex-1 text-sm">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs glass rounded-full text-teal-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.projectUrl || '#'}
                      target={project.projectUrl !== '#' ? '_blank' : undefined}
                      rel={project.projectUrl !== '#' ? 'noopener noreferrer' : undefined}
                      className="text-teal-400 hover:text-teal-300 hover:underline text-sm font-medium transition-colors"
                    >
                      {project.viewProject} →
                    </a>
                    <a
                      href={project.githubUrl || 'https://github.com/rech99'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 hover:underline text-sm font-medium transition-colors"
                    >
                      {project.github} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 translate-x-0 md:-translate-x-20 p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/25 text-slate-300 transition-all duration-300 z-10 cursor-pointer"
            aria-label="Previous projects"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 translate-x-0 md:translate-x-20 p-3 rounded-full bg-blue-500/10 hover:bg-blue-500/25 text-slate-300 transition-all duration-300 z-10 cursor-pointer"
            aria-label="Next projects"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-teal-400 w-8'
                  : 'bg-blue-600/40 hover:bg-blue-500/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}







