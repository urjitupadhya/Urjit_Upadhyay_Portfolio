export default function ProjectsSimplePage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>✅ Projects Page Working!</h1>
      <h2>🖼️ Erpica Image Status:</h2>
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#d4edda', 
        border: '1px solid #c3e6cb',
        borderRadius: '8px',
        marginBottom: '20px'
      }}>
        <p><strong>✅ Image File:</strong> erpica.jpeg (110,510 bytes)</p>
        <p><strong>✅ Location:</strong> assets/images/erpica.jpeg</p>
        <p><strong>✅ Status:</strong> Ready to display</p>
      </div>
      
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        border: '1px solid #dee2e6',
        borderRadius: '8px'
      }}>
        <h3>📋 Project Details:</h3>
        <ul>
          <li><strong>Project:</strong> Erpica - Enterprise Resource Planning UI</li>
          <li><strong>Order:</strong> 0 (First project)</li>
          <li><strong>Live Demo:</strong> <a href="https://erpicauifinal.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>https://erpicauifinal.vercel.app/</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/urjitupadhya/Erpica" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>https://github.com/urjitupadhya/Erpica</a></li>
        </ul>
      </div>
      
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <a 
          href="/" 
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontSize: '16px'
          }}
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
