import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

const SITE = "https://redsea-getyourguide.com";
const LOGO = "/images/cropped-getyour-guide-scaled.png";
const OG_IMAGE = "/images/red-sea-getyourguide-2-scaled.jpg";
const OG_IMAGE_ABS = `${SITE}${OG_IMAGE}`;
const PHONE = "+20 109 311 8404";
const WHATSAPP = "https://api.whatsapp.com/send?phone=201080349037";

const TITLE = "Home - Red Sea GetYourGuide";
const DESCRIPTION =
  "Rotes Meer Optionale Ausflüge ab Hurghada und Marsa Alam mit deutscher Reiseleitung, Wir haben langjährige Erfahrung.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        property: "og:title",
        content:
          "Red Sea GetYourGuide - Rotes Meer Optionale Ausflüge ab Hurghada und Marsa Alam mit deutschem Guide",
      },
      {
        property: "og:description",
        content:
          "Wenn Sie auf der Suche nach dem perfekten Urlaub und Reisen mit unvergesslichen Erinnerungen sind, sind Sie bei uns genau richtig. Red Sea GetYourGuide Lassen Sie uns die besten Reisen für Sie planen.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "de_DE" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: OG_IMAGE_ABS },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE_ABS },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Red Sea GetYourGuide",
          description: DESCRIPTION,
          url: SITE,
          image: OG_IMAGE_ABS,
          telephone: PHONE,
          areaServed: ["Hurghada", "Marsa Alam", "Rotes Meer", "Ägypten"],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "4" },
        }),
      },
    ],
  }),
});

type Tour = {
  slug: string;
  title: string;
  text: string;
  img: string;
};

const FEATURED: Tour[] = [
  {
    slug: "tauchen-orange-bay-top-vip",
    title: "Tauchen + Orange Bay Top VIP",
    text: "Die Kombination aus Tauchgang am Riff und einem VIP-Tag auf der Orangeninsel.",
    img: "/images/222.jpg",
  },
  {
    slug: "privates-schnellboot-vip",
    title: "Privates Schnellboot in Hurghada",
    text: "Die Tour beinhaltet ein luxuriöses Mittagessen auf einer der vom Kunden gewählten Inseln (Paradise oder Orange) sowie Getränke, Snacks und Obst auf dem Schnellboot mit offenem Buffet.",
    img: "/images/prywatnej-lodzi-motorowej-w-hurghadzie11-1.jpg",
  },
  {
    slug: "stadtrundfahrt-hurghada",
    title: "Besichtigung Hurghada – Stadtrundfahrt",
    text: "Wir haben das Beste und Herausragendste für 8 Stunden am Stück, mit dem stärksten Angebot in Hurghada. Es gibt keine andere Tour wie die, die wir auf #redseaGetYourGuide anbieten.",
    img: "/images/hurghada-city-tour9.jpg",
  },
];

const HURGHADA: Tour[] = [
  {
    slug: "delfinhaus-vip",
    title: "Hurghada-Delfinhaus",
    text: "Erleben Sie die Freude am Schwimmen mit so schönen Säugetieren wie Delfinen, die wunderbare und unvergessliche Erinnerungen bereiten.",
    img: "/images/333.jpg",
  },
  {
    slug: "tauchausflug-hurghada",
    title: "Tauchen in Hurghada",
    text: "Hurghada ist eine großartige Wahl für Menschen, die gerne tauchen. Heißes Wasser, atemberaubende Ausblicke und erschwingliche Preise.",
    img: "/images/222.jpg",
  },
  {
    slug: "glasboot",
    title: "Glasboottouren Hurghada",
    text: "Eine einzigartige Gelegenheit, die Unterwasserwelt zu genießen, ohne nass zu werden. Sehr gut für Familien mit Kindern – 3 wunderschöne Stunden.",
    img: "/images/glass.jpg",
  },
];

const MARSA: Tour[] = [
  {
    slug: "marsa-mubarak",
    title: "Tour nach Marsa Mubarak",
    text: "Schwimmen Sie mit großen Schildkröten und Dugongs und entdecken Sie wunderschöne Korallenriffe in Marsa Mubarak.",
    img: "/images/turtle-beach2.jpg",
  },
  {
    slug: "sataya-delfinriff",
    title: "Sataya – Delfinriff",
    text: "Schwimmen Sie mit einer ganzen Delfinfamilie – mehr als 50 Delfine – im türkisfarbenen Wasser des Roten Meeres.",
    img: "/images/dolphin-reef4.jpg",
  },
  {
    slug: "hamata-inseln",
    title: "Hamata-Inseln",
    text: "Die Qulaan-Inseln (Hamata) gelten als die ägyptischen Malediven – atemberaubende Strände und Mangroven.",
    img: "/images/19.jpg",
  },
];

