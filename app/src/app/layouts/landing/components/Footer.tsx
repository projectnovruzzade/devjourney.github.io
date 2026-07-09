const primaryLinks = [
  { href: "#home", label: "Ana Səhifə" },
  { href: "#about", label: "Haqqımızda" },
  { href: "#discover", label: "Kəşf et" },
  { href: "#partners", label: "Partnyorlar" },
  { href: "#contact", label: "Əlaqə" },
] as const;

const extraLinks = [
  { href: "#about", label: "Komanda" },
  { href: "#partners", label: "Dəstəkçilər" },
] as const;

export function Footer() {
  return (
    <footer className="mt-28 w-full bg-[#124076] px-4 py-8 shadow-[0_24px_70px_-42px_rgba(18,64,118,0.65)] sm:px-5 lg:px-6">
      <div className="mx-auto grid max-w-[1440px] gap-8 p-2 sm:p-4 lg:grid-cols-[1.15fr_1fr] lg:p-6">
        <div>
          <a
            href="#home"
            className="inline-flex cursor-pointer items-center gap-3"
            aria-label="DevJourney home"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/18 bg-white/12 shadow-lg shadow-black/10">
              <img src="./assets/icon/logo.svg" alt="" aria-hidden="true" width={38} height={38} />
            </span>
            <span>
              <span className="block font-display text-2xl font-semibold leading-none text-[#CDFADB]">
                DevJourney
              </span>
              <span className="mt-1 block text-sm font-medium text-[#CDFADB]/78">
                Students, founders and ideas connect here.
              </span>
            </span>
          </a>
          <p className="mt-8 text-xs font-medium text-[#CDFADB]/68">
            {"\u00a9"} {new Date().getFullYear()} DevJourney. All rights reserved.
          </p>
        </div>

        <nav className="grid gap-8 sm:grid-cols-2" aria-label="Footer navigation">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FBA834]">
              Navigation
            </h2>
            <div className="mt-4 grid gap-3 text-sm font-semibold text-[#CDFADB]/84">
              {primaryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="cursor-pointer transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FBA834]">
              Platform
            </h2>
            <div className="mt-4 grid gap-3 text-sm font-semibold text-[#CDFADB]/84">
              {extraLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="cursor-pointer transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
}
