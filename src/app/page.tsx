import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Reliable Plumbing Services & Emergency Repairs",
  description:
    "Experienced plumbers providing emergency repairs, leak detection, drain cleaning, and fixture installations. Honest upfront pricing and 24/7 emergency dispatch.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
