import type { Metadata } from "next";
import Link from "next/link";
import { bookingUrl } from "../site-config";

export const metadata: Metadata = {
  title: "About RamaKrishna Rachaputi",
  description:
    "RamaKrishna Rachaputi is an HCPC-registered Consultant Physiotherapist with over 20 years of clinical experience, specialising in Arthrosamid injections for knee osteoarthritis.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-teal">
            About Your Practitioner
          </p>
          <h1 className="mt-4 max-w-2xl text-[2rem] font-bold text-white sm:text-[2.5rem]">
            RamaKrishna Rachaputi
          </h1>
          <p className="mt-4 text-[1.05rem] text-white/70">
            Consultant Physiotherapist, MSK Sonographer &amp; Independent
            Prescriber
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-white px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <h2 className="text-[1.75rem] font-bold text-navy sm:text-[2rem]">
              Experience you can trust
            </h2>
            <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-body">
              <p>
                RamaKrishna brings over 20&nbsp;years of NHS and private-practice
                experience in musculoskeletal healthcare. He has performed
                several thousand diagnostic ultrasound scans and
                ultrasound-guided injections across his career.
              </p>
              <p>
                His qualifications span physiotherapy, neuromusculoskeletal
                medicine, injection therapy, and diagnostic &amp;
                interventional ultrasound &mdash; ensuring every Arthrosamid
                injection is delivered with precision and care.
              </p>
              <p>
                RamaKrishna takes a patient-first approach to every consultation.
                Before recommending treatment, he takes time to understand your
                pain, your daily life, and your goals &mdash; so you can make
                an informed decision about whether Arthrosamid is right for
                you.
              </p>
            </div>
          </div>

          {/* Credentials grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "20+ Years", desc: "Clinical experience in musculoskeletal healthcare" },
              { title: "Thousands", desc: "Of ultrasound-guided injections performed" },
              { title: "HCPC Registered", desc: "Consultant Physiotherapist" },
              { title: "Independent Prescriber", desc: "Qualified to prescribe and administer treatments" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border p-6"
              >
                <p className="text-[1.5rem] font-bold text-teal">
                  {item.title}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-body">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Qualifications */}
          <div className="mt-16 max-w-3xl">
            <h3 className="text-[1.5rem] font-bold text-navy">
              Qualifications &amp; Training
            </h3>
            <ul className="mt-6 space-y-3">
              {[
                "BPT (Bachelor of Physiotherapy)",
                "Pg Dip Neuromusculoskeletal Healthcare",
                "Pg Cert Musculoskeletal Diagnostic & Interventional Ultrasound",
                "Independent Prescriber (IP)",
                "MCSP — Member of Chartered Society of Physiotherapy",
                "MSOR — Member of Society of Radiographers",
                "Trained Arthrosamid Practitioner",
              ].map((qual) => (
                <li key={qual} className="flex items-center gap-3">
                  <svg
                    className="h-5 w-5 shrink-0 text-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-body">{qual}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Practice links */}
      <section className="bg-navy px-5 py-14">
        <div className="mx-auto max-w-[1200px]">
          <h3 className="text-[1.25rem] font-bold text-white">
            RamaKrishna practises at
          </h3>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            {[
              { label: "Joint Care Clinics", href: "https://jointcareclinics.co.uk" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition hover:border-teal hover:text-teal"
              >
                {link.label}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pale px-5 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-[1.75rem] font-bold text-navy">
            Ready to book a consultation?
          </h2>
          <p className="mt-4 text-body">
            Speak with RamaKrishna about whether Arthrosamid<sup>&reg;</sup> is the
            right treatment for your knee pain.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-teal px-10 py-4 text-[15px] font-semibold text-white transition hover:bg-teal-dark"
            >
              Book Consultation
            </a>
            <Link
              href="/clinics"
              className="font-medium text-navy transition hover:text-teal"
            >
              View clinic locations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
