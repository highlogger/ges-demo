'use client';

// ============================================================
// GES SOLAR PRO — Blog Preview
// Latest articles grid with category badges
// ============================================================
import { useRef } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/components/animations/scroll-reveal';

const posts = [
  {
    title: '2026 GES Teşvikleri ve Yeni Destekleme Mekanizmaları',
    excerpt: 'Yenilenebilir enerji kaynakları destekleme mekanizması (YEKDEM) kapsamında 2026 yılında geçerli olacak yeni teşvikler ve başvuru süreçleri...',
    date: '12 Haziran 2026',
    category: 'Mevzuat',
    readTime: '5 dk',
    href: '/blog/2026-ges-tesvikleri',
  },
  {
    title: 'Çatı GES Kurulumunda Dikkat Edilmesi Gereken 10 Kritik Nokta',
    excerpt: 'Çatı güneş enerjisi sistemleri kurulum öncesinde statik analizden inverter seçimine kadar mutlaka değerlendirmeniz gereken teknik detaylar...',
    date: '5 Haziran 2026',
    category: 'Teknik',
    readTime: '8 dk',
    href: '/blog/cati-ges-kritik-noktalar',
  },
  {
    title: 'Güneş Enerjisi ile Fabrikanızın Karbon Ayak İzini Sıfırlayın',
    excerpt: 'Sürdürülebilir üretim hedeflerinize ulaşmak için güneş enerjisi yatırımı. AB Sınırda Karbon Düzenleme Mekanizması (CBAM) uyumluluğu...',
    date: '28 Mayıs 2026',
    category: 'Sürdürülebilirlik',
    readTime: '6 dk',
    href: '/blog/karbon-ayak-izi-sifirlama',
  },
];

export function BlogPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal({ target: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="py-[var(--section-lg)] bg-white dark:bg-neutral-900"
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
        <SectionHeading
          eyebrow="Blog"
          title="Enerji Dünyasından Haberler"
          description="Güneş enerjisi sektöründeki son gelişmeler, teknik ipuçları ve mevzuat güncellemeleri."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Link
              key={post.href}
              href={post.href}
              className="group scroll-reveal-item flex flex-col transition-all"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <article className="flex flex-1 flex-col">
                {/* Category & meta */}
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-solar-500/10 px-3 py-1 font-medium text-solar-700 dark:text-solar-400">
                    {post.category}
                  </span>
                  <span className="text-neutral-400 dark:text-neutral-500">
                    {post.readTime} okuma
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-primary-600 dark:text-neutral-0 dark:group-hover:text-solar-400">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-500">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  {post.date}
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/blog" variant="outline" size="lg">
            Tüm Yazılar
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
