import Image from "next/image";
import Link from "next/link";
import { bookingUrl } from "../site-config";

export function ArthrosamidName() {
  return <span className="arthrosamid-mark">Arthrosamid<sup>®</sup></span>;
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Link className="brand" href="/" aria-label="Joint Care Clinics Arthrosamid home">
        <Image src="/joint-care-logo-mark.webp" alt="Joint Care Clinics symbol" width={56} height={56} priority unoptimized />
        <span><strong>Joint Care Clinics</strong><small><ArthrosamidName /></small></span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/arthrosamid"><ArthrosamidName /></Link>
        <Link href="/joint-care-clinics">Joint Care Clinics</Link>
        <Link href="/knee-arthritis">Knee arthritis</Link>
        <Link href="/working-lives">Working lives</Link>
        <Link href="/our-clinics">Our clinics</Link>
      </nav>
      <details className="mobile-menu">
        <summary>Menu</summary>
        <div>
          <Link href="/">Home</Link>
          <Link href="/arthrosamid"><ArthrosamidName /></Link>
          <Link href="/joint-care-clinics">Joint Care Clinics</Link>
          <Link href="/knee-arthritis">Knee arthritis</Link>
          <Link href="/working-lives">Working lives</Link>
          <Link href="/our-clinics">Our clinics</Link>
        </div>
      </details>
      <a className="button button-gold header-button" href={bookingUrl} target="_blank" rel="noreferrer">Book an assessment ↗︎</a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><Image src="/joint-care-logo-mark.webp" alt="Joint Care Clinics symbol" width={64} height={64} unoptimized /><div><strong>Joint Care Clinics</strong><span><ArthrosamidName /> assessment, treatment and aftercare</span></div></div>
        <div className="footer-contact"><a href="tel:03334442013">0333 444 2013</a><a href="mailto:info@jointcareclinics.co.uk">info@jointcareclinics.co.uk</a><a href="https://jointcareclinics.co.uk/" target="_blank" rel="noreferrer">jointcareclinics.co.uk ↗︎</a></div>
      </div>
      <div className="footer-legal" aria-label="Legal information">
        <Link href="/privacy-policy">Privacy policy</Link>
        <Link href="/cookie-policy">Cookie policy</Link>
        <Link href="/terms-and-conditions">Terms &amp; conditions</Link>
        <Link href="/medical-disclaimer">Medical disclaimer</Link>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Joint Care Clinics. <ArthrosamidName /> is intended for the symptomatic treatment of knee osteoarthritis in adults. Suitability requires a clinical assessment. Individual results vary.</p>
        <p className="footer-credit">Created by <a href="https://creatorstouchglobal.com/" target="_blank" rel="noreferrer">Creators Touch ↗︎</a></p>
      </div>
    </footer>
  );
}
