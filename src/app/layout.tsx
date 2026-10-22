import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/content";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const description = `${site.title} in ${site.location}. ${site.tagline}. ${site.openTo}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.title}`,
  description,
  keywords: ["Muhammad Fahad Saeed", "Fahad Saeed", "Full-Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Junior Developer", "Data Science", "Sheffield", "Rotherham", "UK"],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} | ${site.title}`,
    description,
    siteName: site.name,
    images: [{ url: "/shots/offshorecv.com.jpg", width: 1280, height: 800, alt: "Offshore CV, a project by Muhammad Fahad Saeed" }],
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title: `${site.name} | ${site.title}`, description, images: ["/shots/offshorecv.com.jpg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 dark:bg-[#0b0f19] dark:text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
