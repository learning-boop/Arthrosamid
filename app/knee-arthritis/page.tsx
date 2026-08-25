import type { Metadata } from "next";
import Link from "next/link";
import { ArthrosamidName, SiteFooter, SiteHeader } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Knee Arthritis, Arthrosamid® and Reviews | Joint Care Clinics",
  description: "Understand knee osteoarthritis, where Arthrosamid® may fit and how to interpret online patient reviews.",
};

export default function KneeArthritisPage() {
  return <>
    <main id="main-content">
      <section className="inner-hero arthritis-hero"><SiteHeader /><div className="shell inner-hero-copy"><p className="eyebrow eyebrow-light">Page four · Knee arthritis</p><h1>Understand the pain before choosing treatment.</h1><p>Knee osteoarthritis affects people differently. The right next step begins with a diagnosis—not a promise.</p></div></section>
      <section className="section content-page">
        <div className="shell content-intro"><div><p className="eyebrow">What is knee osteoarthritis?</p><h2>More than simple “wear and tear”.</h2></div><div><p>Osteoarthritis is a long-term joint condition that may cause pain, stiffness, swelling and reduced movement. Symptoms can affect stairs, walking, kneeling, driving, sleep, work and family life.</p><p>Age increases risk, but younger adults can also develop knee osteoarthritis—particularly after injury, repeated joint strain or other risk factors.</p><a className="text-link" href="https://www.nhs.uk/conditions/osteoarthritis/" target="_blank" rel="noreferrer">Read NHS information about osteoarthritis ↗</a></div></div>
        <div className="shell arthritis-fit"><div><p className="eyebrow">How <ArthrosamidName /> may help</p><h2>Designed to manage knee osteoarthritis symptoms.</h2><p><ArthrosamidName /> is intended to reduce pain and stiffness for selected adults with knee osteoarthritis. A clinician considers it only after reviewing your knee, medical history, previous treatment and personal goals.</p><p>It does not reverse arthritis, rebuild cartilage or guarantee that surgery will be avoided. Exercise, rehabilitation, weight management, medicines, other injections and surgery may still be considered.</p><Link className="button button-gold" href="/arthrosamid">How <ArthrosamidName /> works →</Link></div><div className="assessment-card"><span>Assessment first</span><strong>Your diagnosis and health decide suitability—not your age or occupation alone.</strong><small>Results vary from person to person.</small></div></div>
        <div className="shell reviews-section"><div className="reviews-heading"><div><p className="eyebrow">Google reviews</p><h2>Read current patient feedback directly.</h2></div><p>Online reviews describe individual experiences. They are useful for understanding communication and service, but they are not clinical evidence and cannot predict your result.</p></div><div className="review-link-grid"><a href="https://www.google.com/search?q=Joint+Care+Clinics+Google+reviews" target="_blank" rel="noreferrer"><span>Joint Care Clinics</span><strong>Read current Google reviews</strong><b>Open Google ↗</b></a><a href="https://www.google.com/search?q=Arthrosamid+patient+reviews+UK" target="_blank" rel="noreferrer"><span>Arthrosamid®</span><strong>Explore patient experiences</strong><b>Search Google ↗</b></a></div><div className="review-guidance"><article><span>01</span><h3>Look for clear explanations</h3><p>Good feedback should mention informed choices, not pressure or guaranteed outcomes.</p></article><article><span>02</span><h3>Expect different outcomes</h3><p>Some people report improvement; others report limited or no benefit.</p></article><article><span>03</span><h3>Use evidence separately</h3><p>Research findings and clinical assessment should guide treatment decisions—not star ratings alone.</p></article></div></div>
        <div className="shell page-next"><div><p className="eyebrow">Page five</p><h2>For knees that work hard.</h2></div><Link className="button button-gold" href="/working-lives">Working lives →</Link></div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
