'use client';

// ============================================================
// GES SOLAR PRO — References & Testimonials Slider
// Infinite scroll / carousel of client logos and quotes
// ============================================================
import { useRef, useState, useCallback } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { useScrollReveal } from '@/components/animations/scroll-reveal';

const testimonials = [
  {
    quote: 'SolarTech Enerji ile çalışmak bir dönüm noktasıydı. Fabrikamızın çatısına kurdukları 4.2 MW\'lık sistem sayesinde enerji maliyetlerimiz %60 azaldı. Yatırım geri dönüş süremiz 3 yılın altında gerçekleşti.',
    author: 'Ahmet Yılmaz',
    role: 'Genel Müdür',
    company: 'Ege Tekstil A.Ş.',
    capacity: '4.2 MW Çatı GES',
  },
  {
    quote: 'Profesyonel ekip, zamanında teslim, sorunsuz işletme. 25 MW\'lık arazi GES projemizi planlanandan 2 ay önce devreye aldılar. EPDK süreçlerindeki deneyimleri paha biçilmez.',
    author: 'Mehmet Kaya',
    role: 'Yönetim Kurulu Başkanı',
    company: 'Anadolu Enerji Yatırımları',
    capacity: '25 MW Arazi GES',
  },
  {
    quote: 'Enerji danışmanlıkları sayesinde doğru sistem boyutlandırması yaptık. Gereksiz yatırımdan kaçındık ve tam ihtiyacımız olan kapasiteyi kurduk. İzleme sistemleri muazzam.',
    author: 'Ayşe Demir',
    role: 'Fabrika Müdürü',
    company: 'Marmara Otomotiv',
    capacity: '2.8 MW Çatı GES',
  },
  {
    quote: 'Bakım ve izleme hizmetleri sayesinde panel verimliliğimiz sürekli maksimumda. Kir, toz, gölgeleme gibi sorunları anında tespit edip müdahale ediyorlar.',
    author: 'Can Özkan',
    role: 'Teknik Direktör',
    company: 'Akdeniz Tarım',
    capacity: '8 MW Arazi GES',
  },
];

const logos = [
  { name: 'Ege Tekstil', initial: 'E' },
  { name: 'Anadolu Enerji', initial: 'A' },
  { name: 'Marmara Otomotiv', initial: 'M' },
  { name: 'Akdeniz Tarım', initial: 'A' },
  { name: 'İstanbul Kimya', initial: 'İ' },
  { name: 'Karadeniz Lojistik', initial: 'K' },
];

export function ReferencesSlider() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  useScrollReveal({ target: sectionRef });

  const next = useCallback(() => setActive((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setActive((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  return (
    <section
      ref={sectionRef}
      className="py-[var(--section-lg)] bg-neutral-50 dark:bg-neutral-950"
      aria-labelledby="references-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
        <SectionHeading
          eyebrow="Referanslar"
          title="Bizi Tercih Edenler"
          description="Türkiye'nin önde gelen sanayi kuruluşları ve yatırımcılarıyla çalışıyoruz."
        />

        {/* Logo marquee */}
        <div className="mt-12 overflow-hidden" aria-hidden="true">
          <div className="flex gap-8" style={{ animation: 'marquee 25s linear infinite' }}>
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white text-sm font-semibold text-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-600"
              >
                <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100 text-primary-600 text-xs font-bold dark:bg-primary-900 dark:text-primary-300">
                  {logo.initial}
                </span>
                {logo.name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg sm:p-12 dark:border-neutral-800 dark:bg-neutral-900">
            {/* Quote mark */}
            <svg className="absolute right-8 top-8 h-16 w-16 text-neutral-100 dark:text-neutral-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
            </svg>

            <div className="relative min-h-[240px]">
              {testimonials.map((t, i) => (
                <div
                  key={t.company}
                  className={`transition-all duration-700 ease-[var(--ease-out)] ${
                    i === active
                      ? 'translate-x-0 opacity-100'
                      : 'absolute inset-0 translate-x-8 opacity-0 pointer-events-none'
                  }`}
                >
                  <blockquote>
                    <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 text-balance sm:text-xl">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4 border-t border-neutral-100 pt-6 dark:border-neutral-800">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-solar-500 text-base font-bold text-white">
                      {t.author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-neutral-0">
                        {t.author}
                      </div>
                      <div className="text-sm text-neutral-500 dark:text-neutral-400">
                        {t.role}, {t.company}
                      </div>
                      <span className="mt-1 inline-flex rounded-full bg-solar-500/10 px-2.5 py-0.5 text-xs font-medium text-solar-700 dark:text-solar-400">
                        {t.capacity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active
                        ? 'w-8 bg-solar-500'
                        : 'w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700 dark:hover:bg-neutral-600'
                    }`}
                    aria-label={`Referans ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-all hover:border-solar-300 hover:text-solar-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-solar-600 dark:hover:text-solar-400"
                  aria-label="Önceki referans"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition-all hover:border-solar-300 hover:text-solar-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-solar-600 dark:hover:text-solar-400"
                  aria-label="Sonraki referans"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
