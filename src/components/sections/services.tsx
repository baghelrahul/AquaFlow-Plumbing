import Link from "next/link";

const services = [
  {
    icon: "stacks",
    title: "Emergency Plumbing",
    description: "Fast, on-demand help for urgent burst pipes, hazardous blockages, and unexpected midnight emergencies.",
  },
  {
    icon: "search_insights",
    title: "Leak Detection & Repair",
    description: "Find and isolate hidden sub-slab and in-wall leaks using acoustic and thermal diagnostics before structural loss occurs.",
  },
  {
    icon: "waves",
    title: "Drain Cleaning",
    description: "Restore smooth hydraulic velocity with camera-assisted hydro jetting and safe obstruction removal.",
  },
  {
    icon: "plumbing",
    title: "Installation & Repairs",
    description: "Architectural-grade installation of designer faucets, custom showers, smart water heaters, and solid copper runs.",
  },
];

export function Services() {
  return (
    <section className="py-margin-md md:py-margin-lg bg-surface-container-low border-y border-outline-variant/20 scroll-mt-24" id="services">
      <div className="w-[90%] max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="text-primary-container text-xs sm:text-sm font-bold uppercase tracking-wider">
            Craftsmanship &amp; Precision
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-on-surface tracking-tight mt-2 mb-3">
            Complete Plumbing Solutions
          </h2>
          <p className="text-body-md font-body-md text-secondary mt-2">
            Professional plumbing services engineered for your home and business with guaranteed execution.
          </p>
        </div>

        {/* 4-Column Bento/Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant/30 card-elevation-1 hover:card-elevation-2 hover:-translate-y-1 hover:border-primary-container/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container mb-space-lg group-hover:bg-primary-container group-hover:text-on-primary transition-colors duration-200">
                  <span className="material-symbols-outlined text-[26px]">{service.icon}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-on-surface tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-body-sm font-body-sm text-secondary leading-relaxed mb-space-lg">
                  {service.description}
                </p>
              </div>
              <Link
                className="inline-flex items-center gap-1 text-label-md font-label-md font-bold text-primary hover:text-primary-container group-hover:gap-2 transition-all"
                href="#contact"
              >
                <span>Learn More</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
