// ============================================================
// GES SOLAR PRO — Service Detail Page
// Dynamic route for each service
// ============================================================
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

interface ServiceDetail {
  slug: string;
  hero: string;
  title: string;
  process: { step: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
  cta: string;
}

const services: Record<string, ServiceDetail> = {
  'arazi-ges': {
    slug: 'arazi-ges',
    hero: 'Büyük Ölçekli Arazi Güneş Enerjisi Santrali Kurulumu',
    title: 'Arazi GES Kurulumu',
    process: [
      { step: '01', title: 'Ön Fizibilite', desc: 'Arazi güneşlenme analizi, imar durumu, trafo merkezine uzaklık, arazi eğimi ve topografya değerlendirmesi.' },
      { step: '02', title: 'Lisanslama', desc: 'EPDK ön lisans ve lisans başvurusu, ÇED raporu, arazi mülkiyet çözümlemesi, TEDAŞ bağlantı görüşü.' },
      { step: '03', title: 'Mühendislik', desc: 'Detaylı elektrik tasarımı, PVsyst simülasyonu, panel yerleşim planı, inverter seçimi, iletim hattı tasarımı.' },
      { step: '04', title: 'İnşaat & Montaj', desc: 'Arazi hazırlığı, konstrüksiyon montajı, panel montajı, inverter ve trafo kurulumu, iletim hattı inşaatı.' },
      { step: '05', title: 'Devreye Alma', desc: 'Sistem testleri, kabul testleri, TEDAŞ geçici kabulü, şebekeye bağlantı, enerji üretimine başlangıç.' },
      { step: '06', title: 'İşletme & Bakım', desc: '7/24 uzaktan izleme, periyodik bakım, panel temizliği, performans raporlaması, 5 yıl garanti.' },
    ],
    faq: [
      { q: '1 MW arazi GES için ne kadar alan gerekir?', a: 'Yaklaşık 15.000 — 20.000 m² (1.5 — 2 hektar) düz veya güney yönelimli arazi gereklidir.' },
      { q: 'Lisans süreci ne kadar sürer?', a: 'EPDK lisans süreci ortalama 12-18 ay arasındadır. Ön lisans aşaması 6-8 ay, lisans aşaması 6-10 ay sürmektedir.' },
      { q: 'Yatırım geri dönüş süresi nedir?', a: 'Türkiye güneşlenme değerleriyle ortalama 4-6 yıl arasında yatırım geri dönüşü sağlanmaktadır. YEKDEM desteği ile bu süre 3-4 yıla düşebilir.' },
    ],
    cta: 'Arazi GES projeniz için ücretsiz ön fizibilite raporu alın.',
  },
  'cati-ges': {
    slug: 'cati-ges',
    hero: 'Endüstriyel & Ticari Çatı Güneş Enerjisi Sistemleri',
    title: 'Çatı GES Kurulumu',
    process: [
      { step: '01', title: 'Çatı Analizi', desc: 'Çatı statik dayanım testi, gölgeleme analizi, çatı ömrü değerlendirmesi, mevcut elektrik altyapı incelemesi.' },
      { step: '02', title: 'Sistem Tasarımı', desc: 'PVsyst ile üretim simülasyonu, panel yerleşim optimizasyonu, inverter ve ekipman seçimi, elektrik projesi.' },
      { step: '03', title: 'İzinler', desc: 'OSB/belediye yapı ruhsatı, TEDAŞ bağlantı anlaşması, çift yönlü sayaç başvurusu, mahsuplaşma sözleşmesi.' },
      { step: '04', title: 'Kurulum', desc: 'Konstrüksiyon montajı, panel montajı, inverter ve pano kurulumu, kablolama, topraklama, paratoner.' },
      { step: '05', title: 'Devreye Alma', desc: 'Sistem testleri, TEDAŞ geçici kabulü, çift yönlü sayaç takılması, enerji üretimine başlangıç.' },
      { step: '06', title: 'İzleme & Bakım', desc: 'Online izleme paneli, aylık üretim raporu, periyodik bakım, panel temizliği, arıza müdahalesi.' },
    ],
    faq: [
      { q: 'Çatım GES için uygun mu?', a: 'Çatınızın güney yönüne bakması, gölge almaması ve statik olarak panel yükünü taşıyabilmesi gerekir. Ücretsiz keşifle değerlendiriyoruz.' },
      { q: 'Çatı GES için ne kadar yatırım gerekir?', a: '1 kW kurulu güç için yaklaşık 500-700 USD arası yatırım gerekmektedir. 500 kW\'lık bir sistem için yaklaşık 250.000-350.000 USD bütçe ayrılmalıdır.' },
      { q: 'Fazla enerjiyi satabilir miyim?', a: 'Evet, mahsuplaşma sistemi ile ürettiğiniz fazla enerjiyi şebekeye satabilirsiniz. Çift yönlü sayaç ile tüketiminizden fazlası devlet garantili fiyattan satın alınır.' },
    ],
    cta: 'Çatınızın güneş enerjisi potansiyelini ücretsiz öğrenin.',
  },
  'enerji-danismanligi': {
    slug: 'enerji-danismanligi',
    hero: 'Güneş Enerjisi Yatırım Danışmanlığı',
    title: 'Enerji Danışmanlığı',
    process: [
      { step: '01', title: 'Keşif Ziyareti', desc: 'Ücretsiz saha ziyareti, tesis/arazi incelemesi, elektrik tüketim analizi, ilk değerlendirme toplantısı.' },
      { step: '02', title: 'Veri Analizi', desc: 'Son 12 aylık elektrik faturaları analizi, tüketim profilinin çıkarılması, güneşlenme verileriyle eşleştirme.' },
      { step: '03', title: 'Fizibilite Raporu', desc: 'Tekno-ekonomik fizibilite raporu, yatırım tutarı hesaplaması, geri dönüş süresi, NBD ve İKO analizi.' },
      { step: '04', title: 'Sistem Tasarımı', desc: 'Optimal sistem boyutlandırması, ekipman seçimi, teknik şartname hazırlanması, teşvik başvuru danışmanlığı.' },
      { step: '05', title: 'Finansman', desc: 'Banka kredisi, leasing, YEKDEM, KOSGEB ve TÜBİTAK destekleri için başvuru danışmanlığı.' },
      { step: '06', title: 'Karar Destek', desc: 'Tüm veriler ışığında yatırım kararı için yönetim kurulu sunumu ve detaylı maliyet-fayda analizi.' },
    ],
    faq: [
      { q: 'Danışmanlık ücreti ne kadar?', a: 'İlk keşif ve ön değerlendirme ücretsizdir. Detaylı fizibilite raporu için proje büyüklüğüne göre fiyatlandırma yapılır.' },
      { q: 'Fizibilite raporu ne kadar sürede hazırlanır?', a: 'Saha ziyareti sonrası 2-3 hafta içinde detaylı fizibilite raporunuz hazır olur.' },
    ],
    cta: 'Ücretsiz keşif randevusu için hemen ulaşın.',
  },
  'bakim-izleme': {
    slug: 'bakim-izleme',
    hero: 'GES Bakım & 7/24 Uzaktan İzleme Hizmeti',
    title: 'Bakım & İzleme',
    process: [
      { step: '01', title: 'Sistem Denetimi', desc: 'Mevcut GES sisteminizin detaylı denetimi, panel verimlilik testi, inverter kontrolü, termal kamera taraması.' },
      { step: '02', title: 'İzleme Kurulumu', desc: '7/24 uzaktan izleme sistemi kurulumu, sensör yerleşimi, veri toplama altyapısı, müşteri panosu erişimi.' },
      { step: '03', title: 'Periyodik Bakım', desc: 'Aylık/üç aylık periyodik saha bakım ziyaretleri, ekipman kontrolleri, bağlantı sıkma, temizlik.' },
      { step: '04', title: 'Panel Temizliği', desc: 'Robotik veya manuel panel temizliği, su ve kimyasal kullanmadan çevre dostu temizlik yöntemleri.' },
      { step: '05', title: 'Performans Raporu', desc: 'Aylık enerji üretim raporu, verimlilik analizi, kayıp-kaçak tespiti, iyileştirme önerileri.' },
      { step: '06', title: 'Arıza Müdahale', desc: 'Anlık alarm bildirimi, uzaktan arıza teşhisi, 48 saat içinde saha müdahalesi, yedek parça stoğu.' },
    ],
    faq: [
      { q: 'Bakım sözleşmesi ne kadar?', a: 'Sistem büyüklüğüne göre yıllık kW başına fiyatlandırma yapılır. Ortalama 10-15 USD/kW/yıl arasıdır.' },
      { q: 'İzleme sistemini kendi telefonumdan görebilir miyim?', a: 'Evet, mobil uygulama ve web paneli üzerinden anlık üretim, tüketim, kazanç ve karbon tasarrufu verilerinizi görebilirsiniz.' },
    ],
    cta: 'Mevcut sisteminizin verimliliğini artırmak için bize ulaşın.',
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return { title: 'Hizmet Bulunamadı' };
  return {
    title: service.title,
    description: service.hero,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24 pt-32 lg:py-32 lg:pt-40">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <Link href="/hizmetler" className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-solar-400">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Tüm Hizmetler
          </Link>
          <h1 className="mt-4 max-w-3xl font-[var(--font-display)] text-4xl font-bold leading-tight text-white lg:text-6xl">
            {service.hero}
          </h1>
        </div>
      </section>

      {/* Process */}
      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <SectionHeading eyebrow="Süreç" title="Nasıl Çalışıyoruz?" align="center" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.process.map((step) => (
              <Card key={step.step} padding="lg" hover className="group">
                <span className="font-[var(--font-display)] text-4xl font-bold text-neutral-200 transition-colors group-hover:text-solar-400 dark:text-neutral-800">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900 dark:text-neutral-0">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[var(--section-lg)] bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <SectionHeading eyebrow="SSS" title="Sıkça Sorulan Sorular" align="center" />
          <div className="mt-12 space-y-4">
            {service.faq.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-neutral-900 dark:text-neutral-0">
                  {item.q}
                  <svg className="h-5 w-5 shrink-0 text-neutral-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-6 text-neutral-500 dark:text-neutral-400">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-12">
          <h2 className="font-[var(--font-display)] text-3xl font-bold text-neutral-900 dark:text-neutral-0">
            {service.cta}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/iletisim" variant="solar" size="lg">
              Hemen Teklif Alın
            </Button>
            <Button href="/enerji-hesaplayici" variant="outline" size="lg">
              Enerji Hesaplayıcı
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
