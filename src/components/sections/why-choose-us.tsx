import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    icon: "badge",
    title: "Experienced Professionals",
    description: "Certified, insured & background-checked master technicians on every call.",
  },
  {
    icon: "receipt_long",
    title: "Honest, Upfront Pricing",
    description: "Clear written quotes before work begins. No surprises or travel-time markups.",
  },
  {
    icon: "schedule",
    title: "On-Time Service",
    description: "Reliable arrival windows with courtesy text tracking that respects your time.",
  },
  {
    icon: "verified",
    title: "Workmanship You Can Trust",
    description: "Backed by our comprehensive 100% satisfaction and parts guarantee.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-margin-md md:py-margin-lg bg-surface-container-lowest scroll-mt-24" id="why-choose-us">
      <div className="w-[90%] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
          {/* Left Column: Master Plumber Workmanship Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-outline-variant/30 card-elevation-1 aspect-[4/3] lg:aspect-[4/5] bg-surface-container">
              <Image
                src="/images/master-workmanship.jpg"
                alt="Master plumber performing clean under-sink copper pipe assembly"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute top-4 right-4 bg-inverse-surface/90 backdrop-blur-md text-inverse-on-surface px-4 py-2 rounded-lg border border-outline/30 flex items-center gap-2 z-10">
                <span className="material-symbols-outlined text-primary-fixed text-[18px]">verified</span>
                <span className="text-label-md font-label-md">100% Certified Crew</span>
              </div>
            </div>
          </div>

          {/* Right Column: Value Pillars */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-primary-container text-xs sm:text-sm font-bold uppercase tracking-wider">
              The AquaFlow Standard
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-on-surface tracking-tight mt-2 mb-5 leading-tight">
              The Right Plumber Makes All the Difference.
            </h2>
            <p className="text-body-md font-body-md text-secondary leading-relaxed mb-space-xl">
              We combine dependable service, transparent communication, and quality workmanship to make every plumbing job straightforward, clean, and permanently solved.
            </p>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg mb-space-xl">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-space-md p-space-md rounded-lg bg-surface-container-low border border-outline-variant/20"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[22px]">{pillar.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-on-surface mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-body-sm font-body-sm text-secondary">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section CTA */}
            <Link
              className="inline-flex items-center gap-space-xs bg-primary-container hover:bg-tertiary text-on-primary text-label-lg font-label-lg font-bold px-8 py-3.5 rounded-lg transition-all active:scale-[0.98] shadow-sm"
              href="#contact"
            >
              <span>Schedule Your Service</span>
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
