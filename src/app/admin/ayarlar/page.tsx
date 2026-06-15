// ============================================================
// GES SOLAR PRO — Admin Site Settings
// ============================================================
import prisma from '@/lib/prisma';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { updateSiteConfig } from '@/lib/actions';

export default async function AdminSettingsPage() {
  const config = await prisma.siteConfig.findUnique({ where: { id: 'default' } }) || {
    name: '', shortName: '', tagline: '', description: '', email: '', phone: '', phoneDisplay: '',
    addressTr: '', addressEn: '', googleMaps: '', whatsapp: '', linkedin: '', instagram: '',
    twitter: '', youtube: '', facebook: '', installedCapacity: '', totalProjects: 0,
    carbonReduction: '', yearsExperience: 0, happyCustomers: 0,
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-0">Site Ayarları</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Firma bilgileri, iletişim ve istatistikler</p>
      </div>

      <Card padding="xl" variant="elevated">
        <form action={updateSiteConfig} className="space-y-6">
          <fieldset>
            <legend className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-3 border-b border-neutral-200 dark:border-neutral-800 pb-2 w-full">Firma Bilgileri</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              {['name:Firma Adı', 'shortName:Kısa Ad', 'tagline:Slogan'].map((item) => {
                const [name, label] = item.split(':');
                return (
                  <div key={name} className={name === 'tagline' ? 'sm:col-span-2' : ''}>
                    <label htmlFor={name} className="block text-xs font-medium text-neutral-500 mb-1">{label}</label>
                    <input id={name} name={name} defaultValue={(config as Record<string, unknown>)[name] as string} className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-solar-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
                  </div>
                );
              })}
              <div className="sm:col-span-2">
                <label htmlFor="description" className="block text-xs font-medium text-neutral-500 mb-1">Açıklama</label>
                <textarea id="description" name="description" defaultValue={config.description || ''} rows={2} className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-solar-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-3 border-b border-neutral-200 dark:border-neutral-800 pb-2 w-full">İletişim Bilgileri</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              {['email:E-Posta:email', 'phone:Telefon', 'phoneDisplay:Telefon (Görünen)', 'whatsapp:WhatsApp URL', 'googleMaps:Google Maps URL'].map((item) => {
                const [name, label] = item.split(':');
                return (
                  <div key={name}>
                    <label htmlFor={name} className="block text-xs font-medium text-neutral-500 mb-1">{label}</label>
                    <input id={name} name={name} defaultValue={(config as Record<string, unknown>)[name] as string} className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-solar-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
                  </div>
                );
              })}
              {['addressTr:Adres (TR)', 'addressEn:Adres (EN)'].map((item) => {
                const [name, label] = item.split(':');
                return (
                  <div key={name} className="sm:col-span-2">
                    <label htmlFor={name} className="block text-xs font-medium text-neutral-500 mb-1">{label}</label>
                    <textarea id={name} name={name} defaultValue={(config as Record<string, unknown>)[name] as string} rows={2} className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-solar-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
                  </div>
                );
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-3 border-b border-neutral-200 dark:border-neutral-800 pb-2 w-full">Sosyal Medya</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              {['linkedin:LinkedIn URL', 'instagram:Instagram URL', 'twitter:Twitter/X URL', 'youtube:YouTube URL', 'facebook:Facebook URL'].map((item) => {
                const [name, label] = item.split(':');
                return (
                  <div key={name}>
                    <label htmlFor={name} className="block text-xs font-medium text-neutral-500 mb-1">{label}</label>
                    <input id={name} name={name} defaultValue={(config as Record<string, unknown>)[name] as string} className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-solar-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
                  </div>
                );
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 mb-3 border-b border-neutral-200 dark:border-neutral-800 pb-2 w-full">İstatistikler (Ana Sayfa)</legend>
            <div className="grid gap-4 sm:grid-cols-2">
              {[['installedCapacity:Kurulu Güç', 'carbonReduction:Karbon Azaltımı'], ['totalProjects:Proje Sayısı:number', 'yearsExperience:Deneyim (Yıl):number'], ['happyCustomers:Mutlu Müşteri:number']].flat().map((item) => {
                const [name, label, type] = item.split(':');
                return (
                  <div key={name}>
                    <label htmlFor={name} className="block text-xs font-medium text-neutral-500 mb-1">{label}</label>
                    <input id={name} name={name} type={type === 'number' ? 'number' : 'text'} defaultValue={(config as Record<string, unknown>)[name] as string} className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:border-solar-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0" />
                  </div>
                );
              })}
            </div>
          </fieldset>

          <div className="flex gap-4 pt-2">
            <Button type="submit" variant="solar" size="lg">Ayarları Kaydet</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
