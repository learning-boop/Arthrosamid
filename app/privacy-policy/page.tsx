import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Joint Care Clinics",
  description: "How this Arthrosamid® information website handles personal information and privacy enquiries.",
};

export default function PrivacyPolicyPage() {
  return <LegalPage eyebrow="Legal information" title="Privacy policy" intro="How personal information is handled when you use this Arthrosamid® information website.">
    <section><h2>1. Who operates this website</h2><p>This microsite is operated for Joint Care Clinics. For privacy enquiries, contact <a href="mailto:info@jointcareclinics.co.uk">info@jointcareclinics.co.uk</a>, call <a href="tel:03334442013">0333 444 2013</a>, or write to 78 Clifton Road, Rugby, Warwickshire CV21 3QT.</p></section>
    <section><h2>2. Information collected on this microsite</h2><p>This website does not provide an account, booking form or patient portal. It may process limited technical information needed to deliver and protect the website, such as IP address, browser type, device information, requested pages, date and time, and security logs.</p></section>
    <section><h2>3. Calls, emails and bookings</h2><p>If you call, email, or follow a booking link, your information is handled by Joint Care Clinics and the services used on its main website. Health information shared during an enquiry or assessment may be special-category personal data and is handled separately by the clinic under its clinical and legal responsibilities.</p></section>
    <section><h2>4. Why information may be used</h2><p>Limited website information may be used to operate the site, maintain security, diagnose faults and prevent misuse. Where applicable, this is based on legitimate interests in running a safe and reliable information service and on legal obligations.</p></section>
    <section><h2>5. Sharing and international transfers</h2><p>Technical information may be processed by hosting, security and website-support providers acting for the operator. Clicking an external link—such as Google Maps, Arthrosamid.com or the Joint Care Clinics booking website—takes you to a separate service with its own privacy practices.</p></section>
    <section><h2>6. Retention and security</h2><p>Information is kept only for as long as needed for security, operational or legal purposes. Reasonable technical and organisational measures are used to protect it, but no internet service can guarantee absolute security.</p></section>
    <section><h2>7. Your rights</h2><p>Depending on the circumstances, UK data-protection law may give you rights to access, correct, erase, restrict or object to processing, and to request data portability. Contact the clinic first. You may also complain to the <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">Information Commissioner’s Office ↗︎</a>.</p></section>
    <section><h2>8. Changes</h2><p>This notice may be updated when the website, suppliers or legal requirements change. The latest version will remain available on this page.</p></section>
  </LegalPage>;
}
