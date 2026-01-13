"use client";
export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-up">
          <h6>Get In Touch</h6>
          <h1>Let&apos;s Collaborate</h1>
          <p className="lead mt-3" style={{ color: 'var(--gray)' }}>Have a project in mind? I&apos;d love to hear from you!</p>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
            <div className="card p-4 border-0 text-center glass">
              <a href="mailto:gm4175urjitupadhyay@gmail.com" className="btn btn-brand btn-lg mb-4">
                Email me at gm4175urjitupadhyay@gmail.com
              </a>
              <div className="d-flex justify-content-center gap-4">
                <a href="https://x.com/Urjitupadhyay2" target="_blank" rel="noreferrer" className="btn-icon" aria-label="X (Twitter)">
                  <i className="lab la-twitter" />
                </a>
                <a href="https://www.linkedin.com/in/urjit-upadhyay-049428236" target="_blank" rel="noreferrer" className="btn-icon" aria-label="LinkedIn">
                  <i className="lab la-linkedin-in" />
                </a>
                <a href="https://github.com/urjitupadhya" target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub">
                  <i className="lab la-github" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
