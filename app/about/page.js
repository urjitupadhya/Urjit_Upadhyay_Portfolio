import AOSInit from '../components/AOSInit';
import ThemeToggle from '../components/ThemeToggle';
import About from '../components/About';

export const metadata = {
  title: 'About | Urjit Upadhyay',
};

export default function AboutPage() {
  return (
    <main>
      <ThemeToggle />
      <AOSInit />
      <About />
    </main>
  );
}
