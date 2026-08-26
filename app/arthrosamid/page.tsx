import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArthrosamidName, SiteFooter, SiteHeader } from "../components/site-shell";

export const metadata: Metadata = {
  title: "About Arthrosamid® | Joint Care Clinics",
  description: "A clear introduction to Arthrosamid®, the treatment pathway and supporting references.",
};

const facts = [
  ["2.5%", "cross-linked polyacrylamide hydrogel"],
  ["97.5%", "non-pyrogenic water"],
  ["6 mL", "recommended single dose per treated knee"],
];

const steps = [
  ["01", "Assessment", "A clinician reviews your symptoms, health, previous care and relevant imaging."],
  ["02", "Consent", "Suitability, permanence, risks, alternatives, costs and expected aftercare are explained."],
  ["03", "Treatment", "The recommended dose is placed into the knee joint by a trained clinician, commonly with image guidance."],
  ["04", "Aftercare", "You receive practical guidance and a route back to the clinic if you have concerns."],
];

export default function ArthrosamidPage() {
  return <>
    <main id="main-content">
      <section className="inner-hero arthrosamid-hero">
        <SiteHeader />
        <div className="shell inner-hero-copy"><p className="eyebrow eyebrow-light">Page two · <ArthrosamidName /></p><h1>Support for <em>every step.</em></h1><p>A simple explanation of what <ArthrosamidName /> is, how treatment is delivered and what the evidence can—and cannot—tell us.</p></div>
      </section>
      <section className="section content-page">
        <div className="shell content-intro"><div><p className="eyebrow">What is <ArthrosamidName />?</p><h2>Designed for the symptoms of knee osteoarthritis.</h2></div><div><p><ArthrosamidName /> is a non-biodegradable injectable polyacrylamide hydrogel implant intended for the symptomatic treatment of knee osteoarthritis in adults.</p><p>It is not a cure, it does not regrow cartilage, and an individual response cannot be guaranteed. Clinical assessment is required before treatment.</p></div></div>
        <div className="shell fact-ribbon">{facts.map(([value,label])=><div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div>
        <div className="shell product-feature"><Image src="/arthrosamid-preparation-feature.webp" alt="A sterile knee treatment preparation tray in a UK outpatient clinic" width={1536} height={1024} unoptimized /><div><p className="eyebrow">Key points</p><h2>What patients should understand.</h2><ul className="plain-points"><li>It is used in the knee only.</li><li>The implant is designed to remain in the joint.</li><li>Treatment is normally provided as an outpatient procedure.</li><li>Improvement may develop gradually and results vary.</li><li>Exercise, weight management and rehabilitation may remain part of your care.</li></ul><a className="text-link" href="https://arthrosamid.com/" target="_blank" rel="noreferrer">Find more information at Arthrosamid.com ↗︎</a></div></div>
        <div className="shell numbered-section"><p className="eyebrow">The treatment pathway</p><h2>Four clear stages.</h2><div className="steps-grid">{steps.map(([n,title,copy])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
        <div className="shell references-panel"><p className="eyebrow">References</p><h2>Sources used on this page.</h2><ol>
          <li>Contura International Ltd (2026) <em>Arthrosamid®: Our solution</em>. Available at: <a href="https://arthrosamid.com/our-solution" target="_blank" rel="noreferrer">arthrosamid.com/our-solution ↗︎</a> (Accessed: 25 August 2026).</li>
          <li>Bliddal, H., Beier, J., Hartkopp, A., Conaghan, P.G. and Henriksen, M. (2024) ‘Polyacrylamide gel versus hyaluronic acid for the treatment of knee osteoarthritis: a randomised controlled study’, <em>Clinical and Experimental Rheumatology</em>, 42(9), pp. 1729–1735. <a href="https://doi.org/10.55563/clinexprheumatol/i3fqee" target="_blank" rel="noreferrer">doi.org/10.55563/clinexprheumatol/i3fqee ↗︎</a></li>
          <li>Bliddal, H. et al. (2025) ‘A prospective, open-label, clinical investigation of a single intra-articular polyacrylamide hydrogel injection in participants with knee osteoarthritis: a 5-year extension study’, <em>Journal of Orthopaedic Surgery and Research</em>, 21, article 43. <a href="https://doi.org/10.1186/s13018-025-06526-0" target="_blank" rel="noreferrer">doi.org/10.1186/s13018-025-06526-0 ↗︎</a></li>
          <li>WorkSafeBC Evidence-Based Practice Group (2025) <em>Arthrosamid® in treating knee osteoarthritis (OA)</em>. Mini health technology assessment. <a href="https://www.worksafebc.com/en/resources/health-care-providers/guides/arthrosamid-in-treating-knee-osteoarthritis" target="_blank" rel="noreferrer">View independent assessment ↗︎</a></li>
        </ol></div>
        <div className="shell page-next"><div><p className="eyebrow">Next page</p><h2>Why choose Joint Care Clinics?</h2></div><Link className="button button-gold" href="/joint-care-clinics">Continue →</Link></div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
