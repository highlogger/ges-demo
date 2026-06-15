// ============================================================
// GES SOLAR PRO — Proxy (Auth Protection)
// Next.js 16 — /admin/* rotalarını korur
// ============================================================
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Admin routes protection
  if (pathname.startsWith('/admin')) {
    // Login sayfası hariç
    if (pathname === '/admin/login') {
      const token = await getToken({ req: request, secret: process.env.AUTH_SECRET });
      if (token) {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
      return NextResponse.next();
    }

    const token = await getToken({ req: request, secret: process.env.AUTH_SECRET });
    if (!token) {
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
