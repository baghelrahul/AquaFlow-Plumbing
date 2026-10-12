import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Hanken_Grotesk } from "next/font/google";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/seo/json-ld";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — Reliable Plumbing. Done Right.`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Reliable Plumbing. Done Right.`,
    description: site.description,
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Reliable Plumbing. Done Right.`,
    description: site.description,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakartaSans.variable} ${hankenGrotesk.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md antialiased selection:bg-primary-container selection:text-on-primary">
        <JsonLd />
        <SmoothScrollProvider />
        {children}
      </body>
    </html>
  );
}
