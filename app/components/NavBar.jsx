"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastYRef = useRef(0);

  // close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // auto-hide on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const dy = y - lastYRef.current;
      setScrolled(y > 6);
      // hide when scrolling down, show when scrolling up
      if (dy > 6 && y > 80) setHidden(true);
      else if (dy < -6) setHidden(false);
      lastYRef.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav-wrap ${hidden ? 'is-hidden' : ''} ${scrolled ? 'is-scrolled' : ''}`} role="banner">
      <div className="nav-inner container">
        <div className="brand">
          <Link href="/" className="brand-link">
            <span className="logo-dot" />
            <span className="brand-text">Urjit Upadhyay</span>
          </Link>
        </div>
        <button
          className={`nav-toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="Primary">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} className={`nav-link ${active ? "active" : ""}`}>
                {label}
              </Link>
            );
          })}
          <a
            className="nav-cta btn-code"
            href="/assets/URJIT_UPADHYAY_RESUME.pdf"
            target="_blank"
            rel="noreferrer noopener"
            title="View Resume PDF"
          >
            <i className="las la-external-link-alt" /> Resume PDF
          </a>
        </nav>
      </div>
    </header>
  );
}
