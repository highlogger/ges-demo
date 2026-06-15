// ============================================================
// GES SOLAR PRO — Cookie Policy (Çerez Politikası)
// ============================================================
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Çerez Politikası',
  description: 'Web sitemizde kullanılan çerezler ve yönetimi hakkında bilgi.',
};

export default function CerezPolitikasi() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24 pt-32 lg:py-32 lg:pt-40">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-400">KVKK</span>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold leading-tight text-white lg:text-6xl">Çerez Politikası</h1>
        </div>
      </section>

      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0">Çerez Nedir?</h2>
            <p>Çerezler (cookies), bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin temel işlevlerini yerine getirmesine, kullanıcı deneyimini iyileştirmeye ve site trafiğini analiz etmeye yardımcı olur.</p>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">Kullandığımız Çerezler</h2>

            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Zorunlu Çerezler</h3>
            <p>Web sitesinin düzgün çalışması için gerekli olan çerezlerdir. Bu çerezler anonim olarak web sitesinin temel işlevlerini ve güvenlik özelliklerini sağlar. KVKK kapsamında açık rıza gerektirmezler.</p>

            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Analitik Çerezler</h3>
            <p>Ziyaretçilerin web sitesiyle nasıl etkileşime girdiğini anlamamıza yardımcı olan çerezlerdir. Ziyaretçi sayısı, hemen çıkma oranı, trafik kaynağı gibi metrikler hakkında bilgi sağlar. Google Analytics ve benzeri araçlar için kullanılır.</p>

            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Pazarlama Çerezleri</h3>
            <p>Ziyaretçilere ilgi alanlarına uygun reklamlar göstermek için kullanılan çerezlerdir. Meta Pixel, LinkedIn Insight Tag ve benzeri araçlar için kullanılabilir.</p>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">Çerez Tercihlerinizi Yönetme</h2>
            <p>Tarayıcı ayarlarınızdan çerezleri silebilir, engelleyebilir veya çerez bildirimi alabilirsiniz. Ancak zorunlu çerezleri devre dışı bırakmanız durumunda web sitemizin bazı işlevleri düzgün çalışmayabilir. Çerez tercihlerinizi sitemizdeki çerez bannerı üzerinden de yönetebilirsiniz.</p>

            <p className="mt-8 text-xs text-neutral-400 dark:text-neutral-500">Son güncelleme: 01 Ocak 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
