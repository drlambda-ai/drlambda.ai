import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Catch-all: redirect every path on drlambda.ai (and all subdomains) to chatslide.ai
      // Subdomains (social, pro, app) need DNS + Vercel domain config first
      {
        source: '/:path((?!recommendations).*)',
        destination: 'https://www.chatslide.ai/:path',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
