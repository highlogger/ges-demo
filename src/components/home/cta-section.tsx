'use client';

// ============================================================
// GES SOLAR PRO — CTA Section
// Bold call-to-action with solar gradient
// ============================================================
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/components/animations/scroll-reveal';

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal({ target: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-[var(--section-lg)] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950"
      aria-labelledby="cta-heading"
    >
      {/* Decorative solar glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.15), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-12">
        <div className="scroll-reveal-item">
          <h2
            id="cta-heading"
            className="font-[var(--font-display)] text-4xl font-bold leading-tight text-white sm:text-5xl"
          >
            Enerjinizi{' '}
            <span className="gradient-text">Güneşten</span>
            {' '}Almaya Hazır mısınız?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-300/80 text-balance">
            Ücretsiz keşif randevusu için hemen bize ulaşın. Ekibimiz tesisinize gelsin,
            enerji potansiyelinizi analiz etsin, size özel çözümü birlikte tasarlayalım.
          </p>
        </div>

        <div className="scroll-reveal-item mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/iletisim" variant="solar" size="xl">
            Ücretsiz Keşif Randevusu Alın
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
          <a
            href="tel:+902125550000"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/20 px-6 py-4 text-lg font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            0212 555 00 00
          </a>
        </div>
      </div>
    </section>
  );
}
