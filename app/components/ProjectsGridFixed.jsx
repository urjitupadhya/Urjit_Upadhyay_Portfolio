"use client";
import localProjects from '../data/projects.user.json';
import erpicaImg from "../../assets/images/erpica.jpeg";
import gdgcImg from "../../assets/images/gdgc.jpg";

export default function ProjectsGridFixed() {
  console.log('📊 ProjectsGridFixed - Total projects:', localProjects.length);
  console.log('📋 Project titles:', localProjects.map(p => p.title));

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h6>Projects</h6>
          <h1 className="text-gradient">Featured Work</h1>
          <p className="lead" style={{ color: "var(--gray)" }}>
            Some things I&apos;ve built recently. ({localProjects.length} projects total)
          </p>
        </div>

        <div className="row g-4">
          {localProjects
            .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
            .map((project, index) => (
              <div className="col-md-6 col-lg-4" key={project.title}>
                <div className="card h-100" style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}>
                  {/* Project Image - Direct mapping */}
                  <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={
                        project.title.includes('Erpica') ? erpicaImg.src :
                          project.image?.includes('evote') ? gdgcImg.src :
                            project.image?.includes('gdgc') ? gdgcImg.src :
                              project.image?.includes('erpica') ? erpicaImg.src :
                                project.image?.startsWith('http') ? project.image : gdgcImg.src
                      }
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                      onError={(e) => {
                        console.error('❌ Image failed to load:', project.title, project.image);
                        e.target.src = gdgcImg;
                      }}
                    />
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="d-flex flex-wrap">
                      {project.tags?.map((tag) => (
                        <span className="badge bg-primary me-2 mb-2" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-3">
                      {project.github && (
                        <a href={project.github} className="btn btn-outline-primary me-2" target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      )}
                      {project.hosted && (
                        <a href={project.hosted} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
