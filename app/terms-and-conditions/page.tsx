import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Terms and Conditions | Joint Care Clinics",
  description: "Terms governing use of the Arthrosamid® at Joint Care Clinics information website.",
};

export default function TermsPage() {
  return <LegalPage eyebrow="Legal information" title="Terms & conditions" intro="The terms that apply when you browse and use this information website.">
    <section><h2>1. Using this website</h2><p>By using this site, you agree to use it lawfully and not to interfere with its operation, security or availability. The content is intended for adults in the United Kingdom seeking general information about knee osteoarthritis, Arthrosamid® and Joint Care Clinics.</p></section>
    <section><h2>2. Information, not medical advice</h2><p>Website content is general information only. It does not diagnose a condition, recommend treatment for an individual or replace an assessment by a suitably qualified healthcare professional.</p></section>
    <section><h2>3. Appointments and treatment</h2><p>Bookings, clinical services, prices, consent, cancellation terms and treatment decisions are handled by Joint Care Clinics through its official channels. Treatment is subject to individual assessment, availability and separate clinical terms. No outcome is promised or guaranteed.</p></section>
    <section><h2>4. Accuracy and availability</h2><p>Reasonable care is taken to keep information clear and current, but medical guidance, evidence, clinic arrangements and external links can change. The website may be updated, suspended or withdrawn without notice.</p></section>
    <section><h2>5. External links</h2><p>Links are provided for convenience and further information. Joint Care Clinics does not control every external website and is not responsible for its content, availability, privacy practices or services.</p></section>
    <section><h2>6. Intellectual property</h2><p>Website text, layout, branding and original media are protected by applicable intellectual-property law. Arthrosamid® is a registered trademark of Contura International A/S. Third-party names, logos and materials remain the property of their respective owners.</p></section>
    <section><h2>7. Liability</h2><p>Nothing in these terms excludes liability that cannot lawfully be excluded. To the fullest extent permitted by law, the operator is not responsible for loss caused by relying on general website information instead of obtaining individual professional advice, or by the availability or content of an external service.</p></section>
    <section><h2>8. Governing law and contact</h2><p>These terms are governed by the laws of England and Wales. Questions can be sent to <a href="mailto:info@jointcareclinics.co.uk">info@jointcareclinics.co.uk</a> or 78 Clifton Road, Rugby, Warwickshire CV21 3QT.</p></section>
  </LegalPage>;
}
