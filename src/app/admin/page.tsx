// ============================================================
// GES SOLAR PRO — Admin Dashboard
// ============================================================
import prisma from '@/lib/prisma';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default async function AdminDashboardPage() {
  const [projectCount, blogCount, messageCount, unreadCount, referenceCount] = await Promise.all([
    prisma.project.count(),
    prisma.blogPost.count(),
    prisma.contactMessage.count(),
    prisma.contactMessage.count({ where: { isRead: false } }),
    prisma.reference.count(),
  ]);

  const recentMessages = await prisma.contactMessage.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-0">Dashboard</h2>

      {/* Stats grids */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Projeler', value: projectCount, href: '/admin/projeler', color: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
          { label: 'Blog Yazıları', value: blogCount, href: '/admin/blog', color: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
          { label: 'Okunmamış Mesaj', value: unreadCount, href: '/admin/mesajlar', color: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
          { label: 'Referanslar', value: referenceCount, href: '/admin/referanslar', color: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
        ].map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card hover padding="lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{stat.label}</span>
                <span className={`rounded-lg px-2.5 py-1 text-xl font-bold ${stat.color}`}>{stat.value}</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent messages */}
      <Card padding="lg" variant="elevated">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0">Son Mesajlar</h3>
          <Link href="/admin/mesajlar" className="text-sm text-primary-600 hover:underline dark:text-solar-400">
            Tümünü Gör →
          </Link>
        </div>

        {recentMessages.length === 0 ? (
          <p className="text-sm text-neutral-400 py-8 text-center">Henüz mesaj yok.</p>
        ) : (
          <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {recentMessages.map((msg) => (
              <div key={msg.id} className="flex items-start justify-between py-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-neutral-900 dark:text-neutral-0 truncate">{msg.name}</span>
                    {!msg.isRead && <span className="h-2 w-2 rounded-full bg-solar-500 flex-shrink-0" />}
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate mt-0.5">{msg.message}</p>
                  <span className="text-[10px] text-neutral-400 mt-1 block">
                    {msg.createdAt.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
