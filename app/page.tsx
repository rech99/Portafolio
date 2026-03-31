import { Navbar, Footer } from '@/app/components/layout';
import { Hero, About, Experience, Skills, Projects, Contact } from '@/app/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <Hero />
      <div className="bg-cyborg">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

