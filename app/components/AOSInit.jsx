"use client";
import { useEffect } from 'react';
import AOS from 'aos';

export default function AOSInit() {
  useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = typeof window !== 'undefined' && window.innerWidth < 768;
    AOS.init({
      duration: reduce ? 0 : (small ? 200 : 250),
      once: true,
      disable: reduce,
      easing: 'linear'
    });
  }, []);
  return null;
}
