import type { Metadata } from "next";
import { LegalPage } from "../components/legal-page";

export const metadata: Metadata = {
  title: "Medical Disclaimer | Arthrosamid® at Joint Care Clinics",
  description: "Important medical-information and emergency guidance for visitors to this website.",
};

export default function MedicalDisclaimerPage() {
  return <LegalPage eyebrow="Patient information" title="Medical disclaimer" intro="Important limits on the health and treatment information provided on this website.">
    <section><h2>1. General information only</h2><p>This website does not provide personal medical advice, diagnosis or emergency care. Content should not be used to start, stop or delay treatment without speaking to an appropriately qualified healthcare professional.</p></section>
    <section><h2>2. Arthrosamid®</h2><p>Arthrosamid® is described as a possible symptom-management option for appropriately selected adults with knee osteoarthritis. It is not a cure, does not regrow cartilage and is not suitable for everyone. Benefits cannot be guaranteed and individual results vary.</p></section>
    <section><h2>3. Assessment, consent and risks</h2><p>A clinician must consider your diagnosis, medical history, medicines, allergies, previous treatment, examination and relevant imaging. Before treatment, the clinic should explain expected benefits, permanence, alternatives, aftercare, costs and possible adverse effects. This website is not a substitute for the complete patient information and consent discussion.</p></section>
    <section><h2>4. Evidence and reviews</h2><p>Research findings describe groups of participants and do not predict an individual result. Patient reviews describe personal experiences and are not clinical evidence. References and external resources should be read in context.</p></section>
    <section><h2>5. Urgent help</h2><p>For urgent medical advice in England, use <a href="https://111.nhs.uk/" target="_blank" rel="noreferrer">NHS 111 online ↗︎</a> or call 111. Call 999 or attend A&amp;E for a life-threatening emergency. After a procedure, follow the clinic’s aftercare instructions and contact the clinical team promptly if you are concerned.</p></section>
  </LegalPage>;
}
