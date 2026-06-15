'use client';

// ============================================================
// GES SOLAR PRO — Mobile Navigation
// Full-screen overlay with animated menu items
// ============================================================
import { useEffect } from 'react';
import Link from 'next/link';
import { useSiteConfig } from '@/components/layout/providers';
import { Button } from '@/components/ui/button';
import { navigationItems } from '@/config/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const config = useSiteConfig();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[90] bg-neutral-950/60 backdrop-blur-sm transition-all duration-500 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-[95] w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-[var(--ease-out)] lg:hidden dark:bg-neutral-900 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobil menü"
      >
        <div className="flex h-full flex-col p-8">
          {/* Top spacing for header */}
          <div className="h-20" />

          {/* Nav links */}
          <nav className="flex flex-col gap-1" aria-label="Mobil ana menü">
            {navigationItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium text-neutral-700 transition-all hover:bg-neutral-50 hover:text-primary-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-solar-400"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                  transition: `all 0.4s ease ${0.1 + i * 0.05}s`,
                }}
              >
                <span className="flex h-2 w-2 rounded-full bg-solar-500 opacity-0 transition-opacity group-hover:opacity-100" />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="mt-8 space-y-4">
            <Button href="/iletisim" variant="primary" size="lg" className="w-full" onClick={onClose}>
              Teklif Alın
            </Button>
            <Button href="/enerji-hesaplayici" variant="outline" size="lg" className="w-full" onClick={onClose}>
              Enerji Hesaplayıcı
            </Button>
          </div>

          {/* Contact info */}
          <div className="mt-auto border-t border-neutral-200 pt-6 dark:border-neutral-700">
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-3 text-sm text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-solar-400"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {config.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
