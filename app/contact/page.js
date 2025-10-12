import ThemeToggle from '../components/ThemeToggle';
import AOSInit from '../components/AOSInit';
import Contact from '../components/Contact';

export const metadata = {
  title: 'Contact | Urjit Upadhyay',
};

export default function ContactPage() {
  return (
    <main>
      <ThemeToggle />
      <AOSInit />
      <Contact />
    </main>
  );
}
