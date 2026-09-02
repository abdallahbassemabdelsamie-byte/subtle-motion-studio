import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { TOURS_BY_SLUG, type Tour } from "@/data/tours";

const SITE = "https://redsea-getyourguide.com";
const LOGO = "/images/cropped-getyour-guide-scaled.png";
const PHONE = "+20 109 311 8404";

function whatsappLink(title: string) {
  return `https://api.whatsapp.com/send?phone=201080349037&text=${encodeURIComponent(
    `Hallo! Ich interessiere mich für den Ausflug: ${title}`,
  )}`;
}

export const Route = createFileRoute("/tour/$slug")({
  loader: ({ params }) => {
    const tour = TOURS_BY_SLUG[params.slug];
    if (!tour) throw notFound();
    return { tour };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Ausflug nicht gefunden - Red Sea GetYourGuide" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { tour } = loaderData;
    const title = `${tour.title} - ${tour.price} | Red Sea GetYourGuide`;
    const description = `${tour.text} Dauer: ${tour.duration}. Programm, Inklusive und Nicht inklusive im Überblick.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "de_DE" },
        { property: "og:image", content: `${SITE}${tour.img}` },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: `${SITE}${tour.img}` },
      ],
      links: [{ rel: "canonical", href: `/tour/${tour.slug}` }],
    };
  },
  component: TourDetailPage,
  notFoundComponent: TourNotFound,
});

function TourNotFound() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <h1 className="font-display text-3xl text-deep">Dieser Ausflug wurde nicht gefunden</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Bitte wählen Sie einen Ausflug aus unserer Übersicht.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/hurghada"
            className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-coral-foreground"
          >
            Hurghada Ausflüge
          </Link>
          <Link
            to="/marsa-alam"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-deep"
          >
            Marsa Alam Ausflüge
          </Link>
        </div>
      </div>
    </div>
  );
}

function List({ title, items, tone }: { title: string; items: string[]; tone: "yes" | "no" }) {
  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
      <h2 className="font-display text-2xl text-deep">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <span
              className={`mt-0.5 shrink-0 font-semibold ${tone === "yes" ? "text-primary" : "text-coral"}`}
              aria-hidden="true"
            >
              {tone === "yes" ? "✓" : "✕"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BookButton({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/contact"
      className={`inline-flex items-center justify-center rounded-full bg-coral px-7 py-3 text-sm font-semibold text-coral-foreground transition-transform hover:scale-105 ${className}`}
    >
      Jetzt buchen
    </Link>
  );
}

function WhatsAppButton({ tour, className = "" }: { tour: Tour; className?: string }) {
  return (
    <a
      href={whatsappLink(tour.title)}
      className={`inline-flex items-center justify-center rounded-full border border-primary-foreground/50 px-7 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10 ${className}`}
    >
      WhatsApp
    </a>
  );
}

function TourDetailPage() {
  const { tour } = Route.useLoaderData();
  const backTo = tour.region === "hurghada" ? "/hurghada" : "/marsa-alam";
  const backLabel =
    tour.region === "hurghada"
      ? "Zurück zu allen Ausflügen in Hurghada"
      : "Zurück zu allen Ausflügen in Marsa Alam";

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main>
        <section className="relative isolate overflow-hidden bg-deep">
          <img
            src={tour.img}
            alt={tour.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/55 via-deep/40 to-deep/70" />
          <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              {tour.region === "hurghada" ? "Ausflug ab Hurghada" : "Ausflug ab Marsa Alam"}
            </p>
            <h1 className="mt-6 font-display text-3xl leading-[1.12] text-deep-foreground sm:text-5xl">
              {tour.title}
            </h1>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="rounded-full bg-coral px-4 py-2 font-semibold text-coral-foreground">
                {tour.price}
                {tour.note ? ` · ${tour.note}` : ""}
              </span>
              <span className="rounded-full border border-deep-foreground/40 px-4 py-2 font-semibold text-deep-foreground">
                Dauer: {tour.duration}
              </span>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-5 py-10">
          <Link to={backTo} className="text-sm font-semibold text-coral hover:underline">
            ← {backLabel}
          </Link>
        </div>

        <section className="mx-auto max-w-5xl px-5 pb-6">
          <p className="text-base leading-relaxed text-muted-foreground">{tour.text}</p>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-10">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-coral">Programm</p>
            <h2 className="mt-3 font-display text-3xl text-deep">Ablauf des Ausflugs</h2>
            <p className="mt-3 text-sm font-semibold text-primary">Dauer: {tour.duration}</p>
            <ol className="mt-7 space-y-5">
              {tour.program.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand text-sm font-semibold text-deep">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-12">
          <div className="grid gap-6 md:grid-cols-2">
            <List title="Inklusive" items={tour.included} tone="yes" />
            <List title="Nicht inklusive" items={tour.notIncluded} tone="no" />
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 pb-20">
          <div className="rounded-[2rem] bg-primary px-8 py-14 text-center text-primary-foreground">
            <h2 className="font-display text-3xl sm:text-4xl">{tour.title} buchen</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85">
              Schreiben Sie uns auf WhatsApp oder rufen Sie an – wir bestätigen Ihren Termin und
              holen Sie direkt am Hotel ab. Preis: {tour.price}
              {tour.note ? ` (${tour.note})` : ""}.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <BookButton />
              <WhatsAppButton tour={tour} />
              <a
                href="tel:+201093118404"
                className="rounded-full border border-primary-foreground/50 px-7 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                {PHONE}
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
            <Link to="/hurghada" className="hover:underline">
              Hurghada
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
