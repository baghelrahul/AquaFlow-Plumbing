import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy and data handling practices for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-surface-container-lowest p-8 sm:p-12 rounded-2xl border border-outline-variant/30 card-elevation-1">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-container font-semibold text-sm mb-8 transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>Back to Home</span>
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold font-display text-on-surface mb-2">Privacy Policy</h1>
        <p className="text-secondary text-sm mb-8">Effective date: October 11, 2026</p>

        <div className="space-y-6 text-on-surface leading-relaxed font-body-md text-sm sm:text-base">
          <p>
            This privacy policy describes how {site.name} (&quot;we&quot;, &quot;us&quot;) handles information
            collected through {site.domain} (the &quot;Site&quot;).
          </p>

          <h2 className="text-xl font-bold font-headline-sm text-on-surface pt-4">Information We Collect</h2>
          <p>
            <strong>Information you provide.</strong> When you submit a service request or callback form on the Site,
            we receive the details you enter—typically your name, phone number, requested service, and problem description.
            Form submissions are securely processed on our behalf by our verified service provider, Pixelotech, so our team can
            dispatch assistance and respond to you promptly.
          </p>
          <p>
            <strong>Information collected automatically.</strong> The Site is served via Cloudflare, which processes
            essential technical access logs (such as IP addresses and request headers) strictly for security and high-availability delivery.
          </p>

          <h2 className="text-xl font-bold font-headline-sm text-on-surface pt-4">How We Use Information</h2>
          <p>
            We use your contact details solely to coordinate plumbing assessments, emergency dispatches, and customer support.
            We <strong>never sell or rent</strong> your personal information, nor do we disclose it for third-party commercial advertising.
          </p>

          <h2 className="text-xl font-bold font-headline-sm text-on-surface pt-4">Contact Us</h2>
          <p>
            If you have questions about this policy or your personal information, contact us directly at{" "}
            <a href={`mailto:${site.email}`} className="text-primary hover:underline font-semibold">
              {site.email}
            </a>{" "}
            or call{" "}
            <a href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`} className="text-primary hover:underline font-semibold">
              {site.phone}
            </a>.
          </p>
        </div>
      </div>
    </main>
  );
}
