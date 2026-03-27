/**
 * Appends the original referrer (upstream of drlambda.ai) to a chatslide.ai URL
 * so ChatSlide sees where the user actually came from, not drlambda.ai.
 */
export function appendReferrer(baseUrl: string): string {
  if (typeof document === 'undefined' || !document.referrer) return baseUrl;

  try {
    const referrerHost = new URL(document.referrer).hostname;
    if (referrerHost.includes('drlambda.ai')) return baseUrl;

    const url = new URL(baseUrl);
    if (!url.searchParams.has('ref')) {
      url.searchParams.set('ref', referrerHost);
    }
    return url.toString();
  } catch {
    return baseUrl;
  }
}
