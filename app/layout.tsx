import type { Metadata } from "next";
import { siteUrl } from "./site-config";
import "./globals.css";
import "./home-scroll-overrides.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Arthrosamid® at Joint Care Clinics",
    template: "%s",
  },
  description: "Assessment-led Arthrosamid® care available through four Joint Care Clinics locations in the UK.",
  applicationName: "Arthrosamid® at Joint Care Clinics",
  authors: [{ name: "Joint Care Clinics", url: "https://jointcareclinics.co.uk/" }],
  creator: "Creators Touch",
  publisher: "Joint Care Clinics",
  keywords: ["Arthrosamid", "knee osteoarthritis", "Joint Care Clinics", "UK knee clinic", "knee pain assessment"],
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Arthrosamid® at Joint Care Clinics",
    title: "Arthrosamid® at Joint Care Clinics",
    description: "Clear treatment information, balanced evidence and specialist assessment across four UK clinic locations.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Arthrosamid at Joint Care Clinics" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthrosamid® at Joint Care Clinics",
    description: "Clear information and specialist UK knee assessment.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
