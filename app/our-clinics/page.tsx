import type { Metadata } from "next";
import Link from "next/link";
import { ArthrosamidName, SiteFooter, SiteHeader } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Our Clinics | Arthrosamid® at Joint Care Clinics",
  description: "Find Joint Care Clinics in Rugby, Birmingham, Milton Keynes and Newcastle upon Tyne.",
};

const clinics = [
  {name:"Rugby",slug:"rugby",area:"Midlands",address:"78 Clifton Road, Rugby, Warwickshire CV21 3QT",nearby:"Coventry · Nuneaton · Warwick · Leamington Spa"},
  {name:"Birmingham",slug:"birmingham",area:"Midlands",address:"265B Alcester Road South, King’s Heath, Birmingham B14 6DT",nearby:"Edgbaston · Harborne · Solihull · Coventry"},
  {name:"Milton Keynes",slug:"milton-keynes",area:"Midlands",address:"ISIS Chiropractic, ISIS House, Tilers Road, Kiln Farm, Milton Keynes MK11 3EA",nearby:"Aylesbury · Bedford · Leighton Buzzard · Northampton"},
  {name:"Newcastle upon Tyne",slug:"newcastle",area:"North East England",address:"Old Brewery Court, Starbeck Avenue, Jesmond, Newcastle upon Tyne NE2 1XG",nearby:"Gateshead · North Tyneside · Sunderland · County Durham"},
];

export default function OurClinicsPage(){return <><main id="main-content"><section className="inner-hero our-clinics-hero"><SiteHeader/><div className="shell inner-hero-copy clinic-hero-copy"><p className="eyebrow eyebrow-light">Page six · Our clinics</p><h1>Find your <em>nearest clinic.</em></h1><p><ArthrosamidName /> assessment and treatment are available through Joint Care Clinics across the Midlands and North East England.</p></div></section>
  <section className="section clinic-page"><div className="shell clinic-page-heading"><h2>Four Joint Care Clinics locations.</h2><p>Select a clinic to open its address directly in Google Maps. Call before travelling so the team can confirm your appointment and arrival details.</p></div><div className="shell clinic-cards">{clinics.map((clinic,index)=>{const map=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.address)}`;return <article id={clinic.slug} key={clinic.name}><span>0{index+1}</span><div><p className="clinic-area">{clinic.area}</p><h2>{clinic.name}</h2><p className="clinic-address-demo">{clinic.address}</p><small>Also serving: {clinic.nearby}</small></div><div className="clinic-card-actions"><a className="button button-map" href={map} target="_blank" rel="noreferrer">Open in Google Maps ↗︎</a><a href="tel:03334442013">Call 0333 444 2013</a></div></article>})}</div><div className="shell clinic-disclaimer"><strong>Before you book</strong><p>Arthrosamid® is available only after an individual clinical assessment. Treatment is not suitable for everyone and results vary.</p><a href="https://jointcareclinics.co.uk/contact/" target="_blank" rel="noreferrer">Book through Joint Care Clinics ↗︎</a></div><div className="shell back-home"><Link href="/">← Return to the home page</Link></div></section>
  </main><SiteFooter/></>}
