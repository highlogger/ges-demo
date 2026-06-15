// ============================================================
// GES SOLAR PRO — Veri Sorumlusu Başvuru Sayfası
// ============================================================
import type { Metadata } from 'next';
import { defaultSiteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Veri Sorumlusu',
  description: 'KVKK kapsamında veri sorumlusuna başvuru bilgileri.',
};

export default function VeriSorumlusu() {
  const c = defaultSiteConfig.contact;
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24 pt-32 lg:py-32 lg:pt-40">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-400">KVKK</span>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold leading-tight text-white lg:text-6xl">Veri Sorumlusuna Başvuru</h1>
        </div>
      </section>

      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            <p>6698 sayılı Kişisel Verilerin Korunması Kanunu&apos;nun 11. maddesi kapsamındaki haklarınıza ilişkin taleplerinizi aşağıdaki yöntemlerle Veri Sorumlusu&apos;na iletebilirsiniz.</p>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">Veri Sorumlusu Bilgileri</h2>
            <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <p><strong>Unvan:</strong> SolarTech Enerji A.Ş.</p>
              <p><strong>Adres:</strong> {c.address.tr}</p>
              <p><strong>E-posta (KVKK):</strong> kvkk@solartechenerji.com</p>
              <p><strong>Telefon:</strong> {c.phoneDisplay}</p>
            </div>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">Başvuru Yöntemleri</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Yazılı Başvuru:</strong> Islak imzalı dilekçe ile yukarıdaki adrese şahsen veya noter aracılığıyla başvurabilirsiniz.</li>
              <li><strong>Kayıtlı Elektronik Posta (KEP):</strong> solartechenerji@hs01.kep.tr adresine KEP ile başvurabilirsiniz.</li>
              <li><strong>E-posta:</strong> kvkk@solartechenerji.com adresine, sistemimizde kayıtlı e-posta adresinizden başvurabilirsiniz.</li>
            </ol>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">Başvuruda Bulunması Gereken Bilgiler</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Ad, soyad ve başvuru yazılı ise imza</li>
              <li>T.C. kimlik numarası (yabancılar için pasaport/uyrukluk numarası)</li>
              <li>Tebligata esas yerleşim yeri veya iş yeri adresi</li>
              <li>Varsa bildirime esas elektronik posta adresi, telefon numarası</li>
              <li>Talep konusu</li>
            </ul>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">Başvuru Değerlendirme Süreci</h2>
            <p>Talebiniz, niteliğine göre en kısa sürede ve her halükarda en geç <strong>30 gün</strong> içinde ücretsiz olarak sonuçlandırılacaktır. Başvurunuzun reddedilmesi, verilen cevabın yetersiz bulunması veya süresinde cevap verilmemesi hallerinde; cevabı öğrendiğiniz tarihten itibaren 30 gün ve her halde başvuru tarihinden itibaren 60 gün içinde KVK Kurulu&apos;na şikayette bulunabilirsiniz.</p>

            <p className="mt-8 text-xs text-neutral-400 dark:text-neutral-500">Son güncelleme: 01 Ocak 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
