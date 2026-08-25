import type { ReactNode } from "react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-shell";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, intro, children }: LegalPageProps) {
  return <>
    <main id="main-content" className="legal-page">
      <section className="legal-hero">
        <SiteHeader />
        <div className="shell legal-hero-copy">
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
          <small>Last updated: 25 August 2026</small>
        </div>
      </section>
      <section className="legal-content">
        <div className="shell legal-document">{children}</div>
        <div className="shell legal-back"><Link href="/">← Return to the home page</Link></div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
