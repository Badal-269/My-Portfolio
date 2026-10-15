import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useTheme } from '@/hooks/useTheme';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useScrollProgress } from '@/hooks/useScrollProgress';

function App() {
  useTheme();
  useScrollReveal();
  const progress = useScrollProgress();

  return (
    <div className="min-h-screen bg-base text-primary">
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] origin-left bg-accent" style={{ transform: `scaleX(${progress / 100})` }} />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
