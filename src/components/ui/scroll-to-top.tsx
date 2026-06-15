'use client';

// ============================================================
// GES SOLAR PRO — Scroll to Top Button
// Appears after scrolling down, smooth animation
// ============================================================
import { useState, useEffect, useCallback } from 'react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > 600);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`
        fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center
        rounded-full bg-primary-500 text-white shadow-lg
        transition-all duration-500 ease-[var(--ease-out)]
        hover:bg-primary-600 hover:shadow-glow
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-solar-500
        ${visible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}
      `}
      aria-label="Sayfanın başına dön"
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
