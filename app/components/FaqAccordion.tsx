"use client";

import { useState, useId } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const headingId = `${baseId}-heading-${i}`;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <div
            key={i}
            className={`rounded-xl border transition-colors ${
              isOpen ? "border-teal/20 bg-white" : "border-border bg-white"
            }`}
          >
            <button
              id={headingId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 rounded-xl sm:gap-4 sm:px-6 sm:py-5"
            >
              <span className="text-[15px] font-semibold text-navy pr-4">
                {item.question}
              </span>
              <svg
                className={`h-5 w-5 shrink-0 text-teal transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              className={`overflow-hidden transition-all duration-200 ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-4 pb-4 text-[14px] leading-relaxed text-body sm:px-6 sm:pb-5">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
