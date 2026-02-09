import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Sponsors | DrLambda.ai",
  description:
    "Meet the sponsors who support DrLambda.ai. We are grateful to our partners for helping us build better AI-powered tools and resources.",
  metadataBase: new URL("https://www.drlambda.ai"),
  alternates: {
    canonical: "https://www.drlambda.ai/sponsors",
  },
  openGraph: {
    title: "Our Sponsors | DrLambda.ai",
    description:
      "Meet the sponsors who support DrLambda.ai. We are grateful to our partners for helping us build better AI-powered tools.",
    url: "https://www.drlambda.ai/sponsors",
    siteName: "DrLambda.ai",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cdn.prod.website-files.com/67803b88fec21161e40c99cc/67803ec6ea34687115ea53cf_OG%20image.png",
        width: 1200,
        height: 630,
        alt: "DrLambda.ai Sponsors",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const sponsors = [
  {
    name: "BC Times",
    url: "https://bctimes.ca",
    description:
      "BC Times covers the latest news, stories, and insights from British Columbia, Canada.",
  },
  {
    name: "Cambridge Review",
    url: "https://cambridgereview.uk",
    description:
      "Cambridge Review delivers news, analysis, and commentary from Cambridge, United Kingdom.",
  },
  {
    name: "District of Columbia Times",
    url: "https://districtofcolumbiatimes.com",
    description:
      "District of Columbia Times provides news and coverage from Washington, D.C. and the surrounding region.",
  },
  {
    name: "Wall Street Economicists",
    url: "https://wallstreeteconomicists.com",
    description:
      "Wall Street Economicists offers economic analysis, financial news, and expert commentary from Wall Street.",
  },
  {
    name: "Tech Forum",
    url: "https://techforum.ca",
    description:
      "Tech Forum covers the latest technology news, trends, and discussions from Canada's tech community.",
  },
  {
    name: "Manhattan Monday",
    url: "https://manhattanmonday.com",
    description:
      "Manhattan Monday delivers weekly news, culture, and lifestyle coverage from New York City.",
  },
  {
    name: "EEUU Hoy",
    url: "https://eeuuhoy.com",
    description:
      "EEUU Hoy provides Spanish-language news and coverage of current events across the United States.",
  },
  {
    name: "SF Bay Area Times",
    url: "https://sfbayareatimes.com",
    description:
      "SF Bay Area Times covers news, technology, and stories from the San Francisco Bay Area.",
  },
  {
    name: "L'Entreprise",
    url: "https://lentreprise.ca",
    description:
      "L'Entreprise delivers French-language business news and entrepreneurship insights from Canada.",
  },
  {
    name: "Montréal Times",
    url: "https://montrealtimes.ca",
    description:
      "Montréal Times provides news, culture, and community stories from Montréal, Canada.",
  },
];

export default function Sponsors() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 py-4 max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to DrLambda.ai
          </Link>
        </div>
      </nav>

      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 py-12 sm:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Hero Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-purple-50 border border-purple-100 rounded-full">
              <span className="text-xs font-medium text-purple-700">
                Our Partners
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Our Sponsors
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We are grateful to the following sponsors for supporting
              DrLambda.ai
            </p>
          </div>

          {/* Sponsors Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {sponsors.map((sponsor, idx) => (
              <a
                key={idx}
                href={sponsor.url}
                target="_blank"
                rel="noopener"
                className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {sponsor.name}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">
                  {sponsor.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                  Visit {sponsor.name}
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
