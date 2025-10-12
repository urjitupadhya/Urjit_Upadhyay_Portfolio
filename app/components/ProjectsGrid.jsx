"use client";
import { useState } from 'react';
import Image from 'next/image';
import projects from '../data/projects.user.json';
import evoteImg from '../../assets/images/evote.jpg';
import oneKeyImg from '../../assets/images/one key.jpg';
import resumeBuilderImg from '../../assets/images/resume_builder .jpg';
import gdgcImg from '../../assets/images/gdgc.jpg';

// Resolve project image path from JSON to a valid source for next/image
function resolveProjectImage(path) {
  if (!path || typeof path !== 'string') return gdgcImg;
  if (path.startsWith('http')) return path;
  const map = {
    'assets/images/evote.jpg': evoteImg,
    'assets/images/onekey.jpg': oneKeyImg, // JSON name -> actual file 'one key.jpg'
    'assets/images/resume_builder.jpg': resumeBuilderImg, // JSON name -> actual file 'resume_builder .jpg'
    'assets/images/gdgc.jpg': gdgcImg,
  };
  // Fallback to public/ if user later moves assets there
  return map[path] ?? `/${path}`;
}

export default function ProjectsGrid() {
  const [toast, setToast] = useState(null);
  const [hovered, setHovered] = useState(null); // index of the hovered card for image zoom

  const tiltMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * 6; // tilt X
    const ry = (x - 0.5) * 8; // tilt Y
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`;
  };
  const tiltLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'none';
  };

  const copyInstall = async (cmds) => {
    try {
      const text = Array.isArray(cmds) ? cmds.join('\n') : String(cmds ?? '');
      await navigator.clipboard.writeText(text);
      // Show toast for feedback
      setToast('Install commands copied to clipboard');
      setTimeout(() => setToast(null), 2200);
    } catch (e) {
      console.error('Copy failed', e);
    }
  };

  return (
    <>
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h6>Projects</h6>
          <h1 className="text-gradient">Featured Work</h1>
          <p className="lead" style={{color: 'var(--gray)'}}>Some things I&apos;ve built recently.</p>
        </div>
        <div className="row g-4">
          {[...projects]
            .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
            .map((p, i) => (
            <div
              className="col-md-6 col-lg-4"
              key={p.title}
              data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-duration="200"
            >
              <div
                className="card h-100 project-card"
                style={{
                  transition: 'transform 180ms linear, box-shadow 120ms linear',
                  willChange: 'transform',
                  boxShadow: '0 10px 28px rgba(0,0,0,0.35)'
                }}
                onMouseMove={tiltMove}
                onMouseLeave={tiltLeave}
                onMouseEnter={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                onMouseOut={() => setHovered(null)}
              >
                <div className="card-img" style={{height: 220, position: 'relative', overflow: 'hidden'}}>
                  <Image
                    src={resolveProjectImage(p.image)}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: 'cover',
                      transform: hovered === i ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 200ms linear'
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="mb-2">{p.title}</h5>
                  <p style={{color: 'var(--gray)'}}>{p.description}</p>
                  <div className="d-flex flex-wrap mt-3">
                    {p.tags?.map((t) => (
                      <span
                        className="badge me-2 mb-2"
                        key={t}
                        title={t}
                        style={{
                          background: 'linear-gradient(135deg, var(--primary, #6c5ce7) 0%, #8a7cff 100%)',
                          color: '#fff',
                          border: '1px solid rgba(255,255,255,0.08)',
                          padding: '6px 12px',
                          fontWeight: 600,
                          letterSpacing: 0.2,
                          borderRadius: 9999,
                          boxShadow: '0 6px 18px rgba(108, 92, 231, 0.25)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6
                        }}
                      >
                        <i className="las la-hashtag" style={{ fontSize: 12, opacity: 0.9 }} />
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 d-flex gap-3 flex-wrap">
                    {p.github && (
                      <a href={p.github} className="btn btn-code" target="_blank" rel="noreferrer" title="View source on GitHub">
                        <i className="lab la-github me-1" /> Code
                      </a>
                    )}
                    {p.hosted && typeof p.hosted === 'string' && p.hosted.startsWith('http') && (
                      <a href={p.hosted} className="btn btn-brand" target="_blank" rel="noreferrer">Live</a>
                    )}
                    {p.demo && typeof p.demo === 'string' && p.demo.startsWith('http') && (
                      <a href={p.demo} className="btn btn-outline-brand" target="_blank" rel="noreferrer">Demo</a>
                    )}
                    {p.install && Array.isArray(p.install) && p.install.length > 0 && (
                      <button type="button" className="btn btn-outline-brand" onClick={() => copyInstall(p.install)}>
                        Install
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {toast && (
      <div
        role="status"
        aria-live="polite"
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          zIndex: 1050,
          background: 'rgba(18,18,20,0.95)',
          color: '#fff',
          border: '1px solid var(--primary, #6c5ce7)',
          padding: '12px 16px',
          borderRadius: 12,
          boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          backdropFilter: 'blur(6px)'
        }}
      >
        <i className="las la-check-circle" style={{ color: 'var(--primary, #6c5ce7)', fontSize: 20 }} />
        <span style={{ fontWeight: 600 }}>{toast}</span>
      </div>
    )}
    </>
  );
}
