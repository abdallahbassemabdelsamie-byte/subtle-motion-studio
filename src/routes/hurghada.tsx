import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { toursBySection, type Tour } from "@/data/tours";

const LOGO = "/images/cropped-getyour-guide-scaled.png";
const HERO = "/images/stretched-1920-1080-341672.jpg";
const PHONE = "+20 109 311 8404";
const WHATSAPP = "https://api.whatsapp.com/send?phone=201080349037";

const TITLE = "Hurghada Ausflüge & Preise - Red Sea GetYourGuide";
const DESCRIPTION =
  "Optionale Ausflüge ab Hurghada mit Preisen: Orange Bay, Hula Hula, Paradise Island, Tauchen, Delfinhaus, Quad-Safari, Luxor und Kairo – mit deutschsprachiger Reiseleitung.";

export const Route = createFileRoute("/hurghada")({
  component: HurghadaPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/hurghada" }],
  }),
});

const FEATURED = toursBySection("hurghada", "featured");
const SEA = toursBySection("hurghada", "sea");
const SPEEDBOAT = toursBySection("hurghada", "speedboat");
const LAND = toursBySection("hurghada", "land");
const DAYTRIPS = toursBySection("hurghada", "daytrips");
const CAIRO = toursBySection("hurghada", "cairo");

function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      to="/tour/$slug"
      params={{ slug: tour.slug }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="h-56 overflow-hidden">
        <img
          src={tour.img}
          alt={tour.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl leading-tight text-deep">{tour.title}</h3>
          <span className="shrink-0 rounded-full bg-sand px-3 py-1 text-xs font-semibold text-deep">
            {tour.price}
          </span>
        </div>
        {tour.note ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {tour.note}
          </p>
        ) : null}
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{tour.text}</p>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-coral">
          Programm & Preise ansehen →
        </span>
      </div>
    </Link>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-coral">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl leading-tight text-deep sm:text-4xl">{title}</h2>
    </div>
  );
}

function HurghadaPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main>
        <section className="relative isolate overflow-hidden bg-deep">
          <img
            src={HERO}
            alt="Orange Bay Insel bei Hurghada am Roten Meer"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/30 via-deep/15 to-deep/45" />
          <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:py-32">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              Rotes Meer · Hurghada
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] text-deep-foreground sm:text-5xl">
              Hurghada Ausflüge und aktuelle Preise
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-deep-foreground/85">
              Inseln, Tauchen, Delfine, Wüstensafari, Luxor und Kairo – alle optionalen Ausflüge ab
              Hurghada mit erfahrener deutschsprachiger Reiseleitung. Preise pro Person in Euro.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP}
                className="rounded-full bg-coral px-7 py-3 text-sm font-semibold text-coral-foreground transition-transform hover:scale-105"
              >
                WhatsApp
              </a>
              <Link
                to="/contact"
                className="rounded-full border border-deep-foreground/40 px-7 py-3 text-sm font-semibold text-deep-foreground transition-colors hover:bg-deep-foreground/10"
              >
                Jetzt anrufen
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16">
          <SectionTitle eyebrow="Inseln & Bestseller" title="Ausflüge ab Hurghada" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED.map((tour) => (
              <TourCard key={tour.title} tour={tour} />
            ))}
          </div>
        </section>

        <section className="bg-sand py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionTitle eyebrow="Meer & Tauchen" title="Tauchen, Delfine und Wassersport" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SEA.map((tour) => (
                <TourCard key={tour.title} tour={tour} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20">
          <SectionTitle eyebrow="Privat" title="Privates Schnellboot ab Hurghada" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {SPEEDBOAT.map((tour) => (
              <TourCard key={tour.title} tour={tour} />
            ))}
          </div>
        </section>

        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionTitle eyebrow="Wüste & Stadt" title="Safari, Stadtrundfahrt und Transfer" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {LAND.map((tour) => (
                <TourCard key={tour.title} tour={tour} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20">
          <SectionTitle eyebrow="Tagesausflüge" title="Luxor und Kairo ab Hurghada" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DAYTRIPS.map((tour) => (
              <TourCard key={tour.title} tour={tour} />
            ))}
          </div>
        </section>

        <section className="bg-sand py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionTitle eyebrow="Reisen nach Kairo" title="Kairo & Großes Ägyptisches Museum" />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {CAIRO.map((tour) => (
                <TourCard key={tour.title} tour={tour} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20">
          <div className="rounded-[2rem] bg-primary px-8 py-14 text-center text-primary-foreground">
            <h2 className="font-display text-3xl sm:text-4xl">Buchen Sie jetzt Ihre Reise</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85">
              Schreiben Sie uns auf WhatsApp – wir stellen Ihr Programm ab Hurghada zusammen und
              holen Sie direkt am Hotel ab.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+201093118404"
                className="rounded-full bg-coral px-7 py-3 text-sm font-semibold text-coral-foreground transition-transform hover:scale-105"
              >
                {PHONE}
              </a>
              <a
                href={WHATSAPP}
                className="rounded-full border border-primary-foreground/50 px-7 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-deep py-12 text-deep-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 text-center">
          <img
            src={LOGO}
            alt="Red Sea GetYourGuide Logo"
            className="h-12 w-auto"
            width={150}
            height={48}
          />
          <p className="max-w-xl text-sm text-deep-foreground/75">
            Red Sea GetYourGuide – Optionale Ausflüge ab Hurghada und Marsa Alam mit erfahrener
            deutschsprachiger Reiseleitung.
          </p>
          <div className="flex gap-5 text-sm text-accent">
            <Link to="/" className="hover:underline">
              Startseite
            </Link>
            <Link to="/marsa-alam" className="hover:underline">
              Marsa Alam
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
