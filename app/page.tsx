import Link from "next/link";
import Image from "next/image";
import { ArthrosamidName, SiteFooter, SiteHeader } from "./components/site-shell";

const arthrosamidFacts = [
  ["2.5%", "cross-linked polyacrylamide hydrogel"],
  ["97.5%", "non-pyrogenic water"],
  ["6 mL", "recommended single dose per treated knee"],
];

const references = [
  ["Official product information", "https://arthrosamid.com/our-solution"],
  ["2024 randomised controlled study", "https://doi.org/10.55563/clinexprheumatol/i3fqee"],
  ["Five-year extension study", "https://doi.org/10.1186/s13018-025-06526-0"],
  ["Independent WorkSafeBC assessment", "https://www.worksafebc.com/en/resources/health-care-providers/guides/arthrosamid-in-treating-knee-osteoarthritis"],
];

const clinicReasons = [
  ["01", "Specialist assessment", "Your diagnosis, health, imaging and movement goals come first."],
  ["02", "Image-guided care", "Ultrasound supports precise assessment and treatment where appropriate."],
  ["03", "Clear consent", "Benefits, risks, permanence, alternatives and costs are explained."],
  ["04", "Connected aftercare", "One central team supports booking, treatment and follow-up."],
];

const roles = ["Business owners", "Plumbers", "Roofers", "Builders", "Drivers", "Carers", "Office professionals", "Active retirees"];

const clinics = [
  ["Rugby", "78 Clifton Road, Rugby, Warwickshire CV21 3QT"],
  ["Birmingham", "265B Alcester Road South, King’s Heath, Birmingham B14 6DT"],
  ["Milton Keynes", "ISIS House, Tilers Road, Kiln Farm, Milton Keynes MK11 3EA"],
  ["Newcastle upon Tyne", "Old Brewery Court, Starbeck Avenue, Jesmond, Newcastle upon Tyne NE2 1XG"],
];

