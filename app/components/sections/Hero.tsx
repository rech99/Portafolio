'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const locationText = language === 'es' 
    ? 'Disponible para trabajo remoto' 
    : 'Available for remote work';

  
  const overviewTitle = language === 'es' ? 'Resumen Técnico' : 'Technical Summary';

  return (
    <section
      id="hero"
      className="w-full h-auto md:h-full flex flex-col justify-center py-2 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full my-auto">



        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Main Content (7 cols) - Slide in from Left */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            style={{ willChange: 'transform, opacity', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
            className="lg:col-span-7 space-y-4 sm:space-y-6 md:space-y-8"
          >
            
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-[11px] sm:text-xs text-zinc-300">
              <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block" />
              <span>{locationText}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
              {t.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base text-zinc-400 font-normal leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </p>

            {/* Action CTAs */}
            <div className="flex items-center gap-3 flex-wrap pt-1">
              <a 
                href="#projects"
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-white text-zinc-950 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 border border-white transition-colors"
              >
                {t.hero.ctaPrimary} →
              </a>
              <a 
                href="#contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 bg-transparent text-zinc-300 text-xs uppercase tracking-wider border border-zinc-800 hover:border-zinc-500 hover:text-white transition-colors"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Technical Summary Card (5 cols) - Slide in from Right */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            style={{ willChange: 'transform, opacity', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
            className="lg:col-span-5 border border-zinc-800 bg-zinc-950 divide-y divide-zinc-800 text-xs mt-4 lg:mt-0"
          >

            <div className="p-3.5 sm:p-5 font-semibold text-white tracking-wide uppercase bg-zinc-900/40">
              {overviewTitle}
            </div>

            <div className="p-3.5 sm:p-5 space-y-1">
              <span className="text-orange-500 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider block">
                01. Engineering Focus
              </span>
              <p className="text-zinc-100 font-medium text-xs sm:text-sm leading-snug">
                Distributed Systems & Fullstack Architecture
              </p>
              <p className="text-zinc-400 text-[11px] sm:text-xs">
                Python (Django), TypeScript, Next.js, React, Node.js
              </p>
            </div>

            <div className="p-3.5 sm:p-5 space-y-1">
              <span className="text-orange-500 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider block">
                02. Data & Infrastructure
              </span>
              <p className="text-zinc-100 font-medium text-xs sm:text-sm leading-snug">
                Relational & NoSQL Database Optimization
              </p>
              <p className="text-zinc-400 text-[11px] sm:text-xs">
                PostgreSQL, MongoDB, Redis, Celery Async Queues
              </p>
            </div>

            <div className="p-3.5 sm:p-5 space-y-1">
              <span className="text-orange-500 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider block">
                03. Security & Delivery
              </span>
              <p className="text-zinc-100 font-medium text-xs sm:text-sm leading-snug">
                OWASP Security Standards & Agile Methodologies
              </p>
              <p className="text-zinc-400 text-[11px] sm:text-xs">
                Scrum, Kanban, PMBOK, REST API Interoperability
              </p>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}




