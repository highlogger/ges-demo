// ============================================================
// GES SOLAR PRO — Leadership Team Section
// ============================================================
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';

const team = [
  {
    name: 'Ahmet Yılmaz',
    title: 'Kurucu & CEO',
    description: '20+ yıl enerji sektörü deneyimi. Boğaziçi Üniversitesi Elektrik Mühendisliği mezunu. 2015\'te SolarTech\'i kurdu.',
    initials: 'AY',
    colors: ['#3b82f6', '#06b6d4'],
  },
  {
    name: 'Zeynep Kaya',
    title: 'Operasyon Direktörü (COO)',
    description: '15 yıl proje yönetimi ve operasyon deneyimi. 50+ GES projesinin operasyonel yönetimini üstlendi.',
    initials: 'ZK',
    colors: ['#8b5cf6', '#a855f7'],
  },
  {
    name: 'Mehmet Demir',
    title: 'Teknoloji Direktörü (CTO)',
    description: 'Güneş enerjisi teknolojileri ve yapay zeka destekli verimlilik sistemleri konusunda uzman. Doktora, İTÜ.',
    initials: 'MD',
    colors: ['#10b981', '#14b8a6'],
  },
  {
    name: 'Elif Şahin',
    title: 'Projeler Direktörü',
    description: 'EPDK lisans süreçleri ve büyük ölçekli proje yönetiminde 12 yıllık uzman. 30+ arazi GES projesi tamamladı.',
    initials: 'EŞ',
    colors: ['#f97316', '#e11d48'],
  },
];

export function TeamSection() {
  return (
    <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
      <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
        <SectionHeading
          eyebrow="Ekibimiz"
          title="Liderlik Ekibimizle Tanışın"
          description="Her biri alanında uzman, tutkulu ve deneyimli profesyonellerden oluşan yönetim kadromuz."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <Card key={member.name} padding="lg" hover className="text-center group">
              {/* Avatar with gradient */}
              <div
                className="mx-auto flex h-24 w-24 items-center justify-center rounded-full shadow-lg transition-transform group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${member.colors[0]}, ${member.colors[1]})`,
                }}
              >
                <span className="text-2xl font-bold text-white">{member.initials}</span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-neutral-900 dark:text-neutral-0">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-solar-600 dark:text-solar-400">{member.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{member.description}</p>

              {/* LinkedIn icon placeholder */}
              <div className="mt-4 flex justify-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 transition-colors hover:bg-primary-100 hover:text-primary-600 dark:bg-neutral-800 dark:hover:bg-primary-900 dark:hover:text-primary-400">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
