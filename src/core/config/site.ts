const siteUrl = process.env.SITE_URL;

if (!siteUrl) {
  throw new Error("Missing SITE_URL environment variable.");
}

export const SITE_URL = new URL(siteUrl);
