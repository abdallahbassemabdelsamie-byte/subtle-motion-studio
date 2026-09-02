import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { toursBySection, type Tour } from "@/data/tours";
const LOGO = "/images/cropped-getyour-guide-scaled.png";
const HERO = "/images/dugong-2.jpg";
const PHONE = "+20 109 311 8404";
const WHATSAPP = "https://api.whatsapp.com/send?phone=201080349037";

const TITLE = "Marsa Alam Ausflüge - Red Sea GetYourGuide";
const DESCRIPTION =
  "Optionale Ausflüge ab Marsa Alam: Marsa Mubarak, Abu Dabbab, Sataya Delfinriff, Hamata-Inseln, Kairo, Luxor, Assuan, Quad-Safari und Tauchen – mit deutschsprachiger Reiseleitung.";

export const Route = createFileRoute("/marsa-alam")({
  component: MarsaAlamPage,
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
    links: [{ rel: "canonical", href: "/marsa-alam" }],
  }),
});

const MAIN = toursBySection("marsa-alam", "main");
const SAFARI = toursBySection("marsa-alam", "safari");
const SEA = toursBySection("marsa-alam", "sea");

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
          {tour.price ? (
            <span className="shrink-0 rounded-full bg-sand px-3 py-1 text-xs font-semibold text-deep">
              {tour.price}
            </span>
          ) : null}
        </div>
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

function MarsaAlamPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main>
        <section className="relative isolate overflow-hidden bg-deep">
          <img
            src={HERO}
            alt="Dugong im Roten Meer bei Marsa Alam"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/30 via-deep/15 to-deep/45" />
          <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:py-32">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              Rotes Meer · Marsa Alam
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] text-deep-foreground sm:text-5xl">
              Marsa Alam Ausflüge mit deutschsprachiger Reiseleitung
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-deep-foreground/85">
              Marsa Alam ist ein ruhiger, wunderbarer Ort mit einigen der besten Tauchplätze
              Ägyptens. Wir planen für Sie unvergessliche Reisen – sorgen Sie sich um nichts.
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
          <SectionTitle eyebrow="Beliebteste Ausflüge" title="Optionale Ausflüge nach Marsa Alam" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MAIN.map((tour) => (
              <TourCard key={tour.title} tour={tour} />
            ))}
          </div>
        </section>

        <section className="bg-sand py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionTitle eyebrow="Wüstenabenteuer" title="Quad-Safari (Sahara Park) – täglich" />
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Im Morgengrauen, vormittags, nachmittags und vor Sonnenuntergang „auf Anfrage“.
              Erleben Sie das Abenteuer und steigern Sie Ihren Adrenalinspiegel.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {SAFARI.map((tour) => (
                <TourCard key={tour.title} tour={tour} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20">
          <SectionTitle eyebrow="Seetouren" title="Unsere besten Seetouren ab Marsa Alam" />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Genießen Sie eine unvergessliche Seetour ab Marsa Alam mit unseren Experten. Entdecken
            Sie die Schönheit des Meeres. Buchen Sie jetzt!
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SEA.map((tour) => (
              <TourCard key={tour.title} tour={tour} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20">
          <div className="rounded-[2rem] bg-primary px-8 py-14 text-center text-primary-foreground">
            <h2 className="font-display text-3xl sm:text-4xl">Buchen Sie jetzt Ihre Reise</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85">
              Mit unserer langjährigen Erfahrung erledigen wir alles für Sie. Wir versichern Ihnen,
              dass alle unsere Reisen Ihnen gefallen werden.
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
          <Link to="/" className="text-sm text-accent hover:underline">
            Zurück zur Startseite
          </Link>
        </div>
      </footer>
    </div>
  );
}
