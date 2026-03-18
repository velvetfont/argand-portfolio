"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function Nav() {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const mainLinks = [
    { key: "nav.work",     href: "/work" },
    { key: "nav.services", href: "/services" },
    { key: "nav.contact",  href: "/contact" },
  ];

  const dimLinks = [
    { key: "nav.ailab", href: "/ai-lab" },
    { key: "nav.blog",  href: "/blog" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{ borderBottom: "1px solid rgba(245,158,11,0.08)", backgroundColor: "rgba(7,8,10,0.85)" }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="nav-logo-cursor font-mono text-base font-bold tracking-widest"
          style={{ color: "#f59e0b", fontFamily: "var(--font-space-mono), monospace" }}
          onClick={() => setMenuOpen(false)}
        >
          ARGAND
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {mainLinks.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="font-mono text-sm tracking-wider transition-colors hover:text-amber-400"
              style={{
                color: "rgba(224,230,236,0.7)",
                fontFamily: "var(--font-space-mono), monospace",
              }}
            >
              // {t(key)}
            </Link>
          ))}
          {dimLinks.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="font-mono text-sm tracking-wider transition-colors hover:text-amber-400"
              style={{
                color: "rgba(224,230,236,0.25)",
                fontFamily: "var(--font-space-mono), monospace",
              }}
            >
              // {t(key)}
            </Link>
          ))}

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="font-mono text-sm tracking-wider transition-colors hover:text-amber-400"
            style={{
              color: "#f59e0b",
              fontFamily: "var(--font-space-mono), monospace",
              border: "1px solid rgba(245,158,11,0.3)",
              padding: "4px 12px",
              borderRadius: "2px",
            }}
          >
            {t("nav.toggle")}
          </button>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="font-mono text-sm tracking-wider"
            style={{
              color: "#f59e0b",
              fontFamily: "var(--font-space-mono), monospace",
              border: "1px solid rgba(245,158,11,0.3)",
              padding: "4px 12px",
              borderRadius: "2px",
            }}
          >
            {t("nav.toggle")}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex flex-col gap-[5px] p-1"
          >
            <span
              className="block h-px w-5 transition-all"
              style={{
                backgroundColor: "#f59e0b",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              className="block h-px w-5 transition-all"
              style={{
                backgroundColor: "#f59e0b",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-px w-5 transition-all"
              style={{
                backgroundColor: "#f59e0b",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="border-t px-6 py-6 md:hidden"
          style={{
            borderColor: "rgba(245,158,11,0.08)",
            backgroundColor: "rgba(7,8,10,0.97)",
          }}
        >
          <div className="flex flex-col gap-6">
            {mainLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="font-mono text-base tracking-wider"
                style={{
                  color: "rgba(224,230,236,0.8)",
                  fontFamily: "var(--font-space-mono), monospace",
                }}
                onClick={() => setMenuOpen(false)}
              >
                // {t(key)}
              </Link>
            ))}
            {dimLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="font-mono text-base tracking-wider"
                style={{
                  color: "rgba(224,230,236,0.25)",
                  fontFamily: "var(--font-space-mono), monospace",
                }}
                onClick={() => setMenuOpen(false)}
              >
                // {t(key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}