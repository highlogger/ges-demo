// ============================================================
// GES SOLAR PRO — Gizlilik Politikası
// ============================================================
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası',
  description: 'Web sitemizin gizlilik politikası.',
};

export default function GizlilikPolitikasi() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24 pt-32 lg:py-32 lg:pt-40">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-400">Gizlilik</span>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold leading-tight text-white lg:text-6xl">Gizlilik Politikası</h1>
        </div>
      </section>

      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0">1. Genel Bilgilendirme</h2>
            <p>SolarTech Enerji A.Ş. olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğine saygı duyuyor ve kişisel verilerinizi korumayı taahhüt ediyoruz. Bu gizlilik politikası, web sitemiz aracılığıyla toplanan bilgilerin nasıl işlendiğini açıklamaktadır.</p>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">2. Toplanan Bilgiler</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>İletişim formu aracılığıyla paylaştığınız ad-soyad, e-posta, telefon gibi bilgiler</li>
              <li>Çerezler aracılığıyla toplanan anonim kullanım istatistikleri</li>
              <li>Enerji hesaplayıcı kullanımı sırasında girdiğiniz anonim veriler</li>
            </ul>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">3. Bilgilerin Kullanımı</h2>
            <p>Toplanan kişisel veriler; hizmet taleplerinizin karşılanması, teklif süreçlerinin yürütülmesi, sözleşmelerin hazırlanması ve yasal yükümlülüklerin yerine getirilmesi amacıyla kullanılmaktadır.</p>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">4. Veri Güvenliği</h2>
            <p>Kişisel verilerinizin güvenliğini sağlamak için uygun teknik ve idari tedbirleri almaktayız. Web sitemiz SSL/TLS şifreleme ile korunmaktadır.</p>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">5. Üçüncü Taraf Bağlantıları</h2>
            <p>Web sitemiz, sosyal medya platformlarına bağlantılar içerebilir. Bu platformların gizlilik uygulamalarından sorumlu değiliz.</p>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">6. İletişim</h2>
            <p>Gizlilik politikamızla ilgili sorularınız için info@solartechenerji.com adresine e-posta gönderebilirsiniz.</p>

            <p className="mt-8 text-xs text-neutral-400 dark:text-neutral-500">Son güncelleme: 01 Ocak 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
