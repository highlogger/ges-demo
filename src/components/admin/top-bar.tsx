// ============================================================
// GES SOLAR PRO — Admin Top Bar
// ============================================================
import { auth } from '@/lib/auth';
import prisma from '@/lib/prisma';

export async function AdminTopBar() {
  const session = await auth();
  const unreadCount = await prisma.contactMessage.count({
    where: { isRead: false },
  });

  return (
    <header className="flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-6 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center gap-4">
        {/* Mobile menu toggle (placeholder) */}
        <button className="rounded-lg p-2 text-neutral-500 hover:bg-neutral-100 lg:hidden dark:hover:bg-neutral-800">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <h1 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
          Hoş geldiniz,{' '}
          <span className="font-semibold text-neutral-900 dark:text-neutral-0">
            {session?.user?.name || 'Admin'}
          </span>
        </h1>
      </div>

      <div className="flex items-center gap-3">
        {unreadCount > 0 && (
          <span className="flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-red-500 px-2 text-[11px] font-bold text-white">
            {unreadCount} yeni mesaj
          </span>
        )}
      </div>
    </header>
  );
}
