import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Native pages kept on drlambda.ai: /recommendations, /sponsors
      // Everything else (including root) 308s to chatslide.ai to consolidate backlink equity.
      {
        source: '/blog',
        destination: 'https://www.chatslide.ai/articles',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: 'https://www.chatslide.ai/articles/:slug*',
        permanent: true,
      },
      {
        source: '/',
        destination: 'https://www.chatslide.ai/',
        permanent: true,
      },
      {
        source: '/:path((?!recommendations|sponsors|_next|favicon).+)',
        destination: 'https://www.chatslide.ai/:path',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
