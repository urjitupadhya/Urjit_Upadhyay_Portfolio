"use client";
import { useEffect, useMemo, useState } from 'react';

const THEMES = {
  dark: {
    label: 'Dark',
    lightMode: false,
    vars: {
      '--primary': '#7c5cff',
      '--secondary': '#22d3ee',
      '--accent': '#ff7e5f',
      '--gray': '#a3a8b3',
      '--darker': '#0b0c14',
      '--light': '#eef2ff',
      '--card-bg': 'rgba(13, 14, 22, 0.85)',
      '--border': 'rgba(255, 255, 255, 0.08)'
    }
  },
  light: {
    label: 'Light',
    lightMode: true,
    vars: {
      '--primary': '#6c5ce7',
      '--secondary': '#00c2ff',
      '--accent': '#ff7e5f',
      '--gray': '#475569',
      '--darker': '#f7f8ff',
      '--light': '#0e1116',
      '--card-bg': '#ffffff',
      '--border': 'rgba(0, 0, 0, 0.08)'
    }
  },
  ocean: {
    label: 'Ocean',
    lightMode: false,
    vars: {
      '--primary': '#00e5ff',
      '--secondary': '#007cf0',
      '--accent': '#00ffa3',
      '--gray': '#9aa0a6',
      '--darker': '#07131d',
      '--light': '#e8f6ff',
      '--card-bg': 'rgba(6, 20, 30, 0.85)',
      '--border': 'rgba(0, 229, 255, 0.16)'
    }
  },
  rose: {
    label: 'Rose',
    lightMode: false,
    vars: {
      '--primary': '#ff5d8f',
      '--secondary': '#a78bfa',
      '--accent': '#fca5a5',
      '--gray': '#c0b8c6',
      '--darker': '#140b12',
      '--light': '#fff1f5',
      '--card-bg': 'rgba(24, 10, 20, 0.85)',
      '--border': 'rgba(255, 93, 143, 0.18)'
    }
  },
  amber: {
    label: 'Amber',
    lightMode: false,
    vars: {
      '--primary': '#f59e0b',
      '--secondary': '#f97316',
      '--accent': '#fde68a',
      '--gray': '#d1c7b8',
      '--darker': '#15100a',
      '--light': '#fff7ed',
      '--card-bg': 'rgba(24, 17, 7, 0.85)',
      '--border': 'rgba(245, 158, 11, 0.18)'
    }
  }
};

const THEME_ORDER = ['dark', 'light', 'ocean', 'rose', 'amber'];

export default function ThemeToggle() {
  const [theme, setTheme] = useState('ocean');

  const applyTheme = (name) => {
    const cfg = THEMES[name] ?? THEMES.dark;
    // Toggle legacy light-mode class support
    document.body.classList.toggle('light-mode', !!cfg.lightMode);
    // Apply CSS variables for dynamic theming (globals.css consumes these)
    const root = document.documentElement;
    Object.entries(cfg.vars).forEach(([k, v]) => root.style.setProperty(k, v));
    // Derive gradients from current palette
    const primary = cfg.vars['--primary'];
    const secondary = cfg.vars['--secondary'] ?? primary;
    const accent = cfg.vars['--accent'] ?? secondary;
    root.style.setProperty('--gradient', `linear-gradient(135deg, ${primary}, ${secondary})`);
    root.style.setProperty('--gradient-alt', `linear-gradient(135deg, ${accent}, ${secondary})`);
    // Persist
    localStorage.setItem('theme', name);
  };

  useEffect(() => {
    // Backward compatibility: previous storage might be 'light'/'dark'
    const saved = localStorage.getItem('theme');
    const initial = saved && THEMES[saved] ? saved : (saved === 'light' || saved === 'dark' ? saved : 'ocean');
    setTheme(initial);
    applyTheme(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const nextTheme = () => {
    const idx = THEME_ORDER.indexOf(theme);
    const next = THEME_ORDER[(idx + 1) % THEME_ORDER.length];
    setTheme(next);
    applyTheme(next);
  };

  const label = useMemo(() => THEMES[theme]?.label ?? 'Theme', [theme]);

  return (
    <button aria-label={`Theme: ${label} (click to change)`} title={`Theme: ${label} (click to change)`} className="theme-toggle" onClick={nextTheme} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <i className="las la-palette" />
      <span style={{ fontSize: 12 }}>{label}</span>
    </button>
  );
}
