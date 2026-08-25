import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Why Joint Care Clinics | Arthrosamid® UK",
  description: "Specialist assessment, image-guided care and connected aftercare across Joint Care Clinics locations in the UK.",
};

const pathway = [
  ["01", "Consult", "Talk through your symptoms, health, previous care, occupation and movement goals."],
  ["02", "Assess", "A specialist musculoskeletal clinician examines the knee and reviews relevant imaging."],
  ["03", "Decide", "Arthrosamid®, alternatives, permanence, risks and costs are explained before consent."],
  ["04", "Support", "The central team coordinates your booking, visit information and route back to the clinic."],
];

export default function JointCareClinicsPage() {
  return <><main id="main-content"><section className="inner-hero joint-care-hero"><SiteHeader /><div className="shell inner-hero-copy"><p className="eyebrow eyebrow-light">Page three · Joint Care Clinics</p><h1>Why Joint Care Clinics?</h1><p>Specialist assessment, image-guided care and connected aftercare across four UK locations.</p></div></section>
    <section className="section inner-section"><div className="shell intro-grid"><div><p className="eyebrow">Why choose Joint Care Clinics?</p><h2>Care built around an informed decision.</h2></div><p>Joint Care Clinics starts with your diagnosis and personal goals. Arthrosamid® is discussed as one possible symptom-management option—not a cure or guaranteed outcome.</p></div>
      <div className="shell clinic-story"><Image src="/joint-care-consultation-feature.webp" alt="A specialist knee consultation at Joint Care Clinics" width={1536} height={1024} unoptimized /><div><h2>Precision and continuity</h2><p>Ultrasound supports assessment and guides intra-articular treatment where appropriate. The same central team helps with booking, practical visit information and aftercare.</p><ul><li>Specialist MSK assessment</li><li>Ultrasound-guided care where appropriate</li><li>Clear consent and balanced options</li><li>Written aftercare and central support</li></ul></div></div>
      <div className="shell pathway"><p className="eyebrow">Your care pathway</p><h2>From first conversation to aftercare.</h2><div>{pathway.map(([n,t,p])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{p}</p></div></article>)}</div></div>
      <div className="shell clear-note"><h2>Ready to speak with the clinic team?</h2><p>Book through the official Joint Care Clinics website. The team will confirm the appropriate location, clinician and next step for your assessment.</p><a className="button button-gold" href="https://jointcareclinics.co.uk/contact/" target="_blank" rel="noreferrer">Book an appointment ↗</a></div>
    </section></main><SiteFooter /></>;
}
