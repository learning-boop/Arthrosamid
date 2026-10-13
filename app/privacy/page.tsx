import type { Metadata } from "next";
import { emailAddress } from "../site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the RamaKrishna Rachaputi Arthrosamid treatment website.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white px-5 py-20 lg:py-24">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-[1.75rem] font-bold text-navy sm:text-[2rem]">
          Privacy Policy
        </h1>
        <p className="mt-2 text-[13px] text-muted">Last updated: October 2026</p>

        <div className="mt-10 space-y-8 text-[1.05rem] leading-relaxed text-body">
          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">Who we are</h2>
            <p className="mt-3">
              This website is operated by Joint Care Clinics on behalf of
              RamaKrishna&nbsp;Rachaputi. Our purpose is to provide information about
              Arthrosamid treatment for knee osteoarthritis and to direct
              patients to the appropriate clinic for booking.
            </p>
          </section>

          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">What data we collect</h2>
            <p className="mt-3">
              This website does not collect personal data directly. We do not
              operate contact forms, patient portals, or online booking on this
              site. When you click through to a clinic website to book an
              appointment, that clinic&rsquo;s own privacy policy will apply.
            </p>
            <p className="mt-3">
              We may collect anonymised usage data through cookies and analytics
              tools to understand how the site is used and to improve our
              content. See our{" "}
              <a href="/cookies" className="text-teal hover:underline">Cookie Policy</a>{" "}
              for details.
            </p>
          </section>

          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">How we use your data</h2>
            <p className="mt-3">
              Any anonymised data collected is used solely to improve the website
              experience. We do not sell, share, or transfer personal data to
              third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">External links</h2>
            <p className="mt-3">
              This site contains links to external websites, including Joint
              Care Clinics. We are not responsible for the privacy practices of
              those sites. We encourage you to read their privacy policies
              before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">Your rights</h2>
            <p className="mt-3">
              Under UK GDPR, you have the right to access, rectify, or request
              deletion of any personal data we hold. As this site does not
              collect personal data directly, such requests should be directed
              to the relevant clinic where you have booked an appointment.
            </p>
          </section>

          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">Contact</h2>
            <p className="mt-3">
              If you have questions about this privacy policy, please contact us
              at{" "}
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
