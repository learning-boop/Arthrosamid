import type { Metadata } from "next";
import "./globals.css";
import { siteName, siteUrl } from "./site-config";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Arthrosamid is a single-injection treatment for knee osteoarthritis pain, available at Joint Care Clinics across the UK.",
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
        {children}
      </body>
    </html>
  );
}
