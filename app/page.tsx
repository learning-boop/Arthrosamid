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
          SECTION 1 — HERO
      ────────────────────────────────────────────────────────────────── */}
      <section className="bg-pale">
        <div className="mx-auto max-w-[1200px] px-5 py-8 sm:py-14 lg:py-24">
          <div className="grid items-center gap-8 lg:grid-cols-[48fr_52fr] lg:gap-12">
            {/* Text */}
            <div>
              <h1 className="text-[1.875rem] font-bold leading-[1.15] text-navy sm:text-[2.5rem] lg:text-[2.75rem]">
                Arthrosamid<sup className="text-[0.6em]">&reg;</sup>{" "}
                Knee Treatment
              </h1>
              <p className="mt-2 text-[1.05rem] font-medium text-teal sm:text-[1.1rem]">
                With RamaKrishna Rachaputi
              </p>
              <p className="mt-3 text-[1rem] leading-relaxed text-body sm:text-[1.05rem]">
                Explore whether Arthrosamid<sup>&reg;</sup> could be suitable
                for your knee osteoarthritis.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <a
                  href="#clinics"
                  className="inline-flex items-center justify-center rounded-lg bg-teal px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-teal-dark"
                >
                  Request a Consultation
                </a>
                <Link
                  href="/arthrosamid"
                  className="inline-flex items-center justify-center rounded-lg border border-navy/15 px-7 py-3.5 text-[15px] font-semibold text-navy transition hover:border-teal hover:text-teal"
                >
                  Explore Arthrosamid<sup className="text-[0.7em]">&reg;</sup>
                </Link>
              </div>
              <p className="mt-4 text-[13px] text-muted sm:mt-6">
                Consultant Physiotherapist &middot; MSK Sonographer &middot;
                Independent Prescriber
              </p>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                width={images.hero.width}
                height={images.hero.height}
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 2 — MEET RAM
      ────────────────────────────────────────────────────────────────── */}
      <section className="bg-white px-5 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-teal">
            Your Practitioner
          </p>
          <h2 className="mt-3 text-[1.5rem] font-bold text-navy sm:text-[2rem]">
            Meet RamaKrishna Rachaputi
          </h2>
          <p className="mt-3 max-w-2xl text-[1rem] leading-relaxed text-body sm:text-[1.05rem]">
            RamaKrishna is a Consultant Physiotherapist, Musculoskeletal
            Sonographer and Independent Prescriber with experience across NHS
            hospitals and private clinics. His training spans physiotherapy,
            injection therapy and diagnostic and interventional ultrasound.
          </p>

          {/* Credential cards */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {[
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
            ].map((card) => (
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

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 3 — UNDERSTANDING YOUR KNEE PAIN
      ────────────────────────────────────────────────────────────────── */}
      <section className="bg-pale px-5 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div>
            <h2 className="text-[1.5rem] font-bold text-navy sm:text-[2rem]">
              Is knee pain affecting everyday life?
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-body sm:text-[1.05rem]">
              Pain, stiffness and reduced movement can make everyday activities
              more difficult. An assessment helps identify the cause and guide
              the next step.
            </p>

            {/* Symptom rows */}
            <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {[
                "Discomfort when walking or using stairs",
                "Stiffness after sitting or resting",
                "Difficulty bending or moving the knee",
              ].map((symptom) => (
                <div
                  key={symptom}
                  className="flex items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 sm:px-5 sm:py-4"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal/10 sm:h-8 sm:w-8">
                    <svg
                      className="h-3.5 w-3.5 text-teal sm:h-4 sm:w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <span className="text-[14px] font-medium text-navy sm:text-[15px]">
                    {symptom}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[13px] leading-relaxed text-muted sm:mt-6">
              Arthrosamid<sup>&reg;</sup> is a treatment option for knee
              osteoarthritis, rather than every type of knee pain.
            </p>

            <Link
              href="/arthrosamid"
              className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-teal transition hover:text-teal-dark sm:mt-5"
            >
              <span>Understand Arthrosamid<sup className="text-[0.7em]">&reg;</sup> and suitability</span>
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* 3D Knee image */}
          <div className="flex justify-center">
            <Image
              src={images.kneePain.src}
              alt={images.kneePain.alt}
              width={images.kneePain.width}
              height={images.kneePain.height}
              sizes="(min-width: 1024px) 50vw, 400px"
              className="max-w-[320px] w-full h-auto object-contain sm:max-w-[420px]"
            />
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 4 — ARTHROSAMID EXPLAINED
      ────────────────────────────────────────────────────────────────── */}
      <section className="bg-white px-5 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Product image */}
          <div className="flex justify-center rounded-2xl bg-pale p-6 sm:p-8 lg:p-12">
            <Image
              src={images.product.src}
              alt={images.product.alt}
              width={images.product.width}
              height={images.product.height}
              sizes="(min-width: 1024px) 45vw, 400px"
              className="max-w-[300px] w-full h-auto object-contain sm:max-w-[420px]"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-teal">
              Featured Treatment
            </p>
            <h2 className="mt-3 text-[1.5rem] font-bold text-navy sm:text-[2rem]">
              What is Arthrosamid<sup className="text-[0.6em]">&reg;</sup>?
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-body sm:text-[1.05rem]">
              Arthrosamid<sup>&reg;</sup> is an injectable hydrogel that
              integrates with the knee joint&rsquo;s synovial tissue. It may
              help reduce pain and improve function.
            </p>
            <p className="mt-3 text-[1rem] leading-relaxed text-body sm:text-[1.05rem]">
              An assessment is needed to discuss whether it is appropriate for
              you, including potential benefits, risks and alternatives.
            </p>

            {/* Key points */}
            <ul className="mt-5 space-y-3 sm:mt-6">
              {[
                "A non-surgical treatment option",
                "Intended for knee osteoarthritis",
                "Suitability assessed individually",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal">
                    <svg
                      className="h-3.5 w-3.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[14px] font-medium text-navy sm:text-[15px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:mt-8">
              <Link
                href="/arthrosamid"
                className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-teal-dark"
              >
                Learn More
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <p className="mt-4 text-[12px] text-muted">
              Results vary. Arthrosamid<sup>&reg;</sup> does not cure
              osteoarthritis.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 4B — ARTHROSAMID MEDICATION DETAIL
      ────────────────────────────────────────────────────────────────── */}
      <section className="bg-navy px-5 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Diagram */}
            <div className="flex justify-center">
              <Image
                src={images.osteoarthritisDiagram.src}
                alt={images.osteoarthritisDiagram.alt}
                width={images.osteoarthritisDiagram.width}
                height={images.osteoarthritisDiagram.height}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="w-full max-w-[420px] h-auto rounded-xl object-contain sm:max-w-[520px]"
              />
            </div>

            {/* Explanation */}
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-teal">
                Inside the Joint
              </p>
              <h2 className="mt-3 text-[1.5rem] font-bold text-white sm:text-[2rem]">
                How Arthrosamid<sup className="text-[0.6em]">&reg;</sup>{" "}
                integrates with your knee
              </h2>
              <div className="mt-4 space-y-3 text-[1rem] leading-relaxed text-white/80 sm:mt-6 sm:space-y-4 sm:text-[1.05rem]">
                <p>
                  In a healthy knee, cartilage cushions the bones and synovial
                  fluid lubricates the joint. Osteoarthritis causes cartilage
                  loss, joint narrowing and inflammation.
                </p>
                <p>
                  Arthrosamid<sup>&reg;</sup> is a 2.5% polyacrylamide hydrogel
                  injected under ultrasound guidance. It integrates with the
                  synovial membrane to form a stable cushioning layer.
                </p>
              </div>
              <Link
                href="/arthrosamid"
                className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-teal transition hover:text-white sm:mt-5"
              >
                Learn more about how it works
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Medication images strip */}
          <div className="mt-8 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={images.productSyringe.src}
                alt={images.productSyringe.alt}
                width={images.productSyringe.width}
                height={images.productSyringe.height}
                sizes="(min-width: 640px) 50vw, 100vw"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src={images.productInjection.src}
                alt={images.productInjection.alt}
                width={images.productInjection.width}
                height={images.productInjection.height}
                sizes="(min-width: 640px) 50vw, 100vw"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </div>

          {/* Key medication facts */}
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6">
            {[
              {
                label: "Composition",
                value: "2.5% polyacrylamide, 97.5% water",
              },
              {
                label: "Administration",
                value: "Single ultrasound-guided injection",
              },
              {
                label: "Mechanism",
                value: "Integrates with the synovial membrane",
              },
            ].map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6"
              >
                <p className="text-[12px] font-semibold uppercase tracking-wider text-teal">
                  {fact.label}
                </p>
                <p className="mt-2 text-[14px] font-medium leading-snug text-white sm:text-[15px]">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[12px] text-white/40 sm:mt-8">
            Results vary between individuals. Arthrosamid<sup>&reg;</sup> does
            not cure osteoarthritis. An individual assessment is needed.
            Arthrosamid is a registered trademark of Contura.
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 5 — YOUR TREATMENT JOURNEY
      ────────────────────────────────────────────────────────────────── */}
      <section className="bg-pale px-5 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <h2 className="text-[1.5rem] font-bold text-navy sm:text-[2rem]">
              Your treatment journey
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-body sm:mt-4 sm:text-[1.05rem]">
              From your first assessment to aftercare, understand what each
              stage involves.
            </p>
          </div>

          {/* Mobile: compact numbered rows */}
          <div className="mt-8 space-y-3 sm:hidden">
            {[
              {
                step: "1",
                title: "Assessment",
                desc: "Discuss your symptoms, history and suitability for Arthrosamid\u00AE.",
              },
              {
                step: "2",
                title: "Preparation",
                desc: "Your clinician explains the procedure and prepares the knee.",
              },
              {
                step: "3",
                title: "Ultrasound-Guided Injection",
                desc: "Arthrosamid\u00AE is delivered into the knee joint using ultrasound guidance.",
              },
              {
                step: "4",
                title: "Aftercare",
                desc: "Receive advice about recovery, activity and when to contact the clinic.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-xl border border-border bg-white p-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-[13px] font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-[14px] font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-body">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop/tablet: image cards */}
          <div className="mt-12 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Assessment",
                desc: "Discuss your symptoms, medical history and goals, and assess whether Arthrosamid\u00AE is suitable.",
                image: images.journeyAssessment,
              },
              {
                step: "02",
                title: "Preparation",
                desc: "Your clinician explains the procedure and prepares the knee for treatment.",
                image: images.journeyPreparation,
              },
              {
                step: "03",
                title: "Ultrasound-guided injection",
                desc: "Arthrosamid\u00AE is delivered into the knee joint using ultrasound guidance.",
                image: images.journeyInjection,
              },
              {
                step: "04",
                title: "Aftercare",
                desc: "Receive individual advice about recovery, activity and when to contact the clinic.",
                image: images.journeyAftercare,
              },
            ].map((item) => (
              <div key={item.step} className="group">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-teal text-[12px] font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-body">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <a
              href="#clinics"
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-teal-dark"
            >
              Discuss Your Suitability
            </a>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 6 — CARE BUILT AROUND YOU
      ────────────────────────────────────────────────────────────────── */}
      <section className="bg-white px-5 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Consultation photograph */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={images.careSection.src}
              alt={images.careSection.alt}
              width={images.careSection.width}
              height={images.careSection.height}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          {/* Stacked text blocks */}
          <div>
            <h2 className="text-[1.5rem] font-bold text-navy sm:text-[2rem]">
              Care built around your knee and your goals
            </h2>

            <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              {[
                {
                  title: "An individual assessment",
                  desc: "Your symptoms, history and priorities help guide the consultation.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  ),
                },
                {
                  title: "Experience in ultrasound-guided care",
                  desc: "RamaKrishna\u2019s clinical work includes musculoskeletal ultrasound and image-guided injections.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  ),
                },
                {
                  title: "A clear discussion of your options",
                  desc: "Understand suitability, possible outcomes and alternatives before deciding.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  ),
                },
              ].map((block, i) => (
                <div key={block.title}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal/10 sm:h-10 sm:w-10">
                      <svg
                        className="h-4 w-4 text-teal sm:h-5 sm:w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        {block.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[14px] font-semibold text-navy sm:text-[15px]">
                        {block.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-body sm:text-[14px]">
                        {block.desc}
                      </p>
                    </div>
                  </div>
                  {i < 2 && <div className="ml-[52px] mt-5 border-t border-border sm:ml-14 sm:mt-6" />}
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-navy/15 px-6 py-3 text-[14px] font-semibold text-navy transition hover:border-teal hover:text-teal"
              >
                Meet RamaKrishna
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 7 — PATIENT QUESTIONS (FAQ)
      ────────────────────────────────────────────────────────────────── */}
      <section className="bg-pale px-5 py-10 sm:py-16 lg:py-24">
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
