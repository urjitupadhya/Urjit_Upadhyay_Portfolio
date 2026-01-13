import erpicaImg from '../../assets/images/erpica.jpeg';

export default function ProjectsFinalPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>✅ Erpica Image Successfully Added!</h1>
      
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h2>Erpica Landing Page Image</h2>
        <img 
          src={erpicaImg} 
          alt="Erpica Landing Page"
          style={{ 
            maxWidth: '600px',
            width: '100%',
            height: 'auto',
            border: '3px solid #007bff',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,123,255,0.3)'
          }}
        />
        <p style={{ marginTop: '15px', fontSize: '18px', color: '#666' }}>
          Image loaded from: <strong>assets/images/erpica.jpeg</strong>
        </p>
      </div>
      
      <div style={{ 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>
        <h3>📋 Project Details:</h3>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Project:</strong> Erpica - Enterprise Resource Planning UI</li>
          <li><strong>Order:</strong> 0 (First project)</li>
          <li><strong>Live Demo:</strong> <a href="https://erpicauifinal.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>https://erpicauifinal.vercel.app/</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/urjitupadhya/Erpica" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>https://github.com/urjitupadhya/Erpica</a></li>
          <li><strong>Image:</strong> ✅ Successfully integrated</li>
          <li><strong>Status:</strong> 🎉 Ready for production!</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <a 
          href="/projects" 
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          ← View Full Projects Portfolio
        </a>
      </div>
    </div>
  );
}
