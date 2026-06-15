// ============================================================
// GES SOLAR PRO — Admin Panel Layout
// Sidebar + top bar, auth protected by middleware
// ============================================================
import type { Metadata } from 'next';
import Link from 'next/link';
import { AdminSidebar } from '@/components/admin/sidebar';
import { AdminTopBar } from '@/components/admin/top-bar';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: { default: 'Admin Panel', template: '%s | Admin — SolarTech' },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-950">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <AdminTopBar />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
