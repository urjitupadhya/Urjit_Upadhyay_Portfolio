export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-up">
          <h6>What I Offer</h6>
          <h1>My Services</h1>
          <p className="lead" style={{color:'var(--gray)'}}>From concept to deployment, tailored to your needs</p>
        </div>
        <div className="row gy-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="card service-card h-100 border-0">
              <div className="card-body p-4 text-center">
                <div className="iconbox mx-auto"><i className="las la-mobile" /></div>
                <h4 className="mb-3">Flutter Development</h4>
                <p style={{color:'var(--gray)'}}>Cross-platform apps with clean architecture and animations.</p>
                <div className="mt-4">
                  <span className="badge">Dart</span>
                  <span className="badge ms-2">Riverpod</span>
                  <span className="badge ms-2">Animations</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="card service-card h-100 border-0">
              <div className="card-body p-4 text-center">
                <div className="iconbox mx-auto"><i className="las la-server" /></div>
                <h4 className="mb-3">Backend Development</h4>
                <p style={{color:'var(--gray)'}}>Robust, scalable APIs with Node.js, Firebase, and MongoDB.</p>
                <div className="mt-4">
                  <span className="badge">Node.js</span>
                  <span className="badge ms-2">Firebase</span>
                  <span className="badge ms-2">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="card service-card h-100 border-0">
              <div className="card-body p-4 text-center">
                <div className="iconbox mx-auto"><i className="las la-shield-alt" /></div>
                <h4 className="mb-3">Secure Solutions</h4>
                <p style={{color:'var(--gray)'}}>Blockchain, encryption, and security best practices.</p>
                <div className="mt-4">
                  <span className="badge">Blockchain</span>
                  <span className="badge ms-2">Encryption</span>
                  <span className="badge ms-2">OAuth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
