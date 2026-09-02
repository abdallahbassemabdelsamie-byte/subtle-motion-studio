import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

const LOGO = "/images/cropped-getyour-guide-scaled.png";
const HERO = "/images/red-sea-getyourguide-2-scaled.jpg";
const PHONE = "+20 109 311 8404";
const WHATSAPP = "https://api.whatsapp.com/send?phone=201080349037";

const TITLE = "Über uns - Red Sea GetYourGuide";
const DESCRIPTION =
  "Lernen Sie Red Sea GetYourGuide kennen: optionale Ausflüge ab Hurghada und Marsa Alam mit erfahrener deutschsprachiger Reiseleitung und langjähriger Erfahrung am Roten Meer.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
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
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const VALUES = [
  {
    title: "Deutschsprachige Reiseleitung",
    text: "Alle unsere Ausflüge werden von erfahrenen deutschsprachigen Guides begleitet – keine Sprachbarriere, keine Missverständnisse.",
  },
  {
    title: "Langjährige Erfahrung",
    text: "Wir kennen das Rote Meer, Hurghada und Marsa Alam seit Jahren und wissen genau, welche Erlebnisse unsere Gäste begeistern.",
  },
  {
    title: "Persönliche Betreuung",
    text: "Von der Buchung bis zur Rückkehr ins Hotel sind wir für Sie da – per WhatsApp, Telefon oder persönlich vor Ort.",
  },
  {
    title: "Faire Preise",
    text: "Beste Touren zu erschwinglichen Preisen, ohne versteckte Kosten. Sie zahlen für unvergessliche Erinnerungen – nichts sonst.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-deep">
          <img
            src={HERO}
            alt="Das Team von Red Sea GetYourGuide am Roten Meer"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/30 via-deep/15 to-deep/45" />
          <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:py-32">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              Über uns
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] text-deep-foreground sm:text-5xl">
              Red Sea GetYourGuide – Ihr Team am Roten Meer
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-deep-foreground/85">
              Wir haben langjährige Erfahrung und planen für Sie die besten Ausflüge ab Hurghada
              und Marsa Alam – mit erfahrener deutschsprachiger Reiseleitung.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="font-display text-3xl leading-tight text-deep">Wer wir sind</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Red Sea GetYourGuide ist ein erfahrenes Reiseunternehmen am Roten Meer. Wir
              organisieren optionale Ausflüge ab Hurghada und Marsa Alam – von Bootstouren zu den
              schönsten Inseln wie Orange Bay, Paradise Island und den Hamata-Inseln über
              Schnorchel- und Tauchausflüge bis hin zu Wüstensafaris, Stadtrundfahrten und
              Tagesreisen nach Kairo, Luxor und Assuan.
            </p>
            <p>
              Was uns besonders macht: Alle unsere Touren werden mit deutschsprachiger Reiseleitung
              durchgeführt. Sie können sich entspannen und den Urlaub genießen – wir kümmern uns um
              alles andere, vom Hoteltransfer bis zum Mittagessen an Bord.
            </p>
            <p>
              Wenn Sie auf der Suche nach dem perfekten Urlaub und Reisen mit unvergesslichen
              Erinnerungen sind, sind Sie bei uns genau richtig. Lassen Sie uns die besten Reisen
              für Sie planen.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="bg-sand py-20">
          <div className="mx-auto max-w-7xl px-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-coral">
              Warum mit uns
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-deep sm:text-4xl">
              Das können Sie von uns erwarten
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((value) => (
                <article key={value.title} className="rounded-3xl bg-card p-6 shadow-sm">
                  <h3 className="font-display text-xl leading-tight text-deep">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 py-20">
          <div className="rounded-[2rem] bg-primary px-8 py-14 text-center text-primary-foreground">
            <h2 className="font-display text-3xl sm:text-4xl">Lernen Sie uns kennen</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85">
              Schreiben Sie uns auf WhatsApp oder rufen Sie an – wir beantworten Ihre Fragen und
              planen Ihren perfekten Ausflug ab Hurghada oder Marsa Alam.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WHATSAPP}
                className="rounded-full bg-coral px-7 py-3 text-sm font-semibold text-coral-foreground transition-transform hover:scale-105"
              >
                WhatsApp
              </a>
              <a
                href={`tel:+201093118404`}
                className="rounded-full border border-primary-foreground/50 px-7 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                {PHONE}
              </a>
              <Link
                to="/hurghada"
                className="rounded-full border border-primary-foreground/50 px-7 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                Touren ansehen
              </Link>
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
