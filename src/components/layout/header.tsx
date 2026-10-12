"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-surface-container-lowest/95 backdrop-blur-md top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm">
      <div className="w-[94%] sm:w-[90%] max-w-[1440px] mx-auto relative flex items-center justify-between h-16 sm:h-20">
        {/* Left: Brand Logo */}
        <div className="flex items-center z-10 shrink-0">
          <Link
            className="flex items-center gap-2 sm:gap-space-sm group active:scale-[0.98] transition-transform duration-150 shrink-0"
            href="#home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
              <span className="material-symbols-outlined text-[22px] sm:text-[26px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                water_drop
              </span>
            </div>
            <div className="leading-tight">
              <span className="text-base sm:text-headline-sm font-headline-sm text-on-surface tracking-tight font-bold block">
                AquaFlow<span className="hidden min-[440px]:inline"> Plumbing Co.</span>
              </span>
              <span className="hidden lg:block text-label-md font-label-md text-secondary tracking-widest uppercase mt-0.5">
                Reliable Plumbing. Done Right.
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Desktop Nav Links - Absolutely Centered */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 lg:gap-8 pointer-events-auto"
        >
          <Link
            className="text-primary font-semibold border-b-2 border-primary pb-1 text-sm lg:text-label-lg font-label-lg hover:text-primary-container transition-colors"
            href="#home"
          >
            Home
          </Link>
          <Link
            className="text-secondary hover:text-primary transition-colors font-medium text-sm lg:text-label-lg font-label-lg"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-secondary hover:text-primary transition-colors font-medium text-sm lg:text-label-lg font-label-lg"
            href="#why-choose-us"
          >
            Why Choose Us
          </Link>
          <Link
            className="text-secondary hover:text-primary transition-colors font-medium text-sm lg:text-label-lg font-label-lg"
            href="#contact"
          >
            Contact
          </Link>
        </nav>

        {/* Right: Trailing Actions (Call button + Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3 z-10 shrink-0">
          <a
            className="inline-flex items-center justify-center gap-1.5 bg-primary-container text-on-primary h-9 px-3 sm:h-10 sm:px-4 rounded-lg text-xs sm:text-sm font-bold shadow-sm hover:bg-tertiary transition-colors active:scale-[0.98] shrink-0 whitespace-nowrap"
            href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
            aria-label="Call Now"
          >
            <span className="material-symbols-outlined text-[18px] sm:text-[20px]">call</span>
            <span>Call Now</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            className="md:hidden w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container active:bg-surface-container-high transition-colors shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-outline-variant/30 bg-surface-container-lowest/95 backdrop-blur-md px-5 py-4 space-y-2 shadow-lg">
          <Link
            className="block py-2.5 px-3 rounded-lg text-primary font-bold text-base hover:bg-primary-container/10 transition-colors"
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            className="block py-2.5 px-3 rounded-lg text-secondary hover:text-primary font-medium text-base hover:bg-primary-container/10 transition-colors"
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            className="block py-2.5 px-3 rounded-lg text-secondary hover:text-primary font-medium text-base hover:bg-primary-container/10 transition-colors"
            href="#why-choose-us"
            onClick={() => setMobileMenuOpen(false)}
          >
            Why Choose Us
          </Link>
          <Link
            className="block py-2.5 px-3 rounded-lg text-secondary hover:text-primary font-medium text-base hover:bg-primary-container/10 transition-colors"
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>

          <div className="pt-3 border-t border-outline-variant/30">
            <a
              className="w-full flex items-center justify-center gap-2 bg-primary-container text-on-primary py-3 rounded-lg font-bold text-sm shadow-sm hover:bg-tertiary transition-colors"
              href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>Direct Emergency Call: {site.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
