import Image from "next/image";
import Link from "next/link";
import {
  bookingUrl,
  phoneNumber,
  phoneHref,
  emailAddress,
  clinicLocations,
} from "./site-config";
import { images } from "./assets";
import FaqAccordion from "./components/FaqAccordion";
import HeroBannerSlider from "./components/HeroBannerSlider";
import KneePainChecklist from "./components/KneePainChecklist";
import ProgressionTimeline from "./components/ProgressionTimeline";
import CostBeyondPain from "./components/CostBeyondPain";
import TurningPointSection from "./components/TurningPointSection";
import EverythingReadySection from "./components/EverythingReadySection";

const faqItems = [
  {
    question: "What is Arthrosamid\u00AE used for?",
    answer:
      "Arthrosamid\u00AE is used to treat symptoms of knee osteoarthritis.",
  },
  {
    question: "Is it suitable for every person with knee pain?",
    answer:
      "No. An assessment is needed to understand the cause of your pain and whether this treatment is appropriate.",
  },
  {
    question: "How is it administered?",
    answer:
      "It is injected into the knee joint. Joint Care Clinics describes its Arthrosamid\u00AE treatment as ultrasound-guided.",
  },
  {
    question: "Are results guaranteed?",
    answer:
      "No. Response to treatment varies. Your clinician will discuss realistic expectations during your consultation.",
  },
  {
    question: "What about risks and aftercare?",
    answer:
      "Your clinician will explain potential side effects, risks and preparation requirements, and provide personalised aftercare advice.",
  },
  {
    question: "How do I arrange an appointment with RamaKrishna?",
    answer:
      "Continue to Joint Care Clinics\u2019 enquiry page or contact the team by phone. Ask for an Arthrosamid\u00AE consultation with RamaKrishna and confirm his availability at your preferred location.",
  },
];

export default function Home() {
  return (
    <main>
      {/* ──────────────────────────────────────────────────────────────────
          SECTION 1 — HERO BANNER SLIDER
      ────────────────────────────────────────────────────────────────── */}
      <HeroBannerSlider />

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 2 — WHAT KNEE PAIN IS TAKING FROM YOU
      ────────────────────────────────────────────────────────────────── */}
      <KneePainChecklist />

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 3 — PROGRESSION TIMELINE
      ────────────────────────────────────────────────────────────────── */}
      <ProgressionTimeline />

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 4 — COST BEYOND THE PAIN
      ────────────────────────────────────────────────────────────────── */}
      <CostBeyondPain />

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 5 — THE TURNING POINT (Arthrosamid)
          Parts A–D consolidated: The Turn, Inside the Knee,
          What It Gives Back, Treatment Journey
      ────────────────────────────────────────────────────────────────── */}
      <TurningPointSection />

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 6 — EVERYTHING AROUND YOU IS READY
          Parts A–C: Practitioner, Treatment Journey, Near You
      ────────────────────────────────────────────────────────────────── */}
      <EverythingReadySection />

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 7 — PATIENT QUESTIONS (FAQ)
      ────────────────────────────────────────────────────────────────── */}
      <section id="faq" className="bg-pale px-5 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[35fr_65fr] lg:gap-16">
          {/* Intro */}
          <div>
            <h2 className="text-[1.5rem] font-bold text-navy sm:text-[2rem]">
              Questions before your consultation?
            </h2>
            <p className="mt-3 text-[1rem] text-body sm:text-[1.05rem]">
              Start with the essentials, then speak to the clinic about your
              individual circumstances.
            </p>
            <Link
              href="/patient-info"
              className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-teal transition hover:text-teal-dark sm:mt-6"
            >
              View Patient Information
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Accordion */}
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 8 — CLINICS & CONSULTATION
      ────────────────────────────────────────────────────────────────── */}
      <section id="clinics" className="bg-navy px-5 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <h2 className="text-[1.5rem] font-bold text-white sm:text-[2rem]">
              Take the next step towards a knee assessment
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-white/80 sm:mt-4 sm:text-[1.05rem]">
              Contact Joint Care Clinics to enquire about an
              Arthrosamid<sup>&reg;</sup> consultation with RamaKrishna. The team can
              confirm his availability and the appropriate clinic location.
            </p>
          </div>

          {/* Clinic cards */}
          <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {clinicLocations.map((clinic) => (
              <div
                key={clinic.name}
                className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal/20 sm:h-9 sm:w-9">
                  <svg
                    className="h-4 w-4 text-teal sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-3 text-[14px] font-semibold text-white sm:mt-4 sm:text-[15px]">
                  {clinic.name}
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-white/70 sm:mt-1.5">
                  {clinic.address}
                </p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 sm:mt-12 sm:p-8">
            <div className="sm:flex sm:items-center sm:justify-between sm:gap-8">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-teal">
                  Treatment Cost
                </p>
                <p className="mt-2 text-[1.5rem] font-bold text-white sm:text-[1.75rem]">
                  &pound;2,300 <span className="text-[14px] font-medium text-white/60">per knee</span>
                </p>
              </div>
              <ul className="mt-4 space-y-2 sm:mt-0">
                {[
                  "Consultation",
                  "Ultrasound scan",
                  "Joint fluid aspiration",
                  "Antibiotics",
                  "Ultrasound-guided Arthrosamid\u00AE injection under local anaesthesia",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] leading-snug text-white/80 sm:text-[14px]">
                    <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking */}
          <div className="mt-10 sm:mt-12 sm:text-center">
            <p className="max-w-xl text-[14px] leading-relaxed text-white/70 sm:mx-auto">
              Continue to the official Joint Care Clinics website to submit
              your enquiry.
            </p>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-teal px-8 py-4 text-[15px] font-semibold text-white transition hover:bg-teal-dark sm:mt-6"
            >
              Continue to Joint Care Clinics
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="mt-3 text-[13px] text-white/40">
              jointcareclinics.co.uk
            </p>

            {/* Phone & email */}
            <div className="mt-6 flex flex-col items-start gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-white transition hover:text-teal sm:text-[15px]"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {phoneNumber}
              </a>
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-white transition hover:text-teal sm:text-[15px]"
              >
                <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email {emailAddress}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
