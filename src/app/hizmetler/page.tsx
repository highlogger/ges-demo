// ============================================================
// GES SOLAR PRO — Services Page
// ============================================================
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hizmetler',
  description: 'Arazi GES, çatı GES, enerji danışmanlığı ve bakım & izleme hizmetlerimiz.',
};

const services = [
  {
    slug: 'arazi-ges',
    icon: '🏭',
    title: 'Arazi GES Kurulumu',
    subtitle: 'Büyük Ölçekli Güneş Enerjisi Santralleri',
    description:
      '1 MW\'tan 100 MW\'a kadar arazi tipi güneş enerjisi santrallerinin anahtar teslim kurulumu. Fizibilite etüdünden EPDK lisanslamasına, mühendislik tasarımından inşaat ve devreye almaya kadar tüm süreçleri uzman ekibimizle yönetiyoruz.',
    features: [
      'Fizibilite ve güneşlenme analizi',
      'EPDK lisans ve başvuru süreçleri',
      'Arazi etüdü ve zemin etüdü',
      'Elektrik mühendisliği ve sistem tasarımı',
      'İnşaat ve montaj',
      'İletim hattı ve trafo merkezi',
      'Devreye alma ve kabul testleri',
      '5 yıl işletme garantisi',
    ],
    capacity: '1 MW — 100 MW+',
  },
  {
    slug: 'cati-ges',
    icon: '🏢',
    title: 'Çatı GES Kurulumu',
    subtitle: 'Endüstriyel & Ticari Çatı Sistemleri',
    description:
      'Fabrika, depo, AVM, otel ve toplu konut çatıları için özel olarak tasarlanmış güneş enerjisi sistemleri. Çatı statik analizi, maksimum panel yerleşimi ve en yüksek verimlilik için optimize edilmiş çözümler sunuyoruz.',
    features: [
      'Çatı statik analizi ve güçlendirme',
      'Maksimum panel yerleşim planı',
      'Gölgeleme analizi ve optimizasyon',
      'İnverter ve ekipman seçimi',
      'Elektrik altyapı entegrasyonu',
      'Uzaktan izleme sistemi kurulumu',
      'OSB ve belediye izin süreçleri',
      'Mahsuplaşma başvurusu (çift yönlü sayaç)',
    ],
    capacity: '50 kW — 5 MW',
  },
  {
    slug: 'enerji-danismanligi',
    icon: '📊',
    title: 'Enerji Danışmanlığı',
    subtitle: 'Fizibilite & Yatırım Analizi',
    description:
      'Güneş enerjisi yatırımı yapmadan önce detaylı fizibilite analizi, yatırım geri dönüş hesaplaması ve optimal sistem tasarımı için danışmanlık hizmeti. Ücretsiz keşif randevusu ile başlıyoruz.',
    features: [
      'Ücretsiz ön keşif ve saha ziyareti',
      'Detaylı güneşlenme potansiyeli analizi',
      'Tekno-ekonomik fizibilite raporu',
      'Yatırım geri dönüş süresi hesaplaması',
      'Optimal sistem boyutlandırma',
      'Teşvik ve destek mekanizmaları danışmanlığı',
      'Finansman modeli önerisi',
      'Teknik şartname hazırlama',
    ],
    capacity: 'Ücretsiz Keşif',
  },
  {
    slug: 'bakim-izleme',
    icon: '🛡️',
    title: 'Bakım & İzleme',
    subtitle: '7/24 Performans Takibi',
    description:
      'Kurulu GES sistemlerinizin maksimum verimlilikte çalışması için 7/24 uzaktan izleme, periyodik bakım, panel temizliği ve anlık arıza müdahalesi hizmetleri.',
    features: [
      '7/24 uzaktan izleme ve alarm sistemi',
      'Anlık performans takip panosu',
      'Periyodik saha bakım ziyaretleri',
      'Panel temizliği (robotik & manuel)',
      'Termal kamera ile hot-spot tespiti',
      'İnverter ve ekipman kontrolleri',
      'Aylık performans raporlaması',
      'Arıza durumunda 48 saat içinde müdahale',
    ],
    capacity: '7/24 İzleme',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24 pt-32 lg:py-32 lg:pt-40">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-400">Hizmetlerimiz</span>
            <h1 className="mt-4 font-[var(--font-display)] text-5xl font-bold leading-tight text-white lg:text-7xl">
              Tam Kapsamlı GES Çözümleri
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-neutral-300/80">
              Fizibiliteden anahtar teslime, lisanslamadan bakıma — güneş enerjisinde ihtiyacınız olan her şey.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="space-y-12">
            {services.map((service, i) => (
              <div
                key={service.slug}
                className="scroll-reveal-item grid gap-12 lg:grid-cols-2 lg:gap-20"
              >
                {/* Visual */}
                <div className={`flex items-center ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-800 to-primary-900">
                    <div className="text-7xl">{service.icon}</div>
                    <div className="absolute bottom-6 left-6 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                      {service.capacity}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-600 dark:text-solar-400">
                    {service.subtitle}
                  </span>
                  <h2 className="mt-2 font-[var(--font-display)] text-3xl font-bold text-neutral-900 dark:text-neutral-0">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button href={`/hizmetler/${service.slug}`} variant="primary" size="md">
                      Detaylı Bilgi
                    </Button>
                    <Button href="/iletisim" variant="outline" size="md">
                      Teklif Alın
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
