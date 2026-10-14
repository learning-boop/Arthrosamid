"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { images } from "../assets";

const banners = images.heroBanners;
const INTERVAL = 5000;

export default function HeroBannerSlider() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(
    () => setCurrent((prev) => (prev + 1) % banners.length),
    []
  );
  const prev = useCallback(
    () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [next]);

  return (
    <>
    <section
      className="relative overflow-hidden bg-navy"
    >
      {/* Desktop slides (landscape) */}
      <div
        className="hidden sm:flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <Image
              src={banner.desktop}
              alt={banner.alt}
              width={1920}
              height={720}
              priority={i === 0}
              sizes="100vw"
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Mobile slides (portrait) */}
      <div
        className="flex sm:hidden transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((banner, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <Image
              src={banner.mobile}
              alt={banner.alt}
              width={720}
              height={960}
              priority={i === 0}
              sizes="100vw"
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/40 sm:left-5 sm:h-12 sm:w-12"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/40 sm:right-5 sm:h-12 sm:w-12"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:bottom-20">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-7 bg-teal"
                : "w-2.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Bottom overlay with CTA — desktop only */}
      <div className="hidden sm:block absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 via-navy/50 to-transparent px-5 pb-10 pt-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-row items-center gap-4">
            <a
              href="#clinics"
              className="inline-flex items-center justify-center rounded-lg bg-teal px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-teal-dark"
            >
              Request a Consultation
            </a>
            <Link
              href="/arthrosamid"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3.5 text-[15px] font-semibold text-white transition hover:border-teal hover:text-teal"
            >
              Explore Arthrosamid<sup className="text-[0.7em]">&reg;</sup>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* CTA below banner — mobile only */}
    <div className="sm:hidden bg-navy px-5 py-5">
      <div className="flex flex-col gap-3">
        <a
          href="#clinics"
          className="inline-flex items-center justify-center rounded-lg bg-teal px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-teal-dark"
        >
          Request a Consultation
        </a>
        <Link
          href="/arthrosamid"
          className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-3.5 text-[15px] font-semibold text-white transition hover:border-teal hover:text-teal"
        >
          Explore Arthrosamid<sup className="text-[0.7em]">&reg;</sup>
        </Link>
      </div>
    </div>
    </>
  );
}
