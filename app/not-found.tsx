import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/site-shell";

export default function NotFound() {
  return <>
    <main id="main-content" className="legal-page">
      <section className="legal-hero">
        <SiteHeader />
        <div className="shell legal-hero-copy">
          <p className="eyebrow eyebrow-light">Page not found</p>
          <h1>We could not find that page.</h1>
          <p>Return to the main website or visit the clinic locations page.</p>
          <div className="scroll-actions"><Link className="button button-outline" href="/">Home →</Link><Link className="button button-outline" href="/our-clinics">Our clinics →</Link></div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
