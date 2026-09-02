import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { MapPin, Phone, Mail } from "lucide-react";

const LOGO = "/images/cropped-getyour-guide-scaled.png";
const PHONE = "+20 109 311 8404";
const WHATSAPP = "https://api.whatsapp.com/send?phone=201080349037";
const EMAIL = "info@redsea-getyourguide.com";

const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/redseaworldtravel.egypt/" },
  { label: "Instagram", href: "https://www.instagram.com/redseaworld.travel/" },
  { label: "TikTok", href: "https://www.tiktok.com/@red.sea.world.travel" },
];

const TITLE = "Kontakt - Red Sea GetYourGuide";
const DESCRIPTION =
  "Kontakt zu Red Sea GetYourGuide: Büro in Hurghada, Telefon +20 109 311 8404, E-Mail info@redsea-getyourguide.com. Wir beantworten Ihre Fragen zu Ausflügen ab Hurghada und Marsa Alam.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
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
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Name: ${name}%0AEmail: ${email}%0ABetreff: ${subject}%0ANachricht: ${message}`;
    window.location.href = `https://api.whatsapp.com/send?phone=201080349037&text=${text}`;
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-deep">
          <div className="absolute inset-0 bg-gradient-to-b from-deep/80 via-deep/70 to-deep/90" />
          <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:py-32">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              Kontakt
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.08] text-deep-foreground sm:text-5xl">
              Kontaktiere uns
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-deep-foreground/80">
              Möchten Sie Fragen zu unseren Preisen, aktuellen Angeboten und Fragen
              stellen, bei denen wir Ihnen helfen können? Rufen Sie uns an oder senden Sie
              Ihre Fragen über das untenstehende Formular.
            </p>
          </div>
        </section>

        {/* Info + Form */}
        <section className="mx-auto max-w-7xl px-5 py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Info card */}
            <div className="flex flex-col gap-6">
              <article className="rounded-3xl bg-sand p-8">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-coral" />
                  <h2 className="font-display text-2xl text-deep">Büro</h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Khaligeya Resort, Mamsha Street, Office No1, Hurghada, Red Sea, Egypt
                </p>
              </article>

              <article className="rounded-3xl bg-secondary p-8">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-coral" />
                  <h2 className="font-display text-2xl text-deep">Kontakt</h2>
                </div>
                <div className="mt-4 flex flex-col gap-2 text-sm leading-relaxed">
                  <a href="tel:+201093118404" className="font-medium text-deep hover:text-coral">
                    {PHONE}
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-2 font-medium text-deep hover:text-coral"
                  >
                    <Mail className="h-4 w-4 text-coral" />
                    {EMAIL}
                  </a>
                </div>
              </article>

              <article className="rounded-3xl bg-card p-8 shadow-sm">
                <h2 className="font-display text-2xl text-deep">Folgen Sie uns</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {SOCIAL.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-deep transition-colors hover:bg-coral hover:text-coral-foreground"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </article>
            </div>

            {/* Form */}
            <article className="rounded-3xl bg-card p-8 shadow-sm">
              <h2 className="font-display text-2xl text-deep">Schreiben Sie uns</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Wir antworten Ihnen schnellstmöglich über WhatsApp.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-deep">
                    Ihren Namen <span className="text-coral">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-coral"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-deep">
                    Email <span className="text-coral">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-coral"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-medium text-deep">
                    Thema <span className="text-coral">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-coral"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-deep">
                    Nachricht <span className="text-coral">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-coral"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-coral px-7 py-3 text-sm font-semibold text-coral-foreground transition-transform hover:scale-105"
                >
                  Einreichen
                </button>
              </form>
            </article>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 py-16">
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
            <a href="https://www.facebook.com/redseaworldtravel.egypt" className="hover:text-accent">
              Facebook
            </a>
            <a href="https://www.instagram.com/redseaworld.travel/" className="hover:text-accent">
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
