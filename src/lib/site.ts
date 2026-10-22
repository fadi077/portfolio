const fallback = "https://fahadsaeed.vercel.app";

/** Canonical origin. Set NEXT_PUBLIC_SITE_URL in the deploy environment. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallback).replace(/\/+$/, "");
