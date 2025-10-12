"use client";

const skills = {
  Languages: [
    "Dart",
    "Java",
    "JavaScript",
    "TypeScript",
    "Solidity",
    "Python",
    "C / C++",
  ],
  "Frameworks & Tech": [
    "Flutter",
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Tailwind CSS",
    "Blockchain",
    "CLI Tools",
    "Chrome Extensions",
  ],
  "AI Tools & Platforms": [
    "GPT (ChatGPT)",
    "Gemini AI",
    "Deepseek AI",
    "Grok",
    "Windsurf IDE",
    "OpenAI",
    "MidJourney",
    "Runway",
    "HuggingFace",
    "Stable Diffusion",
  ],
  "Deployment & Cloud": ["Vercel", "Render", "Firebase", "DigitalOcean"],
  "Developer Tools": ["VS Code", "Git", "GitHub", "Postman", "Ubuntu Linux"],
};

export default function SkillsPanel({ pageMode = false }) {
  return (
    <aside className={`skills-panel ${pageMode ? "page" : ""}`} aria-label="Skills & Tools">
      <div className="skills-header">
        <span className="dot dot-primary" />
        <span className="dot dot-secondary" />
        <h3>Skills & Tools</h3>
      </div>

      <div className="skills-groups">
        {Object.entries(skills).map(([group, items]) => (
          <section key={group} className="skills-group" data-group={group}>
            <h4>{group}</h4>
            <ul>
              {items.map((name) => (
                <li key={name} className="skill-item" title={name}>
                  <span className="glow" />
                  {name}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </aside>
  );
 }
