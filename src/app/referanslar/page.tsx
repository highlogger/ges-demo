// ============================================================
// GES SOLAR PRO — References Page
// ============================================================
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Referanslar',
  description: 'Bizi tercih eden müşterilerimiz ve başarı hikayeleri.',
};

const testimonials = [
  { quote: 'SolarTech Enerji ile çalışmak bir dönüm noktasıydı. Fabrikamızın çatısına kurdukları 4.2 MW\'lık sistem sayesinde enerji maliyetlerimiz %60 azaldı. Yatırım geri dönüş süremiz 3 yılın altında gerçekleşti.', author: 'Ahmet Yılmaz', role: 'Genel Müdür', company: 'Ege Tekstil A.Ş.', capacity: '4.2 MW Çatı GES' },
  { quote: 'Profesyonel ekip, zamanında teslim, sorunsuz işletme. 25 MW\'lık arazi GES projemizi planlanandan 2 ay önce devreye aldılar.', author: 'Mehmet Kaya', role: 'Yönetim Kurulu Başkanı', company: 'Anadolu Enerji Yatırımları', capacity: '25 MW Arazi GES' },
  { quote: 'Doğru sistem boyutlandırması ile gereksiz yatırımdan kaçındık. İzleme sistemleri ve performans raporlamaları muazzam.', author: 'Ayşe Demir', role: 'Fabrika Müdürü', company: 'Marmara Otomotiv', capacity: '2.8 MW Çatı GES' },
  { quote: 'Bakım hizmetleri sayesinde panel verimliliğimiz sürekli maksimumda. Kir, toz, gölgeleme sorunlarını anında tespit edip çözüyorlar.', author: 'Can Özkan', role: 'Teknik Direktör', company: 'Akdeniz Tarım', capacity: '8 MW Arazi GES' },
  { quote: 'EPDK süreçlerindeki deneyimleri paha biçilmez. Tüm bürokratik işlemleri sorunsuz yönettiler.', author: 'Zeynep Aksoy', role: 'Proje Müdürü', company: 'İstanbul Kimya', capacity: '1.5 MW Çatı GES' },
  { quote: 'Enerji danışmanlıkları ile 500 kW ihtiyacımız olduğu halde 800 kW öneren diğer firmaların aksine tam ihtiyacımız kadar sistemi önerdiler. Dürüstlükleri için minnettarız.', author: 'Burak Şahin', role: 'Sahip', company: 'Karadeniz Lojistik', capacity: '500 kW Çatı GES' },
];

const clients = [
  'Ege Tekstil A.Ş.', 'Anadolu Enerji Yatırımları', 'Marmara Otomotiv', 'Akdeniz Tarım',
  'İstanbul Kimya', 'Karadeniz Lojistik', 'İç Anadolu Çimento', 'Ege Seramik',
  'Marmara Depoculuk', 'Akdeniz Gıda', 'Trakya Plastik', 'Güneydoğu Tekstil',
];

export default function ReferencesPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24 pt-32 lg:py-32 lg:pt-40">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-400">Başarı Hikayeleri</span>
            <h1 className="mt-4 font-[var(--font-display)] text-5xl font-bold leading-tight text-white lg:text-7xl">Referanslarımız</h1>
            <p className="mt-6 text-xl leading-relaxed text-neutral-300/80">Türkiye&apos;nin önde gelen sanayi kuruluşları ve yatırımcılarıyla çalışıyor, güvene dayalı uzun soluklu iş ortaklıkları kuruyoruz.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.author} padding="lg" className="flex flex-col">
                <svg className="h-8 w-8 text-solar-400/30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" /></svg>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-800">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-solar-500 text-sm font-bold text-white">{t.author[0]}</div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-0">{t.author}</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">{t.role}, {t.company}</div>
                  </div>
                </div>
                <span className="mt-3 inline-flex self-start rounded-full bg-solar-500/10 px-2.5 py-0.5 text-xs font-medium text-solar-700 dark:text-solar-400">{t.capacity}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos list */}
      <section className="py-[var(--section-lg)] bg-neutral-50 dark:bg-neutral-950">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <SectionHeading eyebrow="Müşterilerimiz" title="Birlikte Çalıştığımız Kurumlar" />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clients.map((c) => (
              <div key={c} className="flex h-20 items-center justify-center rounded-xl border border-neutral-200 bg-white px-4 text-center text-xs font-medium text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-500">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900 text-center">
        <div className="mx-auto max-w-2xl px-6 lg:px-12">
          <h2 className="font-[var(--font-display)] text-3xl font-bold text-neutral-900 dark:text-neutral-0">Siz de Referansımız Olun</h2>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400">Güneş enerjisi projeniz için bize ulaşın, başarı hikayenizi birlikte yazalım.</p>
          <Button href="/iletisim" variant="solar" size="lg" className="mt-8">Teklif Alın</Button>
        </div>
      </section>
    </>
  );
}
