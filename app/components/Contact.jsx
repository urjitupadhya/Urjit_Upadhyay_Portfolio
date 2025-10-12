"use client";
export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-up">
          <h6>Get In Touch</h6>
          <h1>Let&apos;s Collaborate</h1>
          <p className="lead mt-3" style={{color:'var(--gray)'}}>Have a project in mind? I&apos;d love to hear from you!</p>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
            <div className="card p-4 border-0 text-center">
              <a href="mailto:gm4175urjitupadhyay@gmail.com" className="btn btn-brand btn-lg">
                Email me at gm4175urjitupadhyay@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
