import ThemeToggle from '../components/ThemeToggle';
import AOSInit from '../components/AOSInit';
import ProjectsGridBasic from '../components/ProjectsGridBasic';

export const metadata = {
  title: 'Projects | Urjit Upadhyay',
};

export default function ProjectsPage() {
  return (
    <main>
      <ThemeToggle />
      <AOSInit />
      <ProjectsGridBasic />
    </main>
  );
}
