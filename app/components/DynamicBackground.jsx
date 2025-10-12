"use client";
import { useEffect, useRef, useState } from "react";

// Rotating dynamic background with multiple animated themes and cursor parallax
// Themes: neon-grid, particles, code-waves, neural-net, starfield
export default function DynamicBackground() {
  const containerRef = useRef(null);
  const rafRef = useRef(0);
  const intervalRef = useRef(null);
  const [theme, setTheme] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Pick initial theme and rotate periodically
  useEffect(() => {
    const themes = ["neon-grid", "particles", "code-waves", "neural-net", "starfield"];
    const pick = () => themes[Math.floor(Math.random() * themes.length)];
    setTheme(pick());

    if (prefersReduced) {
      return; // no rotation for reduced motion users
    }

    const start = () => {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        setTransitioning(true);
        setTimeout(() => {
          setTheme((prev) => {
            let next = pick();
            if (themes.length > 1) {
              while (next === prev) next = pick();
            }
            return next;
          });
          setTransitioning(false);
        }, 600);
      }, 26000); // slightly longer to reduce churn
    };
    const stop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    // pause when tab hidden
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVis);
    start();

    return () => {
      document.removeEventListener('visibilitychange', onVis);
      stop();
    };
  }, [prefersReduced]);

  // Cursor parallax
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (prefersReduced) return; // skip parallax
    const small = typeof window !== 'undefined' && window.innerWidth < 768;
    const strength = small ? 8 : 14; // reduced intensity
    let ticking = false;
    let lastX = 0, lastY = 0;
    const apply = () => {
      const { innerWidth, innerHeight } = window;
      const dx = (lastX / innerWidth - 0.5) * 2;
      const dy = (lastY / innerHeight - 0.5) * 2;
      const tx = -(dx * strength);
      const ty = -(dy * strength);
      el.style.setProperty("--parallax-x", `${tx}px`);
      el.style.setProperty("--parallax-y", `${ty}px`);
      ticking = false;
    };
    const onMove = (e) => {
      lastX = e.clientX; lastY = e.clientY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(apply);
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [prefersReduced]);

  // Time-of-day reactive hues
  useEffect(() => {
    const applyTimeColors = () => {
      const h = new Date().getHours();
      // morning 5-11 warm, day 11-17 neutral, evening 17-21 cool, night 21-5 deep
      let primary = "#00e5ff";
      let secondary = "#6b46c1";
      if (h >= 5 && h < 11) {
        primary = "#ffb86b"; // warm
        secondary = "#ff7e5f";
      } else if (h >= 17 && h < 21) {
        primary = "#7fd1ff"; // cool dusk
        secondary = "#5f7eff";
      } else if (h >= 21 || h < 5) {
        primary = "#6ae6ff"; // deep night
        secondary = "#8a5cff";
      }
      const root = document.documentElement;
      root.style.setProperty("--primary", primary);
      root.style.setProperty("--secondary", secondary);
    };
    applyTimeColors();
    const t = setInterval(applyTimeColors, 60 * 1000);
    return () => clearInterval(t);
  }, []);

  // Lightweight star/particle ticker for certain themes using CSS variables
  useEffect(() => {
    if (!containerRef.current) return;
    if (prefersReduced) return; // skip animations
    let t = 0;
    const tick = () => {
      t += 0.0020; // slightly slower
      // update two offsets for animated backgrounds that read these vars
      const mobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const amp = mobile ? 30 : 50;
      const x = Math.sin(t) * amp;
      const y = Math.cos(t * 0.8) * amp;
      containerRef.current.style.setProperty("--shift-x", `${x}px`);
      containerRef.current.style.setProperty("--shift-y", `${y}px`);
      rafRef.current = requestAnimationFrame(tick);
    };
    const start = () => { if (!rafRef.current) rafRef.current = requestAnimationFrame(tick); };
    const stop = () => { if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = 0; } };
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVis);
    start();
    return () => { document.removeEventListener('visibilitychange', onVis); stop(); };
  }, [prefersReduced]);

  return (
    <div
      ref={containerRef}
      className={`dynamic-bg-container ${transitioning ? "fade" : ""}`}
      aria-hidden
    >
      {/* Layered themed background */}
      <div className={`bg-dynamic theme-${theme || "neon-grid"}`} />
      {/* Additional overlay for soft gradient wash */}
      <div className="bg-overlay" />
    </div>
  );
}
