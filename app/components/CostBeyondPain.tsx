"use client";

import { useEffect, useRef, useState } from "react";

const moments = [
  {
    title: "Family",
    desc: "Watching the grandchildren play instead of joining in.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    ),
  },
  {
    title: "Friends",
    desc: "Saying no to the walk, the dance, the day out.",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </>
    ),
  },
  {
    title: "Independence",
    desc: "Asking for help with things you used to do alone.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3.15M10.05 4.575a1.575 1.575 0 113.15 0v3.15M10.05 4.575v3.15M3.75 10.05a1.575 1.575 0 100 3.15h3.15M3.75 10.05a1.575 1.575 0 110 3.15h3.15m0-3.15h3.15m-3.15 0v3.15m3.15-3.15a1.575 1.575 0 103.15 0M13.2 10.05v3.15m0-3.15a1.575 1.575 0 113.15 0m-3.15 3.15a1.575 1.575 0 103.15 0m-3.15 0h3.15m0 0v3.15m0-3.15a1.575 1.575 0 113.15 0v3.15M6.9 17.1a1.575 1.575 0 103.15 0M6.9 17.1a1.575 1.575 0 113.15 0m-3.15 0h3.15m0 0v1.65" />
    ),
  },
  {
    title: "Work",
    desc: "Lighter duties, earlier finishes, retirement talk coming sooner.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
    ),
  },
  {
    title: "Holidays",
    desc: "Choosing the trip by how far you\u2019ll have to walk.",
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </>
    ),
  },
  {
    title: "Yourself",
    desc: "Feeling older than you are.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    ),
  },
];

export default function CostBeyondPain() {
  const listRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const [visibleRows, setVisibleRows] = useState<boolean[]>(new Array(6).fill(false));
  const [quoteVisible, setQuoteVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisibleRows(new Array(6).fill(true));
      setQuoteVisible(true);
      return;
    }

    const rows = listRef.current?.querySelectorAll("[data-row]");
    if (!rows) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-row"));
            setVisibleRows((prev) => {
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

    rows.forEach((row) => observer.observe(row));

    const quoteEl = quoteRef.current;
    if (quoteEl) {
      const quoteObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setQuoteVisible(true);
            quoteObserver.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      quoteObserver.observe(quoteEl);
      return () => {
        observer.disconnect();
        quoteObserver.disconnect();
      };
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F4F7F9] px-5 py-16 sm:py-20 lg:py-24">
      {/* Decorative teal circle — desktop only */}
      <div className="pointer-events-none absolute -right-32 top-1/2 hidden h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-teal/[0.04] lg:block" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-[40fr_60fr] lg:gap-16">
          {/* Left column — sticky on desktop */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-teal">
              What it&rsquo;s taking
            </p>
            <h2 className="mt-3 text-[2rem] font-bold leading-[1.15] text-navy sm:text-[2.5rem] lg:text-[2.75rem]">
              The knee doesn&rsquo;t just hurt.{" "}
              <span className="block text-teal">It takes.</span>
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-body sm:text-[1.125rem]">
              The moments you quietly step back from &mdash; often without
              anyone noticing, including you.
            </p>
          </div>

          {/* Right column — 6 moment rows */}
          <div ref={listRef} className="space-y-0">
            {moments.map((item, i) => (
              <div
                key={item.title}
                data-row={i}
                className={`transition-all duration-500 ease-out ${
                  visibleRows[i]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: visibleRows[i] ? `${i * 150}ms` : "0ms" }}
              >
                <div className="flex items-start gap-4 py-6 sm:gap-5 sm:py-7">
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10 sm:h-[44px] sm:w-[44px]">
                    <svg
                      className="h-5 w-5 text-teal sm:h-[22px] sm:w-[22px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      {item.icon}
                    </svg>
                  </div>

                  {/* Text */}
                  <div className="min-w-0">
                    <h3 className="text-[1.15rem] font-bold text-navy sm:text-[1.35rem]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-body sm:text-[1rem]">
                      {item.desc}
                    </p>
                  </div>
                </div>
                {i < moments.length - 1 && (
                  <div className="h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Closing band */}
        <div
          ref={quoteRef}
          className={`mt-12 text-center transition-all duration-700 ease-out sm:mt-16 ${
            quoteVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <p className="mx-auto max-w-[720px] text-[1.35rem] font-light leading-snug text-navy sm:text-[1.6rem] lg:text-[1.85rem]">
            &ldquo;None of this is the knee.{" "}
            <br className="hidden sm:inline" />
            It&rsquo;s what the knee is deciding for you.&rdquo;
          </p>
          <a
            href="#arthrosamid-section"
            className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-teal transition hover:text-teal-dark sm:mt-6"
          >
            There&rsquo;s a different way
            <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
