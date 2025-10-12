 import Image from 'next/image';
 import coverImageAsset from '../../assets/images/urjit-upadhyay-profiles.jpg';
export default function Resume() {
  // Expected location: public/assets/URJIT_UPADHYAY_RESUME.pdf
  const resumePath = "/assets/URJIT_UPADHYAY_RESUME.pdf";
  const coverImage = coverImageAsset;

  return (
    <section id="resume" className="section">
      <div className="container">
        <div className="section-title text-center mb-5" data-aos="fade-up">
          <h6>Resume</h6>
          <h1 className="text-gradient">Download My Resume</h1>
          <p className="lead" style={{ color: 'var(--gray)' }}>
            One page snapshot of experience, projects, and skills.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="card border-0 overflow-hidden">
              <div className="card-img" style={{ height: 'clamp(260px, 56vw, 420px)', position: 'relative' }}>
                {/* Decorative banner using profile image (center the face) */}
                <Image
                  src={coverImage}
                  alt="Urjit Upadhyay profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 100vw"
                  style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
                  priority
                />
              </div>
              <div className="card-body p-4 text-center">
                <h4 className="mb-2">Urjit Upadhyay</h4>
                <p style={{ color: 'var(--gray)' }}>
                  Flutter Developer · Backend Engineer · Tech Innovator
                </p>
                <div className="d-flex flex-wrap gap-3 mt-3 justify-content-center">
                  <a
                    href={resumePath}
                    className="btn btn-brand"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <i className="las la-external-link-alt me-2" /> View Resume
                  </a>
                  <a href={resumePath} download className="btn btn-outline-brand">
                    <i className="las la-download me-2" /> Download PDF
                  </a>
                </div>
                <p className="mt-3 mb-0" style={{ color: 'var(--gray)', fontSize: 14 }}>
                  If the PDF doesn’t open in your browser, use Download.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
