import type { Metadata } from "next";
import "./globals.css";
import { siteName, siteUrl } from "./site-config";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Explore Arthrosamid knee osteoarthritis treatment with RamaKrishna Rachaputi, Consultant Physiotherapist and MSK Sonographer, at Joint Care Clinics across the UK.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <Navbar />
        <div className="pt-[96px]">{children}</div>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
