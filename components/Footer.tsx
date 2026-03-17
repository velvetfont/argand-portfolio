"use client";

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="mt-auto w-full px-6 py-8"
      style={{ borderTop: "1px solid rgba(245,158,11,0.08)" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p
          className="text-center text-xs sm:text-left"
          style={{
            color: "rgba(224,230,236,0.35)",
            fontFamily: "var(--font-space-mono), monospace",
          }}
        >
          {t("footer.copy")}
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/velvetfont"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs transition-colors hover:text-amber-400"
            style={{
              color: "rgba(224,230,236,0.35)",
              fontFamily: "var(--font-space-mono), monospace",
            }}
          >
            // GitHub
          </a>
          <a
            href="mailto:gabo@argand.mx"
            className="font-mono text-xs transition-colors hover:text-amber-400"
            style={{
              color: "rgba(224,230,236,0.35)",
              fontFamily: "var(--font-space-mono), monospace",
            }}
          >
            // Email
          </a>
        </div>
      </div>
    </footer>
  );
}