const REVIEWS = [
  {
    name: "Dagmara Rycharska",
    text: "Ich hatte 3 Reisen mit Red Sea GetYourGuide. Ich hatte wundervolle Momente in Luxor. Die Reiseleiter sind wundervolle Menschen, die uns ein Gefühl der Sicherheit gaben. Die Reise war sensationell.",
    img: "/images/whatsapp-image-2022-01-12-at-6.56.28-pm.jpeg",
  },
  {
    name: "Karolina Górska",
    text: "Der Besuch in Ägypten war eine der schönsten Erfahrungen meines Lebens. Dank des gesamten Red Sea GetYourGuide-Teams konnte ich wundervolle Momente erleben.",
    img: "/images/whatsapp-image-2022-01-12-at-6.56.27-pm.jpeg",
  },
  {
    name: "Mirosława Gnich",
    text: "Es war eine fantastische Zeit. Der Guide war sehr hilfsbereit, er beantwortete unsere Fragen sofort. Und Betreuung vor Ort auf höchstem Niveau. Zu 100 % weiterempfehlen.",
    img: "/images/whatsapp-image-2022-01-12-at-7.03.14-pm.jpeg",
  },
  {
    name: "Agata Gapińska",
    text: "Von Marsa Alam bis nach Kairo waren wir von der gesamten Reise überwältigt – Menschen, Orte und Preise! Wir freuen uns auf einen weiteren Urlaub mit Ihnen.",
    img: "/images/whatsapp-image-2022-01-12-at-7.00.46-pm.jpeg",
  },
];

