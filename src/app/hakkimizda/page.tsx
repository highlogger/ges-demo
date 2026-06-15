// ============================================================
// GES SOLAR PRO — About Page
// ============================================================
import type { Metadata } from 'next';
import { defaultSiteConfig } from '@/config/site.config';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: `${defaultSiteConfig.name} hakkında — Türkiye'nin güneş enerjisi sektöründeki öncü firması.`,
};

const values = [
  { icon: '⚡', title: 'Yenilikçilik', desc: 'Sürekli gelişen teknolojiyi yakından takip eder, en verimli sistemleri tasarlarız.' },
  { icon: '🤝', title: 'Güvenilirlik', desc: 'Sözümüz sözdür. Projelerimizi zamanında ve taahhüt ettiğimiz kalitede teslim ederiz.' },
  { icon: '🌱', title: 'Sürdürülebilirlik', desc: 'Her projemizde çevresel etkiyi minimize eder, karbon ayak izini azaltmayı hedefleriz.' },
  { icon: '🎯', title: 'Sonuç Odaklılık', desc: 'Maksimum enerji üretimi ve en hızlı yatırım geri dönüşü için optimize ederiz.' },
];

const timeline = [
  { year: '2015', title: 'Kuruluş', desc: 'İstanbul\'da 5 kişilik çekirdek ekiple kuruldu.' },
  { year: '2017', title: 'İlk Büyük Proje', desc: '10 MW arazi GES projesini başarıyla tamamladı.' },
  { year: '2019', title: 'Büyüme', desc: 'Ekip 50 kişiye ulaştı, toplam kurulu güç 50 MW\'ı aştı.' },
  { year: '2022', title: 'İnovasyon', desc: 'Uzaktan izleme ve yapay zeka destekli verimlilik sistemini devreye aldı.' },
  { year: '2024', title: 'Liderlik', desc: '247+ proje, 150 MW+ kurulu güç ile sektör liderleri arasına girdi.' },
  { year: '2026', title: 'Gelecek', desc: '500 MW hedefiyle büyümeye devam ediyor, yeni pazarlara açılıyoruz.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24 pt-32 lg:py-32 lg:pt-40">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-400">
              {defaultSiteConfig.foundedYear}&apos;den beri
            </span>
            <h1 className="mt-4 font-[var(--font-display)] text-5xl font-bold leading-tight text-white lg:text-7xl">
              Güneşin gücünü geleceğe taşıyoruz
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-neutral-300/80">
              {defaultSiteConfig.name} olarak, Türkiye&apos;nin dört bir yanında güneş enerjisi santralleri kuruyor,
              sürdürülebilir bir gelecek için çalışıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <SectionHeading eyebrow="Değerlerimiz" title="Bizi Biz Yapan Değerler" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title} padding="lg" hover className="text-center">
                <div className="text-4xl">{v.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-0">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-[var(--section-lg)] bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <SectionHeading eyebrow="Yolculuğumuz" title="Nereden Nereye" />
          <div className="mt-16">
            {timeline.map((item, i) => (
              <div key={item.year} className="group relative flex gap-8 pb-12 last:pb-0">
                {/* Line */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-[1.15rem] top-12 h-full w-px bg-neutral-200 dark:bg-neutral-800" />
                )}
                {/* Dot */}
                <div className="relative mt-1.5 h-9 w-9 shrink-0 rounded-full border-4 border-white bg-primary-500 shadow-md transition-all group-hover:bg-solar-500 group-hover:shadow-glow dark:border-neutral-900" />
                {/* Content */}
                <div>
                  <span className="text-sm font-bold text-solar-600 dark:text-solar-400">{item.year}</span>
                  <h3 className="mt-1 text-xl font-semibold text-neutral-900 dark:text-neutral-0">{item.title}</h3>
                  <p className="mt-1 text-neutral-500 dark:text-neutral-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-[var(--container-max)] px-6 text-center lg:px-12">
          <h2 className="font-[var(--font-display)] text-3xl font-bold text-neutral-900 dark:text-neutral-0">
            Ekibimize Katılmak İster misiniz?
          </h2>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400">
            Güneş enerjisi sektöründe kariyer fırsatları için bize ulaşın.
          </p>
          <Button href="/iletisim" variant="solar" size="lg" className="mt-8">
            Bize Ulaşın
          </Button>
        </div>
      </section>
    </>
  );
}
