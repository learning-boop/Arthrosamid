import type { Metadata } from "next";
import {
  clinicLocations,
  phoneNumber,
  phoneHref,
  emailAddress,
  bookingUrl,
} from "../site-config";

export const metadata: Metadata = {
  title: "Clinics & Appointments",
  description:
    "Book an Arthrosamid consultation at Joint Care Clinics. Choose your clinic location and request an appointment with RamaKrishna Rachaputi.",
};

export default function ClinicsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-teal">
            Clinics &amp; Appointments
          </p>
          <h1 className="mt-4 max-w-3xl text-[2rem] font-bold text-white sm:text-[2.5rem]">
            Choose your clinic
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-white/70">
            RamaKrishna delivers Arthrosamid<sup>&reg;</sup> treatment across multiple
            clinic locations. Select the one nearest to you to request an
            appointment.
          </p>
        </div>
      </section>

      {/* Clinic cards */}
      <section className="bg-white px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 sm:grid-cols-2">
            {clinicLocations.map((clinic) => (
              <div
                key={clinic.name}
                className="rounded-2xl border border-border p-8"
              >
                <p className="text-[13px] font-semibold uppercase tracking-wider text-teal">
                  {clinic.name}
                </p>
                <p className="mt-3 leading-relaxed text-body">
                  {clinic.address}
                </p>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-teal px-8 py-3 text-[14px] font-semibold text-white transition hover:bg-teal-dark"
                >
                  Request Appointment
                </a>
              </div>
            ))}
          </div>

          {/* Booking note */}
          <div className="mt-12 rounded-2xl bg-pale p-8 text-center">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-teal">
              Please Note
            </p>
            <p className="mt-3 leading-relaxed text-body">
              When you click &ldquo;Request Appointment&rdquo;, you will be
              redirected to the official Joint Care Clinics website to complete
              your booking. Appointments are subject to availability and
              confirmation by the clinic.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-navy px-5 py-14">
        <div className="mx-auto max-w-[1200px] text-center">
          <h2 className="text-[1.5rem] font-bold text-white">
            Prefer to call or email?
          </h2>
          <div className="mt-6 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 text-[1.05rem] font-medium text-white transition hover:text-teal"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phoneNumber}
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center gap-2 text-[1.05rem] font-medium text-white transition hover:text-teal"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {emailAddress}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
