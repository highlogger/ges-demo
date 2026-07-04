// ============================================================
// GES SOLAR PRO — About Page (Expanded)
// Sections: Hero, Mission & Vision, Company Stats, Values,
//           Timeline, Team, Certifications, Why Us, CTA
// ============================================================
import type { Metadata } from 'next';
import { defaultSiteConfig } from '@/config/site.config';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MissionVision } from '@/components/about/mission-vision';
import { CompanyStats } from '@/components/about/company-stats';
import { TeamSection } from '@/components/about/team-section';
import { Certifications } from '@/components/about/certifications';

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

const whyUs = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: 'Anahtar Teslim Çözümler',
    desc: 'Fizibiliteden devreye almaya tüm süreci tek elden yönetiyoruz.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Uygun Fiyat Garantisi',
    desc: 'Doğrudan üretici iş birlikleri ile en rekabetçi fiyatları sunuyoruz.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Hızlı Teslimat',
    desc: 'Ortalama 3-6 ay içinde projelerinizi enerji üretir hale getiriyoruz.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: '7/24 Teknik Destek',
    desc: 'Kurulum sonrası sürekli izleme ve 48 saat içinde arıza müdahale garantisi.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24 pt-32 lg:py-32 lg:pt-40">
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
        <div className="relative mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-solar-500/30 bg-solar-500/10 px-4 py-1.5 text-xs font-semibold text-solar-400 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-solar-400 animate-pulse" />
              {defaultSiteConfig.foundedYear}&apos;den beri
            </span>
            <h1 className="mt-6 font-[var(--font-display)] text-5xl font-bold leading-tight text-white lg:text-7xl">
              Güneşin gücünü geleceğe taşıyoruz
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-neutral-300/80">
              {defaultSiteConfig.name} olarak, Türkiye&apos;nin dört bir yanında güneş enerjisi santralleri kuruyor,
              sürdürülebilir bir gelecek için çalışıyoruz.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/iletisim" variant="solar" size="lg">
                Bize Ulaşın
              </Button>
              <Button href="/projeler" variant="outline" size="lg" className="border-white/20 text-white hover:border-white/50 hover:bg-white/10">
                Projelerimizi İnceleyin
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionVision />

      {/* Company Stats (client component with animated counters) */}
      <CompanyStats />

      {/* Values */}
      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <SectionHeading
            eyebrow="Değerlerimiz"
            title="Bizi Biz Yapan Değerler"
            description="Her projede rehber edindiğimiz dört temel ilke ile çalışıyor, müşterilerimize en iyisini sunuyoruz."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <Card key={v.title} padding="lg" hover className="text-center group">
                <div className="text-5xl transition-transform group-hover:scale-110">{v.icon}</div>
                <h3 className="mt-5 text-lg font-semibold text-neutral-900 dark:text-neutral-0">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-[var(--section-lg)] bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <SectionHeading
            eyebrow="Yolculuğumuz"
            title="Nereden Nereye"
            description="2015'te küçük bir ofiste başlayan yolculuğumuz, bugün Türkiye'nin dört bir yanına yayılan başarı hikayesine dönüştü."
          />
          <div className="mt-16">
            {timeline.map((item, i) => (
              <div key={item.year} className="group relative flex gap-8 pb-12 last:pb-0">
                {/* Line */}
                {i < timeline.length - 1 && (
                  <div className="absolute left-[1.15rem] top-12 h-full w-px bg-neutral-200 dark:bg-neutral-800" />
                )}
                {/* Dot */}
                <div className="relative z-10 mt-1.5 h-9 w-9 shrink-0 rounded-full border-4 border-white bg-primary-500 shadow-md transition-all group-hover:bg-solar-500 group-hover:shadow-glow dark:border-neutral-900" />
                {/* Content */}
                <div
                  className="transition-all duration-500"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="text-sm font-bold text-solar-600 dark:text-solar-400">{item.year}</span>
                  <h3 className="mt-1 text-xl font-semibold text-neutral-900 dark:text-neutral-0">{item.title}</h3>
                  <p className="mt-1 text-neutral-500 dark:text-neutral-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Certifications & Partners */}
      <Certifications />

      {/* Why Choose Us */}
      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <SectionHeading
            eyebrow="Neden SolarTech?"
            title="Bizi Tercih Etmeniz İçin 4 Neden"
            description="Güneş enerjisi yatırımınızda doğru partneri seçmek, projenizin başarısını belirleyen en kritik karardır."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <Card key={item.title} padding="lg" hover className="text-center group">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-600 transition-colors group-hover:bg-primary-500/20 dark:text-primary-400">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-neutral-900 dark:text-neutral-0">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-20 lg:py-28">
        <div
          className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.2), transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: Text */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-400">
                Kariyer Fırsatları
              </span>
              <h2 className="mt-3 font-[var(--font-display)] text-4xl font-bold text-white lg:text-5xl">
                Ekibimize Katılmak İster misiniz?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-300/80">
                Güneş enerjisi sektöründe kariyer yapmak, anlamlı bir amaç için çalışmak ve Türkiye&apos;nin
                enerji geleceğini şekillendiren ekibin bir parçası olmak isterseniz sizi bekliyoruz.
              </p>
              <div className="mt-6 space-y-3">
                {['Proje Mühendisi', 'Saha Teknisyeni', 'Enerji Danışmanı', 'Yazılım Geliştirici'].map((role) => (
                  <div key={role} className="flex items-center gap-3 text-neutral-300">
                    <svg className="h-4 w-4 shrink-0 text-solar-400" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-sm">Açık pozisyon: <span className="font-medium text-white">{role}</span></span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/iletisim" variant="solar" size="lg">
                  Başvuru Yap
                </Button>
                <Button href="/iletisim" variant="outline" size="lg" className="border-white/20 text-white hover:border-white/50 hover:bg-white/10">
                  Detaylı Bilgi
                </Button>
              </div>
            </div>

            {/* Right: Decorative */}
            <div className="hidden lg:flex lg:justify-center">
              <div className="flex h-64 w-64 items-center justify-center rounded-full border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white font-[var(--font-display)]">{defaultSiteConfig.stats.happyCustomers}+</div>
                  <div className="mt-2 text-sm text-neutral-400">Mutlu Çalışan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
