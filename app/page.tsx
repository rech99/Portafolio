import { Navbar, Footer } from '@/app/components/layout';
import { Hero, About, Experience, Skills, Projects, Contact } from '@/app/components/sections';
import { HUDNavigation } from '@/app/components/ui';

export default function Home() {
  return (
    <main className="min-h-screen bg-cyber-grid text-slate-100 overflow-x-clip">
      <Navbar />
      <HUDNavigation />
      <Hero />
      <div className="tech-divider"><div className="tech-divider-node" /></div>
      <About />
      <div className="tech-divider"><div className="tech-divider-node" /></div>
      <Experience />
      <div className="tech-divider"><div className="tech-divider-node" /></div>
      <Skills />
      <div className="tech-divider"><div className="tech-divider-node" /></div>
      <Projects />
      <div className="tech-divider"><div className="tech-divider-node" /></div>
      <Contact />
      <Footer />
    </main>
  );
}

