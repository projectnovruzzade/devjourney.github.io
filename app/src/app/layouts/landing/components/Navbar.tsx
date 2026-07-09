import { ArrowRight, LayoutGrid, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Ana Səhifə" },
  { href: "#about", label: "Haqqımızda" },
  { href: "#discover", label: "Kəşf et" },
  { href: "#partners", label: "Partnyorlar" },
  { href: "#contact", label: "Əlaqə" },
] as const;

const CTA_LABEL = "Səyahətə başla";
const LOGO_TXT = "Dev";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 761px)");
    const closeOnDesktop = () => {
      if (desktopQuery.matches) {
        setMenuOpen(false);
      }
    };

    closeOnDesktop();
    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a href="#home" className="site-header__brand" aria-label="DevJourney home">
          <span className="site-header__brand-text">{LOGO_TXT}Journey</span>
          <img
            src="./assets/icon/logo.svg"
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
            className="site-header__brand-logo"
          />
        </a>

        <nav className="site-header__nav" aria-label="Primary navigation">
          <ul className="site-header__nav-list">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="site-header__nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a href="#contact" className="site-header__cta">
            {CTA_LABEL}
          </a>
          <button
            type="button"
            className="site-header__menu-trigger"
            aria-label={menuOpen ? "Close navigation panel" : "Open navigation panel"}
            aria-controls="mobile-navigation-panel"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <LayoutGrid aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        className={`mobile-command ${menuOpen ? "mobile-command--open" : ""}`}
        id="mobile-navigation-panel"
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        <div className="mobile-command__panel" onClick={(event) => event.stopPropagation()}>
          <nav aria-label="Mobile navigation">
            <ul className="mobile-command__grid">
              {links.map((link, index) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="mobile-command__link"
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="#contact"
            className="mobile-command__cta"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            Səyahətə başla
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
