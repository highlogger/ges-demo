'use client';

// ============================================================
// GES SOLAR PRO — Hero Section
// Premium hero with animated solar panel visual,
// gradient overlay, stats strip, and dual CTA
// ============================================================
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useSiteConfig } from '@/components/layout/providers';
import { Counter } from '@/components/animations/counter';

export function Hero() {
  const config = useSiteConfig();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-primary-950 via-primary-900 to-primary-800"
      aria-labelledby="hero-heading"
    >
      {/* Animated background grid */}
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

      {/* Solar glow orbs */}
      <div
        className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full blur-[128px]"
        style={{
          background: 'radial-gradient(circle, rgba(245,166,35,0.25), transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(15,61,92,0.5), transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => {
          const tx = ((Math.random() - 0.5) * 200).toFixed(0);
          const ty = (-Math.random() * 300).toFixed(0);
          return (
            <div
              key={i}
              className="absolute h-0.5 w-0.5 rounded-full bg-solar-400/40"
              style={{
                left: `${(Math.random() * 100).toFixed(1)}%`,
                top: `${(Math.random() * 100).toFixed(1)}%`,
                animation: `particle-drift ${(3 + Math.random() * 5).toFixed(1)}s ease-in-out infinite`,
                animationDelay: `${(Math.random() * 5).toFixed(1)}s`,
                '--tx': `${tx}px`,
                '--ty': `${ty}px`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[var(--container-max)] px-6 pt-28 pb-20 lg:px-12 lg:pt-32 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text */}
          <div
            className={`transition-all duration-1000 ease-[var(--ease-out)] ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-solar-500/30 bg-solar-500/10 px-4 py-1.5 text-xs font-semibold text-solar-400 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-solar-400 animate-pulse" />
              Türkiye&apos;nin Güneş Enerjisi Ortağı
            </span>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="mt-6 font-[var(--font-display)] text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Enerjinizi{' '}
              <span className="gradient-text">Güneşten</span>
              {' '}Alın
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-300/90 text-balance">
              {config.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
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

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-neutral-400">
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                EPDK Lisanslı
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {config.stats.totalProjects}+ Tamamlanmış Proje
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {config.stats.yearsExperience} Yıl Deneyim
              </span>
            </div>
          </div>

          {/* Right: 3D Visual Placeholder */}
          <div
            className={`relative hidden items-center justify-center lg:flex transition-all duration-1000 delay-300 ease-[var(--ease-out)] ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            {/* Animated solar panel SVG illustration */}
            <div className="relative animate-float">
              {/* Main solar panel */}
              <svg
                width="400"
                height="420"
                viewBox="0 0 400 420"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ filter: 'drop-shadow(0 0 60px rgba(245,166,35,0.2))' }}
                aria-hidden="true"
              >
                {/* Grid background */}
                <rect x="60" y="40" width="280" height="320" rx="16" fill="#1a2332" stroke="#2a3a4a" strokeWidth="2" />
                {/* Inner panel */}
                <rect x="80" y="60" width="240" height="280" rx="8" fill="#0d1b2a" stroke="#3a4a5a" strokeWidth="1" />
                {/* Solar cells */}
                {Array.from({ length: 4 }).map((_, row) =>
                  Array.from({ length: 6 }).map((_, col) => (
                    <rect
                      key={`${row}-${col}`}
                      x={88 + col * 38}
                      y={68 + row * 68}
                      width="34"
                      height="62"
                      rx="2"
                      fill={`url(#cell-${row}-${col})`}
                      stroke="#2a3a4a"
                      strokeWidth="0.5"
                      opacity={0.9}
                    />
                  ))
                )}
                {/* Cell gradients */}
                <defs>
                  {Array.from({ length: 4 }).map((_, row) =>
                    Array.from({ length: 6 }).map((_, col) => (
                      <linearGradient key={`${row}-${col}`} id={`cell-${row}-${col}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#1a3a5c" />
                        <stop offset="50%" stopColor="#1e4a7a" />
                        <stop offset="100%" stopColor="#15304a" />
                      </linearGradient>
                    ))
                  )}
                </defs>
                {/* Sun in corner */}
                <circle cx="310" cy="100" r="30" fill="#F5A623" opacity="0.9" />
                <circle cx="310" cy="100" r="22" fill="#F7C23B" opacity="0.7" />
                {/* Sun rays */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <line
                    key={`ray-${i}`}
                    x1={310 + 36 * Math.cos((i * Math.PI * 2) / 8)}
                    y1={100 + 36 * Math.sin((i * Math.PI * 2) / 8)}
                    x2={310 + 48 * Math.cos((i * Math.PI * 2) / 8)}
                    y2={100 + 48 * Math.sin((i * Math.PI * 2) / 8)}
                    stroke="#F5A623"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity={0.5}
                  />
                ))}
                {/* Energy flow arcs */}
                <path
                  d="M330 140 Q350 180 330 220"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                  opacity={0.6}
                />
                <path
                  d="M335 135 Q365 180 335 225"
                  stroke="#34D399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                  opacity={0.4}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className={`mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-4 lg:mt-20 lg:p-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          {[
            { value: config.stats.installedCapacity, label: 'Kurulu Güç' },
            { value: config.stats.totalProjects, label: 'Proje', isNumber: true },
            { value: config.stats.carbonReduction, label: 'Karbon Azaltımı' },
            { value: config.stats.happyCustomers, label: 'Mutlu Müşteri', isNumber: true },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white lg:text-3xl font-[var(--font-display)]">
                {stat.isNumber ? (
                  <Counter end={Number(stat.value)} suffix="+" />
                ) : (
                  stat.value
                )}
              </div>
              <div className="mt-1 text-xs font-medium text-neutral-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
