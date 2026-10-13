import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bookingUrl } from "../site-config";
import { images } from "../assets";

export const metadata: Metadata = {
  title: "Arthrosamid for Knee Pain",
  description:
    "Arthrosamid is a single-injection hydrogel treatment for knee osteoarthritis. Learn how it works, what to expect, and whether it may be suitable for you.",
};

export default function ArthrosamidPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-teal">
            The Treatment
          </p>
          <h1 className="mt-4 max-w-3xl text-[2rem] font-bold text-white sm:text-[2.5rem]">
            Arthrosamid<sup className="text-[0.6em]">&reg;</sup> for Knee
            Osteoarthritis
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-white/70">
            A single injection that integrates with your knee joint to provide
            long-lasting pain relief &mdash; without surgery or repeat courses.
          </p>
        </div>
      </section>

      {/* What is it */}
      <section className="bg-white px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-[1.75rem] font-bold text-navy sm:text-[2rem]">
                What is Arthrosamid?
              </h2>
              <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-body">
                <p>
                  Arthrosamid is an intra-articular polyacrylamide hydrogel
                  (iPAAG) &mdash; a biocompatible, non-biodegradable,
                  water-based material designed specifically for the knee joint.
                </p>
                <p>
                  It is composed of 2.5% cross-linked polyacrylamide and 97.5%
                  water. Once injected, it does not break down or get absorbed.
                  Instead, it integrates with the synovial membrane &mdash; the
                  inner lining of the joint.
                </p>
                <p>
                  This creates a stable cushioning layer that reduces friction,
                  eases inflammation, and relieves pain associated with knee
                  osteoarthritis.
                </p>
              </div>
            </div>
            <div className="flex justify-center rounded-2xl bg-pale p-8">
              <Image
                src={images.product.src}
                alt={images.product.alt}
                width={images.product.width}
                height={images.product.height}
                sizes="(min-width: 1024px) 45vw, 400px"
                className="max-w-[400px] w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex justify-center">
              <Image
                src={images.kneePain.src}
                alt="3D illustration comparing a healthy knee joint with an osteoarthritic knee joint"
                width={480}
                height={480}
                sizes="(min-width: 1024px) 45vw, 400px"
                className="max-w-[400px] w-full h-auto object-contain"
              />
            </div>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-teal">
                Inside the Joint
              </p>
              <h2 className="mt-3 text-[1.75rem] font-bold text-white sm:text-[2rem]">
                How Arthrosamid works
              </h2>
              <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-white/70">
                <p>
                  In a healthy knee, cartilage cushions the bones and synovial
                  fluid keeps the joint lubricated. With osteoarthritis, that
                  cartilage wears down, the joint space narrows, and the
                  synovial lining becomes inflamed.
                </p>
                <p>
                  Arthrosamid is injected into the synovial cavity under
                  ultrasound guidance. The hydrogel disperses within the
                  synovial fluid and integrates with the synovial membrane over
                  time.
                </p>
                <p>
                  This creates a permanent cushioning layer on the inner surface
                  of the joint, reducing friction, easing inflammation, and
                  providing pain relief that can last up to four years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it differs */}
      <section className="bg-white px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-[1.75rem] font-bold text-navy sm:text-[2rem]">
            How is it different from other injections?
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Steroid Injections",
                desc: "Provide short-term relief (weeks to months) but can weaken cartilage with repeated use. Arthrosamid is a single treatment with no such risk.",
                highlight: false,
              },
              {
                title: "Hyaluronic Acid",
                desc: "A lubricant that is absorbed by the body and typically requires repeat courses. Arthrosamid integrates permanently and does not break down.",
                highlight: false,
              },
              {
                title: "Arthrosamid\u00AE",
                desc: "A non-biodegradable hydrogel that becomes part of the joint lining. One injection. No repeat course. Relief lasting up to four years.",
                highlight: true,
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`rounded-xl p-8 ${
                  item.highlight
                    ? "bg-teal text-white"
                    : "border border-border"
                }`}
              >
                <h3
                  className={`text-[1.1rem] font-semibold ${
                    item.highlight ? "text-white" : "text-navy"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-3 text-[14px] leading-relaxed ${
                    item.highlight ? "text-white/90" : "text-body"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The procedure */}
      <section className="bg-pale px-5 py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-teal">
            The Procedure
          </p>
          <h2 className="mt-3 text-[1.75rem] font-bold text-navy sm:text-[2rem]">
            What to expect on the day
          </h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-body">
            The entire process takes place in a single outpatient visit. No
            hospital stay. No general anaesthetic.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Your knee is assessed and suitability for Arthrosamid confirmed. Medical history and current medications are reviewed.",
                image: images.journeyAssessment,
              },
              {
                step: "02",
                title: "Ultrasound-Guided Injection",
                desc: "The area is cleaned and local anaesthetic applied. Real-time ultrasound ensures precise placement of the hydrogel.",
                image: images.journeyInjection,
              },
              {
                step: "03",
                title: "Go Home",
                desc: "You can leave the clinic the same day. Most patients return to normal activities within 24 to 48 hours.",
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
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-teal text-[12px] font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-4 text-[15px] font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-body">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white px-5 py-10 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-2xl rounded-xl border border-border bg-pale p-6 sm:p-8">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-teal">
              Treatment Cost
            </p>
            <p className="mt-2 text-[1.5rem] font-bold text-navy sm:text-[1.75rem]">
              &pound;2,300 <span className="text-[14px] font-medium text-muted">per knee</span>
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-body">
              The fee includes everything required for your treatment:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Consultation",
                "Ultrasound scan",
                "Joint fluid aspiration",
                "Antibiotics",
                "Ultrasound-guided Arthrosamid\u00AE injection under local anaesthesia",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[14px] leading-snug text-navy">
                  <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy px-5 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-[1.75rem] font-bold text-white">
            Could Arthrosamid help you?
          </h2>
          <p className="mt-4 text-white/70">
            Book a consultation with RamaKrishna to discuss your knee pain and find out
            if Arthrosamid<sup>&reg;</sup> is the right treatment for you.
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
              href="/patient-info"
              className="font-medium text-white transition hover:text-teal"
            >
              Patient info &amp; FAQs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
