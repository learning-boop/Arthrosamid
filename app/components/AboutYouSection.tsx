"use client";

import Image from "next/image";
import { images } from "../assets";

const assessmentRows = [
  {
    title: "Your symptoms",
    desc: "How long, how bad, what makes it worse.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      />
    ),
  },
  {
    title: "Your history",
    desc: "Past injuries, treatments, scans, medications.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    ),
  },
  {
    title: "Your goals",
    desc: "The walk, the garden, the grandchildren \u2014 what matters to you.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
      />
    ),
  },
  {
    title: "Your options",
    desc: "Arthrosamid\u00AE, alternatives, or sometimes nothing yet \u2014 explained honestly.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
      />
    ),
  },
];

const givesBack = [
  {
    title: "Family",
    desc: "Down on the floor with the grandchildren again.",
  },
  {
    title: "Friends",
    desc: "Yes to the walk, the dance, the day out.",
  },
  {
    title: "Independence",
    desc: "Doing it yourself, without asking.",
  },
  {
    title: "Work",
    desc: "A full day on your feet.",
  },
  {
    title: "Holidays",
    desc: "Choosing the trip you want, not the flattest one.",
  },
  {
    title: "Yourself",
    desc: "Feeling your age \u2014 not older.",
  },
];

export default function AboutYouSection() {
  return (
    <section className="bg-[#FAFAF8] px-5 py-10 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* ════════════════════════════════════════════════════════════
            PART A — Your assessment (two columns)
        ════════════════════════════════════════════════════════════ */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left — consultation photo (mobile: top) */}
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

          {/* Right — text + 4 rows */}
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-teal">
              About You
            </p>
            <h2 className="mt-3 text-[1.5rem] font-bold leading-[1.15] text-navy sm:text-[2rem]">
              Not every knee is the same.{" "}
              <span className="block text-teal">Neither is every answer.</span>
            </h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-body sm:text-[1.05rem]">
              Before anything is recommended, RamaKrishna looks at your knee,
              your history and what you actually want to get back to.
            </p>

            {/* 4 assessment rows */}
            <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              {assessmentRows.map((row, i) => (
                <div key={row.title}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal/10 sm:h-10 sm:w-10">
                      <svg
                        className="h-4 w-4 text-teal sm:h-5 sm:w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        {row.icon}
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[14px] font-semibold text-navy sm:text-[15px]">
                        {row.title}
                      </h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-body sm:text-[14px]">
                        {row.desc}
                      </p>
                    </div>
                  </div>
                  {i < assessmentRows.length - 1 && (
                    <div className="ml-[52px] mt-5 border-t border-border sm:ml-14 sm:mt-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            PART B — What we aim to give back (3 × 2 grid)
        ════════════════════════════════════════════════════════════ */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <h3 className="text-[1.1rem] font-bold text-navy sm:text-[1.25rem]">
            What we&rsquo;re working towards
          </h3>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {givesBack.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-white p-5 sm:p-6"
              >
                <div className="flex items-start gap-3">
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
                    <h4 className="text-[1rem] font-bold text-navy sm:text-[1.1rem]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[0.9rem] leading-relaxed text-body sm:text-[0.95rem]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-[13px] leading-relaxed text-muted sm:mt-6">
            What you get back depends on your knee, your goals and how far the
            osteoarthritis has progressed. That&rsquo;s what the assessment is
            for.
          </p>

          {/* Bottom link */}
          <a
            href="#clinics"
            className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-teal transition hover:text-teal-dark sm:mt-6"
          >
            What does it cost?
            <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
