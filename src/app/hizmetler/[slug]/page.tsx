// ============================================================
// GES SOLAR PRO — Service Detail Page
// Dynamic route for each service — expanded with benefits, tech specs, related projects
// ============================================================
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { serviceDetails, services } from '@/data/services';

// Reuse project data pattern from the projects page for related projects
const allProjects: Record<string, { title: string; capacity: string; location: string; area: string; year: string; category: string }> = {
  'konya-karatay-ges': { title: 'Konya Karatay GES', capacity: '25 MW', location: 'Konya', area: '350.000 m²', year: '2024', category: 'Arazi GES' },
  'izmir-osb-cati-ges': { title: 'İzmir OSB Çatı GES', capacity: '4.2 MW', location: 'İzmir', area: '45.000 m²', year: '2024', category: 'Çatı GES' },
  'ankara-lojistik-ges': { title: 'Ankara Lojistik Merkezi', capacity: '8 MW', location: 'Ankara', area: '120.000 m²', year: '2023', category: 'Arazi GES' },
  'bursa-tekstil-ges': { title: 'Bursa Tekstil Fabrikası', capacity: '3.5 MW', location: 'Bursa', area: '38.000 m²', year: '2023', category: 'Çatı GES' },
  'antalya-sera-ges': { title: 'Antalya Sera GES', capacity: '12 MW', location: 'Antalya', area: '180.000 m²', year: '2024', category: 'Arazi GES' },
  'gaziantep-fabrika-ges': { title: 'Gaziantep Fabrika', capacity: '2.8 MW', location: 'Gaziantep', area: '30.000 m²', year: '2023', category: 'Çatı GES' },
  'tekirdag-depolama-ges': { title: 'Tekirdağ Depolama', capacity: '5.5 MW', location: 'Tekirdağ', area: '80.000 m²', year: '2022', category: 'Arazi GES' },
  'denizli-uretim-ges': { title: 'Denizli Üretim Tesisi', capacity: '1.8 MW', location: 'Denizli', area: '22.000 m²', year: '2022', category: 'Çatı GES' },
  'eskisehir-sanayi-ges': { title: 'Eskişehir Sanayi', capacity: '6.2 MW', location: 'Eskişehir', area: '90.000 m²', year: '2024', category: 'Arazi GES' },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails[slug];
  if (!service) return { title: 'Hizmet Bulunamadı' };
  return {
    title: service.title,
    description: service.hero,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceDetails[slug];
  if (!service) notFound();

  // Get the listing data for tech specs
  const listing = services.find((s) => s.slug === slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24 pt-32 lg:py-32 lg:pt-40">
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
          <Link href="/hizmetler" className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-solar-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Tüm Hizmetler
          </Link>
          <h1 className="mt-4 max-w-3xl font-[var(--font-display)] text-4xl font-bold leading-tight text-white lg:text-6xl">
            {service.hero}
          </h1>
        </div>
      </section>

      {/* Benefits / Avantajlar */}
      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <SectionHeading eyebrow="Avantajlar" title="Neden Bu Hizmet?" align="center" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b) => (
              <Card key={b.title} padding="lg" hover className="text-center group">
                <div className="text-4xl">{b.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-0">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{b.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-[var(--section-lg)] bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <SectionHeading eyebrow="Süreç" title="Nasıl Çalışıyoruz?" align="center" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step) => (
              <Card key={step.step} padding="lg" hover className="group">
                <span className="font-[var(--font-display)] text-4xl font-bold text-neutral-200 transition-colors group-hover:text-solar-400 dark:text-neutral-800">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-neutral-0">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      {listing && listing.techSpecs.length > 0 && (
        <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
          <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
            <SectionHeading eyebrow="Özellikler" title="Teknik Detaylar" align="center" />
            <div className="mt-16 mx-auto max-w-3xl overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full">
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  {listing.techSpecs.map((spec, i) => (
                    <tr key={spec.label} className={i % 2 === 0 ? 'bg-white dark:bg-neutral-950' : 'bg-neutral-50/50 dark:bg-neutral-900/50'}>
                      <td className="px-6 py-4 text-sm font-semibold text-neutral-700 dark:text-neutral-200 w-1/2">{spec.label}</td>
                      <td className="px-6 py-4 text-sm text-neutral-500 dark:text-neutral-400">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-[var(--section-lg)] bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <SectionHeading eyebrow="SSS" title="Sıkça Sorulan Sorular" align="center" />
          <div className="mt-12 space-y-4">
            {service.faq.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-neutral-900 dark:text-neutral-0">
                  {item.q}
                  <svg className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-6 text-neutral-500 dark:text-neutral-400">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {service.relatedProjectSlugs.length > 0 && (
        <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
          <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
            <SectionHeading eyebrow="Referanslar" title="Benzer Projelerimiz" align="center" />
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.relatedProjectSlugs.map((projectSlug) => {
                const project = allProjects[projectSlug];
                if (!project) return null;
                return (
                  <Link
                    key={projectSlug}
                    href={`/projeler/${projectSlug}`}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary-600 via-primary-800 to-primary-900">
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            'linear-gradient(30deg, rgba(245,166,35,0.3) 1px, transparent 1px), linear-gradient(-30deg, rgba(245,166,35,0.3) 1px, transparent 1px)',
                          backgroundSize: '30px 30px',
                        }}
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                        {project.category}
                      </span>
                      <span className="absolute right-4 top-4 rounded-full bg-solar-500 px-3 py-1 text-xs font-bold text-neutral-950 shadow-glow">
                        {project.capacity}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-lg font-semibold text-neutral-900 transition-colors group-hover:text-primary-600 dark:text-neutral-0">
                        {project.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                        <span>{project.location}</span>
                        <span>{project.area}</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="mt-10 text-center">
              <Button href="/projeler" variant="outline" size="md">
                Tüm Projeleri Gör
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Other Services Quick Links */}
      <section className="py-[var(--section-lg)] bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <SectionHeading eyebrow="Diğer Hizmetler" title="Bunlar da İlginizi Çekebilir" align="center" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${s.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all hover:border-solar-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-solar-600"
                >
                  <span className="text-3xl">{s.icon}</span>
                  <div>
                    <h3 className="font-semibold text-neutral-900 group-hover:text-primary-600 dark:text-neutral-0">{s.title}</h3>
                    <p className="text-xs text-neutral-400">{s.capacity}</p>
                  </div>
                  <svg className="ml-auto h-5 w-5 shrink-0 text-neutral-300 transition-transform group-hover:translate-x-1 group-hover:text-solar-500 dark:text-neutral-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-12">
          <h2 className="font-[var(--font-display)] text-3xl font-bold text-neutral-900 dark:text-neutral-0">
            {service.cta}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/iletisim" variant="solar" size="lg">
              Hemen Teklif Alın
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
