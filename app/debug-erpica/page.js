import erpicaImg from '../../assets/images/erpica.jpeg';

export default function DebugErpicaPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🔍 Debug: Erpica Image</h1>
      
      <div style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h2>Testing Image Import</h2>
        <div style={{ 
          display: 'inline-block',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          border: '2px solid #007bff',
          borderRadius: '8px'
        }}>
          <p><strong>Import Status:</strong> ✅ Success</p>
          <p><strong>File Path:</strong> assets/images/erpica.jpeg</p>
          <p><strong>Image Object:</strong> {typeof erpicaImg}</p>
          <p><strong>Image Preview:</strong></p>
          <img 
            src={erpicaImg} 
            alt="Erpica Landing Page"
            style={{ 
              maxWidth: '400px',
              border: '1px solid #28a745',
              borderRadius: '4px'
            }}
            onLoad={() => console.log('✅ Erpica image loaded successfully!')}
            onError={(e) => console.error('❌ Erpica image failed to load:', e)}
          />
        </div>
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
            fontSize: '16px'
          }}
        >
          ← Back to Projects
        </a>
      </div>
    </div>
  );
}
