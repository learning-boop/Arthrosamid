import type { Metadata } from "next";
import { emailAddress } from "../site-config";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for the RamaKrishna Rachaputi Arthrosamid treatment website.",
};

export default function CookiesPage() {
  return (
    <main className="bg-white px-5 py-20 lg:py-24">
      <article className="mx-auto max-w-3xl">
        <h1 className="text-[1.75rem] font-bold text-navy sm:text-[2rem]">
          Cookie Policy
        </h1>
        <p className="mt-2 text-[13px] text-muted">Last updated: October 2026</p>

        <div className="mt-10 space-y-8 text-[1.05rem] leading-relaxed text-body">
          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">What are cookies?</h2>
            <p className="mt-3">
              Cookies are small text files placed on your device when you visit a
              website. They help the website function properly and can provide
              information about how the site is used.
            </p>
          </section>

          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">How we use cookies</h2>
            <p className="mt-3">
              This website uses a minimal number of cookies to ensure the site
              functions correctly and to understand general usage patterns.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 pr-4 text-left font-semibold text-navy">Type</th>
                    <th className="pb-3 pr-4 text-left font-semibold text-navy">Purpose</th>
                    <th className="pb-3 text-left font-semibold text-navy">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 pr-4 font-medium text-navy">Essential</td>
                    <td className="py-3 pr-4">Required for the website to function. Cannot be disabled.</td>
                    <td className="py-3">Session</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-navy">Analytics</td>
                    <td className="py-3 pr-4">Help us understand how visitors use the site so we can improve content and navigation.</td>
                    <td className="py-3">Up to 2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">Third-party cookies</h2>
            <p className="mt-3">
              When you click through to an external clinic website (such as Joint
              Care Clinics), those sites may set their own cookies. We have no
              control over third-party cookies. Please refer to the relevant
              clinic&rsquo;s cookie policy for details.
            </p>
          </section>

          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">Managing cookies</h2>
            <p className="mt-3">
              You can control and delete cookies through your browser settings.
              Most browsers allow you to block or delete cookies, though this may
              affect how the website functions. For guidance, visit your
              browser&rsquo;s help pages.
            </p>
          </section>

          <section>
            <h2 className="text-[1.1rem] font-semibold text-navy">Contact</h2>
            <p className="mt-3">
              If you have questions about our use of cookies, please contact us
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
