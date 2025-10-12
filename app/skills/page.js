import ThemeToggle from '../components/ThemeToggle';
import AOSInit from '../components/AOSInit';
import SkillsPanel from '../components/SkillsPanel';

export const metadata = {
  title: 'Skills & Tools | Urjit Upadhyay',
};

export default function SkillsPage() {
  return (
    <main className="section">
      <ThemeToggle />
      <AOSInit />
      <div className="container">
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h6>Skills</h6>
          <h1 className="text-gradient">Skills & Tools</h1>
        </div>
        <SkillsPanel pageMode />
      </div>
    </main>
  );
}
