import AOS from "aos";
import { ArrowRight, ArrowUp, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import logo from "@/imports/stelcoreescs-1.svg";
import Seo from "@/components/Seo";

type NavSubItem = { label: string; to?: string };
type NavItem =
  | { label: string; to?: string; items?: never }
  | { label: string; to?: never; items: NavSubItem[] };

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Solutions",
    items: [
      { label: "Trade Enablement", to: "/trade-enablement" },
      { label: "Compliance", to: "/compliance" },
      { label: "Cross Border Express" },
      { label: "Ocean Freight" },
      { label: "Supply Chain" },
      { label: "Global Fulfilment" },
      { label: "Last Mile & Return Logistics" },
      { label: "Global Trade" },
    ],
  },
  { label: "Markets" },
  { label: "Industries" },
  { label: "My Shipment" },
  { label: "Contact Us", to: "/contact" },
];

function Navbar() {
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("pointerdown", handleClick);
    return () => document.removeEventListener("pointerdown", handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSolutionsOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-[74px] max-w-site items-center justify-between px-3">
        <Link to="/" onClick={() => setMobileOpen(false)}>
          <img src={logo} alt="Stelcore" className="h-[2.2rem] w-auto" />
        </Link>

        <nav ref={navRef} className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const hasMenu = Array.isArray(item.items);
            const isOpen = openMenu === item.label;
            const itemClass =
              "flex items-center gap-1.5 rounded-md px-3.5 py-2 text-[15px] font-medium text-navy";

            if (!hasMenu) {
              if (item.to) {
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`${itemClass} transition-colors hover:text-green`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <span key={item.label} className={itemClass}>
                  {item.label}
                </span>
              );
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenMenu(isOpen ? null : item.label)}
                  className={`${itemClass} transition-colors ${
                    isOpen ? "text-green" : "hover:text-green"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 text-slate transition-transform ${
                      isOpen ? "rotate-180 text-green" : ""
                    }`}
                  />
                </button>
                {isOpen && item.items && (
                  <div className="absolute left-0 top-full z-50 w-60 pt-2">
                    <div className="overflow-hidden rounded-xl border border-line bg-white p-1.5 shadow-[0_20px_45px_-20px_rgba(22,35,63,0.35)]">
                      {item.items.map((sub) =>
                        sub.to ? (
                          <Link
                            key={sub.label}
                            to={sub.to}
                            onClick={() => setOpenMenu(null)}
                            className="group/item flex items-center justify-between rounded-lg px-3.5 py-2.5 text-[15px] font-medium text-navy transition-colors hover:bg-mist hover:text-green"
                          >
                            <span>{sub.label}</span>
                            <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                          </Link>
                        ) : (
                          <span
                            key={sub.label}
                            className="flex items-center justify-between rounded-lg px-3.5 py-2.5 text-[15px] font-medium text-navy"
                          >
                            {sub.label}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919699418777"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy-700 sm:inline-flex"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors hover:bg-mist lg:hidden"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <>
          <button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 top-[74px] z-40 bg-navy/25 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed inset-x-0 top-[74px] z-50 max-h-[calc(100dvh-74px)] overflow-y-auto border-b border-line bg-white shadow-[0_24px_48px_-24px_rgba(22,35,63,0.35)] lg:hidden">
            <nav className="mx-auto max-w-site px-3 py-4">
              <ul className="space-y-1">
                {navItems.map((item) => {
                  if (!item.items) {
                    return (
                      <li key={item.label}>
                        {item.to ? (
                          <Link
                            to={item.to}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-3.5 py-3 text-[15px] font-medium text-navy transition-colors hover:bg-mist hover:text-green"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="block rounded-lg px-3.5 py-3 text-[15px] font-medium text-navy">
                            {item.label}
                          </span>
                        )}
                      </li>
                    );
                  }

                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        aria-expanded={mobileSolutionsOpen}
                        onClick={() => setMobileSolutionsOpen((open) => !open)}
                        className="flex w-full items-center justify-between rounded-lg px-3.5 py-3 text-[15px] font-medium text-navy transition-colors hover:bg-mist hover:text-green"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 text-slate transition-transform ${
                            mobileSolutionsOpen ? "rotate-180 text-green" : ""
                          }`}
                        />
                      </button>
                      {mobileSolutionsOpen && (
                        <ul className="mb-2 ml-3 space-y-1 border-l border-line pl-3">
                          {item.items.map((sub) => (
                            <li key={sub.label}>
                              {sub.to ? (
                                <Link
                                  to={sub.to}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-lg px-3 py-2.5 text-[14px] font-medium text-slate transition-colors hover:bg-mist hover:text-green"
                                >
                                  {sub.label}
                                </Link>
                              ) : (
                                <span className="block rounded-lg px-3 py-2.5 text-[14px] font-medium text-slate">
                                  {sub.label}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>

              <a
                href="https://wa.me/919699418777"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-navy-700 sm:hidden"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

function Footer() {
  const solutions =
    navItems.find((item) => item.label === "Solutions")?.items ?? [];

  const cols = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", to: "/" },
        { label: "About Us", to: "/about" },
        { label: "Markets" },
        { label: "Industries" },
        { label: "My Shipment" },
        { label: "Contact Us", to: "/contact" },
      ] as { label: string; to?: string }[],
    },
    {
      title: "Solutions",
      links: solutions.map((item) => ({ label: item.label, to: item.to })),
    },
  ];

  const policyLinks = [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms & Conditions", to: "/terms-and-conditions" },
    { label: "Refund Policy", to: "/refund-policy" },
    { label: "Shipping Policy", to: "/shipping-policy" },
  ];

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-site px-3 pt-14">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_repeat(3,1fr)]">
          <div>
            <img src={logo} alt="Stelcore" className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate">
              Your operating partner for global growth—compliance, supply chain,
              and expansion, handled.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-navy">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link
                        to={l.to}
                        className="text-sm text-slate transition-colors hover:text-green"
                      >
                        {l.label}
                      </Link>
                    ) : (
                      <span className="text-sm text-slate">{l.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-navy">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-slate">
              <li className="leading-relaxed">
                601, 90 Feet Rd, Kandivali, Gayatri Nagar, Thakur Complex,
                Kandivali East, Mumbai, Maharashtra 400101
              </li>
              <li>
                <a
                  href="mailto:support@stelcore.com"
                  className="transition-colors hover:text-green"
                >
                  support@stelcore.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919699418777"
                  className="transition-colors hover:text-green"
                >
                  +91 96994 18777
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line py-6 text-sm text-slate sm:flex-row">
          <p className="mb-0 shrink-0">© 2026 Stelcore. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:justify-end">
            {policyLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="transition-colors hover:text-green"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/919699418777"
      target="_blank"
      rel="noopener noreferrer"
      className="sticky-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true" fill="currentColor">
        <path d="M16.04 3C9.4 3 4 8.37 4 14.98c0 2.1.55 4.15 1.6 5.96L4 29l8.28-2.16a12.1 12.1 0 0 0 3.76.59h.01c6.63 0 12.02-5.37 12.02-11.98C28.07 8.37 22.67 3 16.04 3zm6.98 16.96c-.3.84-1.73 1.54-2.42 1.64-.62.09-1.4.13-2.26-.14-.52-.16-1.19-.38-2.05-.74-3.6-1.55-5.94-5.16-6.12-5.4-.18-.24-1.45-1.93-1.45-3.68s.92-2.61 1.25-2.97c.32-.35.71-.44.95-.44h.68c.22 0 .51-.08.8.61.3.72 1.02 2.5 1.11 2.68.09.18.15.4.03.64-.12.24-.18.39-.36.6-.18.21-.38.47-.54.63-.18.18-.36.37-.15.72.21.35.93 1.53 2 2.48 1.37 1.22 2.53 1.6 2.88 1.78.36.18.56.15.77-.09.21-.24.9-1.05 1.14-1.41.24-.35.48-.3.8-.18.33.12 2.07.98 2.42 1.15.36.18.59.27.68.42.09.15.09.86-.21 1.7z" />
      </svg>
    </a>
  );
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 320);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      className="scroll-to-top"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.2} />
    </button>
  );
}

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const id = window.setTimeout(() => AOS.refreshHard(), 50);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return (
    <div className="min-h-full bg-white">
      <Seo />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <StickyWhatsApp />
      <ScrollToTopButton />
    </div>
  );
}
