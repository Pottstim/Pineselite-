import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pines Elite | AAU Basketball | Southern Pines, NC",
  description: "Pines Elite is a 501(c)(3) nonprofit AAU basketball organization in Southern Pines, North Carolina. We develop elite young athletes through competitive play, elite coaching, character development, and community. Join our program or support our mission as a sponsor or donor.",
  metadataBase: new URL("https://pineselite.llegrandconsulting.workers.dev"),
  icons: { icon: "/favicon.svg" },
  keywords: ["AAU basketball", "Southern Pines NC", "youth basketball", "nonprofit sports", "Moore County basketball", "elite AAU", "Pines Elite", "basketball training NC"],
  authors: [{ name: "Pines Elite" }],
  openGraph: {
    title: "Pines Elite | AAU Basketball in Southern Pines, NC",
    description: "Developing champions on and off the court. Elite AAU basketball program serving Southern Pines and Moore County youth.",
    images: [{ url: "/og-image.svg" }],
    siteName: "Pines Elite",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pines Elite | Elite AAU Basketball | Southern Pines, NC",
    description: "Premium AAU basketball program with interactive 3D experience. Join or support our nonprofit mission.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": "Pines Elite",
    "alternateName": "Pines Elite AAU Basketball",
    "url": "https://pineselite.llegrandconsulting.workers.dev",
    "sport": "Basketball",
    "areaServed": "Southern Pines, NC",
    "location": {
      "@type": "Place",
      "name": "Southern Pines, NC",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Southern Pines",
        "addressRegion": "NC",
        "postalCode": "28387",
        "addressCountry": "US"
      }
    },
    "image": "/brand/pines-elite-modern.jpg"
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0f]">
        {children}
        <Toaster position="top-center" richColors closeButton />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}