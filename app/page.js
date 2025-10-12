import Hero from './components/Hero';
import ProjectsGrid from './components/ProjectsGrid';
import ThemeToggle from './components/ThemeToggle';
import AOSInit from './components/AOSInit';
import Services from './components/Services';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Page() {
  return (
    <main>
      <ThemeToggle />
      <AOSInit />
      <Hero />
      <Services />
      <ProjectsGrid />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
