import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy | Joint Care Clinics",
  description: "Cookie information for the Arthrosamid® at Joint Care Clinics website.",
};

export default function CookiePolicyPage() {
  return <LegalPage eyebrow="Legal information" title="Cookie policy" intro="A clear explanation of cookies and similar technology used by this microsite.">
    <section><h2>1. What cookies are</h2><p>Cookies are small text files placed on a device by a website. Similar browser storage may also remember settings or support essential functions.</p></section>
    <section><h2>2. Cookies used here</h2><p>At launch, this microsite does not intentionally use analytics, advertising or marketing cookies. Hosting and security services may use strictly necessary technology to deliver pages, balance traffic, prevent abuse and protect the service. These functions cannot be switched off through this website.</p></section>
    <section><h2>3. External websites</h2><p>The site links to Joint Care Clinics, Arthrosamid.com, Google Maps, Google reviews, research publishers and other external services. Cookies used after you follow those links are controlled by the external website, not this microsite.</p></section>
    <section><h2>4. Managing cookies</h2><p>You can review, block or delete cookies through your browser settings. Blocking essential technology may affect how some websites work. Guidance is available from the <a href="https://ico.org.uk/for-the-public/online/cookies/" target="_blank" rel="noreferrer">Information Commissioner’s Office ↗</a>.</p></section>
    <section><h2>5. Future changes</h2><p>If non-essential analytics or marketing technology is introduced, this policy will be updated and an appropriate consent choice will be provided before that technology is used.</p></section>
  </LegalPage>;
}
