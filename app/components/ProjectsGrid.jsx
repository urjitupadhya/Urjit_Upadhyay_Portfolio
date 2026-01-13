"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import localProjects from "../data/projects.user.json";
import firebaseService from "../../lib/firebaseService";

// 🖼 Import images
import evoteImg from "../../assets/images/evote.jpg";
import oneKeyImg from "../../assets/images/one key.jpg";
import resumeBuilderImg from "../../assets/images/resume_builder .jpg";
import gdgcImg from "../../assets/images/gdgc.jpg";

// ✅ Resolve image paths properly
function resolveProjectImage(path) {
  if (!path || typeof path !== "string") return gdgcImg;
  if (path.startsWith("http")) return path;
  const map = {
    "assets/images/evote.jpg": evoteImg,
    "assets/images/onekey.jpg": oneKeyImg,
    "assets/images/one key.jpg": oneKeyImg,
    "assets/images/resume_builder.jpg": resumeBuilderImg,
    "assets/images/resume_builder .jpg": resumeBuilderImg,
    "assets/images/gdgc.jpg": gdgcImg,
  };
  return map[path] ?? `/${path}`;
}

export default function ProjectsGrid() {
  const [toast, setToast] = useState(null);
  const [hovered, setHovered] = useState(null); // track hovered card index
  const [projects, setProjects] = useState(localProjects);
  const [loading, setLoading] = useState(false); // Set to false to show projects immediately

  // 🔄 Firebase sync temporarily disabled - using local data only
  // useEffect(() => {
  //   // Firebase initialization code commented out
  // }, []);

  console.log('📊 Projects being displayed:', projects.length);
  console.log('📋 Project titles:', projects.map(p => p.title));

  // 🌀 Tilt disabled: keep cards static for cleaner background
  const tiltMove = () => {};
  const tiltLeave = (e) => {
    e.currentTarget.style.transform = "none";
  };

  // 📋 Copy CLI commands
  const copyInstall = async (cmds) => {
    try {
      const text = Array.isArray(cmds) ? cmds.join("\n") : String(cmds ?? "");
      await navigator.clipboard.writeText(text);
      setToast("Install commands copied to clipboard");
      setTimeout(() => setToast(null), 2200);
    } catch (e) {
      console.error("Copy failed", e);
    }
  };

  // 🔄 Real-time project update function
  const updateProject = async (projectIndex, updatedData) => {
    try {
      const updatedProjects = [...projects];
      updatedProjects[projectIndex] = { ...updatedProjects[projectIndex], ...updatedData };
      await firebaseService.saveData('projects', updatedProjects);
      setToast("Project updated in real-time");
      setTimeout(() => setToast(null), 2000);
    } catch (error) {
      console.error('Error updating project:', error);
      setToast("Failed to update project");
      setTimeout(() => setToast(null), 2000);
    }
  };

  if (loading) {
    return (
      <section id="projects" className="section">
        <div className="container">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading projects...</span>
            </div>
            <p className="mt-3">Loading projects from Firebase...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="projects" className="section">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h6>Projects</h6>
            <h1 className="text-gradient">Featured Work</h1>
            <p className="lead" style={{ color: "var(--gray)" }}>
              Some things I&apos;ve built recently.
            </p>
          </div>

          <div className="row g-4">
            {[...projects]
              .sort((a, b) => (a.order ?? 99) - (b.order ?? 99))
              .map((p, i) => (
                <div
                  className="col-md-6 col-lg-4"
                  key={p.title}
                  data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-duration="400"
                  data-aos-delay={i * 80}
                >
                  <div
                    className="card h-100 project-card"
                    style={{
                      position: "relative",
                      borderRadius: 16,
                      overflow: "hidden",
                      transition:
                        "transform 220ms ease, box-shadow 200ms ease, border-color 200ms ease",
                      boxShadow:
                        hovered === i
                          ? "0 18px 42px rgba(0,0,0,0.45)"
                          : "0 10px 28px rgba(0,0,0,0.35)",
                      border:
                        hovered === i
                          ? "1px solid rgba(108,92,231,0.45)"
                          : "1px solid rgba(255,255,255,0.06)",
                      background:
                        hovered === i
                          ? "linear-gradient(180deg, rgba(28,28,35,0.9) 0%, rgba(20,20,26,0.9) 100%)"
                          : "linear-gradient(180deg, rgba(20,20,26,0.85) 0%, rgba(14,14,18,0.85) 100%)",
                    }}
                    onMouseMove={tiltMove}
                    onMouseLeave={tiltLeave}
                    onMouseEnter={() => setHovered(i)}
                    onMouseOut={() => setHovered(null)}
                  >
                    {/* 🔮 Animated gradient border glow */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: 16,
                        background:
                          hovered === i
                            ? "radial-gradient(circle at center, rgba(108,92,231,0.25) 0%, transparent 70%)"
                            : "transparent",
                        transition: "background 240ms ease",
                        pointerEvents: "none",
                      }}
                    />

                    {/* 💜 Top animated border */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background:
                          "linear-gradient(90deg, #6c5ce7 0%, #8a7cff 50%, #b088ff 100%)",
                        transform:
                          hovered === i ? "scaleX(1)" : "scaleX(0.2)",
                        transformOrigin: "left",
                        transition: "transform 260ms ease",
                      }}
                    />

                    {/* Project image */}
                    <div className="card-img" style={{ height: 220, position: "relative", overflow: "hidden" }}>
                      <a
                        href={p.hosted && p.hosted.startsWith("http") ? p.hosted : (p.github || "#")}
                        target="_blank"
                        rel="noreferrer"
                        title={p.title}
                        style={{ display: "block", width: "100%", height: "100%" }}
                      >
                        <Image
                          src={resolveProjectImage(p.image)}
                          alt={p.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ objectFit: "cover", transform: hovered === i ? "scale(1.06)" : "scale(1)", transition: "transform 240ms ease" }}
                        />
                      </a>
                      <div
                        style={{
                          position: "absolute",
                          top: 10,
                          right: 10,
                          display: "flex",
                          gap: 8,
                          alignItems: "center",
                          padding: 8,
                          borderRadius: 14,
                          background: "linear-gradient(135deg, rgba(108,92,231,0.22) 0%, rgba(59,130,246,0.22) 100%)",
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          boxShadow: "0 8px 22px rgba(0,0,0,0.28)",
                          transform: hovered === i ? "translateY(0)" : "translateY(-8px)",
                          opacity: hovered === i ? 1 : 0,
                          transition: "opacity 180ms ease 80ms, transform 180ms ease 80ms",
                        }}
                      >
                        {p.github && (
                          <a
                            href={p.github}
                            className="btn btn-code"
                            target="_blank"
                            rel="noreferrer"
                            title="View source on GitHub"
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: 9999,
                              display: "grid",
                              placeItems: "center",
                              boxShadow: "0 8px 20px rgba(0,0,0,0.28)",
                              background: "rgba(20,20,26,0.65)",
                              border: "1px solid rgba(255,255,255,0.08)",
                              color: "#fff",
                              backdropFilter: "blur(6px)",
                              transform: hovered === i ? "translateY(-1px)" : "none",
                              transition: "transform 160ms ease, box-shadow 160ms ease"
                            }}
                          >
                            <i className="lab la-github" style={{ color: "#fff" }} />
                          </a>
                        )}
                        {p.hosted && p.hosted.startsWith("http") && (
                          <a
                            href={p.hosted}
                            className="btn btn-brand"
                            target="_blank"
                            rel="noreferrer"
                            title="Open live site"
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: 9999,
                              display: "grid",
                              placeItems: "center",
                              boxShadow: "0 8px 20px rgba(0,0,0,0.28)",
                              background: "rgba(20,20,26,0.65)",
                              border: "1px solid rgba(255,255,255,0.08)",
                              color: "#fff",
                              backdropFilter: "blur(6px)",
                              transform: hovered === i ? "translateY(-1px)" : "none",
                              transition: "transform 160ms ease, box-shadow 160ms ease"
                            }}
                          >
                            <i className="las la-external-link-alt" style={{ color: "#fff" }} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="card-body" style={{ padding: 16 }}>
                      <div
                        style={{
                          background: "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.01) 100%)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          padding: 14,
                          borderRadius: 12,
                          backdropFilter: "blur(6px)",
                        }}
                      >
                        <h5
                          className="mb-2"
                          style={{
                            background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #60a5fa 100%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            color: "transparent",
                            fontWeight: 800,
                            letterSpacing: 0.2,
                            display: 'inline-block'
                          }}
                        >
                          {p.title}
                        </h5>
                        <p style={{ color: "rgba(255,255,255,0.78)" }}>{p.description}</p>
                        <div className="d-flex flex-wrap mt-3">
                          {p.tags?.map((t) => (
                            <span
                              className="badge me-2 mb-2"
                              key={t}
                              title={t}
                              style={{
                                background: "linear-gradient(135deg, var(--primary, #6c5ce7) 0%, #8a7cff 100%)",
                                color: "#fff",
                                border: "1px solid rgba(255,255,255,0.08)",
                                padding: "6px 12px",
                                fontWeight: 600,
                                borderRadius: 9999,
                                boxShadow: hovered === i ? "0 8px 20px rgba(108, 92, 231, 0.35)" : "0 6px 18px rgba(108, 92, 231, 0.25)",
                                transition: "transform 180ms ease, box-shadow 180ms ease",
                                transform: hovered === i ? "translateY(-2px) scale(1.02)" : "none",
                              }}
                            >
                              <i className="las la-hashtag" style={{ fontSize: 12, opacity: 0.9 }} />
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 d-flex gap-3 flex-wrap">
                          {p.github && (
                            <a
                              href={p.github}
                              className="btn btn-code"
                              target="_blank"
                              rel="noreferrer"
                              title="View source on GitHub"
                              aria-label="View source on GitHub"
                              style={{
                                background: hovered === i
                                  ? 'linear-gradient(135deg, #6c5ce7 0%, #8a7cff 100%)'
                                  : 'transparent',
                                color: '#fff',
                                border: '1px solid rgba(255,255,255,0.18)',
                                borderRadius: 9999,
                                padding: '8px 14px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                fontWeight: 700,
                                letterSpacing: 0.2,
                                textDecoration: 'none',
                                boxShadow: hovered === i ? '0 10px 24px rgba(108,92,231,0.35)' : '0 6px 16px rgba(108,92,231,0.18)',
                                transform: hovered === i ? 'translateY(-1px)' : 'none',
                                transition: 'transform 180ms ease, box-shadow 180ms ease, background-position 400ms ease, background-color 200ms ease',
                                backgroundSize: '200% 200%',
                                backgroundPosition: hovered === i ? 'right center' : 'left center'
                              }}
                            >
                              <i className="lab la-github" style={{ color: '#fff' }} />
                              <span style={{ color: '#fff' }}>Code</span>
                            </a>
                          )}
                          {p.hosted && p.hosted.startsWith("http") && (
                            <a
                              href={p.hosted}
                              className="btn btn-brand"
                              target="_blank"
                              rel="noreferrer"
                              title="Open live site"
                              style={{
                                background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
                                color: "#fff",
                                border: "1px solid rgba(255,255,255,0.12)",
                                borderRadius: 9999,
                                padding: "8px 14px",
                                fontWeight: 700,
                                letterSpacing: 0.2,
                                boxShadow: hovered === i ? "0 10px 24px rgba(59,130,246,0.35)" : "0 6px 16px rgba(59,130,246,0.25)",
                                transform: hovered === i ? "translateY(-1px)" : "none",
                                transition: "transform 180ms ease, box-shadow 180ms ease, background-position 400ms ease",
                                backgroundSize: "200% 200%",
                                backgroundPosition: hovered === i ? "right center" : "left center",
                                textDecoration: 'none'
                              }}
                            >
                              <i className="las la-external-link-alt me-1" />
                              <span style={{ color: '#fff' }}>Live</span>
                            </a>
                          )}
                          {p.demo && p.demo.startsWith("http") && (
                            <a href={p.demo} className="btn btn-outline-brand" target="_blank" rel="noreferrer">Demo</a>
                          )}
                          {p.install?.length > 0 && (
                            <button type="button" className="btn btn-outline-brand" onClick={() => copyInstall(p.install)}>
                              Install
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ✅ Toast Notification */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            right: 24,
            bottom: 24,
            zIndex: 1050,
            background: "rgba(18,18,20,0.95)",
            color: "#fff",
            border: "1px solid var(--primary, #6c5ce7)",
            padding: "12px 16px",
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
            display: "flex",
            alignItems: "center",
            gap: 10,
            backdropFilter: "blur(6px)",
          }}
        >
          <i
            className="las la-check-circle"
            style={{ color: "var(--primary, #6c5ce7)", fontSize: 20 }}
          />
          <span style={{ fontWeight: 600 }}>{toast}</span>
        </div>
      )}
    </>
  );
}
