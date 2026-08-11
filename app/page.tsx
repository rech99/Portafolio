import { Navbar, Footer } from '@/app/components/layout';
import { Hero, About, Experience, Education, Skills, Projects, Contact } from '@/app/components/sections';
import { HUDNavigation, PresentationDeck } from '@/app/components/ui';

export default function Home() {
  const slides = [
    { id: 'hero', label: 'Overview', component: <Hero /> },
    { id: 'about', label: 'About', component: <About /> },
    { id: 'education', label: 'Education', component: <Education /> },
    { id: 'experience', label: 'Experience', component: <Experience /> },
    { id: 'skills', label: 'Skills', component: <Skills /> },
    { id: 'projects', label: 'Projects', component: <Projects /> },
    { id: 'contact', label: 'Contact', component: <Contact /> },
  ];



  return (
    <main className="min-h-screen overflow-x-hidden bg-zinc-950 text-zinc-100 bg-grid-pattern selection:bg-orange-500 selection:text-zinc-950">
      <Navbar />
      <HUDNavigation />
      <PresentationDeck slides={slides} />
      {/* Footer: always fixed, never re-mounts between slides */}
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <Footer />
      </div>
    </main>
  );
}





