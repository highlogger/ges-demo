'use client';

// ============================================================
// GES SOLAR PRO — Energy Calculator Teaser (Home Page)
// Quick preview driving to the full appliance-based calculator
// ============================================================
import { useState, useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollReveal } from '@/components/animations/scroll-reveal';

const quickPresets = [
  { label: '🏠 Ev', kw: 3, desc: 'Klima + beyaz eşya + aydınlatma' },
  { label: '🌾 Tarım', kw: 7.5, desc: '1.5 HP pompa + sulama sistemi' },
  { label: '🏢 Ofis', kw: 10, desc: 'Bilgisayar + klima + sunucu' },
  { label: '🏭 Atölye', kw: 20, desc: 'Kompresör + CNC + kaynak' },
];

export function EnergyCalculatorTeaser() {
  const [selectedPreset, setSelectedPreset] = useState(3); // kW
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal({ target: sectionRef });

  const results = useMemo(() => {
    const kw = selectedPreset;
    const annualProduction = kw * 1550 * 0.82; // ortalama 1550 saat
    const revenue = annualProduction * 0.12;
    const cost = kw * 550;
    const payback = revenue > 0 ? cost / revenue : 0;
    const carbon = annualProduction * 0.000478;
    return {
      annualProduction: Math.round(annualProduction).toLocaleString('tr-TR'),
      payback: payback.toFixed(1),
      carbon: carbon.toFixed(1),
      tree: Math.round(carbon * 45),
      cost: Math.round(cost).toLocaleString('tr-TR'),
    };
  }, [selectedPreset]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-[var(--section-lg)] bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950"
      aria-labelledby="calculator-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(245,166,35,0.8) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(245,166,35,0.8) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div className="scroll-reveal-item">
            <h2
              id="calculator-heading"
              className="font-[var(--font-display)] text-4xl font-bold leading-tight text-white lg:text-5xl"
            >
              Hangi Cihazları{' '}
              <span className="gradient-text">Güneşle</span>{' '}
              Çalıştırmak İstersiniz?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-300/80">
              Kullandığınız cihazlara göre ihtiyacınız olan GES kapasitesini saniyeler içinde hesaplayın.
              Tam listeye detaylı hesaplayıcıdan ulaşabilirsiniz.
            </p>

            {/* Quick select presets */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              {quickPresets.map((p) => (
                <button
                  key={p.label}
                  onClick={() => setSelectedPreset(p.kw)}
                  className={`rounded-xl border p-4 text-left transition-all duration-300 ${
                    selectedPreset === p.kw
                      ? 'border-solar-400 bg-solar-500/20 shadow-glow'
                      : 'border-white/10 bg-white/5 hover:border-white/30'
                  }`}
                >
                  <span className="text-lg">{p.label}</span>
                  <div className={`mt-1 text-xs ${selectedPreset === p.kw ? 'text-solar-300' : 'text-neutral-400'}`}>
                    {p.desc}
                  </div>
                  <div className="mt-1 text-sm font-bold text-white">
                    ~{p.kw} kW
                  </div>
                </button>
              ))}
            </div>

            <Button href="/enerji-hesaplayici" variant="solar" size="lg" className="mt-6">
              Tüm Cihazlarla Detaylı Hesapla
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>

          {/* Right: Results */}
          <div className="scroll-reveal-item">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-neutral-300">
                  {selectedPreset} kW Sistem Öngörüsü
                </span>
                <span className="rounded-full bg-solar-500/20 px-3 py-1 text-xs font-medium text-solar-400">
                  Ortalama
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Yıllık Üretim', value: results.annualProduction, unit: 'kWh' },
                  { label: 'Geri Dönüş', value: results.payback, unit: 'yıl' },
                  { label: 'Karbon Tasarrufu', value: results.carbon, unit: 'ton/yıl' },
                  { label: 'Ağaç Eşdeğeri', value: results.tree.toLocaleString('tr-TR'), unit: '🌳' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                      {item.label}
                    </div>
                    <div className="mt-1 font-[var(--font-display)] text-2xl font-bold text-white">
                      {item.value}{' '}
                      <span className="text-sm font-normal text-solar-400">{item.unit}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Estimate bar */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5">
                  <span>Tahmini Yatırım</span>
                  <span className="text-white font-semibold">${results.cost}</span>
                </div>
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-solar-500 to-solar-400 transition-all duration-700"
                    style={{ width: `${Math.min((selectedPreset / 30) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
