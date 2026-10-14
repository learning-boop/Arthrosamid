"use client";

import { useState } from "react";
import Image from "next/image";

const symptoms = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    ),
    title: "Stairs",
    desc: "You hold the rail, or take them one at a time.",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    ),
    title: "Getting up",
    desc: "The first steps after sitting are the worst.",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    ),
    title: "Morning stiffness",
    desc: "It takes a while before the knee \u2018warms up\u2019.",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    ),
    title: "Sleep",
    desc: "You wake up when you turn over.",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    ),
    title: "Walking distance",
    desc: "You plan routes around where you can sit down.",
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.339 2.68a2.25 2.25 0 01-2.012 1.244h-7.298a2.25 2.25 0 01-2.012-1.244L5 14.5m14 0H5" />
    ),
    title: "Painkillers",
    desc: "Ibuprofen or paracetamol has become routine.",
  },
];

const messages: Record<number, string> = {
  0: "",
  1: "Even one is worth paying attention to.",
  2: "These small adjustments add up over time.",
  3: "Your knee is already changing how you live your day.",
  4: "These are the signs knee osteoarthritis is already changing your day.",
  5: "Your knee is shaping most of your daily decisions.",
  6: "All six — your knee is running the show. It doesn\u2019t have to.",
};

export default function KneePainChecklist() {
  const [checked, setChecked] = useState<boolean[]>(new Array(6).fill(false));
  const count = checked.filter(Boolean).length;

  const toggle = (index: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <section className="bg-pale px-5 py-8 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <h2 className="text-[1.5rem] font-bold leading-[1.2] text-navy sm:text-[2rem]">
          It started as a twinge.{" "}
          <span className="text-teal">Now it decides your day.</span>
        </h2>
        <p className="mt-3 text-[1rem] leading-relaxed text-body sm:text-[1.05rem]">
          Most people don&rsquo;t notice how much they&rsquo;ve adjusted.
          Tick the ones that sound like you.
        </p>

        <div className="mt-5 grid items-start gap-5 sm:mt-6 lg:grid-cols-[55fr_45fr] lg:gap-10">
          {/* Mobile image — shown above cards on small screens */}
          <div className="flex justify-center lg:hidden">
            <div className="overflow-hidden rounded-2xl w-full max-w-[400px]">
              <Image
                src="/Supported steps in a bright hallway (1).png"
                alt="Woman walking supported in a bright hallway, representing everyday challenges of knee pain"
                width={600}
                height={800}
                sizes="(min-width: 640px) 400px, 90vw"
                className="w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
          </div>

          {/* Left — checklist */}
          <div>
            {/* Symptom cards — single column on mobile, 2 columns on tablet+ */}
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-3">
              {symptoms.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => toggle(i)}
                  className={`flex items-start gap-3 rounded-xl border px-3.5 py-3 text-left transition-all duration-200 sm:px-4 sm:py-3.5 ${
                    checked[i]
                      ? "border-teal bg-teal/5 shadow-sm"
                      : "border-border bg-white hover:border-teal/30"
                  }`}
                >
                  {/* Tick box */}
                  <div
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors duration-200 ${
                      checked[i]
                        ? "border-teal bg-teal"
                        : "border-gray-300"
                    }`}
                  >
                    {checked[i] && (
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <svg
                        className={`h-4 w-4 shrink-0 transition-colors duration-200 ${
                          checked[i] ? "text-teal" : "text-muted"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        {item.icon}
                      </svg>
                      <span className="text-[14px] font-semibold text-navy sm:text-[15px]">
                        {item.title}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[13px] leading-snug text-body">
                      {item.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Counter message */}
            <div
              className={`mt-5 overflow-hidden transition-all duration-300 ${
                count > 0 ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="rounded-lg bg-navy/5 px-4 py-3 sm:px-5">
                <p className="text-[14px] font-medium text-navy">
                  You ticked{" "}
                  <span className="font-bold text-teal">{count} of 6</span>
                  {" \u2014 "}
                  {messages[count]}
                </p>
              </div>
            </div>

            <a
              href="#knee-pain"
              className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-teal transition hover:text-teal-dark sm:mt-6"
            >
              See what happens next if it&rsquo;s left
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Right — image (desktop only) */}
          <div className="hidden lg:flex justify-center lg:sticky lg:top-8">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/Supported steps in a bright hallway (1).png"
                alt="Woman walking supported in a bright hallway, representing everyday challenges of knee pain"
                width={600}
                height={800}
                sizes="45vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
