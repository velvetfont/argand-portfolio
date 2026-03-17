"use client";

import { useLanguage } from "@/lib/i18n";

export default function AILabPage() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen items-center justify-center px-6 pt-16">
      <div className="max-w-xl text-center">
        <p
          className="mb-6 font-mono text-xs tracking-widest"
          style={{ color: "rgba(6,182,212,0.6)", fontFamily: "var(--font-space-mono), monospace" }}
        >
          {t("ailab.tag")}
        </p>
        <h1
          className="mb-8 text-4xl font-semibold tracking-tight md:text-6xl"
          style={{ color: "#e0e6ec" }}
        >
          AI{" "}
          <span style={{ WebkitTextStroke: "1px rgba(6,182,212,0.5)", color: "transparent" }}>
            Lab.
          </span>
        </h1>
        <p
          className="font-mono text-sm leading-relaxed"
          style={{ color: "rgba(6,182,212,0.5)", fontFamily: "var(--font-space-mono), monospace" }}
        >
          {t("ailab.body")}
        </p>
        <div
          className="mx-auto mt-10 h-px w-16"
          style={{ backgroundColor: "rgba(6,182,212,0.2)" }}
        />
      </div>
    </main>
  );
}
