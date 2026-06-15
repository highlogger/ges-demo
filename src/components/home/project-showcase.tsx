'use client';

// ============================================================
// GES SOLAR PRO — Project Showcase
// Premium project cards with image hover effects
// ============================================================
import { useRef } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/components/animations/scroll-reveal';

const projects = [
  {
    title: 'Konya Karatay GES',
    capacity: '25 MW',
    location: 'Konya, Türkiye',
    area: '350.000 m²',
    year: '2024',
    image: '/projects/konya-ges.jpg',
    category: 'Arazi GES',
  },
  {
    title: 'İzmir Organize Sanayi Çatı GES',
    capacity: '4.2 MW',
    location: 'İzmir, Türkiye',
    area: '45.000 m²',
    year: '2024',
    image: '/projects/izmir-ges.jpg',
    category: 'Çatı GES',
  },
  {
    title: 'Ankara Lojistik Merkezi GES',
    capacity: '8 MW',
    location: 'Ankara, Türkiye',
    area: '120.000 m²',
    year: '2023',
    image: '/projects/ankara-ges.jpg',
    category: 'Arazi GES',
  },
];

export function ProjectShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal({ target: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="py-[var(--section-lg)] bg-white dark:bg-neutral-900"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
        <SectionHeading
          eyebrow="Projeler"
          title="Tamamlanmış GES Projelerimiz"
          description="Türkiye genelinde tamamladığımız örnek projelerimiz. Her biri özenle tasarlanmış ve maksimum verimlilik için optimize edilmiştir."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Link
              key={project.title}
              href={`/projeler/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group scroll-reveal-item relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-md transition-all duration-700 hover:shadow-xl hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-solar-700"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Image placeholder with gradient */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary-600 via-primary-800 to-primary-900">
                {/* Solar panel grid pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(30deg, rgba(245,166,35,0.3) 1px, transparent 1px),
                      linear-gradient(-30deg, rgba(245,166,35,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                  }}
                />
                {/* Glow */}
                <div className="absolute -bottom-8 right-0 h-24 w-full bg-gradient-to-t from-primary-900 to-transparent" />

                {/* Category badge */}
                <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  {project.category}
                </span>

                {/* Capacity badge */}
                <span className="absolute right-4 top-4 rounded-full bg-solar-500 px-3 py-1 text-xs font-bold text-neutral-950 shadow-glow">
                  {project.capacity}
                </span>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-neutral-900 transition-colors group-hover:text-primary-600 dark:text-neutral-0 dark:group-hover:text-solar-400">
                  {project.title}
                </h3>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                    </svg>
                    {project.area}
                  </span>
                  <span>{project.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="mt-12 text-center">
          <Button href="/projeler" variant="outline" size="lg">
            Tüm Projeleri Gör
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
