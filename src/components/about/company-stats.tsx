'use client';

// ============================================================
// GES SOLAR PRO — Company Stats (animated counters)
// Client component — uses Counter with IntersectionObserver
// ============================================================
import { useRef, useState, useEffect } from 'react';
import { Counter } from '@/components/animations/counter';

const stats = [
  { value: 150, suffix: ' MW+', label: 'Kurulu Güç' },
  { value: 247, suffix: '+', label: 'Tamamlanan Proje', isNumber: true },
  { value: 250000, suffix: ' ton+', label: 'Karbon Azaltımı' },
  { value: 180, suffix: '+', label: 'Mutlu Müşteri', isNumber: true },
];

export function CompanyStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-20 lg:py-28">
      {/* Solar glow */}
      <div
        className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.2), transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full blur-[80px]"
        style={{ background: 'radial-gradient(circle, rgba(15,61,92,0.5), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-400">Rakamlarla</span>
          <h2 className="mt-3 font-[var(--font-display)] text-4xl font-bold text-white lg:text-5xl">
            SolarTech Enerji
          </h2>
          <p className="mt-4 text-lg text-neutral-300/80 max-w-2xl mx-auto">
            2015&apos;ten bu yana istikrarlı büyüme, sektörde öncü konum ve yüzlerce başarılı proje.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-700 lg:p-8 ${
                isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="text-3xl font-bold text-white lg:text-4xl font-[var(--font-display)]">
                {stat.isNumber ? (
                  <Counter end={stat.value} suffix={stat.suffix} />
                ) : (
                  <Counter end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wider text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
