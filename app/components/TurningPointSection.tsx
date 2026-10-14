"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "../assets";

/* ── Part C — "What it gives back" mirror cards ── */
const givesBack = [
  {
    title: "Family",
    desc: "Getting down on the floor with the grandchildren again.",
  },
  {
    title: "Friends",
    desc: "Saying yes to the walk, the dance, the day out.",
  },
  {
    title: "Independence",
    desc: "Doing the things you used to do — without asking for help.",
  },
  {
    title: "Work",
    desc: "Full duties, full days, retirement on your own terms.",
  },
  {
    title: "Holidays",
    desc: "Choosing the trip by what you want to see, not how far you\u2019ll walk.",
  },
  {
    title: "Yourself",
    desc: "Feeling like you again.",
  },
];

/* ── Treatment journey steps ── */
const journeySteps = [
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
];

export default function TurningPointSection() {
  /* ── Part C scroll-reveal ── */
  const cardsRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(6).fill(false)
  );

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisibleCards(new Array(6).fill(true));
      return;
    }

    const cards = cardsRef.current?.querySelectorAll("[data-card]");
    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-card"));
            setVisibleCards((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          PART A — "The turn"  (white background)
      ════════════════════════════════════════════════════════════════ */}
      <section
        id="arthrosamid-section"
        className="bg-white px-5 py-10 sm:py-16 lg:py-24"
      >
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
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-teal">
              The turning point
            </p>
            <h2 className="mt-3 text-[1.5rem] font-bold leading-[1.15] text-navy sm:text-[2rem]">
              One injection. No surgery.{" "}
              <span className="block text-teal">A different direction.</span>
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-body sm:text-[1.05rem]">
              Arthrosamid<sup>&reg;</sup> is an injectable hydrogel that
              integrates with the knee joint&rsquo;s synovial tissue. It may
              help reduce pain and improve function &mdash; without surgery,
              without steroids, without repeat courses.
            </p>

            {/* Key points */}
            <ul className="mt-5 space-y-3 sm:mt-6">
              {[
                "A non-surgical treatment option",
                "Single injection, not a course",
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
                <svg
                  className="h-4 w-4 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
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

      {/* ════════════════════════════════════════════════════════════════
          PART C — "What it gives back"  (white background, NEW)
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-white px-5 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-teal">
              What it gives back
            </p>
            <h2 className="mt-3 text-[1.5rem] font-bold leading-[1.15] text-navy sm:text-[2rem]">
              The moments you get back.
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-body sm:text-[1.05rem]">
              The same things your knee has been taking &mdash; returned.
            </p>
          </div>

          {/* 6 positive mirror cards */}
          <div
            ref={cardsRef}
            className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
          >
            {givesBack.map((item, i) => (
              <div
                key={item.title}
                data-card={i}
                className={`rounded-xl border border-border bg-pale/60 p-5 transition-all duration-500 ease-out sm:p-6 ${
                  visibleCards[i]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                style={{
                  transitionDelay: visibleCards[i] ? `${i * 100}ms` : "0ms",
                }}
              >
                <div className="flex items-start gap-3">
                  {/* Teal tick */}
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal mt-0.5">
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
                  <div>
                    <h3 className="text-[1rem] font-bold text-navy sm:text-[1.1rem]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[0.9rem] leading-relaxed text-body sm:text-[0.95rem]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Honesty line */}
          <p className="mt-6 text-[13px] leading-relaxed text-muted sm:mt-8">
            Results vary. These examples reflect the kind of improvements some
            patients hope for &mdash; not guaranteed outcomes.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          PART D — "Treatment journey"  (light grey background)
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F4F7F9] px-5 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-teal">
              Your journey
            </p>
            <h2 className="mt-3 text-[1.5rem] font-bold text-navy sm:text-[2rem]">
              From first consultation to aftercare
            </h2>
            <p className="mt-3 text-[1rem] leading-relaxed text-body sm:mt-4 sm:text-[1.05rem]">
              From your first assessment to aftercare, understand what each
              stage involves.
            </p>
          </div>

          {/* Mobile: compact numbered rows */}
          <div className="mt-8 space-y-3 sm:hidden">
            {journeySteps.map((item) => (
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
            {journeySteps.map((item) => (
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

          {/* Bottom CTA */}
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
    </>
  );
}
