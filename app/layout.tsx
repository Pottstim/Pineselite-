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
  title: "Pines Athlete | Elite AAU Basketball | Southern Pines, NC",
  description: "Pines Athlete is a 501(c)(3) nonprofit AAU basketball program in Southern Pines, North Carolina. We develop elite young athletes through competitive play, elite coaching, character development, and community. Join our program or support our mission as a sponsor or donor.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Pines Athlete | AAU Basketball in Southern Pines, NC",
    description: "Developing champions on and off the court. Elite AAU basketball program serving Southern Pines and Moore County youth.",
    images: [{ url: "/og-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0f]">
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
