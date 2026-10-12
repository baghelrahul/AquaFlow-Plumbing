import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-inverse-surface text-inverse-on-surface border-t border-outline/20">
      <div className="w-[90%] max-w-[1440px] mx-auto pt-14 pb-10 md:pt-18 md:pb-12">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-outline/20">
          {/* Col 1: Brand Info & Description (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#home" className="inline-flex items-center gap-space-sm group">
              <div className="w-10 h-10 rounded-lg bg-primary-fixed/20 flex items-center justify-center text-primary-fixed">
                <span className="material-symbols-outlined text-[24px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  water_drop
                </span>
              </div>
              <span className="text-xl font-headline-sm font-bold text-inverse-on-surface tracking-tight">
                {site.name}
              </span>
            </Link>

            <p className="text-body-sm text-surface-container-high leading-relaxed max-w-sm">
              Architectural-grade plumbing solutions engineered for luxury residential and boutique commercial properties. Fast local diagnostics, pristine craftsmanship, and transparent pricing.
            </p>

            <div className="pt-2 flex items-center gap-2 text-primary-fixed text-xs font-semibold">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>{site.license}</span>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-label-lg font-bold text-inverse-on-surface uppercase tracking-wider text-xs">
              Quick Links
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#home" className="text-surface-variant hover:text-primary-fixed transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-surface-variant hover:text-primary-fixed transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="text-surface-variant hover:text-primary-fixed transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-surface-variant hover:text-primary-fixed transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-surface-variant hover:text-primary-fixed transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Plumbing Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-label-lg font-bold text-inverse-on-surface uppercase tracking-wider text-xs">
              Our Services
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#services" className="text-surface-variant hover:text-primary-fixed transition-colors flex items-center gap-1.5">
                  <span className="text-primary-fixed font-bold">•</span>
                  <span>Emergency Plumbing</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-surface-variant hover:text-primary-fixed transition-colors flex items-center gap-1.5">
                  <span className="text-primary-fixed font-bold">•</span>
                  <span>Leak Detection &amp; Repair</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-surface-variant hover:text-primary-fixed transition-colors flex items-center gap-1.5">
                  <span className="text-primary-fixed font-bold">•</span>
                  <span>Drain Cleaning &amp; Jetting</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-surface-variant hover:text-primary-fixed transition-colors flex items-center gap-1.5">
                  <span className="text-primary-fixed font-bold">•</span>
                  <span>Fixture Installation</span>
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-surface-variant hover:text-primary-fixed transition-colors flex items-center gap-1.5">
                  <span className="text-primary-fixed font-bold">•</span>
                  <span>Water Heater Service</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: 24/7 Emergency & Contact (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-label-lg font-bold text-inverse-on-surface uppercase tracking-wider text-xs">
              24/7 Emergency Dispatch
            </p>
            <p className="text-body-sm text-surface-container-high leading-relaxed">
              Available 24 hours a day, 7 days a week for immediate emergency repairs.
            </p>

            <div>
              <a
                href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center gap-2 bg-primary-container text-on-primary px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-tertiary transition-all active:scale-[0.98] shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
                <span>{site.phone}</span>
              </a>
            </div>

            <div className="text-xs text-surface-variant space-y-1">
              <p>Email: <a href={`mailto:${site.email}`} className="text-primary-fixed hover:underline">{site.email}</a></p>
              <p>Hours: {site.hours}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-surface-variant">
          <p>© {currentYear} {site.name}. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/privacy/" className="hover:text-inverse-on-surface transition-colors">
              Privacy Policy
            </Link>
            <Link href="#contact" className="hover:text-inverse-on-surface transition-colors">
              Terms of Service
            </Link>
            <Link href="#contact" className="hover:text-inverse-on-surface transition-colors">
              Licensing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
