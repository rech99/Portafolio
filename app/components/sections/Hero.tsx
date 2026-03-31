'use client';

import { useLanguage } from '@/app/lib/useLanguage';
import { translations } from '@/app/lib/translations';
import { RetroComputer3D } from '@/app/components/ui/RetroComputer3D';

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-hero"
    >
      <div className="max-w-4xl text-center">
        {/* 3D Retro Computer */}
        <RetroComputer3D />

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
          {t.hero.title}
        </h1>
        
        <p className="text-xl md:text-2xl text-purple-100 mb-10 max-w-2xl mx-auto text-balance">
          {t.hero.subtitle}
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#projects"
            className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-lg hover:shadow-purple-500/50 transition-all duration-200 font-medium"
          >
            {t.hero.ctaPrimary}
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 glass-card rounded-lg hover:border-purple-500/50 transition-all duration-200 font-medium text-purple-100"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
