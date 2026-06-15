// ============================================================
// GES SOLAR PRO — Admin Edit Blog Post
// ============================================================
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { updateBlogPost } from '@/lib/actions';
import Link from 'next/link';

interface Props { params: Promise<{ id: string }> }

export default async function EditBlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = await prisma.blogPost.findUnique({ where: { id } });
  if (!post) notFound();

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <Link href="/admin/blog" className="text-sm text-neutral-500 hover:text-primary-600 dark:hover:text-solar-400">← Blog'a Dön</Link>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-0 mt-2">{post.title}</h2>
      </div>

      <Card padding="xl" variant="elevated">
        <form action={updateBlogPost.bind(null, id)} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="title" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Başlık</label>
              <input id="title" name="title" defaultValue={post.title} required className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Kategori</label>
              <select id="category" name="category" defaultValue={post.category} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0">
                <option>Mevzuat</option><option>Teknik</option><option>Sürdürülebilirlik</option><option>Finans</option>
              </select>
            </div>
            <div>
              <label htmlFor="readTime" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Okuma Süresi</label>
              <input id="readTime" name="readTime" defaultValue={post.readTime} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="excerpt" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Özet</label>
              <textarea id="excerpt" name="excerpt" defaultValue={post.excerpt} required rows={2} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="content" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">İçerik (HTML)</label>
              <textarea id="content" name="content" defaultValue={post.content} required rows={15} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm font-mono focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
          </div>
          <label className="flex items-center gap-2">
            <input type="checkbox" name="published" defaultChecked={post.published} className="h-4 w-4 rounded border-neutral-300" />
            <span className="text-sm text-neutral-600 dark:text-neutral-400">Yayında</span>
          </label>
          <div className="flex gap-4">
            <Button type="submit" variant="solar" size="lg">Kaydet</Button>
            <Link href="/admin/blog"><Button variant="outline" size="lg">İptal</Button></Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
