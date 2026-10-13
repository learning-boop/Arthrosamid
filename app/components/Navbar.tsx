"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  navItems,
  phoneNumber,
  phoneHref,
  emailAddress,
  practitionerName,
  practitionerTitle,
} from "../site-config";
import { images } from "../assets";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Contact strip */}
      <div className="bg-navy text-[13px] text-white/80">
        <div className="mx-auto flex max-w-[1200px] items-center justify-end gap-5 px-5 py-2 sm:justify-between sm:gap-6">
          <span className="hidden text-white/60 sm:block">
            Joint Care Clinics enquiries
          </span>
          <div className="flex items-center gap-5 sm:gap-6">
            <a
              href={phoneHref}
              className="flex items-center gap-1.5 transition hover:text-white"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {phoneNumber}
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="hidden items-center gap-1.5 transition hover:text-white sm:flex"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {emailAddress}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`border-b transition-colors duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-border"
            : "bg-white border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3.5">
          {/* Name / wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={images.logo.src}
              alt={images.logo.alt}
              width={36}
              height={36}
              className="h-9 w-9 rounded-full"
            />
            <div className="hidden min-[480px]:block">
              <p className="text-[15px] font-semibold leading-tight text-navy group-hover:text-teal transition-colors">
                {practitionerName}
              </p>
              <p className="text-[11px] leading-tight text-muted">
                {practitionerTitle}
              </p>
            </div>
          </Link>

          {/* Desktop links — centre */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`rounded-md px-3.5 py-2 text-[14px] font-medium transition ${
                    pathname === item.href
                      ? "text-teal bg-teal/5"
                      : "text-navy hover:text-teal hover:bg-pale"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="text-navy lg:hidden p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-border bg-white px-5 pb-6 pt-2 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block py-3 text-[15px] font-medium border-b border-border/50 ${
                  pathname === item.href ? "text-teal" : "text-navy"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#clinics"
              className="mt-4 flex w-full items-center justify-center rounded-lg bg-teal px-5 py-3 text-[14px] font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Request a Consultation
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