export default function Home() {
  return <>
    <main className="scroll-home" id="main-content">
      <section className="hero" id="home">
        <SiteHeader />
        <div className="hero-grid shell"><div className="hero-copy">
          <p className="eyebrow"><ArthrosamidName /> · A Joint Care Clinics service</p>
          <h1>Feel like yourself <em>again.</em></h1>
          <p className="lede">For plumbers, roofers, builders, business owners and everyone whose working life depends on staying active.</p>
        </div>
        <div className="hero-partner-links" aria-label="Official Arthrosamid and Joint Care Clinics websites">
          <a className="partner-card partner-card-product" href="https://arthrosamid.com/" target="_blank" rel="noreferrer" aria-label="Visit the official Arthrosamid website">
            <Image src="/arthrosamid-orange-pack.webp" alt="Arthrosamid product packaging" width={640} height={320} priority unoptimized />
            <span><strong>Arthrosamid<sup>®</sup></strong><small>Visit the official product website ↗</small></span>
          </a>
          <a className="partner-card partner-card-clinic" href="https://jointcareclinics.co.uk/" target="_blank" rel="noreferrer" aria-label="Visit the Joint Care Clinics website">
            <Image src="/joint-care-logo-mark.webp" alt="Joint Care Clinics logo" width={120} height={120} priority unoptimized />
            <span><strong>Joint Care Clinics</strong><small>Assessment, treatment and aftercare ↗</small></span>
          </a>
        </div></div>
        <a className="scroll-cue" href="#arthrosamid-overview"><span>Scroll down</span><b>↓</b></a>
      </section>

      <section className="scroll-panel scroll-arthrosamid" id="arthrosamid-overview">
        <div className="scroll-shade" /><div className="shell scroll-content scroll-content-left">
          <p className="eyebrow eyebrow-light">Understanding <ArthrosamidName /></p>
          <h2>A hydrogel implant. <em>Not a steroid.</em></h2>
          <p className="scroll-lede"><ArthrosamidName /> is an injectable polyacrylamide hydrogel implant intended to reduce the symptoms of knee osteoarthritis in selected adults after clinical assessment.</p>
          <div className="scroll-facts">{arthrosamidFacts.map(([value,label])=><div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div>
          <ul className="scroll-points"><li>Used for knee osteoarthritis symptoms—not a cure.</li><li>Designed to remain in the joint.</li><li>Normally delivered as an outpatient treatment.</li><li>Results vary and improvement cannot be guaranteed.</li></ul>
          <p className="more-note">* To find more information, visit <a href="https://arthrosamid.com/" target="_blank" rel="noreferrer">Arthrosamid.com ↗</a></p>
          <div className="scroll-actions"><Link className="button button-outline" href="/arthrosamid">More Arthrosamid information →</Link></div>
          <div className="compact-references"><span>References</span>{references.map(([label,url],index)=><a href={url} target="_blank" rel="noreferrer" key={url}>0{index+1} · {label} ↗</a>)}</div>
        </div>
      </section>

      <section className="scroll-panel scroll-joint-care" id="joint-care-overview">
        <div className="scroll-shade" /><div className="shell scroll-content scroll-content-right">
          <p className="eyebrow eyebrow-light">Joint Care Clinics</p>
          <h2>Specialist care, <em>clearly explained.</em></h2>
          <p className="scroll-lede">Joint Care Clinics provides assessment, image-guided treatment and connected aftercare across four UK locations. Arthrosamid<sup>®</sup> is discussed as one possible option—not a promised outcome.</p>
          <h3 className="mini-title">Why Joint Care Clinics?</h3>
          <div className="reason-grid">{clinicReasons.map(([n,title,copy])=><article key={n}><span>{n}</span><strong>{title}</strong><p>{copy}</p></article>)}</div>
          <div className="scroll-actions"><Link className="button button-outline" href="/joint-care-clinics">More about Joint Care Clinics →</Link><a className="button button-gold" href="https://jointcareclinics.co.uk/contact/" target="_blank" rel="noreferrer">Book an appointment ↗</a></div>
        </div>
      </section>

      <section className="scroll-panel scroll-arthritis" id="arthritis-overview">
        <div className="scroll-shade" /><div className="shell scroll-content scroll-content-left">
          <p className="eyebrow eyebrow-light">Knee arthritis</p>
          <h2>Understand the pain before choosing treatment.</h2>
          <p className="scroll-lede">Knee osteoarthritis may cause pain, stiffness, swelling and reduced movement. It can affect stairs, walking, kneeling, driving, sleep, work and family life.</p>
          <div className="arthritis-summary"><h3>How <ArthrosamidName /> may help</h3><p>It is intended to reduce knee osteoarthritis symptoms for selected adults. It does not reverse arthritis or regrow cartilage, and suitability requires an individual assessment.</p></div>
          <div className="review-strip"><div><span>Google reviews</span><strong>Read current patient experiences directly</strong><p>Reviews describe individual experiences; they are not clinical evidence and cannot predict your result.</p></div><a href="https://www.google.com/search?q=Joint+Care+Clinics+Arthrosamid+reviews" target="_blank" rel="noreferrer">Open Google reviews ↗</a></div>
          <div className="scroll-actions"><Link className="button button-outline" href="/knee-arthritis">More about knee arthritis →</Link></div>
        </div>
      </section>

      <section className="scroll-panel scroll-working" id="working-lives-overview">
        <div className="scroll-shade" /><div className="shell scroll-content scroll-content-right">
          <p className="eyebrow eyebrow-light">For knees that work hard</p>
          <h2>Your job may be different. <em>Your need to keep moving is shared.</em></h2>
          <p className="scroll-lede">Knee osteoarthritis can affect people across practical, professional, caring and active roles. Your occupation does not decide suitability—your diagnosis, health and knee assessment do.</p>
          <div className="role-tags scroll-roles">{roles.map(role=><span key={role}>{role}</span>)}</div>
          <Link className="text-link" href="/working-lives">Continue in the Working Lives page →</Link>
        </div>
      </section>

      <section className="scroll-panel scroll-clinics" id="clinic-locations">
        <div className="scroll-shade" /><div className="shell scroll-content scroll-content-right">
          <p className="eyebrow eyebrow-light">Our clinics</p>
          <h2>Find your <em>nearest clinic.</em></h2>
          <p className="scroll-lede"><ArthrosamidName /> assessment and treatment are available through Joint Care Clinics across the Midlands and North East England.</p>
          <div className="scroll-location-list">{clinics.map(([name,address],index)=>{const map=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;return <a href={map} target="_blank" rel="noreferrer" key={name}><span>0{index+1}</span><strong>{name}</strong><small>Open in Google Maps ↗</small></a>})}</div>
          <div className="scroll-actions"><Link className="button button-outline" href="/our-clinics">Full clinic details →</Link><a className="button button-gold" href="https://jointcareclinics.co.uk/contact/" target="_blank" rel="noreferrer">Book an assessment ↗</a></div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
