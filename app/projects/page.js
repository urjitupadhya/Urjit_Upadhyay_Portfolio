import ThemeToggle from '../components/ThemeToggle';
import AOSInit from '../components/AOSInit';
import ProjectsGrid from '../components/ProjectsGrid';

export const metadata = {
  title: 'Projects | Urjit Upadhyay',
};

export default function ProjectsPage() {
  return (
    <main>
      <ThemeToggle />
      <AOSInit />
      <ProjectsGrid />
    </main>
  );
}
