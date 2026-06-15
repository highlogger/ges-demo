'use client';

// ============================================================
// GES SOLAR PRO — Contact Form (Server Action ile)
// ============================================================
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { submitContactForm } from '@/lib/actions';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    setStatus('loading');
    try {
      const result = await submitContactForm(formData);
      if (result?.error) {
        setStatus('error');
        setMessage(result.error);
      } else {
        setStatus('success');
        setMessage(result?.message || 'Mesajınız başarıyla gönderildi.');
        formRef.current?.reset();
      }
    } catch {
      setStatus('error');
      setMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-0">Mesaj Bırakın</h2>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">En kısa sürede size dönüş yapacağız.</p>

      {status === 'success' && (
        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400">
          ✅ {message}
        </div>
      )}
      {status === 'error' && (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
          {message}
        </div>
      )}

      <form ref={formRef} action={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Ad Soyad *</label>
            <input id="name" name="name" type="text" required className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-all focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0 dark:placeholder-neutral-500" placeholder="Adınız Soyadınız" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Firma</label>
            <input id="company" name="company" type="text" className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-all focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0 dark:placeholder-neutral-500" placeholder="Firma adı" />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">E-Posta *</label>
            <input id="email" name="email" type="email" required className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-all focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0 dark:placeholder-neutral-500" placeholder="ornek@firma.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Telefon</label>
            <input id="phone" name="phone" type="tel" className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-all focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0 dark:placeholder-neutral-500" placeholder="05XX XXX XX XX" />
          </div>
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">İlgilendiğiniz Hizmet</label>
          <select id="service" name="service" className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 transition-all focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0">
            <option value="">Seçiniz</option>
            <option>Arazi GES Kurulumu</option><option>Çatı GES Kurulumu</option>
            <option>Enerji Danışmanlığı</option><option>Bakım & İzleme</option><option>Diğer</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Mesajınız *</label>
          <textarea id="message" name="message" required rows={5} className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-all focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-0 dark:placeholder-neutral-500" placeholder="Projeniz hakkında kısaca bilgi verin..." />
        </div>
        <div className="flex items-start gap-3">
          <input id="kvkk" name="kvkk" type="checkbox" required className="mt-1 h-4 w-4 rounded border-neutral-300 text-solar-500 focus:ring-solar-500 dark:border-neutral-700" />
          <label htmlFor="kvkk" className="text-xs text-neutral-500 dark:text-neutral-400">
            <a href="/kvkk/aydinlatma-metni" className="underline hover:text-primary-600 dark:hover:text-solar-400">Aydınlatma Metni</a>&apos;ni okudum, kişisel verilerimin işlenmesini kabul ediyorum.
          </label>
        </div>
        <Button type="submit" variant="solar" size="lg" className="w-full sm:w-auto" disabled={status === 'loading'}>
          {status === 'loading' ? 'Gönderiliyor...' : 'Gönder'}
          <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </Button>
      </form>
    </div>
  );
}
