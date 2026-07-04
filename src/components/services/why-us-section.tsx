// ============================================================
// GES SOLAR PRO — Why Us Section (Neden Biz?)
// Shared across pages
// ============================================================
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';

const usps = [
  {
    title: 'EPDK Lisanslı Hizmet',
    desc: 'Enerji Piyasası Düzenleme Kurumu onaylı, yasal mevzuata tam uyumlu projelendirme ve kurulum hizmeti.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: '10+ Yıl Deneyim',
    desc: '2015\'ten bu yana güneş enerjisi sektöründe edindiğimiz tecrübe ile en karmaşık projeleri dahi başarıyla teslim ediyoruz.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: 'Anahtar Teslim Çözümler',
    desc: 'Fizibiliteden lisanslamaya, mühendislikten devreye almaya kadar tüm süreçleri tek elden yönetiyor, size sadece enerji üretmek kalıyor.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: '7/24 Teknik Destek',
    desc: 'Kurulum sonrası uzaktan izleme ve teknik destek ekibimizle her an yanınızdayız. Arıza durumunda 48 saat içinde müdahale garantisi.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: '5 Yıl Performans Garantisi',
    desc: 'Tüm kurulumlarımızda 5 yıl işletme garantisi ve 25 yıl panel performans garantisi ile içiniz rahat olsun.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

export function WhyUsSection() {
  return (
    <section className="py-[var(--section-lg)] bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
        <SectionHeading
          eyebrow="Neden SolarTech?"
          title="Bizi Tercih Etmeniz İçin 5 Neden"
          description="Güneş enerjisi yatırımınızda doğru partneri seçmek, projenizin başarısını belirleyen en kritik karardır."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {usps.map((usp) => (
            <Card key={usp.title} padding="lg" hover>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-solar-500/10 text-solar-600 dark:text-solar-400">
                {usp.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-neutral-900 dark:text-neutral-0">{usp.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{usp.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
