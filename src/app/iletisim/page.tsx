// ============================================================
// GES SOLAR PRO — Contact Page (Server Action bağlı)
// ============================================================
import type { Metadata } from 'next';
import { defaultSiteConfig } from '@/config/site.config';
import { Card } from '@/components/ui/card';
import { ContactForm } from '@/components/shared/contact-form';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Bizimle iletişime geçin. Ücretsiz keşif randevusu için hemen ulaşın.',
};

export default function ContactPage() {
  const config = defaultSiteConfig;
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24 pt-32 lg:py-32 lg:pt-40">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-400">Bize Ulaşın</span>
            <h1 className="mt-4 font-[var(--font-display)] text-5xl font-bold leading-tight text-white lg:text-7xl">İletişim</h1>
            <p className="mt-6 text-xl leading-relaxed text-neutral-300/80">Ücretsiz keşif randevusu için hemen ulaşın. Ekibimiz en kısa sürede size dönüş yapacaktır.</p>
          </div>
        </div>
      </section>

      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              {[
                { icon: '📍', title: 'Adres', content: config.contact.address.tr },
                { icon: '📞', title: 'Telefon', content: config.contact.phoneDisplay, href: `tel:${config.contact.phone}` },
                { icon: '✉️', title: 'E-Posta', content: config.contact.email, href: `mailto:${config.contact.email}` },
                { icon: '💬', title: 'WhatsApp', content: 'WhatsApp\'tan Yazın', href: config.contact.whatsapp },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-2xl dark:bg-primary-900">{item.icon}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-0">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-neutral-500 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-solar-400">{item.content}</a>
                    ) : (
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form — Client component with Server Action */}
            <div className="lg:col-span-2">
              <Card padding="xl" variant="elevated">
                <ContactForm />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="pb-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <div className="overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800">
            <div className="flex aspect-[21/9] items-center justify-center bg-neutral-100 text-sm text-neutral-400 dark:bg-neutral-800">
              🗺️ Google Maps Entegrasyonu — {config.contact.address.tr}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
