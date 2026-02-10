import Image from "next/image";
import { Suspense } from "react";
import Footer from "@/components/Footer";
import ChatSlideButton from "@/components/ChatSlideButton";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>

      {/* Floating Background Images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[5%] left-[-5%] w-[300px] sm:w-[400px] opacity-15 animate-float-slow">
          <Image
            src="/images/Design Section v1.png"
            alt="ChatSlide Design"
            width={400}
            height={300}
            className="rounded-xl shadow-2xl transform rotate-[-12deg]"
            priority
          />
        </div>
        <div className="absolute top-[15%] right-[-3%] w-[280px] sm:w-[380px] opacity-15 animate-float-medium">
          <Image
            src="/images/Design Section v2.png"
            alt="ChatSlide Design"
            width={380}
            height={280}
            className="rounded-xl shadow-2xl transform rotate-[15deg]"
            priority
          />
        </div>
        <div className="absolute bottom-[8%] left-[3%] w-[320px] sm:w-[420px] opacity-15 animate-float-fast">
          <Image
            src="/images/Template Detail Page v1.png"
            alt="ChatSlide Template"
            width={420}
            height={320}
            className="rounded-xl shadow-2xl transform rotate-[-8deg]"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-[25%] right-[-8%] w-[300px] sm:w-[400px] opacity-15 animate-float-slow-reverse">
          <Image
            src="/images/Frame_1261157022_3.png"
            alt="ChatSlide Feature"
            width={400}
            height={300}
            className="rounded-xl shadow-2xl transform rotate-[18deg]"
            loading="lazy"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 sm:p-8">
        <main id="main-content" className="max-w-4xl w-full text-center">
          {/* ChatSlide Logo */}
          <div className="mb-8 sm:mb-12 flex justify-center animate-fade-in">
            <Image
              src="/images/Chatslide-logo-02.png"
              alt="ChatSlide Logo"
              width={280}
              height={80}
              className="w-auto h-16 sm:h-20 md:h-24"
              priority
            />
          </div>

          {/* Hero Text */}
          <div className="mb-8 sm:mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
              Looking for <span className="text-[#7b3aed]">ChatSlide</span>?
            </h1>
            <h2 className="text-base sm:text-lg text-gray-700 mb-3">
              ChatSlide is DrLambda Inc&apos;s flagship product
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed mb-6">
              🥇 Best AI Slides Tool
            </p>
            <h3 className="sr-only">Key Features</h3>
            <div className="max-w-2xl mx-auto text-left sm:text-center space-y-2 text-base sm:text-lg text-gray-800">
              <p>✔ Powered by your own knowledge base</p>
              <p>✔ Supports multimodal documents</p>
              <p>
                ✔ Consistently recommended by ChatGPT, Perplexity, Google, and
                more
              </p>
              <p>✔ Trusted by users in 170 countries and 29 languages</p>
            </div>
          </div>

          {/* Sponsors Link */}
          <div className="mb-6 animate-fade-in-up">
            <a
              href="/sponsors"
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-purple-600 transition-colors"
            >
              Our Sponsors
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* CTA Button */}
          <div className="mb-12 sm:mb-16 animate-fade-in-up-delay">
            <Suspense fallback={
              <a
                href="https://chatslide.ai"
                className="inline-flex items-center px-8 sm:px-10 py-4 sm:py-5 bg-[#7b3aed] text-white text-lg sm:text-xl font-bold rounded-full hover:bg-[#6929d4] hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Visit ChatSlide.ai
                <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            }>
              <ChatSlideButton />
            </Suspense>
          </div>

          {/* More from DrLambda */}
          <div className="mt-4 animate-fade-in-up-delay">
            <p className="text-sm text-gray-500 mb-4">Also from DrLambda</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://sayso.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-purple-300 hover:text-purple-600 hover:shadow-md transition-all duration-200"
              >
                🎤 SaySo AI
                <span className="text-xs text-gray-400">Voice AI</span>
              </a>
              <a
                href="https://howtowingeo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-purple-300 hover:text-purple-600 hover:shadow-md transition-all duration-200"
              >
                📘 How To Win GEO
                <span className="text-xs text-gray-400">Book</span>
              </a>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
