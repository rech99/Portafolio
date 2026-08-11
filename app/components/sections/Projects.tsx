'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { SectionHeading, SectionReveal } from '@/app/components/ui';

export function Projects() {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = t.projects.items;



  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const goToMobilePrev = () => {
    setMobileIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToMobileNext = () => {
    setMobileIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const goToDesktopPrev = () => {
    setDesktopIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToDesktopNext = () => {
    setDesktopIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleProjects = projects.slice(
    desktopIndex * itemsPerPage,
    (desktopIndex + 1) * itemsPerPage
  );

  return (
    <SectionReveal id="projects" className="py-2 w-full h-auto md:h-full flex flex-col justify-start md:justify-center">
      <div className="max-w-6xl mx-auto w-full my-0 md:my-auto">

        <SectionHeading number="05">{t.projects.title}</SectionHeading>
        
        {/* MOBILE VIEW (< md): Single Project Card with Uncropped Typography */}
        <div className="block md:hidden space-y-3">
          {/* Mobile Header Switcher Controls */}
          <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400 border border-zinc-800 p-2 bg-zinc-950">
            <span className="font-semibold text-orange-400">
              PROJECT 0{mobileIndex + 1} / 0{projects.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={goToMobilePrev}
                className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 hover:border-white hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 text-[10px]"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>PREV</span>
              </button>
              <button
                onClick={goToMobileNext}
                className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 hover:border-white hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 text-[10px]"
              >
                <span>NEXT</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Active Mobile Project Card - Responsive & Uncropped */}
          <AnimatePresence mode="wait">
            <motion.article
              key={projects[mobileIndex].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="border border-zinc-800 bg-zinc-950 flex flex-col hover:border-zinc-700 transition-colors w-full h-auto overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-28 sm:h-32 relative w-full overflow-hidden bg-zinc-900 border-b border-zinc-800 flex-shrink-0">
                {projects[mobileIndex].image ? (
                  <img 
                    src={projects[mobileIndex].image} 
                    alt={projects[mobileIndex].title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-900 flex items-center justify-center font-mono text-xs text-zinc-600">
                    {projects[mobileIndex].title}
                  </div>
                )}
              </div>

              {/* Card Content - Dynamic Height & Uncropped Text */}
              <div className="p-4 space-y-3">
                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] text-orange-500 font-semibold tracking-wider block uppercase">
                    FEATURED PROJECT 0{mobileIndex + 1}
                  </span>

                  <h3 className="text-base font-semibold text-white tracking-tight leading-snug">
                    {projects[mobileIndex].title}
                  </h3>

                  <p className="text-zinc-300 text-xs leading-relaxed font-normal pt-1">
                    {projects[mobileIndex].description}
                  </p>
                </div>

                <div className="space-y-3 pt-2.5 border-t border-zinc-800/80">
                  {/* Tech Tags */}
                  <div className="flex gap-1.5 flex-wrap">
                    {projects[mobileIndex].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* External Links */}
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

        {/* DESKTOP VIEW (>= md): 3-Card Grid Carousel */}
        <div className="hidden md:block w-full">
          <div className="flex items-center justify-between mb-4 gap-4">
            <div className="flex-1" />
            
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={goToDesktopPrev}
                  className="px-3 py-1 bg-zinc-900 border border-zinc-800 hover:border-white hover:text-white transition-colors cursor-pointer text-xs font-mono inline-flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>PREV</span>
                </button>
                <button
                  onClick={goToDesktopNext}
                  className="px-3 py-1 bg-zinc-900 border border-zinc-800 hover:border-white hover:text-white transition-colors cursor-pointer text-xs font-mono inline-flex items-center gap-1"
                >
                  <span>NEXT</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="border border-zinc-800 bg-zinc-950 flex flex-col hover:border-zinc-700 transition-colors w-full h-auto md:h-[400px] justify-between overflow-hidden group"
              >
                {/* Project Image */}
                <div className="h-36 relative w-full overflow-hidden bg-zinc-900 border-b border-zinc-800 flex-shrink-0">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-900 flex items-center justify-center font-mono text-xs text-zinc-600">
                      {project.title}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between overflow-hidden space-y-2">
                  <div className="space-y-1.5 flex-1 overflow-hidden">
                    <h3 className="text-base font-semibold text-white tracking-tight leading-snug">
                      {project.title}
                    </h3>

                    <div className="overflow-y-auto max-h-[110px] pr-1">
                      <p className="text-zinc-300 text-xs leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>
                  </div>


                  <div className="space-y-2 pt-2 border-t border-zinc-800/80 flex-shrink-0">
                    {/* Tags */}
                    <div className="flex gap-1.5 flex-wrap">
                      {project.tags.map((tag) => (
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
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </SectionReveal>
  );
}
