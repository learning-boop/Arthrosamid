import type { Metadata } from "next";
import { emailAddress } from "../site-config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for the RamaKrishna Rachaputi Arthrosamid treatment website.",
};

export default function TermsPage() {
  return (
    <main className="bg-white px-5 py-20 lg:py-24">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-[1.75rem] font-bold text-navy sm:text-[2rem]">
          Terms &amp; Conditions
        </h1>
        <p className="mt-2 text-[13px] text-muted">Last updated: October 2026</p>

        <div className="mt-10 space-y-8 text-[1.05rem] leading-relaxed text-body">
          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">About this website</h2>
            <p className="mt-3">
              This website is operated by Joint Care Clinics on behalf of
              RamaKrishna&nbsp;Rachaputi. It provides general information about
              Arthrosamid treatment for knee osteoarthritis. It is not a
              substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </section>

          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">Medical disclaimer</h2>
            <p className="mt-3">
              The content on this website is provided for informational purposes
              only. It is not intended to be a substitute for professional
              medical advice. Always seek the advice of a qualified healthcare
              provider with any questions you may have regarding a medical
              condition or treatment.
            </p>
            <p className="mt-3">
              Individual results from Arthrosamid treatment may vary. The
              information presented reflects general clinical outcomes and should
              not be taken as a guarantee of specific results.
            </p>
          </section>

          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">Use of this website</h2>
            <p className="mt-3">
              By using this website, you agree to these terms. We make reasonable
              efforts to keep the information accurate and up-to-date, but we do
              not guarantee the completeness or accuracy of all content.
            </p>
          </section>

          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">External links</h2>
            <p className="mt-3">
              This site contains links to external websites, including clinic
              booking pages. We are not responsible for the content, availability,
              or practices of those sites. Clicking through to a clinic website
              means you are subject to that site&rsquo;s terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">Intellectual property</h2>
            <p className="mt-3">
              All content on this website, including text, images, and design, is
              the property of Joint Care Clinics or used with permission.
              Arthrosamid is a registered trademark of Contura. Use of any
              content without written permission is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">Limitation of liability</h2>
            <p className="mt-3">
              To the fullest extent permitted by law, Joint Care Clinics and
              RamaKrishna&nbsp;Rachaputi shall not be liable for any loss or damage
              arising from the use of this website or reliance on its content.
            </p>
          </section>

          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">Contact</h2>
            <p className="mt-3">
              If you have questions about these terms, please contact us at{" "}
              <a href={`mailto:${emailAddress}`} className="text-teal hover:underline">
                {emailAddress}
              </a>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
