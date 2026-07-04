// ============================================================
// GES SOLAR PRO — Case Studies / Reference Projects Preview
// ============================================================
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const featuredProjects = [
  {
    slug: 'konya-karatay-ges',
    title: 'Konya Karatay GES',
    capacity: '25 MW',
    location: 'Konya',
    area: '350.000 m²',
    year: '2024',
    category: 'Arazi GES',
    description: 'İç Anadolu\'nun en büyük özel sektör GES yatırımlarından biri. 25 MW kurulu güç ile yılda 45.000 MWh temiz enerji üretimi.',
  },
  {
    slug: 'izmir-osb-cati-ges',
    title: 'İzmir OSB Çatı GES',
    capacity: '4.2 MW',
    location: 'İzmir',
    area: '45.000 m²',
    year: '2024',
    category: 'Çatı GES',
    description: 'Organize Sanayi Bölgesi\'ndeki 5 fabrikanın çatısına kurulan toplam 4.2 MW gücündeki çatı GES sistemi.',
  },
  {
    slug: 'antalya-sera-ges',
    title: 'Antalya Sera GES',
    capacity: '12 MW',
    location: 'Antalya',
    area: '180.000 m²',
    year: '2024',
    category: 'Arazi GES',
    description: 'Modern tarım seralarının enerji ihtiyacını karşılamak üzere tasarlanan 12 MW hibrit arazi GES santrali.',
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="py-[var(--section-lg)] bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
        <SectionHeading
          eyebrow="Başarı Hikayeleri"
          title="Öne Çıkan Projelerimiz"
          description="Her ölçekte ve her koşulda başarıyla tamamladığımız projelerden seçmeler."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projeler/${project.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900"
            >
              {/* Visual placeholder */}
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

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-neutral-900 transition-colors group-hover:text-primary-600 dark:text-neutral-0">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-xs text-neutral-400">
                  <span className="inline-flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {project.location}
                  </span>
                  <span>{project.area}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/projeler" variant="outline" size="lg">
            Tüm Projeleri Görüntüle
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
