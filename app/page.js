import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import ThemeToggle from './components/ThemeToggle';
import AOSInit from './components/AOSInit';
import Services from './components/Services';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MotionSection from './components/ui/MotionSection';

export default function Page() {
  return (
    <main>
      <ThemeToggle />
      <AOSInit />
      <Hero />
      <MotionSection><Services /></MotionSection>
      <MotionSection><ProjectsGrid /></MotionSection>
      <MotionSection><About /></MotionSection>
      <MotionSection><Resume /></MotionSection>
      <MotionSection><Contact /></MotionSection>
      <Footer />
    </main>
  );
}
