import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section className="py-14 md:py-20 lg:py-24 bg-surface-container-lowest scroll-mt-24" id="contact">
      <div className="w-[90%] max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-primary-container text-xs sm:text-sm font-bold uppercase tracking-wider">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-on-surface tracking-tight mt-2 mb-5 leading-tight">
                Let’s Fix Your Plumbing.
              </h2>
              <p className="text-body-md font-body-md text-secondary mb-space-xl">
                Have an urgent emergency or scheduling an architectural fixture renovation? Speak directly with our plumbing estimators or submit a rapid callback request.
              </p>

              {/* Contact List Items */}
              <div className="space-y-space-md mb-space-xl">
                <div className="flex items-center gap-space-md">
                  <div className="w-11 h-11 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">call</span>
                  </div>
                  <div>
                    <p className="text-label-md font-label-md text-secondary">Phone Number</p>
                    <a
                      className="text-headline-sm font-headline-sm font-semibold text-on-surface hover:text-primary transition-colors"
                      href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-space-md">
                  <div className="w-11 h-11 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">mail</span>
                  </div>
                  <div>
                    <p className="text-label-md font-label-md text-secondary">Email Inquiries</p>
                    <a
                      className="text-body-md font-body-md font-semibold text-on-surface hover:text-primary transition-colors"
                      href={`mailto:${site.email}`}
                    >
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-space-md">
                  <div className="w-11 h-11 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">location_on</span>
                  </div>
                  <div>
                    <p className="text-label-md font-label-md text-secondary">Service Area</p>
                    <p className="text-body-md font-body-md font-semibold text-on-surface">
                      Your City and Surrounding Areas
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-space-md">
                  <div className="w-11 h-11 rounded-lg bg-primary-container/10 flex items-center justify-center text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[22px]">schedule</span>
                  </div>
                  <div>
                    <p className="text-label-md font-label-md text-secondary">Business Hours</p>
                    <p className="text-body-md font-body-md font-semibold text-on-surface">
                      Monday–Saturday, 8 AM–6 PM{" "}
                      <span className="text-label-sm text-primary font-bold">
                        (24/7 Emergency Dispatch)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Master Certification Pill */}
            <div className="p-space-md rounded-lg bg-surface-container-low border border-outline-variant/30 flex items-center gap-space-md">
              <span
                className="material-symbols-outlined text-primary-container text-[30px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shield_with_heart
              </span>
              <div>
                <p className="text-label-md font-label-md font-bold text-on-surface">
                  Fully Bonded &amp; State Master Licensed
                </p>
                <p className="text-body-sm font-body-sm text-secondary">
                  {site.license}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Callback Request Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
