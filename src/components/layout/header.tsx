'use client';

// ============================================================
// GES SOLAR PRO — Header / Navigation
// Glass-morphism, scroll-aware, mobile responsive
// ============================================================
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/layout/providers';
import { useSiteConfig } from '@/components/layout/providers';
import { MobileNav } from '@/components/layout/mobile-nav';
import { Button } from '@/components/ui/button';
import { navigationItems } from '@/config/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { resolvedTheme, toggleTheme } = useTheme();
  const config = useSiteConfig();

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setIsScrolled(currentY > 20);
    setIsVisible(currentY < lastScrollY || currentY < 100);
    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'glass shadow-sm'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="mx-auto flex h-[var(--header-height)] max-w-[var(--container-max)] items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <Link
            href="/"
            className="group relative z-10 flex items-center gap-3 no-underline"
            aria-label={config.name}
          >
            {/* Solar icon */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-glow transition-transform duration-300 group-hover:scale-105">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-solar-500"
              >
                <circle cx="12" cy="12" r="5" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="12" y1="1" x2="12" y2="4" />
                  <line x1="12" y1="20" x2="12" y2="23" />
                  <line x1="1" y1="12" x2="4" y2="12" />
                  <line x1="20" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                  <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                  <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                  <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-[var(--font-display)] text-lg font-semibold leading-tight tracking-tight text-neutral-900 dark:text-neutral-0">
                {config.shortName}
              </span>
              <span className="text-[11px] font-medium leading-tight tracking-[0.15em] text-solar-600 uppercase dark:text-solar-400">
                Enerji
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" role="navigation" aria-label="Ana menü">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-300 dark:hover:text-solar-400"
              >
                {item.label}
                <span className="absolute inset-x-2 -bottom-px h-0.5 origin-left scale-x-0 rounded-full bg-solar-500 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Dark mode toggle */}
            {config.features.enableDarkMode && (
              <button
                onClick={toggleTheme}
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white/50 text-neutral-600 backdrop-blur-sm transition-all hover:border-solar-300 hover:text-solar-600 dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-300 dark:hover:border-solar-600 dark:hover:text-solar-400"
                aria-label={resolvedTheme === 'dark' ? 'Aydınlık moda geç' : 'Karanlık moda geç'}
              >
                {/* Sun icon */}
                <svg
                  className={`absolute h-5 w-5 transition-all duration-500 ${
                    resolvedTheme === 'dark' ? 'scale-0 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
                  }`}
                  fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
                {/* Moon icon */}
                <svg
                  className={`absolute h-5 w-5 transition-all duration-500 ${
                    resolvedTheme === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'
                  }`}
                  fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </button>
            )}

            {/* CTA Button */}
            <Button
              href="/iletisim"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Teklif Alın
              <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white/50 text-neutral-600 backdrop-blur-sm transition-all hover:border-solar-300 lg:hidden dark:border-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-300"
              aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={mobileOpen}
            >
              <div className="flex h-4 w-5 flex-col justify-between">
                <span className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${mobileOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                <span className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${mobileOpen ? 'scale-x-0' : ''}`} />
                <span className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ${mobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
