// ============================================================
// GES SOLAR PRO — Certifications & Partners Section
// ============================================================
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';

const certifications = [
  {
    title: 'EPDK Lisansı',
    description: 'Enerji Piyasası Düzenleme Kurumu onaylı üretim lisansı ile yasal mevzuata tam uyumlu hizmet.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'ISO 9001:2015',
    description: 'Kalite Yönetim Sistemi sertifikası ile tüm süreçlerimizde uluslararası standartlarda kalite güvencesi.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
      </svg>
    ),
  },
  {
    title: 'ISO 14001:2015',
    description: 'Çevre Yönetim Sistemi sertifikası ile çevresel etkiyi minimize eden sürdürülebilir operasyon.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 018.862 12.872M15 19.5l-.888.888a1.125 1.125 0 01-1.59 0L9 16.5m6 3a9.001 9.001 0 01-14.25-4.821" />
      </svg>
    ),
  },
  {
    title: 'ISO 45001:2018',
    description: 'İş Sağlığı ve Güvenliği Yönetim Sistemi ile tüm saha çalışanlarımız için güvenli çalışma ortamı.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const partners = [
  { name: 'Huawei FusionSolar', category: 'İnverter Teknolojisi' },
  { name: 'Sungrow', category: 'İnverter & Depolama' },
  { name: 'JA Solar', category: 'Panel Üreticisi' },
  { name: 'Longi Solar', category: 'Panel Üreticisi' },
  { name: 'Schneider Electric', category: 'Elektrik Ekipmanları' },
  { name: 'PVsyst', category: 'Simülasyon Yazılımı' },
];

export function Certifications() {
  return (
    <section className="py-[var(--section-lg)] bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
        <SectionHeading
          eyebrow="Belgelerimiz"
          title="Lisans ve Sertifikalarımız"
          description="Uluslararası standartlarda kalite, çevre ve iş güvenliği yönetim sistemleri ile güvenilir hizmet."
        />

        {/* Certifications grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <Card key={cert.title} padding="lg" hover className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-solar-500/10 text-solar-600 transition-colors group-hover:bg-solar-500/20 dark:text-solar-400">
                {cert.icon}
              </div>
              <h3 className="mt-5 font-semibold text-neutral-900 dark:text-neutral-0">{cert.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{cert.description}</p>
            </Card>
          ))}
        </div>

        {/* Technology Partners */}
        <div className="mt-20">
          <h3 className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-neutral-400">
            Teknoloji İş Ortaklarımız
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {partners.map((p) => (
              <span
                key={p.name}
                className="inline-flex flex-col items-center rounded-xl border border-neutral-200 bg-white px-5 py-3 text-center transition-all hover:border-solar-300 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-solar-600"
              >
                <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">{p.name}</span>
                <span className="mt-0.5 text-xs text-neutral-400">{p.category}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
