'use client';

// ============================================================
// GES SOLAR PRO — Services Grid Section
// Premium grid with hover animations, icons, and descriptions
// ============================================================
import { useRef } from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { useScrollReveal } from '@/components/animations/scroll-reveal';

const services = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Arazi GES Kurulumu',
    description: 'Büyük ölçekli arazi güneş enerjisi santralleri için anahtar teslim kurulum. Fizibilite, lisanslama, mühendislik, inşaat ve devreye alma.',
    href: '/hizmetler/arazi-ges',
    stats: '1 MW — 100 MW+',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'Çatı GES Kurulumu',
    description: 'Fabrika, depo, AVM, otel ve konut çatıları için özel güneş enerjisi çözümleri. Çatı statik analizi ve maksimum verimlilik.',
    href: '/hizmetler/cati-ges',
    stats: '50 kW — 5 MW',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Enerji Danışmanlığı',
    description: 'Enerji verimliliği analizi, fizibilite raporu, yatırım geri dönüş hesaplaması ve optimal sistem tasarımı danışmanlığı.',
    href: '/hizmetler/enerji-danismanligi',
    stats: 'Ücretsiz Keşif',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Bakım & İzleme',
    description: '7/24 uzaktan izleme, periyodik bakım, panel temizliği, inverter kontrolü ve performans raporlaması ile maksimum verim.',
    href: '/hizmetler/bakim-izleme',
    stats: '7/24 İzleme',
  },
];

export function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useScrollReveal({ target: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="py-[var(--section-lg)] bg-neutral-50 dark:bg-neutral-950"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Güneş Enerjisinde Tam Kapsamlı Çözümler"
          description="Fizibiliteden anahtar teslime, lisanslamadan bakıma kadar tüm süreçlerde yanınızdayız."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Link key={service.href} href={service.href} className="group no-underline">
              <Card
                hover
                padding="lg"
                className="flex h-full flex-col scroll-reveal-item transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-solar-500/10 to-solar-500/5 text-solar-600 ring-1 ring-solar-500/20 transition-all duration-500 group-hover:from-solar-500 group-hover:text-white group-hover:shadow-glow dark:text-solar-400 dark:from-solar-500/20 dark:to-solar-500/5 dark:group-hover:text-white">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-semibold text-neutral-900 transition-colors group-hover:text-primary-600 dark:text-neutral-0 dark:group-hover:text-solar-400">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {service.description}
                </p>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 dark:border-neutral-800">
                  <span className="text-xs font-medium text-solar-600 dark:text-solar-400">
                    {service.stats}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 transition-all group-hover:bg-solar-500 group-hover:text-white dark:bg-neutral-800 dark:text-neutral-500">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
