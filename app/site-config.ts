/**
 * Canonical public URL of the deployed site.
 *
 * Set NEXT_PUBLIC_SITE_URL in production (for example
 * https://arthrosamid.jointcareclinics.co.uk). On Vercel the project's
 * production URL is used automatically when the variable is not set.
 * Locally it falls back to the dev server.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/+$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const siteName = "Arthrosamid® at Joint Care Clinics";

export const bookingUrl = "https://jointcareclinics.co.uk/contact/";
