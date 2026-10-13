import type { Metadata } from "next";
import Link from "next/link";
import { bookingUrl } from "../site-config";

export const metadata: Metadata = {
  title: "Patient Information & FAQs",
  description:
    "Everything you need to know about Arthrosamid treatment: who it suits, what to expect, aftercare, and frequently asked questions.",
};

const faqs = [
  {
    q: "Who is Arthrosamid suitable for?",
    a: "Arthrosamid is designed for adults with mild to moderate knee osteoarthritis who have not had adequate relief from conservative treatments such as physiotherapy, exercise, or painkillers, and who wish to avoid or delay surgery.",
  },
  {
    q: "Who is it NOT suitable for?",
    a: "Arthrosamid is not recommended for patients with active knee infection, inflammatory arthritis (such as rheumatoid arthritis), or those who are pregnant or breastfeeding. RamaKrishna will confirm your suitability during the consultation.",
  },
  {
    q: "How long does the procedure take?",
    a: "The injection itself takes only a few minutes. Including consultation, preparation, and aftercare guidance, expect to spend around 45 minutes to one hour at the clinic.",
  },
  {
    q: "Is the injection painful?",
    a: "A local anaesthetic is applied before the injection, so most patients experience only mild discomfort. The procedure is well tolerated.",
  },
  {
    q: "How quickly will I feel the benefit?",
    a: "Some patients notice improvement within a few weeks, though it can take up to 12 weeks for the full benefit to develop as the hydrogel integrates with the joint lining.",
  },
  {
    q: "How long does the effect last?",
    a: "Clinical data shows that Arthrosamid can provide pain relief for up to four years. Because the hydrogel is non-biodegradable, it does not break down or get absorbed by the body.",
  },
  {
    q: "Can I have Arthrosamid in both knees?",
    a: "Yes, both knees can be treated. RamaKrishna will discuss the best approach with you during your consultation \u2014 this may be done in the same visit or staged over two appointments.",
  },
  {
    q: "What are the possible side effects?",
    a: "The most common side effects are temporary and include mild swelling, stiffness, or discomfort around the injection site. These typically resolve within a few days. Serious adverse events are rare.",
  },
  {
    q: "Will I need to take time off work?",
    a: "Most patients return to desk-based or light work the next day. If your work involves heavy physical activity, you may want to allow 2\u20133 days. RamaKrishna will give you specific guidance.",
  },
  {
    q: "Can I still have a knee replacement later?",
    a: "Yes. Arthrosamid does not interfere with future surgical options, including total knee replacement. It is a complementary treatment, not a replacement for surgery when surgery is needed.",
  },
];

export default function PatientInfoPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-teal">
            Patient Information
          </p>
          <h1 className="mt-4 max-w-3xl text-[2rem] font-bold text-white sm:text-[2.5rem]">
            What you need to know
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-white/70">
            Answers to the most common questions about Arthrosamid treatment,
            from suitability to aftercare.
          </p>
        </div>
      </section>

      {/* Who it suits */}
      <section className="bg-white px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-3xl">
            <h2 className="text-[1.75rem] font-bold text-navy sm:text-[2rem]">
              Who may benefit from Arthrosamid?
            </h2>
            <p className="mt-4 text-[1.05rem] leading-relaxed text-body">
              Arthrosamid may be suitable for you if:
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "You have been diagnosed with knee osteoarthritis",
                "Conservative treatments (physiotherapy, painkillers) have not provided enough relief",
                "You want to avoid or delay knee replacement surgery",
                "You are looking for a longer-lasting alternative to steroid or hyaluronic acid injections",
                "You are an active person who wants to maintain your mobility",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-teal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-navy px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-[1.75rem] font-bold text-white sm:text-[2rem]">
            What to expect
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Before Treatment",
                items: [
                  "Initial consultation with RamaKrishna",
                  "Medical history and medication review",
                  "Physical examination of your knee",
                  "Discussion of treatment options and expectations",
                ],
              },
              {
                title: "During Treatment",
                items: [
                  "Local anaesthetic applied to the knee",
                  "Ultrasound-guided injection",
                  "Procedure takes only a few minutes",
                  "You remain awake and comfortable throughout",
                ],
              },
              {
                title: "After Treatment",
                items: [
                  "Go home the same day",
                  "Rest the knee for 24\u201348 hours",
                  "Avoid strenuous activity for one week",
                  "Follow-up available if needed",
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="text-[1.1rem] font-semibold text-teal">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-4 w-4 shrink-0 text-white/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span className="text-[14px] text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-[1.75rem] font-bold text-navy sm:text-[2rem]">
            Frequently asked questions
          </h2>

          <div className="mx-auto mt-12 max-w-3xl space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="border-b border-border pb-8"
              >
                <h3 className="text-[1.05rem] font-semibold text-navy">
                  {faq.q}
                </h3>
                <p className="mt-3 leading-relaxed text-body">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-pale px-5 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-[1.75rem] font-bold text-navy">
            Still have questions?
          </h2>
          <p className="mt-4 text-body">
            Book a consultation with RamaKrishna. He&rsquo;ll take the time to answer
            all your questions and help you decide if Arthrosamid is right for
            you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-teal px-10 py-4 text-[15px] font-semibold text-white transition hover:bg-teal-dark"
            >
              Book Consultation
            </a>
            <Link
              href="/clinics"
              className="font-medium text-navy transition hover:text-teal"
            >
              View clinic locations
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
