// ============================================================
// GES SOLAR PRO — Services Page
// Hero + service cards + CTA
// ============================================================
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Hizmetler',
  description: 'Arazi GES, çatı GES, enerji danışmanlığı ve bakım & izleme hizmetlerimiz.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-20 pt-28 lg:py-28 lg:pt-36">
        <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        <div className="relative mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-solar-500/30 bg-solar-500/10 px-4 py-1.5 text-xs font-semibold text-solar-400 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-solar-400 animate-pulse" />
              Hizmetlerimiz
            </span>
            <h1 className="mt-6 font-[var(--font-display)] text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Tam Kapsamlı GES Çözümleri
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-neutral-300/80 max-w-2xl">
              Fizibiliteden anahtar teslime, lisanslamadan bakıma — güneş enerjisinde ihtiyacınız olan her şey.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/iletisim" variant="solar" size="lg">
                Ücretsiz Keşif Randevusu
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button href="/enerji-hesaplayici" variant="outline" size="lg" className="border-white/20 text-white hover:border-white/50 hover:bg-white/10">
                Enerji Hesaplayıcı
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services — alternating rows */}
      <section className="py-16 lg:py-24 bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="mb-12 lg:mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-600 dark:text-solar-400">
              Çözümlerimiz
            </span>
            <h2 className="mt-2 font-[var(--font-display)] text-3xl font-bold text-neutral-900 dark:text-neutral-0 lg:text-4xl">
              Dört Ana Hizmet Kategorisi
            </h2>
            <p className="mt-3 text-neutral-500 dark:text-neutral-400 max-w-2xl">
              Her ölçekten işletme ve yatırımcı için özel olarak tasarlanmış, uçtan uca güneş enerjisi hizmetleri.
            </p>
          </div>

          {services.map((service, i) => (
            <div
              key={service.slug}
              className={`flex flex-col gap-8 pb-16 lg:pb-20 last:pb-0 ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } lg:gap-16 lg:items-center`}
            >
              {/* Visual card */}
              <div className="w-full lg:w-1/2 shrink-0">
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-800 to-primary-900">
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage:
                        'linear-gradient(30deg, rgba(245,166,35,0.3) 1px, transparent 1px), linear-gradient(-30deg, rgba(245,166,35,0.3) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <span className="relative text-6xl lg:text-7xl">{service.icon}</span>
                  <span className="absolute bottom-5 left-5 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                    {service.capacity}
                  </span>
                  {service.techSpecs.slice(0, 2).map((spec) => (
                    <span key={spec.label} className="absolute right-5 top-5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium text-white/80 backdrop-blur-sm">
                      {spec.label}: {spec.value}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-600 dark:text-solar-400">
                  {service.subtitle}
                </span>
                <h3 className="mt-2 font-[var(--font-display)] text-2xl font-bold text-neutral-900 dark:text-neutral-0 lg:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Tech specs chips */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.techSpecs.map((spec) => (
                    <span key={spec.label} className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[11px] text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                      <span className="font-semibold text-neutral-700 dark:text-neutral-200">{spec.label}:</span> {spec.value}
                    </span>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={`/hizmetler/${service.slug}`} variant="primary" size="md">
                    Detaylı Bilgi
                  </Button>
                  <Button href="/iletisim" variant="outline" size="md">
                    Teklif Alın
                  </Button>
                </div>
              </div>

              {/* Divider */}
              {i < services.length - 1 && (
                <div className="hidden last:hidden w-full border-b border-neutral-100 dark:border-neutral-800 lg:hidden" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Neden Biz? — compact inline */}
      <section className="py-16 lg:py-24 bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="mb-12 text-center lg:mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-600 dark:text-solar-400">
              Neden SolarTech?
            </span>
            <h2 className="mt-2 font-[var(--font-display)] text-3xl font-bold text-neutral-900 dark:text-neutral-0 lg:text-4xl">
              Bizi Tercih Etmeniz İçin 5 Neden
            </h2>
          </div>

          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-5">
            {[
              { title: 'EPDK Lisanslı', desc: 'Yasal mevzuata tam uyumlu projelendirme ve kurulum hizmeti.', icon: '🛡️' },
              { title: '10+ Yıl Deneyim', desc: '2015\'ten bu yana en karmaşık projeleri başarıyla teslim ediyoruz.', icon: '⭐' },
              { title: 'Anahtar Teslim', desc: 'Fizibiliteden devreye almaya tüm süreci tek elden yönetiyoruz.', icon: '🔑' },
              { title: '7/24 Destek', desc: 'Arıza durumunda 48 saat içinde müdahale garantisi.', icon: '📡' },
              { title: '5 Yıl Garanti', desc: 'Tüm kurulumlarda 5 yıl işletme, 25 yıl panel garantisi.', icon: '🔒' },
            ].map((usp) => (
              <div
                key={usp.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 transition-all hover:border-solar-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-solar-600"
              >
                <span className="text-3xl">{usp.icon}</span>
                <h3 className="mt-3 font-semibold text-neutral-900 dark:text-neutral-0">{usp.title}</h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-12">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-600 dark:text-solar-400">
            Harekete Geçin
          </span>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-bold text-neutral-900 dark:text-neutral-0 lg:text-4xl">
            Güneş Enerjisine Geçişin İlk Adımı
          </h2>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400">
            Ücretsiz keşif randevusu ile tesisinizin güneş enerjisi potansiyelini hemen öğrenin.
            Size özel fizibilite raporu ve yatırım geri dönüş analizi hazırlayalım.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/iletisim" variant="solar" size="lg">
              Ücretsiz Keşif Randevusu
            </Button>
            <Button href="/enerji-hesaplayici" variant="outline" size="lg">
              Enerji Hesaplayıcı
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
