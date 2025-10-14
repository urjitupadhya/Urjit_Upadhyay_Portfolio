"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import workshopImgLocal from '../../assets/images/urjitworkshop.jpg';

const SkillsRadar = dynamic(() => import('./SkillsRadar'), { ssr: false });

function WorkshopModal({ onClose, imgSrc, alt }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Workshop photo"
      tabIndex={-1}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.85)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={1200}
        height={800}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '92vw',
          maxHeight: '92vh',
          borderRadius: 14,
          boxShadow: '0 12px 36px rgba(0,0,0,0.5)',
          height: 'auto',
          width: 'auto'
        }}
      />
    </div>
  );
}

export default function About() {
  const [workshopOpen, setWorkshopOpen] = useState(false);
  const workshopImg = workshopImgLocal?.src ?? workshopImgLocal;
  const workshopAlt = 'GDGC Flutter workshop — Urjit mentoring at TPO Auditorium';

  const skills = [
    'Flutter', 'React.js', 'Next.js', 'Node.js', 'MongoDB',
    'Dart', 'TypeScript', 'Python', 'Solidity', 'Tailwind CSS',
    'OpenAI', 'GPT', 'Gemini AI', 'HuggingFace'
  ];

  const coreStrengths = [
    ['Clean Code', 'Problem Solving', 'UI/UX Focus'],
    ['Team Leadership', 'Agile Development']
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Title */}
        <div className="section-title text-center" data-aos="fade-up">
          <h6>Get To Know Me</h6>
          <h1>Who I Am</h1>
          <p className="lead" style={{ color: 'var(--gray)' }}>
            Problem solver and tech enthusiast
          </p>
        </div>

        <div className="row gy-4">
          {/* Left Column: Education & Journey */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="card h-100 border-0">
              <div className="card-body p-4">
                <h4 className="mb-4 text-gradient">Education & Journey</h4>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-content">
                      <h5 style={{
                        background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #22d3ee 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent',
                        fontWeight: 800
                      }}>2024 - Present</h5>
                      <h6 className="text-primary" style={{
                        background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #22d3ee 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent'
                      }}>B.Tech in Computer Engineering</h6>
                      <p className="text-gray" style={{
                        background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #22d3ee 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent'
                      }}>ZHCET, AMU | CGPA: 8.1/10</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-content">
                      <h5 style={{
                        background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #22d3ee 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent',
                        fontWeight: 800
                      }}>2021 - 2024</h5>
                      <h6 className="text-primary" style={{
                        background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #22d3ee 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent'
                      }}>Diploma in Computer Engineering</h6>
                      <p className="text-gray" style={{
                        background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #22d3ee 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent'
                      }}>University Polytechnic | 9.97</p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-content">
                      <h5 style={{
                        background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #22d3ee 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent',
                        fontWeight: 800
                      }}>2025</h5>
                      <p className="text-gray mb-2" style={{
                        background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #22d3ee 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent'
                      }}>TPO Auditorium, ZHCET</p>
                      <p className="text-gray mb-3">
                        Organised and led a 3-day hands-on Flutter workshop covering setup, widgets, layouts, routing, and state management. Trained participants through interactive sessions, enabling them to build their first Flutter app from scratch.
                      </p>
                      <div>
                        <Image
                          src={workshopImg}
                          alt={workshopAlt}
                          loading="lazy"
                          width={workshopImgLocal.width}
                          height={workshopImgLocal.height}
                          onClick={() => setWorkshopOpen(true)}
                          style={{
                            width: '100%',
                            height: 160,
                            objectFit: 'cover',
                            borderRadius: 12,
                            border: '1px solid var(--border, #2a2a2a)',
                            cursor: 'zoom-in',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills & Expertise */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="card h-100 border-0">
              <div className="card-body p-4">
                <h4 className="mb-4 text-gradient">Skills & Expertise</h4>

                <div
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border)',
                    borderRadius: 16,
                    padding: 16,
                  }}
                >
                  <SkillsRadar />
                </div>

                {/* Skills Chips */}
                <div className="mt-4" data-aos="fade-up" data-aos-delay="50">
                  <h6 className="text-primary mb-3">Skills & Tools</h6>
                  <div className="chips" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {skills.map((label) => (
                      <span
                        key={label}
                        className="chip"
                        title={label}
                        style={{
                          background: 'rgba(255,255,255,0.08)',
                          padding: '6px 12px',
                          borderRadius: 20,
                          fontSize: '0.85rem',
                          cursor: 'default',
                          transition: 'transform 0.2s',
                          color: '#000',
                        }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core Strengths */}
                <h6 className="text-primary mt-4 mb-3">Core Strengths</h6>
                <div className="row core-strengths" style={{ color: '#000' }} data-aos="fade-up" data-aos-delay="50" data-aos-duration="600">
                  {coreStrengths.map((group, i) => (
                    <div className="col-md-6" key={i}>
                      <ul className="list-unstyled">
                        {group.map((strength) => (
                          <li className="mb-2" key={strength}>
                            <i className="las la-check-circle text-primary me-2"></i>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
