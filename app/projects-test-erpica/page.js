import erpicaImg from '../../assets/images/erpica.jpeg';

export default function ErpicaTestPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Erpica Image Test</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Local Image Test:</h3>
        <img 
          src={erpicaImg} 
          alt="Erpica Landing Page"
          style={{ 
            maxWidth: '400px', 
            border: '2px solid #007bff',
            borderRadius: '8px'
          }}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Direct Path Test:</h3>
        <img 
          src="/assets/images/erpica.jpeg" 
          alt="Erpica Landing Page"
          style={{ 
            maxWidth: '400px', 
            border: '2px solid #28a745',
            borderRadius: '8px'
          }}
        />
      </div>
      
      <div>
        <h3>Project Info:</h3>
        <p><strong>Title:</strong> Erpica - Enterprise Resource Planning UI</p>
        <p><strong>Live Demo:</strong> <a href="https://erpicauifinal.vercel.app/" target="_blank" rel="noopener noreferrer">https://erpicauifinal.vercel.app/</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/urjitupadhya/Erpica" target="_blank" rel="noopener noreferrer">https://github.com/urjitupadhya/Erpica</a></p>
      </div>
    </div>
  );
}
