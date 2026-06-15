// ============================================================
// GES SOLAR PRO — Admin References
// ============================================================
import prisma from '@/lib/prisma';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { createReference } from '@/lib/actions';
import { DeleteReferenceButton } from '@/components/admin/delete-button';

export default async function AdminReferencesPage() {
  const refs = await prisma.reference.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-0">Referanslar</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{refs.length} referans</p>
        </div>
      </div>

      {/* Quick add form */}
      <Card padding="lg" variant="elevated">
        <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-4">Yeni Referans Ekle</h3>
        <form action={createReference} className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <input name="author" required placeholder="Ad Soyad *" className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-solar-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div>
              <input name="role" required placeholder="Ünvan (örn: Genel Müdür) *" className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-solar-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div>
              <input name="company" required placeholder="Firma *" className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-solar-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div>
              <input name="capacity" required placeholder="Kapasite (örn: 4.2 MW Çatı GES) *" className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-solar-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
            <div className="sm:col-span-2">
              <textarea name="quote" required placeholder="Alıntı / Yorum *" rows={2} className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-solar-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit" variant="solar" size="sm">Ekle</Button>
          </div>
        </form>
      </Card>

      {/* List */}
      <div className="space-y-3">
        {refs.map((r) => (
          <Card key={r.id} padding="md" variant="default">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-solar-500 text-sm font-bold text-white">
                {r.author[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-neutral-600 dark:text-neutral-300 italic">&ldquo;{r.quote}&rdquo;</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">{r.author}</span>
                  <span className="text-xs text-neutral-400">— {r.role}, {r.company}</span>
                </div>
                <span className="mt-1 inline-block rounded-full bg-solar-500/10 px-2 py-0.5 text-[10px] font-medium text-solar-700 dark:text-solar-400">{r.capacity}</span>
              </div>
              <DeleteReferenceButton id={r.id} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
