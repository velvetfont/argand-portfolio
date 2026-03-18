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
      style={{ borderBottom: "1px solid rgba(245,158,11,0.08)", backgroundColor: "rgba(7,8,10,0.9)" }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">

        {/* Logo with glitch effect */}
        <Link
          href="/"
          className="glitch font-mono text-lg font-bold tracking-widest"


          data-text="ARGAND"
          style={{ color: "#f59e0b", fontFamily: "var(--font-space-mono), monospace" }}
          onClick={() => setMenuOpen(false)}
        >
ARGAND<span style={{ animation: "blink 1s step-end infinite", color: "#f59e0b" }}>_</span>
</Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-10 md:flex">
          {mainLinks.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="font-mono text-sm tracking-wider transition-all duration-200 hover:text-amber-400 hover:tracking-widest"
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
              className="font-mono text-sm tracking-wider transition-all duration-200 hover:text-cyan-400"
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
            className="font-mono text-sm tracking-wider transition-all duration-200 hover:border-cyan-400 hover:text-cyan-400"
            style={{
              color: "#f59e0b",
              fontFamily: "var(--font-space-mono), monospace",
              border: "1px solid rgba(245,158,11,0.3)",
              padding: "5px 14px",
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
              padding: "5px 14px",
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
              className="block h-px w-6 transition-all duration-300"
              style={{
                backgroundColor: "#f59e0b",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              className="block h-px w-6 transition-all duration-300"
              style={{
                backgroundColor: "#f59e0b",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-px w-6 transition-all duration-300"
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
          className="border-t px-6 py-8 md:hidden"
          style={{
            borderColor: "rgba(245,158,11,0.08)",
            backgroundColor: "rgba(7,8,10,0.97)",
          }}
        >
          <div className="flex flex-col gap-8">
            {mainLinks.map(({ key, href }, i) => (
              <Link
                key={key}
                href={href}
                className="font-mono text-base tracking-wider transition-colors hover:text-amber-400"
                style={{
                  color: "rgba(224,230,236,0.8)",
                  fontFamily: "var(--font-space-mono), monospace",
                  animationDelay: `${i * 0.05}s`,
                }}
                onClick={() => setMenuOpen(false)}
              >
                // {t(key)}
              </Link>
            ))}
            {dimLinks.map(({ key, href }, i) => (
              <Link
                key={key}
                href={href}
                className="font-mono text-base tracking-wider transition-colors hover:text-cyan-400"
                style={{
                  color: "rgba(224,230,236,0.25)",
                  fontFamily: "var(--font-space-mono), monospace",
                  animationDelay: `${(i + mainLinks.length) * 0.05}s`,
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