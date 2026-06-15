// ============================================================
// GES SOLAR PRO — Admin New Project Form
// ============================================================
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { createProject } from '@/lib/actions';
import Link from 'next/link';

export default function NewProjectPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <Link href="/admin/projeler" className="text-sm text-neutral-500 hover:text-primary-600 dark:hover:text-solar-400">← Projelere Dön</Link>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-0 mt-2">Yeni Proje</h2>
      </div>

      <Card padding="xl" variant="elevated">
        <form action={createProject} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="title" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Proje Adı *</label>
              <input id="title" name="title" required className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Slug</label>
              <input id="slug" name="slug" className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" placeholder="otomatik-uretilir" />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Kategori</label>
              <select id="category" name="category" className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0">
                <option>Arazi GES</option><option>Çatı GES</option>
              </select>
            </div>
            <div>
              <label htmlFor="capacity" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Kapasite *</label>
              <input id="capacity" name="capacity" required className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" placeholder="25 MW" />
            </div>
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Lokasyon *</label>
              <input id="location" name="location" required className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" placeholder="Konya, Türkiye" />
            </div>
            <div>
              <label htmlFor="area" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Alan</label>
              <input id="area" name="area" className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" placeholder="350.000 m²" />
            </div>
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Yıl</label>
              <input id="year" name="year" className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" placeholder="2026" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="coverImage" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Kapak Görseli URL</label>
              <input id="coverImage" name="coverImage" className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" placeholder="/uploads/proje.jpg" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Açıklama *</label>
              <textarea id="description" name="description" required rows={4} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
          </div>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="featured" className="h-4 w-4 rounded border-neutral-300 text-solar-500 focus:ring-solar-500" />
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Ana sayfada öne çıkar</span>
          </label>
          <div className="flex gap-4">
            <Button type="submit" variant="solar" size="lg">Projeyi Kaydet</Button>
            <Link href="/admin/projeler"><Button variant="outline" size="lg">İptal</Button></Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
