// ============================================================
// GES SOLAR PRO — Admin Edit Project Form
// ============================================================
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { updateProject } from '@/lib/actions';
import Link from 'next/link';

interface Props { params: Promise<{ id: string }> }

export default async function EditProjectPage({ params }: Props) {
  const { id } = await params;
  const project = await prisma.project.findUnique({ where: { id } });
  if (!project) notFound();

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <Link href="/admin/projeler" className="text-sm text-neutral-500 hover:text-primary-600 dark:hover:text-solar-400">← Projelere Dön</Link>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-0 mt-2">{project.title}</h2>
      </div>

      <Card padding="xl" variant="elevated">
        <form action={updateProject.bind(null, id)} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="title" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Proje Adı</label>
              <input id="title" name="title" defaultValue={project.title} required className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Kategori</label>
              <select id="category" name="category" defaultValue={project.category} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0">
                <option>Arazi GES</option><option>Çatı GES</option>
              </select>
            </div>
            <div>
              <label htmlFor="capacity" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Kapasite</label>
              <input id="capacity" name="capacity" defaultValue={project.capacity} required className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Lokasyon</label>
              <input id="location" name="location" defaultValue={project.location} required className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div>
              <label htmlFor="area" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Alan</label>
              <input id="area" name="area" defaultValue={project.area || ''} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Yıl</label>
              <input id="year" name="year" defaultValue={project.year} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Açıklama</label>
              <textarea id="description" name="description" defaultValue={project.description} required rows={4} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="featured" defaultChecked={project.featured} className="h-4 w-4 rounded border-neutral-300" />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Öne çıkar</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="published" defaultChecked={project.published} className="h-4 w-4 rounded border-neutral-300" />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">Yayında</span>
            </label>
          </div>
          <div className="flex gap-4">
            <Button type="submit" variant="solar" size="lg">Kaydet</Button>
            <Link href="/admin/projeler"><Button variant="outline" size="lg">İptal</Button></Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