function TourCard({ tour, tall = false }: { tour: Tour; tall?: boolean }) {
  return (
    <Link
      to="/tour/$slug"
      params={{ slug: tour.slug }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className={`overflow-hidden ${tall ? "h-72" : "h-56"}`}>
        <img
          src={tour.img}
          alt={tour.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl leading-tight text-deep">{tour.title}</h3>
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

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-deep">
          <img
            src={OG_IMAGE}
            alt="Das Rote Meer bei Hurghada"
            className="absolute inset-0 h-full w-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/25 via-deep/10 to-deep/35" />

          <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:py-36">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              Hurghada · Marsa Alam · Rotes Meer
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] text-deep-foreground sm:text-6xl">
              Entdecken Sie das Rote Meer: Optionale Ausflüge ab Hurghada und Marsa Alam mit
              erfahrener deutschsprachiger Reiseleitung
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-deep-foreground/80">
              Wenn Sie auf der Suche nach dem perfekten Urlaub und Reisen mit unvergesslichen
              Erinnerungen sind, sind Sie bei uns genau richtig (Red Sea GetYourGuide). Lassen Sie
              uns die besten Reisen für Sie planen.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/hurghada"
                className="rounded-full bg-coral px-7 py-3 text-sm font-semibold text-coral-foreground transition-transform hover:scale-105"
              >
                Alle Touren ansehen
              </Link>
              <a
                href={WHATSAPP}
                className="rounded-full border border-deep-foreground/40 px-7 py-3 text-sm font-semibold text-deep-foreground transition-colors hover:bg-deep-foreground/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 md:grid-cols-2">
          <article className="rounded-3xl bg-sand p-8">
            <h2 className="font-display text-2xl text-deep">Über uns</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Red Sea GetYourGuide – Ihr erfahrenes Team am Roten Meer. Wir organisieren optionale
              Ausflüge ab Hurghada und Marsa Alam mit deutschsprachiger Reiseleitung und kümmern
              uns um alles, vom Hoteltransfer bis zum Mittagessen an Bord.
            </p>
            <Link
              to="/about"
              className="mt-5 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-coral"
            >
              Mehr über uns →
            </Link>
          </article>
        </section>

        {/* Contact */}
        <section className="mx-auto max-w-7xl px-5 pb-16">
          <div className="flex flex-col items-center gap-4 rounded-3xl bg-sand p-8 text-center">
            <p className="font-display text-xl text-deep sm:text-2xl">Fragen zu unseren Touren?</p>
            <p className="max-w-xl text-sm text-muted-foreground">
              Wir helfen Ihnen gerne bei der Auswahl des passenden Ausflugs und erstellen Ihnen ein individuelles Angebot.
            </p>
            <Link
              to="/contact"
              className="rounded-full bg-coral px-7 py-3 text-sm font-semibold text-coral-foreground transition-transform hover:scale-105"
            >
              Kontaktieren Sie uns
            </Link>
          </div>
        </section>

        {/* Featured */}
        <section className="mx-auto max-w-7xl px-5 pb-16">
          <SectionTitle
            eyebrow="Beliebteste Ausflüge"
            title="Abenteuer und erstaunliche Erlebnisse – alles in unseren besten Touren"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FEATURED.map((tour, i) => (
              <TourCard key={tour.title} tour={tour} tall={i % 3 === 0} />
            ))}
          </div>
        </section>

        {/* Hurghada */}
        <section className="bg-deep py-20">
          <div className="mx-auto max-w-7xl px-5">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                  Hurghada-Touren
                </p>
                <h2 className="mt-3 font-display text-3xl leading-tight text-deep-foreground sm:text-4xl">
                  Optionale Ausflüge ab Hurghada
                </h2>
              </div>
              <Link
                to="/hurghada"
                className="rounded-full border border-deep-foreground/40 px-6 py-2.5 text-sm font-semibold text-deep-foreground transition-colors hover:bg-deep-foreground/10"
              >
                Alle Touren ansehen
              </Link>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-deep-foreground/80">
              Genießen Sie Hurghada-Touren: Inselausflüge nach Orange Bay und Paradise Island,
              Schnorcheln am Riff, Tagesausflüge nach Luxor und Kairo, Wüstensafaris und vieles
              mehr – mit Red Sea GetYourGuide. Wir helfen Ihnen, das passende Erlebnis zu finden
              und Ihren Urlaub unvergesslich zu machen.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {HURGHADA.map((tour) => (
                <TourCard key={tour.title} tour={tour} />
              ))}
            </div>
          </div>
        </section>

        {/* Marsa Alam */}
        <section className="mx-auto max-w-7xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="Marsa Alam" title="Optionale Ausflüge ab Marsa Alam" />
            <Link
              to="/marsa-alam"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Alle Touren ansehen
            </Link>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Genießen Sie Marsa Alam-Touren: Haitauchen, Touren nach Kairo und Assuan, Abu Hamata,
            Marsa Mubarak und viele mehr – mit Red Sea GetYourGuide. Wir helfen Ihnen, die Reise zu
            nutzen und Ihre Bedürfnisse zu erfüllen, und garantieren viel Spaß.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {MARSA.map((tour) => (
              <TourCard key={tour.title} tour={tour} />
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-sand py-20">
          <div className="mx-auto max-w-7xl px-5">
            <SectionTitle eyebrow="Bewertet mit 5 von 5" title="Was unsere Kunden sagen" />
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Wir sind stolz darauf, unsere Kunden zu betreuen, und unsere Erfahrung macht Sie
              glücklich. Lesen Sie, was sie sagen.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {REVIEWS.map((review) => (
                <figure
                  key={review.name}
                  className="flex h-full flex-col justify-between rounded-3xl bg-card p-6 shadow-sm"
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">“{review.text}”</p>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <img
                      src={review.img}
                      alt={review.name}
                      loading="lazy"
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-deep">{review.name}</p>
                      <p className="text-xs text-coral">★★★★★</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 py-20">
          <div className="rounded-[2rem] bg-primary px-8 py-14 text-center text-primary-foreground">
            <h2 className="font-display text-3xl sm:text-4xl">Buchen Sie jetzt Ihre Reise</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85">
              Schreiben Sie uns auf WhatsApp oder rufen Sie an – wir planen Ihren Ausflug ab
              Hurghada oder Marsa Alam mit deutschsprachiger Reiseleitung.
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
              <a
                href="https://m.me/redseaworldtravel.egypt"
                className="rounded-full border border-primary-foreground/50 px-7 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                Messenger
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-deep py-12 text-deep-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center">
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
          <div className="flex flex-wrap justify-center gap-5 text-sm text-deep-foreground/75">
            <a
              href="https://www.facebook.com/redseaworldtravel.egypt"
              className="hover:text-accent"
            >
              Facebook
            </a>
            <a href="https://www.instagram.com/" className="hover:text-accent">
              Instagram
            </a>
            <a href={WHATSAPP} className="hover:text-accent">
              WhatsApp
            </a>
            <a href="https://telegram.me/" className="hover:text-accent">
              Telegram
            </a>
          </div>
          <p className="text-xs text-deep-foreground/50">
            © {new Date().getFullYear()} Red Sea GetYourGuide
          </p>
        </div>
      </footer>
    </div>
  );
}
