// ============================================================
// GES SOLAR PRO — Admin New Blog Post
// ============================================================
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ImageUpload } from '@/components/shared/image-upload';
import { createBlogPost } from '@/lib/actions';
import Link from 'next/link';

export default function NewBlogPostPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <Link href="/admin/blog" className="text-sm text-neutral-500 hover:text-primary-600 dark:hover:text-solar-400">← Blog'a Dön</Link>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-0 mt-2">Yeni Blog Yazısı</h2>
      </div>

      <Card padding="xl" variant="elevated">
        <form action={createBlogPost} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="title" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Başlık *</label>
              <input id="title" name="title" required className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Slug</label>
              <input id="slug" name="slug" className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Kategori</label>
              <select id="category" name="category" className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0">
                <option>Mevzuat</option><option>Teknik</option><option>Sürdürülebilirlik</option><option>Finans</option>
              </select>
            </div>
            <div>
              <label htmlFor="readTime" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Okuma Süresi</label>
              <input id="readTime" name="readTime" defaultValue="5 dk" className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div className="sm:col-span-2">
              <ImageUpload name="coverImage" label="Kapak Görseli" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="excerpt" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Özet *</label>
              <textarea id="excerpt" name="excerpt" required rows={2} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="content" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">İçerik (HTML) *</label>
              <textarea id="content" name="content" required rows={15} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm font-mono focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" placeholder="<h2>Başlık</h2><p>Paragraf...</p>" />
              <p className="mt-1 text-[11px] text-neutral-400">HTML formatında yazabilirsiniz. TipTap editör yakında eklenecek.</p>
            </div>
          </div>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="published" className="h-4 w-4 rounded border-neutral-300 text-solar-500 focus:ring-solar-500" />
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Hemen yayınla</span>
          </label>
          <div className="flex gap-4">
            <Button type="submit" variant="solar" size="lg">Yazıyı Kaydet</Button>
            <Link href="/admin/blog"><Button variant="outline" size="lg">İptal</Button></Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
