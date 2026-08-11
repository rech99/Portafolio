'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { SectionHeading, SectionReveal } from '@/app/components/ui';

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  
  // Desktop Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);
  // Mobile Carousel State
  const [mobileIndex, setMobileIndex] = useState(0);

  const projects = t.projects.items;
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(projects.length / itemsPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToMobilePrev = () => {
    setMobileIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToMobileNext = () => {
    setMobileIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const visibleProjects = projects.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <SectionReveal id="projects" className="py-2 w-full h-auto md:h-full flex flex-col justify-start md:justify-center">
      <div className="max-w-6xl mx-auto w-full my-0 md:my-auto">



        <SectionHeading number="05">{t.projects.title}</SectionHeading>



        {/* MOBILE VIEW (< md): Clean Single-Project Card with Fixed Height & Internal Scroll */}
        <div className="block md:hidden space-y-3">
          {/* Mobile Selector Controls */}
          <div className="flex items-center justify-between font-mono text-xs text-zinc-400 border-b border-zinc-800 pb-2.5">
            <span>PROJECT 0{mobileIndex + 1} / 0{projects.length}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={goToMobilePrev}
                className="px-3 py-1 bg-zinc-900 border border-zinc-800 hover:border-white hover:text-white transition-colors cursor-pointer"
              >
                ← PREV
              </button>
              <button
                onClick={goToMobileNext}
                className="px-3 py-1 bg-zinc-900 border border-zinc-800 hover:border-white hover:text-white transition-colors cursor-pointer"
              >
                NEXT →
              </button>
            </div>
          </div>

          {/* Active Mobile Project Card */}
          <AnimatePresence mode="wait">
            <motion.article
              key={projects[mobileIndex].id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.3 }}
              className="border border-zinc-800 bg-zinc-950 flex flex-col hover:border-zinc-700 transition-colors w-full h-auto max-h-[440px] justify-start overflow-hidden"

            >
              {/* Project Image */}
              <div className="h-36 relative w-full overflow-hidden bg-zinc-900 border-b border-zinc-800 flex-shrink-0">
                {projects[mobileIndex].image ? (
                  <img 
                    src={projects[mobileIndex].image} 
                    alt={projects[mobileIndex].title} 
                    className="w-full h-full object-fill"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-900 flex items-center justify-center font-mono text-xs text-zinc-600">
                    {projects[mobileIndex].title}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-3.5 flex-1 flex flex-col justify-between overflow-hidden space-y-2">
                <div className="space-y-1 flex-1 overflow-hidden">
                  <span className="font-mono text-[10px] text-orange-500 font-semibold tracking-wider block">
                    PROJECT 0{mobileIndex + 1}
                  </span>

                  <h3 className="text-base font-semibold text-white tracking-tight leading-snug">
                    {projects[mobileIndex].title}
                  </h3>

                  <div className="overflow-y-auto max-h-[85px] pr-1">
                    <p className="text-zinc-400 text-xs leading-relaxed font-normal">
                      {projects[mobileIndex].description}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-zinc-800/80 flex-shrink-0">
                  {/* Tags */}
                  <div className="flex gap-1 flex-wrap">
                    {projects[mobileIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-1 font-mono text-xs">
                    {projects[mobileIndex].projectUrl && projects[mobileIndex].projectUrl !== '#' && (
                      <a
                        href={projects[mobileIndex].projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-orange-500 transition-colors uppercase tracking-wider flex items-center gap-1 font-semibold"
                      >
                        {projects[mobileIndex].viewProject} ↗
                      </a>
                    )}
                    {projects[mobileIndex].githubUrl && (
                      <a
                        href={projects[mobileIndex].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1"
                      >
                        {projects[mobileIndex].github} ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* DESKTOP VIEW (>= md): 3-Card Grid Carousel with Fixed Card Heights & Internal Scroll */}
        <div className="hidden md:block w-full">
          <div className="flex items-center justify-between mb-4 gap-4">
            <div className="flex-1" />
            
            {/* Sharp Monospaced Carousel Controls */}
            {totalSlides > 1 && (
              <div className="flex items-center gap-2 font-mono text-xs">
                <button
                  onClick={goToPrevious}
                  className="px-3 py-1.5 border border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous projects"
                >
                  ← PREV
                </button>
                <span className="px-3 py-1.5 border border-zinc-800 bg-zinc-900 text-zinc-400">
                  0{currentIndex + 1} / 0{totalSlides}
                </span>
                <button
                  onClick={goToNext}
                  className="px-3 py-1.5 border border-zinc-800 bg-zinc-950 text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors cursor-pointer"
                  aria-label="Next projects"
                >
                  NEXT →
                </button>
              </div>
            )}
          </div>
          
          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleProjects.map((project, idx) => {
              const projectNum = String(currentIndex * itemsPerPage + idx + 1).padStart(2, '0');
              return (
                <article
                  key={project.id}
                  className="border border-zinc-800 bg-zinc-950 flex flex-col hover:border-zinc-700 transition-colors h-[380px] sm:h-[400px] justify-between overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="h-40 relative w-full overflow-hidden bg-zinc-900 border-b border-zinc-800 flex-shrink-0">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-fill hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-900 flex items-center justify-center font-mono text-xs text-zinc-600">
                        {project.title}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between overflow-hidden space-y-3">
                    <div className="space-y-1.5 flex-1 overflow-hidden">
                      <span className="font-mono text-xs text-orange-500 font-semibold tracking-wider block">
                        PROJECT {projectNum}
                      </span>

                      <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight leading-snug">
                        {project.title}
                      </h3>

                      <div className="overflow-y-auto max-h-[100px] sm:max-h-[110px] pr-1">
                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2 border-t border-zinc-800/80 flex-shrink-0">
                      {/* Tags */}
                      <div className="flex gap-1.5 flex-wrap">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 text-[11px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 pt-1 border-t border-zinc-800/60 font-mono text-xs">
                        {project.projectUrl && project.projectUrl !== '#' && (
                          <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-orange-500 transition-colors uppercase tracking-wider flex items-center gap-1 font-semibold"
                          >
                            {project.viewProject} ↗
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1"
                          >
                            {project.github} ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
