import Image from "next/image";
import { bookingUrl } from "./site-config";

export default function Home() {
  return (
    <main>
      {/* ────────────────────────────────────────────────────────────────
          HERO — full-viewport video with directional gradient overlay
      ──────────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-end overflow-hidden pb-28 sm:items-center sm:pb-0">
        {/* Desktop banner (landscape) */}
        <Image
          src="/01_Knee/Images/Knee ultrasound examination in a modern clinic-1.png"
          alt="Knee ultrasound examination in a modern clinic"
          fill
          priority
          sizes="100vw"
          className="hidden sm:block absolute inset-0 h-full w-full object-cover object-top"
        />
        {/* Mobile banner (portrait) */}
        <Image
          src="/01_Knee/Images/Knee ultrasound in a modern clinic-2.png"
          alt="Knee ultrasound examination in a modern clinic"
          fill
          priority
          sizes="100vw"
          className="block sm:hidden absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-deep-navy/80 sm:bg-transparent sm:bg-gradient-to-r sm:from-deep-navy/95 sm:via-deep-navy/75 sm:to-deep-navy/30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-12 lg:px-20">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-highlight-blue">
            Arthrosamid<sup>&reg;</sup> at Joint Care Clinics
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Long-lasting knee pain relief.{" "}
            <span className="text-muted-blue">Without surgery.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-light-grey sm:text-xl">
            A single injection that integrates with your knee joint to reduce
            pain and improve mobility&nbsp;&mdash; for up to four years.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={bookingUrl}
              className="inline-flex items-center justify-center rounded-full bg-highlight-blue px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white hover:text-deep-navy"
            >
              Book a Consultation
            </a>
            <a
              href="#the-pain"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/25 px-8 py-3.5 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-5 w-5 text-white/50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          THE PAIN — daily symptoms + video + photo evidence
      ──────────────────────────────────────────────────────────────── */}
      <section id="the-pain" className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-highlight-blue">
            Understanding your pain
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-bold text-deep-navy sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            If your knee hurts, you already know
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-blue/70">
            Knee osteoarthritis affects every part of your day. These are the
            moments that tell you something needs to change.
          </p>

          {/* symptoms + video */}
          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-8">
              {(
                [
                  [
                    "Morning stiffness",
                    "Your knee locks up overnight. The first steps each morning are the hardest.",
                  ],
                  [
                    "Pain on stairs",
                    "Going up is difficult. Coming down is worse. You start avoiding them entirely.",
                  ],
                  [
                    "Aching after sitting",
                    "A car journey, a film, a meal out — any period of sitting ends with pain when you stand.",
                  ],
                  [
                    "Swelling that limits movement",
                    "Your knee feels tight, warm, and inflamed. The range of motion you once had is gone.",
                  ],
                ] as const
              ).map(([title, desc], i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-highlight-blue/10 text-sm font-bold text-highlight-blue">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-deep-navy">
                      {title}
                    </h3>
                    <p className="mt-1 leading-relaxed text-slate-blue/70">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* video card */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[4/3] w-full object-cover"
                poster="/01_Knee/Images/K05_Man_holding_knee.jpg"
              >
                <source
                  src="/01_Knee/Videos/K07_Man_massaging_knee.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/40 to-transparent px-6 pb-6 pt-20">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight-blue">
                  The daily reality
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  Living with knee osteoarthritis
                </p>
              </div>
            </div>
          </div>

          {/* photo strip */}
          <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {[
              {
                src: "/01_Knee/Images/K01_Knee_pain_on_sofa.jpg",
                alt: "Person holding a painful knee while seated at home",
              },
              {
                src: "/01_Knee/Images/K04_Knee_pain_blue_background.jpg",
                alt: "Hands gripping a stiff, painful knee",
              },
              {
                src: "/01_Knee/Images/K02_Hands_holding_knee.jpg",
                alt: "Close-up of hands cradling an aching knee",
              },
            ].map((img) => (
              <div
                key={img.src}
                className="relative aspect-[3/2] overflow-hidden rounded-xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          INSIDE THE JOINT — what osteoarthritis does
      ──────────────────────────────────────────────────────────────── */}
      <section className="bg-deep-navy px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* diagram */}
            <div className="flex justify-center">
              <Image
                src="/01_Knee/Images/K12_Knee_osteoarthritis_diagram.png"
                alt="Diagram of advanced knee osteoarthritis showing cartilage loss, bone spurs, and joint-space narrowing"
                width={480}
                height={420}
                className="rounded-2xl max-w-full h-auto"
              />
            </div>

            {/* explanation */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-highlight-blue">
                Inside the joint
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                What&rsquo;s happening inside your knee
              </h2>
              <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted-blue">
                <p>
                  In a healthy knee, cartilage cushions the bones and synovial
                  fluid keeps the joint lubricated. With osteoarthritis, that
                  cartilage wears down.
                </p>
                <p>
                  Bone spurs form. The joint space narrows. The synovial lining
                  becomes inflamed. Every movement creates friction that
                  wasn&rsquo;t there before.
                </p>
                <p>
                  Painkillers mask the symptoms. Physiotherapy helps manage
                  them. But neither changes what&rsquo;s happening inside the
                  joint.
                </p>
              </div>
              <p className="mt-8 border-l-2 border-highlight-blue pl-4 text-lg font-semibold text-white">
                Arthrosamid<sup>&reg;</sup> was designed to change that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          HOW ARTHROSAMID WORKS — mechanism in three steps
      ──────────────────────────────────────────────────────────────── */}
      <section id="how-it-works" className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-highlight-blue">
              The treatment
            </p>
            <h2 className="mt-4 text-3xl font-bold text-deep-navy sm:text-4xl lg:text-5xl">
              How Arthrosamid<sup className="text-lg align-super">&reg;</sup>{" "}
              works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-blue/70">
              A non-biodegradable hydrogel injected directly into the knee
              joint. One treatment. No repeat course.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Injected into the joint",
                desc: "The hydrogel is delivered into the knee under ultrasound guidance, ensuring precise placement within the synovial cavity.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                ),
              },
              {
                step: "02",
                title: "Integrates with the lining",
                desc: "Arthrosamid disperses within the synovial fluid and binds with the synovial membrane — the inner lining of the joint — over time.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 01-1.59.659H9.06a2.25 2.25 0 01-1.591-.659L5 14.5m14 0V17a2.25 2.25 0 01-2.25 2.25H7.25A2.25 2.25 0 015 17v-2.5"
                  />
                ),
              },
              {
                step: "03",
                title: "Creates lasting cushioning",
                desc: "A stable cushioning layer forms on the inner surface of the joint, reducing friction, easing inflammation, and relieving pain.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.746 3.746 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                ),
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-blue/10 p-8 transition hover:border-highlight-blue/30 hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <svg
                    className="h-6 w-6 text-highlight-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    {item.icon}
                  </svg>
                  <span className="text-sm font-bold tracking-wider text-highlight-blue">
                    STEP {item.step}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-deep-navy">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-blue/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          STATS BAND
      ──────────────────────────────────────────────────────────────── */}
      <section className="bg-slate-blue px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 text-center sm:grid-cols-3">
          {[
            { value: "20,000+", label: "Patients Treated Worldwide" },
            { value: "Single", label: "Injection Treatment" },
            { value: "Up to 4 Years", label: "Lasting Relief" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-extrabold text-highlight-blue sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-muted-blue">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          THE PROCEDURE — four-step walkthrough with images
      ──────────────────────────────────────────────────────────────── */}
      <section id="the-procedure" className="bg-white px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-highlight-blue">
            The procedure
          </p>
          <h2 className="mt-4 text-3xl font-bold text-deep-navy sm:text-4xl">
            What to expect
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-blue/70">
            The entire process takes place in a single outpatient visit. No
            hospital stay. No general anaesthetic.
          </p>

          <div className="mt-16 grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Your knee is assessed and suitability for Arthrosamid confirmed. Medical history and current medications are reviewed.",
                image: "/01_Knee/Images/K06_Knee_physiotherapy.jpg",
              },
              {
                step: "02",
                title: "Ultrasound guidance",
                desc: "The area is cleaned and local anaesthetic applied. Real-time ultrasound ensures precise needle placement.",
                image:
                  "/01_Knee/Images/K11_Ultrasound_guided_knee_injection.jpg",
              },
              {
                step: "03",
                title: "The injection",
                desc: "Arthrosamid hydrogel is injected into the synovial cavity. The procedure itself takes only a few minutes.",
                image: "/01_Knee/Images/K10_Generic_knee_injection.jpg",
              },
            ].map((item) => (
              <div key={item.step} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-deep-navy/20 transition group-hover:bg-deep-navy/10" />
                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-highlight-blue text-xs font-bold text-white shadow">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-deep-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-blue/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          VIDEO INTERSTITIAL — cinematic mid-page break
      ──────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-[50vh] w-full object-cover sm:h-[60vh]"
          poster="/01_Knee/Images/K04_Knee_pain_blue_background.jpg"
        >
          <source
            src="/01_Knee/Videos/K09_Man_squatting_knee_discomfort.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 flex items-center justify-center bg-deep-navy/65">
          <div className="px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-highlight-blue sm:text-sm">
              Non-surgical &middot; Outpatient &middot; Single visit
            </p>
            <h2 className="mx-auto mt-4 max-w-lg text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
              One injection. Lasting relief.
            </h2>
            <a
              href={bookingUrl}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-highlight-blue px-8 py-3.5 font-semibold text-white transition hover:bg-white hover:text-deep-navy"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          YOUR PRACTITIONER — Ram Rachaputi
      ──────────────────────────────────────────────────────────────── */}
      <section id="practitioner" className="bg-deep-navy px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-highlight-blue">
                Your practitioner
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Ram Rachaputi
              </h2>
              <p className="mt-2 text-lg text-muted-blue">
                HCPC-registered Consultant Physiotherapist, Musculoskeletal
                Sonographer &amp; Independent Prescriber
              </p>

              <div className="mt-8 space-y-4 leading-relaxed text-muted-blue">
                <p>
                  Ram brings over 20&nbsp;years of NHS and private-practice
                  experience in musculoskeletal healthcare. He has performed
                  several thousand diagnostic ultrasound scans and
                  ultrasound-guided injections across his career.
                </p>
                <p>
                  His qualifications span physiotherapy, neuromusculoskeletal
                  medicine, injection therapy, and diagnostic &amp;
                  interventional ultrasound&nbsp;&mdash; ensuring every
                  Arthrosamid injection is delivered with precision and care.
                </p>
              </div>

              {/* credentials */}
              <div className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {[
                  "20+ years clinical experience",
                  "Thousands of guided injections",
                  "HCPC registered",
                  "Independent prescriber",
                ].map((cred) => (
                  <div key={cred} className="flex items-center gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-highlight-blue"
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
                    <span className="text-sm text-white">{cred}</span>
                  </div>
                ))}
              </div>

              {/* links to full practice sites */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                {[
                  {
                    label: "Joint Care Clinics",
                    href: "https://jointcareclinics.co.uk",
                  },
                  {
                    label: "Joint Care North East",
                    href: "https://jointcarenortheast.co.uk",
                  },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-muted-blue/25 px-6 py-2.5 text-sm font-medium text-white transition hover:border-highlight-blue hover:text-highlight-blue"
                  >
                    {link.label}
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          FINAL CTA
      ──────────────────────────────────────────────────────────────── */}
      <section className="bg-slate-blue px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to move without pain?
          </h2>
          <p className="mt-4 text-lg text-muted-blue">
            Find out if Arthrosamid<sup>&reg;</sup> is right for you. Book a
            consultation with Ram today.
          </p>
          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <a
              href={bookingUrl}
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-semibold text-slate-blue transition hover:bg-highlight-blue hover:text-white"
            >
              Book Now
            </a>
            <a
              href="tel:03330388988"
              className="inline-flex items-center gap-2 font-medium text-white transition hover:text-highlight-blue"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              0333 038 8988
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────
          FOOTER
      ──────────────────────────────────────────────────────────────── */}
      <footer className="bg-deep-navy px-6 py-12 text-sm text-muted-blue">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-semibold text-white">
            Arthrosamid<sup>&reg;</sup> at Joint Care Clinics
          </p>
          <p className="mt-4 text-light-grey">
            &copy; {new Date().getFullYear()} Joint Care Clinics. All rights
            reserved. Arthrosamid is a registered trademark of Contura.
          </p>
        </div>
      </footer>
    </main>
  );
}
