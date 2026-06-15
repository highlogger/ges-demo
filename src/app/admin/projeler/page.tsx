// ============================================================
// GES SOLAR PRO — Admin Projects CRUD
// ============================================================
import prisma from '@/lib/prisma';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DeleteProjectButton } from '@/components/admin/delete-button';

export default async function AdminProjectsPage() {
  const projects = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-0">Projeler</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{projects.length} proje</p>
        </div>
        <Link href="/admin/projeler/yeni">
          <Button variant="solar" size="md">+ Yeni Proje</Button>
        </Link>
      </div>

      <Card padding="none" variant="elevated">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-800">
                <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">Proje</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">Kapasite</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">Kategori</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wider">Yıl</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-neutral-500 uppercase tracking-wider">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
              {projects.map((p) => (
                <tr key={p.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-neutral-900 dark:text-neutral-0">{p.title}</div>
                    <div className="text-xs text-neutral-400">{p.location}</div>
                  </td>
                  <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{p.capacity}</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-solar-500/10 px-2.5 py-0.5 text-xs font-medium text-solar-700 dark:text-solar-400">
                      {p.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-neutral-600 dark:text-neutral-400">{p.year}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/projeler/${p.id}`}>
                        <Button variant="ghost" size="sm">Düzenle</Button>
                      </Link>
                      <DeleteProjectButton id={p.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
