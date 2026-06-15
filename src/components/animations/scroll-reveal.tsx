'use client';

// ============================================================
// GES SOLAR PRO — Scroll Reveal Hook
// Intersection Observer based reveal animation
// ============================================================
import { useEffect, type RefObject } from 'react';

interface ScrollRevealOptions {
  target: RefObject<HTMLElement | null>;
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal({ target, threshold = 0.1, rootMargin = '0px 0px -50px 0px' }: ScrollRevealOptions) {
  useEffect(() => {
    const el = target.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal section
            entry.target.classList.add('revealed');

            // Reveal children with stagger
            const items = entry.target.querySelectorAll('.scroll-reveal-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('revealed');
              }, index * 100);
            });
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [target, threshold, rootMargin]);
}
