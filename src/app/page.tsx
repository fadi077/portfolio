import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Skills } from "@/components/Skills";
import { personJsonLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-violet-600 focus:px-3 focus:py-2 focus:text-white">Skip to content</a>
      <div aria-hidden="true" className="noise pointer-events-none fixed inset-0 -z-10" />
      <Nav />
      <main id="main" className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <Projects />
        <Research />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }} />
    </>
  );
}
