"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const { t, lang } = useLanguage();
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const infoItems = [
    { label: "// Location", value: t("contact.info.location") },
    { label: "// Languages", value: t("contact.info.langs") },
    { label: "// Response", value: t("contact.info.response") },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 pt-32 pb-24">

      {/* ── Page header ────────────────────────────────────────────── */}
      <div className="mb-16">
        <p
          className="mb-2 font-mono text-xs tracking-widest"
          style={{ color: "rgba(245,158,11,0.5)", fontFamily: "var(--font-space-mono), monospace" }}
        >
          // {lang === "es" ? "Contacto" : "Contact"}
        </p>
        <h1
          className="mb-4 text-4xl font-semibold tracking-tight md:text-6xl"
          style={{ color: "#e0e6ec" }}
        >
          {t("contact.headline.1")}{" "}
          <span style={{ WebkitTextStroke: "1px rgba(245,158,11,0.5)", color: "transparent" }}>
            {t("contact.headline.2")}
          </span>
        </h1>
        <p
          className="max-w-xl text-sm leading-relaxed"
          style={{ color: "rgba(224,230,236,0.4)" }}
        >
          {t("contact.intro")}
        </p>
      </div>

      {/* ── Two-column layout ───────────────────────────────────────── */}
      <div className="grid gap-16 md:grid-cols-2">

        {/* Form */}
        <div>
          {formState === "success" ? (
            <div
              className="flex flex-col gap-4 p-8"
              style={{
                backgroundColor: "#0b0d10",
                border: "1px solid rgba(245,158,11,0.15)",
                borderRadius: "2px",
              }}
            >
              <p
                className="font-mono text-xs tracking-widest"
                style={{ color: "#f59e0b", fontFamily: "var(--font-space-mono), monospace" }}
              >
                // OK
              </p>
              <p style={{ color: "#e0e6ec" }}>
                {lang === "es"
                  ? "Mensaje recibido. Te respondo en menos de 24 horas hábiles."
                  : "Message received. I'll reply within 24 business hours."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-mono text-xs tracking-wider"
                  style={{ color: "rgba(224,230,236,0.4)", fontFamily: "var(--font-space-mono), monospace" }}
                >
                  // {t("contact.form.name")}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  style={{
                    backgroundColor: "#0b0d10",
                    border: "1px solid rgba(245,158,11,0.12)",
                    borderRadius: "2px",
                    color: "#e0e6ec",
                    padding: "10px 14px",
                    fontSize: "0.9rem",
                    outline: "none",
                    width: "100%",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.4)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.12)"; }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-mono text-xs tracking-wider"
                  style={{ color: "rgba(224,230,236,0.4)", fontFamily: "var(--font-space-mono), monospace" }}
                >
                  // {t("contact.form.email")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  style={{
                    backgroundColor: "#0b0d10",
                    border: "1px solid rgba(245,158,11,0.12)",
                    borderRadius: "2px",
                    color: "#e0e6ec",
                    padding: "10px 14px",
                    fontSize: "0.9rem",
                    outline: "none",
                    width: "100%",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.4)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.12)"; }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-mono text-xs tracking-wider"
                  style={{ color: "rgba(224,230,236,0.4)", fontFamily: "var(--font-space-mono), monospace" }}
                >
                  // {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  style={{
                    backgroundColor: "#0b0d10",
                    border: "1px solid rgba(245,158,11,0.12)",
                    borderRadius: "2px",
                    color: "#e0e6ec",
                    padding: "10px 14px",
                    fontSize: "0.9rem",
                    outline: "none",
                    width: "100%",
                    resize: "vertical",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.4)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.12)"; }}
                />
              </div>

              {/* Error message */}
              {formState === "error" && (
                <p
                  className="font-mono text-xs"
                  style={{ color: "#ef4444", fontFamily: "var(--font-space-mono), monospace" }}
                >
                  {lang === "es"
                    ? "// Error al enviar. Intenta de nuevo."
                    : "// Failed to send. Please try again."}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={formState === "submitting"}
                className="font-mono text-sm transition-opacity hover:opacity-75 disabled:opacity-40"
                style={{
                  color: "#07080a",
                  backgroundColor: "#f59e0b",
                  padding: "12px 28px",
                  borderRadius: "2px",
                  fontFamily: "var(--font-space-mono), monospace",
                  cursor: formState === "submitting" ? "wait" : "pointer",
                  alignSelf: "flex-start",
                }}
              >
                {formState === "submitting"
                  ? (lang === "es" ? "Enviando..." : "Sending...")
                  : t("contact.form.submit")}
              </button>
            </form>
          )}
        </div>

        {/* Info column */}
        <div className="flex flex-col gap-6 md:pt-2">
          {infoItems.map(({ label, value }) => (
            <div
              key={label}
              className="p-5"
              style={{
                backgroundColor: "#0b0d10",
                border: "1px solid rgba(245,158,11,0.08)",
                borderLeft: "2px solid rgba(245,158,11,0.3)",
                borderRadius: "2px",
              }}
            >
              <p
                className="mb-1 font-mono text-xs"
                style={{ color: "rgba(245,158,11,0.5)", fontFamily: "var(--font-space-mono), monospace" }}
              >
                {label}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(224,230,236,0.55)" }}
              >
                {value}
              </p>
            </div>
          ))}

          <div
            className="p-5"
            style={{
              backgroundColor: "#0b0d10",
              border: "1px solid rgba(245,158,11,0.08)",
              borderLeft: "2px solid rgba(245,158,11,0.3)",
              borderRadius: "2px",
            }}
          >
            <p
              className="mb-1 font-mono text-xs"
              style={{ color: "rgba(245,158,11,0.5)", fontFamily: "var(--font-space-mono), monospace" }}
            >
              // Email
            </p>
            <a
              href="mailto:gabriel@argand.mx"
              className="text-sm transition-colors hover:text-amber-400"
              style={{ color: "rgba(224,230,236,0.55)" }}
            >
              gabriel@argand.mx
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
