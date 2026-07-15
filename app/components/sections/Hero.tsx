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
      className="min-h-screen flex items-center justify-center px-6 pt-20 glow-ambient-pure-center"
    >
      {/* Floating digital space particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[12%] left-[5%] text-cyan-400 font-mono text-xs select-none animate-float-slow">SELECT * FROM users;</div>
        <div className="absolute top-[68%] left-[7%] text-cyan-400 font-mono text-[10px] md:text-xs select-none animate-float-slower" style={{ animationDelay: '2s' }}>useEffect(() =&gt; &#123;&#125;, [])</div>
        <div className="absolute top-[22%] right-[8%] text-cyan-400 font-mono text-xs select-none animate-float-medium" style={{ animationDelay: '1s' }}>async function fetchSystem()</div>
        <div className="absolute top-[75%] right-[10%] text-cyan-400 font-mono text-xs select-none animate-float-slow" style={{ animationDelay: '3.5s' }}>def run_migrations():</div>
        <div className="absolute top-[42%] left-[82%] text-cyan-400 font-mono text-xs select-none animate-float-slower">class DistributedService</div>
        <div className="absolute top-[52%] left-[4%] text-cyan-400 font-mono text-xs select-none animate-float-medium" style={{ animationDelay: '1.5s' }}>docker-compose up -d</div>
        <div className="absolute top-[15%] left-[42%] text-cyan-400 font-mono text-[10px] select-none animate-float-fast" style={{ animationDelay: '0.5s' }}>redis.set("cache_key", val)</div>
        <div className="absolute top-[82%] left-[46%] text-cyan-400 font-mono text-[10px] select-none animate-float-fast" style={{ animationDelay: '4s' }}>git commit -m "build: init"</div>
        <div className="absolute top-[30%] left-[80%] text-cyan-400 font-mono text-[10px] select-none animate-float-slow" style={{ animationDelay: '5s' }}>[GET /api/v1/status]</div>
        <div className="absolute top-[58%] right-[82%] text-cyan-400 font-mono text-[10px] select-none animate-float-slower" style={{ animationDelay: '3s' }}>postgresql://db:5432</div>
        <div className="absolute top-[88%] left-[8%] text-cyan-400 font-mono text-[10px] select-none animate-float-slow" style={{ animationDelay: '6s' }}>npm run dev</div>
        <div className="absolute top-[35%] left-[10%] text-cyan-400 font-mono text-[10px] select-none animate-float-medium" style={{ animationDelay: '2.5s' }}>const [data, setData]</div>
      </div>

      <div className="max-w-4xl text-center z-10">
        {/* 3D Retro Computer */}
        <RetroComputer3D />

        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 font-mono tracking-widest text-cyan-400 uppercase text-glow-cyan">
          &gt; {t.hero.title}
          <span className="text-cyan-400 animate-pulse">_</span>
        </h1>
        
        <p className="text-sm md:text-base text-slate-400 mb-10 max-w-2xl mx-auto text-balance font-mono leading-relaxed">
          <span className="text-cyan-500/50">// </span>
          {t.hero.subtitle}
        </p>
        
        <div className="flex gap-5 justify-center flex-wrap">
          <a 
            href="#projects"
            className="px-8 py-4 bg-cyan-950/40 border border-cyan-500/80 text-cyan-400 font-mono text-xs uppercase tracking-widest hover:bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-300 rounded-none"
          >
            {t.hero.ctaPrimary}
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 bg-transparent border border-slate-700 hover:border-cyan-500/50 text-slate-400 hover:text-cyan-400 font-mono text-xs uppercase tracking-widest transition-all duration-300 rounded-none"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
