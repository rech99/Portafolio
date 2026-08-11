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

  const stats = [
    {
      label: language === 'es' ? 'Experiencia' : 'Experience',
      value: language === 'es' ? '3+ Años en Desarrollo' : '3+ Years Development',
    },
    {
      label: language === 'es' ? 'Enfoque Principal' : 'Core Focus',
      value: language === 'es' ? 'Sistemas Fullstack & APIs' : 'Fullstack & API Systems',
    },
    {
      label: language === 'es' ? 'Arquitectura' : 'Architecture',
      value: language === 'es' ? 'Sistemas Distribuidos & BD' : 'Distributed Systems & DB',
    },
    {
      label: language === 'es' ? 'Ubicación' : 'Location',
      value: 'Hermosillo, Sonora • Remote',
    },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('deck:goto-slide', { detail: { id } }));
  };

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

            {/* Action CTAs - 50%/50% Equal Width on Mobile */}
            <div className="flex items-center gap-3 w-full sm:w-auto pt-1">
              <a 
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, 'projects')}
                className="flex-1 sm:flex-initial text-center px-4 py-2.5 sm:px-6 sm:py-3 bg-white text-zinc-950 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-200 border border-white transition-colors whitespace-nowrap cursor-pointer inline-flex items-center justify-center gap-1.5 group"
              >
                <span>{t.hero.ctaPrimary}</span>
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a 
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className="flex-1 sm:flex-initial text-center px-4 py-2.5 sm:px-6 sm:py-3 bg-transparent text-zinc-300 text-xs uppercase tracking-wider border border-zinc-800 hover:border-zinc-500 hover:text-white transition-colors whitespace-nowrap cursor-pointer"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Architectural Minimalist Mobile Horizontal Swipe Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="md:hidden pt-6 flex flex-col items-center justify-center gap-2.5 w-full text-center"
            >
              <div className="w-16 h-px bg-zinc-800 relative overflow-hidden">
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-1/2 h-full bg-orange-500 shadow-[0_0_8px_#f97316]"
                />
              </div>

              <span className="font-mono text-[10px] text-zinc-400 tracking-[0.2em] uppercase font-medium">
                {language === 'es' ? 'DESLIZAR A LOS LADOS PARA NAVEGAR' : 'SWIPE HORIZONTALLY TO EXPLORE'}
              </span>
            </motion.div>

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

            {stats.map((st, i) => (
              <div key={i} className="p-3.5 sm:p-5 space-y-1">
                <span className="text-zinc-500 font-mono text-[11px] block uppercase">{st.label}</span>
                <span className="text-white font-semibold text-xs sm:text-sm block">{st.value}</span>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
