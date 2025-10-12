import ThemeToggle from '../components/ThemeToggle';
import AOSInit from '../components/AOSInit';
import Resume from '../components/Resume';

export const metadata = {
  title: 'Resume | Urjit Upadhyay',
};

export default function ResumePage() {
  return (
    <main>
      <ThemeToggle />
      <AOSInit />
      <Resume />
    </main>
  );
}
