'use client';

// ============================================================
// GES SOLAR PRO — Admin Sidebar
// ============================================================
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '📊' },
  { href: '/admin/projeler', label: 'Projeler', icon: '☀️' },
  { href: '/admin/blog', label: 'Blog', icon: '📝' },
  { href: '/admin/mesajlar', label: 'Mesajlar', icon: '✉️' },
  { href: '/admin/referanslar', label: 'Referanslar', icon: '⭐' },
  { href: '/admin/ayarlar', label: 'Ayarlar', icon: '⚙️' },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r border-neutral-200 bg-white lg:flex dark:border-neutral-800 dark:bg-neutral-900">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-neutral-200 px-6 dark:border-neutral-800">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-primary-700">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-solar-500">
            <circle cx="12" cy="12" r="5" fill="currentColor" />
          </svg>
        </div>
        <span className="font-[var(--font-display)] text-sm font-semibold text-neutral-900 dark:text-neutral-0">
          SolarTech Admin
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-0.5 p-3" aria-label="Admin navigasyon">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-solar-400'
                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-primary-600 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-solar-400'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="border-t border-neutral-200 p-3 dark:border-neutral-800">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-neutral-500 transition-all hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-800"
        >
          <span>↗️</span> Siteyi Gör
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-600 transition-all hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
        >
          <span>🚪</span> Çıkış Yap
        </button>
      </div>
    </aside>
  );
}
