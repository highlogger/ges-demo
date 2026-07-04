// ============================================================
// GES SOLAR PRO — Footer
// Multi-column, premium, KVKK-ready
// ============================================================
import Link from 'next/link';
import { footerNav } from '@/config/navigation';
import { defaultSiteConfig } from '@/config/site.config';

const currentYear = new Date().getFullYear();

export function Footer() {
  const config = defaultSiteConfig;

  return (
    <footer className="relative border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950" role="contentinfo">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-solar-500/40 to-transparent" />

      <div className="mx-auto max-w-[var(--container-max)] px-6 pb-8 pt-16 lg:px-12 lg:pt-20">
        {/* Main columns */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-3 no-underline">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-glow transition-transform duration-300 group-hover:scale-105">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-solar-500">
                  <circle cx="12" cy="12" r="5" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="12" y1="1" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="23" />
                    <line x1="1" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="23" y2="12" />
                  </g>
                </svg>
              </div>
              <div>
                <span className="font-[var(--font-display)] text-lg font-semibold text-neutral-900 dark:text-neutral-0">
                  {config.shortName}
                </span>
                <span className="block text-[11px] font-medium uppercase tracking-[0.15em] text-solar-600 dark:text-solar-400">
                  Enerji
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              {config.tagline}
            </p>
            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {config.social.linkedin && (
                <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition-all hover:border-primary-300 hover:text-primary-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-solar-600 dark:hover:text-solar-400" aria-label="LinkedIn">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
              )}
              {config.social.instagram && (
                <a href={config.social.instagram} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition-all hover:border-primary-300 hover:text-primary-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-solar-600 dark:hover:text-solar-400" aria-label="Instagram">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="18" cy="6" r="1" fill="currentColor" /><circle cx="12" cy="12" r="5" /></svg>
                </a>
              )}
              {config.social.youtube && (
                <a href={config.social.youtube} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition-all hover:border-primary-300 hover:text-primary-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-solar-600 dark:hover:text-solar-400" aria-label="YouTube">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                </a>
              )}
            </div>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500">
              Hizmetler
            </h4>
            <ul className="space-y-2.5">
              {footerNav.hizmetler.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-solar-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500">
              Kurumsal
            </h4>
            <ul className="space-y-2.5">
              {footerNav.kurumsal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-solar-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yasal + İletişim */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500">
              Yasal
            </h4>
            <ul className="space-y-2.5">
              {footerNav.yasal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-solar-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row dark:border-neutral-800">
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            &copy; {currentYear} {config.name}. Tüm hakları saklıdır.
          </p>
          <a href="mailto:info@aifactory.com.tr" className="text-xs text-neutral-400 transition-colors hover:text-primary-600 dark:text-neutral-500 dark:hover:text-solar-400">
            Powered by <span className="font-semibold text-neutral-500 dark:text-neutral-300">Aİ Factory</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
