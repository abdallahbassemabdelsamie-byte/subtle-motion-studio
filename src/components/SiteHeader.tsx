import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const LOGO = "/images/cropped-getyour-guide-scaled.png";

const LINKS = [
  { label: "Startseite", to: "/" },
  { label: "Hurghada", to: "/hurghada" },
  { label: "Marsa Alam", to: "/marsa-alam" },
  { label: "Über uns", to: "/about" },
  { label: "Kontakt", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const linkClass = "text-sm font-medium text-muted-foreground hover:text-primary";
  const activeClass = "text-sm font-medium text-primary";

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={LOGO}
            alt="Red Sea GetYourGuide Logo"
            className="h-11 w-auto"
            width={140}
            height={44}
          />
          <span className="hidden font-display text-lg leading-none text-deep sm:block">
            Red Sea
            <br />
            GetYourGuide
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: activeClass }}
              inactiveProps={{ className: linkClass }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-coral-foreground shadow-sm transition-transform hover:scale-105 sm:block"
          >
            Jetzt buchen
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            className="rounded-full border border-border p-2.5 text-deep lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                activeProps={{
                  className: "rounded-xl bg-secondary px-4 py-3 text-sm font-semibold text-primary",
                }}
                inactiveProps={{
                  className:
                    "rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-primary",
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-coral px-5 py-3 text-center text-sm font-semibold text-coral-foreground"
              onClick={() => setOpen(false)}
            >
              Jetzt buchen
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
