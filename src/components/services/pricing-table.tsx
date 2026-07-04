// ============================================================
// GES SOLAR PRO — Pricing / Comparison Table
// ============================================================
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

export function PricingTable() {
  return (
    <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900 overflow-hidden">
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
        <SectionHeading
          eyebrow="Karşılaştırma"
          title="Hizmetlerimiz Yan Yana"
          description="İhtiyacınıza en uygun hizmeti seçmeniz için dört hizmet kategorimizin kapsamlı karşılaştırması."
        />
        {/* Mobile: stacked cards */}
        <div className="mt-16 space-y-6 lg:hidden">
          {services.map((s) => (
            <div key={s.slug} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-0">{s.title}</h3>
                  <span className="text-xs font-bold text-solar-600 dark:text-solar-400">{s.capacity}</span>
                </div>
              </div>
              <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2">{s.description}</p>
              <Button href={`/hizmetler/${s.slug}`} variant="outline" size="sm" className="mt-4 w-full justify-center">
                Detaylı Bilgi
              </Button>
            </div>
          ))}
        </div>

        {/* Desktop: comparison table */}
        <div className="mt-16 hidden lg:block">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-neutral-50 dark:bg-neutral-900">
                  <th className="px-6 py-5 text-sm font-semibold text-neutral-500 dark:text-neutral-400">Hizmet</th>
                  <th className="px-6 py-5 text-sm font-semibold text-neutral-500 dark:text-neutral-400">Kapsam</th>
                  <th className="px-6 py-5 text-sm font-semibold text-neutral-500 dark:text-neutral-400">Kapasite</th>
                  <th className="px-6 py-5 text-sm font-semibold text-neutral-500 dark:text-neutral-400">Öne Çıkan</th>
                  <th className="px-6 py-5" />
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {services.map((s, i) => (
                  <tr key={s.slug} className={`transition-colors hover:bg-neutral-50/50 dark:hover:bg-neutral-900/50 ${i % 2 === 0 ? 'bg-white dark:bg-neutral-950' : 'bg-neutral-50/30 dark:bg-neutral-900/30'}`}>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{s.icon}</span>
                        <div>
                          <div className="font-semibold text-neutral-900 dark:text-neutral-0">{s.title}</div>
                          <div className="text-xs text-neutral-400">{s.subtitle}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm text-neutral-600 dark:text-neutral-300 max-w-xs">
                      {s.description.slice(0, 120)}…
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex rounded-full bg-solar-500/10 px-3 py-1 text-xs font-bold text-solar-600 dark:text-solar-400">
                        {s.capacity}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <ul className="space-y-1">
                        {s.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                            <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-5">
                      <Button href={`/hizmetler/${s.slug}`} variant="primary" size="sm">
                        İncele
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Hangi hizmetin size uygun olduğundan emin değil misiniz?
          </p>
          <Button href="/iletisim" variant="solar" size="md" className="mt-3">
            Ücretsiz Danışmanlık Alın
          </Button>
        </div>
      </div>
    </section>
  );
}
