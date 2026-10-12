export const site = {
  name: "AquaFlow Plumbing Co.",
  domain: "https://aquaflowplumbing.com",
  description: "Reliable plumbing solutions engineered for your home and business. Emergency repairs, leak detection, drain cleaning, and master installations with honest upfront pricing.",
  phone: "+1 (555) 123-4567",
  email: "hello@aquaflowplumbing.com",
  address: {
    street: "100 Architectural Parkway",
    city: "Metropolis",
    region: "NY",
    postalCode: "10001",
    country: "US",
  },
  hours: "Monday–Saturday, 8 AM–6 PM (24/7 Emergency Dispatch)",
  license: "License #MP-892401 · EPA Lead-Safe Certified",
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
