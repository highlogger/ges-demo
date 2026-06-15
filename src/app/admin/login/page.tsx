'use client';

// ============================================================
// GES SOLAR PRO — Admin Login Page
// ============================================================
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError('Email veya şifre hatalı.');
      return;
    }

    router.push('/admin');
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-glow">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="text-solar-500">
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="1" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="23" />
              </g>
            </svg>
          </div>
          <h1 className="mt-4 font-[var(--font-display)] text-2xl font-bold text-white">Admin Girişi</h1>
          <p className="mt-1 text-sm text-neutral-400">SolarTech Enerji Yönetim Paneli</p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          {error && (
            <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 backdrop-blur-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none"
                placeholder="admin@firma.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-1">Şifre</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 backdrop-blur-sm focus:border-solar-500 focus:ring-2 focus:ring-solar-500/20 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <Button type="submit" variant="solar" size="lg" className="w-full mt-6" disabled={loading}>
            {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </Button>
        </form>
      </div>
    </div>
  );
}
