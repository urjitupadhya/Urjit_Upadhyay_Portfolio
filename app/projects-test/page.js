import localProjects from '../data/projects.user.json';

export default function ProjectsTestPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Projects Test Page</h1>
      <p>Total projects: {localProjects.length}</p>
      
      <div style={{ display: 'grid', gap: '20px' }}>
        {localProjects.map((project, index) => (
          <div key={index} style={{ 
            border: '1px solid #ccc', 
            padding: '15px', 
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
          }}>
            <h3>{project.title}</h3>
            <p><strong>Order:</strong> {project.order || 'not set'}</p>
            <p>{project.description}</p>
            <div>
              <strong>Tags:</strong> {project.tags ? project.tags.join(', ') : 'none'}
            </div>
            <div>
              <strong>GitHub:</strong> {project.github || 'none'}
            </div>
            <div>
              <strong>Live:</strong> {project.hosted || 'none'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
