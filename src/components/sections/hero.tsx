import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 bg-surface-container-lowest overflow-hidden scroll-mt-24" id="home">
      <div className="w-[90%] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-space-xs px-4 py-1.5 rounded-full bg-primary-container/15 border border-primary-container/30 text-primary-container text-label-md font-label-md font-bold uppercase tracking-wider mb-5 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
              <span>YOUR LOCAL PLUMBING EXPERTS</span>
            </div>

            {/* Main Headline - Refined & Highlighted */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold tracking-tight leading-[1.15] mb-5">
              <span className="text-on-surface block">Plumbing Problems?</span>
              <span className="text-primary-container inline-block bg-gradient-to-r from-primary-container via-[#14a090] to-tertiary bg-clip-text text-transparent drop-shadow-xs">
                We’ve Got You Covered.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-body-md md:text-body-lg font-body-md text-secondary max-w-xl mb-8 leading-relaxed">
              From emergency repairs to complete plumbing installations, get dependable service from experienced professionals. Fast diagnostics, clean work, and zero hidden fees.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md w-full sm:w-auto mb-10">
              <Link
                className="inline-flex justify-center items-center gap-space-xs bg-primary-container hover:bg-tertiary text-on-primary text-label-lg font-label-lg font-bold px-8 py-4 rounded-lg transition-all duration-200 active:scale-[0.98] shadow-md hover:shadow-lg"
                href="#contact"
              >
                <span>Book a Plumber</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
              <a
                className="inline-flex justify-center items-center gap-space-xs bg-transparent border-2 border-on-surface text-on-surface hover:bg-on-surface hover:text-on-primary text-label-lg font-label-lg font-bold px-7 py-3.5 rounded-lg transition-all duration-200 active:scale-[0.98]"
                href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>Call Now: {site.phone}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="w-full pt-6 border-t border-outline-variant/30 grid grid-cols-1 sm:grid-cols-3 gap-space-md">
              <div className="flex items-center gap-space-xs text-on-surface">
                <span
                  className="material-symbols-outlined text-primary-container text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <span className="text-label-md font-label-md font-semibold text-on-surface">
                  Licensed &amp; Insured
                </span>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface">
                <span
                  className="material-symbols-outlined text-primary-container text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  speed
                </span>
                <span className="text-label-md font-label-md font-semibold text-on-surface">
                  Fast Response
                </span>
              </div>
              <div className="flex items-center gap-space-xs text-on-surface">
                <span
                  className="material-symbols-outlined text-primary-container text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  workspace_premium
                </span>
                <span className="text-label-md font-label-md font-semibold text-on-surface">
                  Quality Workmanship
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame with Floating Card */}
          <div className="lg:col-span-5 relative mt-space-lg lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-outline-variant/30 shadow-lg bg-surface-container-low aspect-[4/3] lg:aspect-[4/4]">
              <Image
                src="/images/hero-technician.jpg"
                alt="Professional technician inspecting residential plumbing fixtures"
                fill
                priority
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/30 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Architectural Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-space-md card-elevation-2 flex items-center gap-space-md max-w-xs z-10 shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-primary-container/15 flex items-center justify-center text-primary-container shrink-0">
                <span
                  className="material-symbols-outlined text-[28px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </span>
              </div>
              <div>
                <p className="text-label-lg font-label-lg font-bold text-on-surface leading-tight">Reliable Service</p>
                <p className="text-body-sm font-body-sm text-secondary">Quality You Can Trust Always</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
