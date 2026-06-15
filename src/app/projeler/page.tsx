// ============================================================
// GES SOLAR PRO — Projects Page
// ============================================================
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projeler',
  description: 'Tamamlanmış ve devam eden GES projelerimiz.',
};

const projects = [
  { title: 'Konya Karatay GES', capacity: '25 MW', location: 'Konya', area: '350.000 m²', year: '2024', category: 'Arazi GES', slug: 'konya-karatay-ges' },
  { title: 'İzmir OSB Çatı GES', capacity: '4.2 MW', location: 'İzmir', area: '45.000 m²', year: '2024', category: 'Çatı GES', slug: 'izmir-osb-cati-ges' },
  { title: 'Ankara Lojistik Merkezi', capacity: '8 MW', location: 'Ankara', area: '120.000 m²', year: '2023', category: 'Arazi GES', slug: 'ankara-lojistik-ges' },
  { title: 'Bursa Tekstil Fabrikası', capacity: '3.5 MW', location: 'Bursa', area: '38.000 m²', year: '2023', category: 'Çatı GES', slug: 'bursa-tekstil-ges' },
  { title: 'Antalya Sera GES', capacity: '12 MW', location: 'Antalya', area: '180.000 m²', year: '2024', category: 'Arazi GES', slug: 'antalya-sera-ges' },
  { title: 'Gaziantep Fabrika', capacity: '2.8 MW', location: 'Gaziantep', area: '30.000 m²', year: '2023', category: 'Çatı GES', slug: 'gaziantep-fabrika-ges' },
  { title: 'Tekirdağ Depolama', capacity: '5.5 MW', location: 'Tekirdağ', area: '80.000 m²', year: '2022', category: 'Arazi GES', slug: 'tekirdag-depolama-ges' },
  { title: 'Denizli Üretim Tesisi', capacity: '1.8 MW', location: 'Denizli', area: '22.000 m²', year: '2022', category: 'Çatı GES', slug: 'denizli-uretim-ges' },
  { title: 'Eskişehir Sanayi', capacity: '6.2 MW', location: 'Eskişehir', area: '90.000 m²', year: '2024', category: 'Arazi GES', slug: 'eskisehir-sanayi-ges' },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24 pt-32 lg:py-32 lg:pt-40">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-400">Portföy</span>
            <h1 className="mt-4 font-[var(--font-display)] text-5xl font-bold leading-tight text-white lg:text-7xl">
              Projelerimiz
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-neutral-300/80">
              Türkiye genelinde tamamladığımız ve devam eden güneş enerjisi santrali projelerimiz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {['Tümü', 'Arazi GES', 'Çatı GES'].map((f) => (
              <button key={f} className="rounded-full border border-neutral-200 px-5 py-2 text-sm font-medium text-neutral-600 transition-all hover:border-solar-300 hover:text-solar-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-solar-600 dark:hover:text-solar-400">
                {f}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projeler/${project.slug}`} className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900">
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary-600 via-primary-800 to-primary-900">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(30deg, rgba(245,166,35,0.3) 1px, transparent 1px), linear-gradient(-30deg, rgba(245,166,35,0.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                  <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">{project.category}</span>
                  <span className="absolute right-4 top-4 rounded-full bg-solar-500 px-3 py-1 text-xs font-bold text-neutral-950 shadow-glow">{project.capacity}</span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-neutral-900 transition-colors group-hover:text-primary-600 dark:text-neutral-0">{project.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                    <span>{project.location}</span><span>{project.area}</span><span>{project.year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
