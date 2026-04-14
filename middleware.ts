import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const pathname = request.nextUrl.pathname

  // Route qr.simplyperfecthn.com → /qr
  if (hostname.startsWith('qr.')) {
    // Avoid infinite rewrite loop
    if (!pathname.startsWith('/qr')) {
      const url = request.nextUrl.clone()
      url.pathname = '/qr'
      return NextResponse.rewrite(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Run on all paths except Next.js internals and static files
    '/((?!_next/static|_next/image|favicon|.*\\.(?:ico|png|jpg|jpeg|svg|webp|css|js)).*)',
  ],
}
