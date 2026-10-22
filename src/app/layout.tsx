import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/content";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

const description = `${site.title} in ${site.location}. ${site.tagline}. ${site.openTo}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.title}`,
  description,
  keywords: ["Muhammad Fahad Saeed", "Fahad Saeed", "Full-Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Junior Developer", "Data Science", "Sheffield", "Rotherham", "UK"],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: site.url, title: `${site.name} | ${site.title}`, description, siteName: site.name, locale: "en_GB" },
  twitter: { card: "summary_large_image", title: `${site.name} | ${site.title}`, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#08090c" },
  ],
};

const themeScript = `try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t?t==='dark':true)}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className="dark" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
