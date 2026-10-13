/**
 * Canonical public URL of the deployed site.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const siteName = "RamaKrishna Rachaputi — Arthrosamid\u00AE Knee Treatment";
export const practitionerName = "RamaKrishna Rachaputi";
export const practitionerTitle =
  "Consultant Physiotherapist & MSK Sonographer";
export const practitionerTitleFull =
  "Consultant Physiotherapist, MSK Sonographer & Independent Prescriber";

export const phoneNumber = "0333 444 2013";
export const phoneHref = "tel:+443334442013";
export const emailAddress = "info@jointcareclinics.co.uk";

export const bookingUrl = "https://jointcareclinics.co.uk/contact/";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About RamaKrishna", href: "/about" },
  { label: "Arthrosamid\u00AE", href: "/arthrosamid" },
  { label: "Patient Information", href: "/patient-info" },
  { label: "Clinics & Appointments", href: "/clinics" },
] as const;

export const clinicLocations = [
  {
    name: "Birmingham & Solihull",
    address: "265B Alcester Road South, King\u2019s Heath, Birmingham B14 6DT",
  },
  {
    name: "Leicester",
    address: "No 1, Holmfield Court, Holmfield Road, Leicester LE2 1SD",
  },
  {
    name: "Rugby",
    address: "78 Clifton Road, Rugby, Warwickshire CV21 3QT",
  },
  {
    name: "Milton Keynes",
    address:
      "ISIS Chiropractic, ISIS House, Tilers Road, Kiln Farm, Milton Keynes MK11 3EA",
  },
] as const;
