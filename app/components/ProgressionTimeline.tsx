"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stages = [
  {
    label: "Today",
    desc: "You adjust. Stairs one at a time, shorter walks, painkillers on bad days.",
    // Stairs icon
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h3v-4h4v-4h4v-4h4v-4h3" />
      </>
    ),
  },
  {
    label: "In a year",
    desc: "Muscle strength around the knee drops. Stiffness lasts longer each morning.",
    // Walking cane icon
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21l3-9 4 2.5M17 6v15M15 6.5c0 1-1.5 2-3 2.5" />
      </>
    ),
  },
  {
    label: "In a few years",
    desc: "Weight creeps up because moving hurts. Sleep, mood and confidence follow.",
    // Sofa / rest icon
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 19v-2a4 4 0 014-4h6a4 4 0 014 4v2M4 13a2 2 0 00-2 2v2h20v-2a2 2 0 00-2-2M7 13V9a3 3 0 013-3h4a3 3 0 013 3v4" />
      </>
    ),
  },
  {
    label: "Later",
    desc: "Dependence on others. Surgery becomes the only option left to discuss.",
    // Hospital / building icon
    icon: (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21V5a2 2 0 012-2h4a2 2 0 012 2v16M3 21h18M12 7h.01M12 11h.01M12 15h.01" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 21v-4h4v4" />
      </>
    ),
  },
];

export default function ProgressionTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="knee-pain"
      ref={sectionRef}
      className="relative overflow-hidden bg-navy"
    >
      {/* Background image — mobile: full background */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/Quiet reflection in amber window light.png"
          alt="Man sitting quietly in amber window light, reflecting on reduced mobility from knee pain"
          fill
          sizes="100vw"
          className="object-cover object-[50%_20%]"
        />
        <div className="absolute inset-0 bg-navy/75" />
      </div>

      {/* Background image — desktop: right side */}
      <div className="absolute inset-y-0 right-0 hidden w-[45%] lg:block">
        <Image
          src="/Quiet reflection by the window.png"
          alt="Man sitting quietly by the window, reflecting on reduced mobility from knee pain"
          fill
          sizes="45vw"
          className="object-cover object-[70%_15%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-5 py-10 sm:py-12 lg:py-16">
        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="text-[1.75rem] font-extrabold text-white sm:text-[2rem]">
            Knee osteoarthritis doesn&rsquo;t stay still.
          </h2>
          <p className="mt-2 text-[1.1rem] font-medium leading-relaxed text-white/90 sm:text-[1.05rem] sm:font-normal sm:text-white/70">
            Left unmanaged, the knee stiffens, the muscles around it weaken,
            and the things you can do keep shrinking.
          </p>
        </div>

        {/* Timeline — desktop/tablet (horizontal) */}
        <div className="mt-8 hidden sm:block">
          <div className="relative max-w-[720px]">
            {/* Background teal line */}
            <div className="absolute left-[12.5%] right-[12.5%] top-[5px] h-[2px] bg-white/10" />
            {/* Animated teal line */}
            <div
              className={`absolute left-[12.5%] top-[5px] h-[2px] bg-teal transition-all duration-1200 ease-out ${
                visible ? "right-[12.5%]" : "right-[87.5%]"
              }`}
            />

            {/* Stage columns */}
            <div className="relative grid grid-cols-4">
              {stages.map((stage, i) => (
                <div
                  key={stage.label}
                  className={`flex flex-col items-center transition-all duration-500 ease-out ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: visible ? `${i * 250 + 200}ms` : "0ms" }}
                >
                  {/* Dot — centred on the line */}
                  <div
                    className={`h-3 w-3 rounded-full border-2 border-teal transition-colors duration-300 ${
                      visible ? "bg-teal" : "bg-navy"
                    }`}
                    style={{ transitionDelay: visible ? `${i * 250 + 200}ms` : "0ms" }}
                  />

                  {/* Card — directly under the dot */}
                  <div className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal/15">
                      <svg
                        className="h-4 w-4 text-teal"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        {stage.icon}
                      </svg>
                    </div>
                    <p className="mt-2.5 text-[12px] font-semibold uppercase tracking-wider text-teal">
                      {stage.label}
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/70">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline — mobile (vertical) */}
        <div className="mt-6 sm:hidden">
          <div className="relative border-l-2 border-teal/30 pl-5">
            {stages.map((stage, i) => (
              <div
                key={stage.label}
                className={`relative pb-5 last:pb-0 transition-all duration-500 ease-out ${
                  visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: visible ? `${i * 150 + 200}ms` : "0ms" }}
              >
                {/* Dot on line */}
                <div
                  className={`absolute -left-[25px] top-4 h-[10px] w-[10px] rounded-full border-2 border-teal transition-colors duration-300 ${
                    visible ? "bg-teal" : "bg-navy"
                  }`}
                  style={{ transitionDelay: visible ? `${i * 150 + 200}ms` : "0ms" }}
                />

                <div className="rounded-xl border border-white/15 bg-navy/60 backdrop-blur-sm p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal/20">
                      <svg
                        className="h-4 w-4 text-teal"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        {stage.icon}
                      </svg>
                    </div>
                    <p className="text-[14px] font-bold uppercase tracking-wider text-teal">
                      {stage.label}
                    </p>
                  </div>
                  <p className="mt-2 text-[15px] font-medium leading-relaxed text-white/90">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Honesty line + turning point link */}
        <div className="mt-6 max-w-2xl sm:mt-8">
          <p className="text-[14px] font-medium leading-relaxed text-white/60 sm:text-[13px] sm:font-normal sm:text-white/50">
            Everyone&rsquo;s knee progresses differently &mdash; an assessment
            tells you where you are.
          </p>
          <a
            href="#clinics"
            className="mt-3 inline-flex items-center gap-2 text-[15px] font-bold text-teal transition hover:text-white sm:text-[14px] sm:font-semibold"
          >
            There&rsquo;s a turning point
            <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
