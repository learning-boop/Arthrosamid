import Link from "next/link";
import {
  practitionerName,
  practitionerTitleFull,
  phoneNumber,
  phoneHref,
  emailAddress,
  navItems,
} from "../site-config";

export default function Footer() {
  return (
    <footer className="bg-navy px-5 pb-24 pt-14 text-[14px] text-white/70 lg:pb-14">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="text-[16px] font-semibold text-white">
              {practitionerName}
            </p>
            <p className="mt-1 text-[13px] text-white/50">
              {practitionerTitleFull}
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-white/60">
              Arthrosamid<sup>&reg;</sup> knee treatment delivered at Joint Care
              Clinics across the UK.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-white/50">
              Pages
            </p>
            <ul className="mt-3 space-y-2">
              {navItems.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-white/50">
              Clinic Enquiries
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href={phoneHref} className="transition hover:text-white">
                  {phoneNumber}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${emailAddress}`}
                  className="transition hover:text-white"
                >
                  {emailAddress}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-wider text-white/50">
              Legal
            </p>
            <ul className="mt-3 space-y-2">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Cookie Policy", href: "/cookies" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-[12px] leading-relaxed text-white/40">
            Information on this website supports, but does not replace, an
            individual clinical assessment. Arthrosamid is a registered
            trademark of Contura.
          </p>
          <p className="mt-3 text-[12px] text-white/40">
            &copy; {new Date().getFullYear()} {practitionerName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
