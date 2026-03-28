import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // Redirect all subdomain traffic (social, pro, app, etc.) to chatslide.ai
  if (hostname !== 'drlambda.ai' && hostname !== 'www.drlambda.ai') {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://www.chatslide.ai');
    return NextResponse.redirect(url, 308);
  }
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
