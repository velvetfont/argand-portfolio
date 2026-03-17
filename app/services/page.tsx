"use client";

import { useLanguage } from "@/lib/i18n";

const serviceKeys = [
  { n: "01", accent: "#f59e0b", accentDim: "rgba(245,158,11,0.5)" },
  { n: "02", accent: "#06b6d4", accentDim: "rgba(6,182,212,0.5)" },
  { n: "03", accent: "#f59e0b", accentDim: "rgba(245,158,11,0.5)" },
];

export default function ServicesPage() {
  const { t, lang } = useLanguage();

  return (
    <main className="mx-auto max-w-6xl px-6 pt-32 pb-24">

      {/* ── Page header ────────────────────────────────────────────── */}
      <div className="mb-16">
        <p
          className="mb-2 font-mono text-xs tracking-widest"
          style={{ color: "rgba(245,158,11,0.5)", fontFamily: "var(--font-space-mono), monospace" }}
        >
          // {lang === "es" ? "Servicios" : "Services"}
        </p>
        <h1
          className="mb-4 text-4xl font-semibold tracking-tight md:text-6xl"
          style={{ color: "#e0e6ec" }}
        >
          {t("services.headline")}{" "}
          <span style={{ WebkitTextStroke: "1px rgba(245,158,11,0.5)", color: "transparent" }}>
            {t("services.headline.verb")}
          </span>
        </h1>
        <p
          className="max-w-xl text-sm leading-relaxed"
          style={{ color: "rgba(224,230,236,0.4)" }}
        >
          {t("services.intro")}
        </p>
      </div>

      {/* ── Infraestructura digital definition ─────────────────────── */}
      <div
        className="mb-20 p-8"
        style={{
          backgroundColor: "#0b0d10",
          border: "1px solid rgba(245,158,11,0.08)",
          borderLeft: "3px solid rgba(245,158,11,0.4)",
          borderRadius: "2px",
        }}
      >
        <p
          className="mb-2 font-mono text-xs tracking-widest"
          style={{ color: "rgba(245,158,11,0.5)", fontFamily: "var(--font-space-mono), monospace" }}
        >
          // Infraestructura digital
        </p>
        <p
          className="max-w-3xl leading-relaxed md:text-lg"
          style={{ color: "rgba(224,230,236,0.6)" }}
        >
          {t("infra.definition")}
        </p>
      </div>

      {/* ── Service cards ───────────────────────────────────────────── */}
      <div className="grid gap-8 md:grid-cols-3">
        {serviceKeys.map(({ n, accent, accentDim }) => (
          <div
            key={n}
            className="service-bar flex flex-col p-7"
            style={{
              backgroundColor: "#0b0d10",
              border: "1px solid rgba(245,158,11,0.08)",
              borderTop: `3px solid ${accent}`,
              borderRadius: "2px",
            }}
          >
            <p
              className="mb-3 font-mono text-xs"
              style={{ color: accentDim, fontFamily: "var(--font-space-mono), monospace" }}
            >
              {t(`services.${n}.number`)}
            </p>
            <h2
              className="mb-4 text-xl font-semibold"
              style={{ color: accent }}
            >
              {t(`services.${n}.title`)}
            </h2>
            <p
              className="mb-6 text-sm leading-relaxed"
              style={{ color: "rgba(224,230,236,0.55)" }}
            >
              {t(`services.${n}.body`)}
            </p>
            <ul className="mt-auto space-y-2">
              {t(`services.${n}.bullets`)
                .split("\n")
                .map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 font-mono text-xs"
                    style={{ color: "rgba(224,230,236,0.35)", fontFamily: "var(--font-space-mono), monospace" }}
                  >
                    <span style={{ color: accentDim, flexShrink: 0 }}>→</span>
                    {b}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom CTA ──────────────────────────────────────────────── */}
      <div
        className="mt-20 flex flex-col items-center gap-6 py-16 text-center"
        style={{ borderTop: "1px solid rgba(245,158,11,0.08)" }}
      >
        <h2
          className="text-2xl font-semibold tracking-tight md:text-3xl"
          style={{ color: "#e0e6ec" }}
        >
          {lang === "es" ? (
            <>Hablemos de tu <span style={{ WebkitTextStroke: "1px rgba(245,158,11,0.5)", color: "transparent" }}>proyecto.</span></>
          ) : (
            <>{"Let's talk about your"} <span style={{ WebkitTextStroke: "1px rgba(245,158,11,0.5)", color: "transparent" }}>project.</span></>
          )}
        </h2>
        <a
          href="/contact"
          className="font-mono text-sm transition-opacity hover:opacity-75"
          style={{
            color: "#07080a",
            backgroundColor: "#f59e0b",
            padding: "12px 28px",
            borderRadius: "2px",
            fontFamily: "var(--font-space-mono), monospace",
          }}
        >
          {t("cta.button")}
        </a>
      </div>
    </main>
  );
}
