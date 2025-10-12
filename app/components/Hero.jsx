"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import profileImg from '../../assets/images/urjit-upadhyay-profiles.jpg';

export default function Hero() {
  const badgeFull = "👋 Welcome to my portfolio";
  const subtitleFull = "Flutter Developer · Backend Engineer · Blockchain Enthusiast";
  const [badgeTyped, setBadgeTyped] = useState("");
  const [subtitleTyped, setSubtitleTyped] = useState("");

  useEffect(() => {
    let i = 0;
    let j = 0;
    let badgeTimer;
    let subtitleTimer;

    // Type badge first
    const typeBadge = () => {
      badgeTimer = setInterval(() => {
        if (i <= badgeFull.length) {
          setBadgeTyped(badgeFull.slice(0, i));
          i += 1;
        } else {
          clearInterval(badgeTimer);
          // small pause then type subtitle
          setTimeout(() => typeSubtitle(), 200);
        }
      }, 40);
    };

    const typeSubtitle = () => {
      subtitleTimer = setInterval(() => {
        if (j <= subtitleFull.length) {
          setSubtitleTyped(subtitleFull.slice(0, j));
          j += 1;
        } else {
          clearInterval(subtitleTimer);
        }
      }, 28);
    };

    typeBadge();

    return () => {
      clearInterval(badgeTimer);
      clearInterval(subtitleTimer);
    };
  }, []);

  return (
    <section id="home" className="hero section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-content">
              <div className="hero-badge mb-4" aria-live="polite">
                {badgeTyped}
                <span style={{opacity: 0.6}}>|
                </span>
              </div>
              <h1 className="display-4 fw-bold mb-4">
                I'm <span className="text-gradient">Urjit Upadhyay</span>
                <span className="d-block mt-2" style={{color: 'var(--gray)'}} aria-live="polite">
                  {subtitleTyped}
                  <span style={{opacity: 0.6}}>|
                  </span>
                </span>
              </h1>
              <p className="lead mb-4" style={{color: 'var(--gray)'}}>
                I craft <span className="text-gradient">beautiful cross-platform apps</span> with Flutter and build <span className="text-gradient">scalable backend systems</span>.
              </p>
              <div className="d-flex gap-3">
                <a className="btn btn-brand" href="#projects">View Projects</a>
                <a className="btn btn-outline-brand" href="#contact">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <div className="avatar-tech mx-auto" style={{width: 320}}>
              <div className="avatar-inner">
                <Image
                  src={profileImg}
                  alt="Urjit Upadhyay profile"
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  style={{objectFit: 'cover'}}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
