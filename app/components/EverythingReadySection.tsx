"use client";

import Link from "next/link";

const credentials = [
  {
    stat: "20+",
    label: "Years Experience",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    stat: "HCPC",
    label: "Registered",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    ),
  },
  {
    stat: "IP",
    label: "Independent Prescriber",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    ),
  },
  {
    stat: "MSK",
    label: "Sonographer",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    ),
  },
  {
    stat: "Trained",
    label: "Arthrosamid\u00AE Practitioner",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    ),
  },
];

export default function EverythingReadySection() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          PART A — The practitioner (white)
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white px-5 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-teal">
                Your Practitioner
              </p>
              <h2 className="mt-3 text-[1.5rem] font-bold leading-[1.15] text-navy sm:text-[2rem]">
                You&rsquo;re not doing this alone.
              </h2>

              <div className="mt-4 space-y-3 text-[1rem] leading-relaxed text-body sm:mt-5 sm:text-[1.05rem]">
                <p>
                  RamaKrishna Rachaputi, Consultant Physiotherapist, MSK
                  Sonographer and Independent Prescriber.
                </p>
                <p>
                  20+ years across NHS and private clinics.
                </p>
                <p>
                  Every Arthrosamid<sup>&reg;</sup> injection is delivered under
                  ultrasound guidance.
                </p>
              </div>
          </div>

          {/* Credential cards */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {credentials.map((card) => (
              <div
                key={card.label}
                className="rounded-xl border border-border bg-pale/60 p-4 text-center sm:p-5"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal/10">
                  <svg
                    className="h-5 w-5 text-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {card.icon}
                  </svg>
                </div>
                <p className="mt-3 text-[1.1rem] font-bold text-navy sm:text-[1.25rem]">
                  {card.stat}
                </p>
                <p className="mt-0.5 text-[12px] leading-tight text-muted sm:text-[13px]">
                  {card.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-teal"
            >
              More About RamaKrishna
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
