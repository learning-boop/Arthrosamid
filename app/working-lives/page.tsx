import type { Metadata } from "next";
import Link from "next/link";
import { ArthrosamidName, SiteFooter, SiteHeader } from "../components/site-shell";

export const metadata: Metadata = {
  title: "Working Lives | Arthrosamid® at Joint Care Clinics",
  description: "Knee osteoarthritis information for people in physically demanding and professional roles.",
};

const roles = ["Business owners", "Plumbers", "Roofers", "Builders", "Drivers", "Carers", "Office professionals", "Active retirees"];

export default function WorkingLivesPage(){return <><main id="main-content"><section className="inner-hero working-lives-hero"><SiteHeader/><div className="shell inner-hero-copy working-hero-copy"><p className="eyebrow eyebrow-light">Page five · Working lives</p><h1>Your job may be different. <em>Your need to keep moving is shared.</em></h1><p>Knee osteoarthritis affects people in every kind of work across the UK.</p></div></section>
  <section className="section content-page"><div className="shell working-intro"><div><p className="eyebrow">For knees that work hard</p><h2>Work and everyday movement matter.</h2><p>Climbing ladders, kneeling, driving or caring for others can all feel harder when knee pain and stiffness build up.</p></div><div className="role-board">{roles.map(role=><span key={role}>{role}</span>)}</div></div><div className="shell working-principles"><article><span>01</span><h3>Your occupation is part of the conversation</h3><p>Tell the clinician which movements your work requires and what you hope to return to.</p></article><article><span>02</span><h3>Suitability is clinical</h3><p>Your job title alone does not make <ArthrosamidName /> suitable. Diagnosis, health and knee assessment come first.</p></article><article><span>03</span><h3>Recovery needs planning</h3><p>Discuss work demands, rehabilitation and a safe return to activity with your clinical team.</p></article></div><div className="shell page-next"><div><p className="eyebrow">Page six</p><h2>Find your nearest clinic.</h2></div><Link className="button button-gold" href="/our-clinics">Our clinics →</Link></div></section></main><SiteFooter/></>}
