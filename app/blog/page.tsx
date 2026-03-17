"use client";

import { useLanguage } from "@/lib/i18n";

export default function BlogPage() {
  const { t } = useLanguage();

  return (
    <main className="flex min-h-screen items-center justify-center px-6 pt-16">
      <div className="max-w-xl text-center">
        <p
          className="mb-6 font-mono text-xs tracking-widest"
          style={{ color: "rgba(245,158,11,0.5)", fontFamily: "var(--font-space-mono), monospace" }}
        >
          {t("blog.tag")}
        </p>
        <h1
          className="mb-8 text-4xl font-semibold tracking-tight md:text-6xl"
          style={{ color: "#e0e6ec" }}
        >
          <span style={{ WebkitTextStroke: "1px rgba(245,158,11,0.5)", color: "transparent" }}>
            Blog.
          </span>
        </h1>
        <p
          className="font-mono text-sm leading-relaxed"
          style={{ color: "rgba(245,158,11,0.4)", fontFamily: "var(--font-space-mono), monospace" }}
        >
          {t("blog.body")}
        </p>
        <div
          className="mx-auto mt-10 h-px w-16"
          style={{ backgroundColor: "rgba(245,158,11,0.15)" }}
        />
      </div>
    </main>
  );
}
