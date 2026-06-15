// ============================================================
// GES SOLAR PRO — KVKK Aydınlatma Metni
// ============================================================
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni',
  description: 'Kişisel Verilerin Korunması Kanunu kapsamında aydınlatma metni.',
};

export default function KVKKAydinlatmaMetni() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 py-24 pt-32 lg:py-32 lg:pt-40">
        <div className="mx-auto max-w-[var(--container-max)] px-6 lg:px-12">
          <span className="text-sm font-semibold uppercase tracking-[0.15em] text-solar-400">KVKK</span>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold leading-tight text-white lg:text-6xl">Aydınlatma Metni</h1>
        </div>
      </section>

      <section className="py-[var(--section-lg)] bg-white dark:bg-neutral-900">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            <p>6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, kişisel verileriniz; veri sorumlusu sıfatıyla <strong>SolarTech Enerji A.Ş.</strong> tarafından aşağıda açıklanan kapsamda işlenebilecektir.</p>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">1. Veri Sorumlusu</h2>
            <p>Veri Sorumlusu: SolarTech Enerji A.Ş.<br />Adres: Maslak Mah. Eski Büyükdere Cad. No: 25, Plaza Kat: 12, Sarıyer / İstanbul<br />E-posta: info@solartechenerji.com<br />Telefon: 0212 555 00 00</p>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">2. İşlenen Kişisel Veriler</h2>
            <p>İletişim formu aracılığıyla paylaştığınız ad-soyad, e-posta adresi, telefon numarası, firma bilgisi ve mesaj içeriğiniz işlenmektedir. Çerezler aracılığıyla web sitesi kullanım verileriniz işlenmektedir.</p>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">3. Kişisel Verilerin İşlenme Amacı</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>İletişim taleplerinizin karşılanması</li>
              <li>Teklif ve bilgilendirme süreçlerinin yürütülmesi</li>
              <li>Hizmet sözleşmelerinin hazırlanması</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Web sitesi kullanıcı deneyiminin iyileştirilmesi</li>
            </ul>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">4. İşlemenin Hukuki Sebebi</h2>
            <p>Kişisel verileriniz, KVKK&#39;nın 5. maddesinde belirtilen; açık rızanıza dayalı olarak, bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması, hukuki yükümlülüğümüzün yerine getirilmesi ve meşru menfaatlerimiz kapsamında işlenmektedir.</p>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">5. Kişisel Verilerin Aktarılması</h2>
            <p>Kişisel verileriniz; hukuki yükümlülüklerimizin yerine getirilmesi kapsamında yetkili kamu kurum ve kuruluşlarına, hizmet aldığımız BT altyapı sağlayıcılarına ve iş ortaklarımıza KVKK&#39;nın 8. ve 9. maddelerinde belirtilen koşullar çerçevesinde aktarılabilecektir.</p>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">6. Haklarınız (KVKK Madde 11)</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde / yurt dışında aktarıldığı 3. kişileri bilme</li>
              <li>Eksik / yanlış işlenmişse düzeltilmesini isteme</li>
              <li>KVKK 7. maddede öngörülen şartlar çerçevesinde silinmesini / yok edilmesini isteme</li>
              <li>İşlemenin münhasıran otomatik sistemler ile analizi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
            </ul>

            <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-0 mt-8">7. Başvuru</h2>
            <p>Haklarınıza ilişkin taleplerinizi, <a href="/kvkk/veri-sorumlusu" className="text-primary-600 underline hover:text-primary-700 dark:text-solar-400">Veri Sorumlusu</a> sayfasındaki yöntemlerle tarafımıza iletebilirsiniz. Talebiniz en geç 30 gün içinde ücretsiz olarak sonuçlandırılacaktır.</p>

            <p className="mt-8 text-xs text-neutral-400 dark:text-neutral-500">Son güncelleme: 01 Ocak 2026</p>
          </div>
        </div>
      </section>
    </>
  );
}
