import { site } from "@/lib/site";

const reviews = [
  {
    quote:
      '"We had a main drain backup on a Sunday afternoon. AquaFlow arrived in 35 minutes, handled the cleanup effortlessly, and replaced the deteriorated fixture pipe with total precision."',
    name: "Marcus Vance",
    location: "Highland Park",
  },
  {
    quote:
      '"Their thermal camera found a pinhole leak behind our master bath marble without drilling exploratory holes. They saved us thousands in repairs. Pristine job site."',
    name: "Elena Rodriguez",
    location: "Oakridge Estates",
  },
  {
    quote:
      '"Honest pricing upfront. Mike explained exactly what needed replacement and what still had useful life. It’s rare to find trade professionals this trustworthy."',
    name: "David Chen",
    location: "Bellevue Terrace",
  },
];

export function Testimonials() {
  return (
    <section className="py-margin-md md:py-margin-lg bg-inverse-surface text-inverse-on-surface scroll-mt-24" id="reviews">
      <div className="w-[90%] max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="text-primary-fixed text-xs sm:text-sm font-bold uppercase tracking-wider">
            Customer Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-inverse-on-surface tracking-tight mt-2 mb-3">
            Trusted by Homeowners. Known for Quality.
          </h2>
          <p className="text-body-sm font-body-sm text-outline-variant mt-2 italic">
            Sample customer reviews — replace with verified client testimonials before publishing.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-space-xl">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-surface-container-lowest/5 border border-outline-variant/20 rounded-xl p-space-lg flex flex-col justify-between backdrop-blur-sm"
            >
              <div>
                {/* Star Rating in Aqua */}
                <div className="flex items-center gap-1 text-primary-fixed mb-space-md">
                  {[...Array(5)].map((_, s) => (
                    <span
                      key={s}
                      className="material-symbols-outlined text-[20px] fill"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-body-md font-body-md text-surface-container-high leading-relaxed mb-space-lg">
                  {review.quote}
                </p>
              </div>
              <div className="pt-space-md border-t border-outline/30 flex items-center justify-between">
                <div>
                  <p className="text-label-lg font-label-lg font-bold text-inverse-on-surface">
                    {review.name}
                  </p>
                  <p className="text-label-md font-label-md text-surface-dim">
                    {review.location}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-primary-fixed text-label-md font-label-md">
                  <span
                    className="material-symbols-outlined text-[16px] fill"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Conversion CTA Banner Block */}
        <div className="bg-gradient-to-r from-surface-container-lowest/10 to-surface-container-lowest/5 border border-outline-variant/30 rounded-2xl p-space-xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-inverse-on-surface tracking-tight">
              Need a Plumber You Can Count On?
            </h3>
            <p className="text-body-md font-body-md text-surface-container-high mt-1">
              Let’s get your plumbing back in perfect working order with prompt local dispatch.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0">
            <a
              className="inline-flex items-center gap-space-xs bg-primary-container hover:bg-tertiary-container text-on-primary-container px-7 py-3.5 rounded-lg text-label-lg font-label-lg font-bold transition-all active:scale-[0.98]"
              href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
              <span>Call Our Team</span>
            </a>
            <span className="text-headline-sm font-headline-sm text-primary-fixed font-bold tracking-tight">
              {site.phone}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
