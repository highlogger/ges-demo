// ============================================================
// GES SOLAR PRO — Mission & Vision Section
// ============================================================
import { Card } from '@/components/ui/card';

export function MissionVision() {
  return (
    <section className="py-[var(--section-lg)] bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Mission */}
          <Card padding="xl" hover className="group relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-solar-500/5 transition-all group-hover:bg-solar-500/10" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/10">
                <svg className="h-7 w-7 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <span className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.15em] text-solar-600 dark:text-solar-400">
                Misyonumuz
              </span>
              <h2 className="mt-2 font-[var(--font-display)] text-2xl font-bold text-neutral-900 dark:text-neutral-0">
                Enerjiyi demokratikleştirmek
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
                Türkiye&apos;de yenilenebilir enerjiye erişimi kolaylaştırmak, her ölçekteki işletmenin ve hanenin
                kendi enerjisini üretmesini sağlamak için çalışıyoruz. Güneş enerjisini ulaşılabilir,
                ekonomik ve sürdürülebilir kılmak temel amacımızdır.
              </p>
            </div>
          </Card>

          {/* Vision */}
          <Card padding="xl" hover className="group relative overflow-hidden">
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-primary-500/5 transition-all group-hover:bg-primary-500/10" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-solar-500/10">
                <svg className="h-7 w-7 text-solar-600 dark:text-solar-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.15em] text-primary-600 dark:text-primary-400">
                Vizyonumuz
              </span>
              <h2 className="mt-2 font-[var(--font-display)] text-2xl font-bold text-neutral-900 dark:text-neutral-0">
                Türkiye&apos;nin güneş enerjisi lideri
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
                2030 yılına kadar Türkiye&apos;nin en büyük 3 GES kurulum firması arasında yer almayı ve yılda
                500 MW+ kurulu güç eklemeyi hedefliyoruz. Sadece enerji üretmekle kalmayıp, temiz enerji
                kültürünü ve bilincini toplumun her kesimine yaymayı amaçlıyoruz.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
