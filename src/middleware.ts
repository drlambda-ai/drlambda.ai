import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // Redirect all subdomain traffic (social, pro, app, etc.) to chatslide.ai
  if (hostname !== 'drlambda.ai' && hostname !== 'www.drlambda.ai') {
    const url = new URL(request.nextUrl.pathname + request.nextUrl.search, 'https://www.chatslide.ai');
    // Forward the original referrer so chatslide.ai middleware can capture the true source
    // (otherwise chatslide.ai only sees drlambda.ai as the referrer after the redirect)
    const referer = request.headers.get('referer') || '';
    if (referer && !referer.includes('drlambda.ai') && !referer.includes('chatslide.ai') && !url.searchParams.has('ref')) {
      try {
        url.searchParams.set('ref', new URL(referer).hostname);
      } catch {}
    }
    return NextResponse.redirect(url, 308);
  }
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
};
