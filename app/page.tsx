"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import type { Project } from "@/lib/projects";

const clients = [
  "Taller Multidisciplinar", "Hotel Nana Vida", "Grupo Ruz", "American Polo",
  "Paseo Destino", "Eliot Awards", "Eliot Channel", "Eliot Media",
  "Innout Casa Productora", "Shanti Casa Productora", "Peluches Shinymals",
  "Melding.tv", "Academia Stage Danza", "Priesto Estudio", "Divots Sportsbar",
  "Caretas VicoverPro", "Mochilas Truzt", "Ocean Wise", "Glis Packaging",
  "Mexaheads", "Fotógrafo Pablo Navajas", "Peek Toys",
];

export default function Home() {
  const { t, lang } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const services = [
    {
      number:  t("services.01.number"),
      title:   t("services.01.title"),
      body:    t("services.01.body"),
      bullets: t("services.01.bullets").split("\n"),
      accent:  "#f59e0b",
    },
    {
      number:  t("services.02.number"),
      title:   t("services.02.title"),
      body:    t("services.02.body"),
      bullets: t("services.02.bullets").split("\n"),
      accent:  "#06b6d4",
    },
    {
      number:  t("services.03.number"),
      title:   t("services.03.title"),
      body:    t("services.03.body"),
      bullets: t("services.03.bullets").split("\n"),
      accent:  "#f59e0b",
    },
  ];

  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
        {/* Grid background */}
        <div className="hero-grid absolute inset-0" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
          {/* Eyebrow */}
          <p
            className="mb-6 font-mono text-xs tracking-widest"
            style={{
              color: "rgba(245,158,11,0.6)",
              fontFamily: "var(--font-space-mono), monospace",
            }}
          >
            // {t("hero.eyebrow")}
          </p>

          {/* Headline */}
          <h1 className="mb-8 leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}>
            <span className="block" style={{ color: "#e0e6ec" }}>
              {t("hero.headline.1")}
            </span>
            <span
              className="block text-outline"
              style={{ WebkitTextStroke: "1px rgba(224,230,236,0.35)", color: "transparent" }}
            >
              {t("hero.headline.2")}
            </span>
            <span className="block" style={{ color: "#f59e0b" }}>
              {t("hero.headline.3")}
            </span>
          </h1>

          {/* Subheadlines */}
          <p
            className="mb-3 max-w-xl text-lg leading-relaxed md:text-xl"
            style={{ color: "rgba(224,230,236,0.75)" }}
          >
            {t("hero.sub1")}
          </p>
          <p
            className="mb-10 max-w-lg text-sm leading-relaxed"
            style={{ color: "rgba(224,230,236,0.4)" }}
          >
            {t("hero.sub2")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/work"
              className="font-mono text-sm transition-opacity hover:opacity-75"
              style={{
                color: "#07080a",
                backgroundColor: "#f59e0b",
                padding: "12px 28px",
                borderRadius: "2px",
                fontFamily: "var(--font-space-mono), monospace",
              }}
            >
              {t("hero.cta.work")}
            </Link>
            <Link
              href="/contact"
              className="font-mono text-sm transition-colors hover:border-amber-400 hover:text-amber-400"
              style={{
                color: "rgba(224,230,236,0.7)",
                border: "1px solid rgba(224,230,236,0.2)",
                padding: "12px 28px",
                borderRadius: "2px",
                fontFamily: "var(--font-space-mono), monospace",
              }}
            >
              {t("hero.cta.contact")}
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. ABOUT ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p
              className="mb-4 font-mono text-xs tracking-widest"
              style={{ color: "rgba(245,158,11,0.5)", fontFamily: "var(--font-space-mono), monospace" }}
            >
              // About
            </p>
            <h2
              className="mb-6 text-3xl font-semibold leading-snug tracking-tight md:text-4xl"
              style={{ color: "#e0e6ec" }}
            >
              {t("about.headline")}
            </h2>
            <p
              className="leading-relaxed"
              style={{ color: "rgba(224,230,236,0.55)", fontSize: "0.95rem" }}
            >
              {t("about.body")}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-6 self-center sm:grid-cols-2">
            {[
              t("about.stat.years"),
              t("about.stat.nbc"),
              t("about.stat.location"),
              t("about.stat.langs"),
            ].map((stat) => (
              <div
                key={stat}
                className="p-4"
                style={{
                  borderLeft: "2px solid rgba(245,158,11,0.3)",
                  backgroundColor: "#0b0d10",
                }}
              >
                <p
                  className="font-mono text-xs leading-relaxed"
                  style={{ color: "rgba(224,230,236,0.5)", fontFamily: "var(--font-space-mono), monospace" }}
                >
                  {stat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. INFRAESTRUCTURA DIGITAL DEFINITION ────────────────────── */}
      <section
        className="px-6 py-16"
        style={{ borderTop: "1px solid rgba(245,158,11,0.08)", borderBottom: "1px solid rgba(245,158,11,0.08)" }}
      >
        <div className="mx-auto max-w-6xl">
          <p
            className="mb-3 font-mono text-xs tracking-widest"
            style={{ color: "rgba(245,158,11,0.5)", fontFamily: "var(--font-space-mono), monospace" }}
          >
            // Infraestructura digital
          </p>
          <p
            className="max-w-3xl text-lg leading-relaxed md:text-xl"
            style={{ color: "rgba(224,230,236,0.6)" }}
          >
            {t("infra.definition")}
          </p>
        </div>
      </section>

      {/* ── 4. SERVICES PREVIEW ──────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p
          className="mb-2 font-mono text-xs tracking-widest"
          style={{ color: "rgba(245,158,11,0.5)", fontFamily: "var(--font-space-mono), monospace" }}
        >
          // {lang === "es" ? "Servicios" : "Services"}
        </p>
        <h2
          className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl"
          style={{ color: "#e0e6ec" }}
        >
          {t("services.headline")}{" "}
          <span style={{ WebkitTextStroke: "1px rgba(245,158,11,0.5)", color: "transparent" }}>
            {t("services.headline.verb")}
          </span>
        </h2>
        <p
          className="mb-12 max-w-xl text-sm leading-relaxed"
          style={{ color: "rgba(224,230,236,0.4)" }}
        >
          {t("services.intro")}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.number}
              className="service-bar p-6"
              style={{
                backgroundColor: "#0b0d10",
                border: `1px solid rgba(245,158,11,0.08)`,
                borderRadius: "2px",
              }}
            >
              <p
                className="mb-3 font-mono text-xs"
                style={{ color: svc.accent === "#06b6d4" ? "rgba(6,182,212,0.5)" : "rgba(245,158,11,0.5)", fontFamily: "var(--font-space-mono), monospace" }}
              >
                {svc.number}
              </p>
              <h3
                className="mb-3 text-lg font-semibold"
                style={{ color: svc.accent }}
              >
                {svc.title}
              </h3>
              <p
                className="mb-5 text-sm leading-relaxed"
                style={{ color: "rgba(224,230,236,0.5)" }}
              >
                {svc.body}
              </p>
              <ul className="space-y-1">
                {svc.bullets.map((b) => (
                  <li
                    key={b}
                    className="font-mono text-xs"
                    style={{ color: "rgba(224,230,236,0.3)", fontFamily: "var(--font-space-mono), monospace" }}
                  >
                    — {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-right">
          <Link
            href="/services"
            className="font-mono text-xs tracking-wider transition-colors hover:text-amber-400"
            style={{ color: "rgba(245,158,11,0.6)", fontFamily: "var(--font-space-mono), monospace" }}
          >
            {lang === "es" ? "Ver todos los servicios →" : "View all services →"}
          </Link>
        </div>
      </section>

      {/* ── 5. SELECTED WORK ─────────────────────────────────────────── */}
      <section
        className="px-6 py-24 md:py-32"
        style={{ borderTop: "1px solid rgba(245,158,11,0.08)" }}
      >
        <div className="mx-auto max-w-6xl">
          <p
            className="mb-2 font-mono text-xs tracking-widest"
            style={{ color: "rgba(245,158,11,0.5)", fontFamily: "var(--font-space-mono), monospace" }}
          >
            {t("work.section.tag")}
          </p>
          <h2
            className="mb-12 text-4xl font-semibold tracking-tight md:text-5xl"
            style={{ color: "#e0e6ec" }}
          >
            {t("work.section.title")}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. EXTENDED CLIENT LIST ──────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:pb-32">
        <p
          className="mb-6 font-mono text-xs tracking-widest"
          style={{ color: "rgba(245,158,11,0.5)", fontFamily: "var(--font-space-mono), monospace" }}
        >
          {t("clients.tag")}
        </p>
        <div className="flex flex-wrap gap-2">
          {clients.map((name) => (
            <span
              key={name}
              className="font-mono text-xs"
              style={{
                color: "rgba(224,230,236,0.3)",
                border: "1px solid rgba(245,158,11,0.08)",
                padding: "4px 12px",
                borderRadius: "2px",
                fontFamily: "var(--font-space-mono), monospace",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ── 7. CTA STRIP ─────────────────────────────────────────────── */}
      <section
        className="px-6 py-20"
        style={{
          borderTop: "1px solid rgba(245,158,11,0.08)",
          background: "linear-gradient(180deg, #07080a 0%, #0b0d10 100%)",
        }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <h2
            className="text-3xl font-semibold tracking-tight md:text-4xl"
            style={{ color: "#e0e6ec" }}
          >
            {lang === "es" ? (
              <>Hablemos de tu <span style={{ WebkitTextStroke: "1px rgba(245,158,11,0.5)", color: "transparent" }}>proyecto.</span></>
            ) : (
              <>{"Let's talk about your"} <span style={{ WebkitTextStroke: "1px rgba(245,158,11,0.5)", color: "transparent" }}>project.</span></>
            )}
          </h2>
          <Link
            href="/contact"
            className="shrink-0 font-mono text-sm transition-opacity hover:opacity-75"
            style={{
              color: "#07080a",
              backgroundColor: "#f59e0b",
              padding: "14px 32px",
              borderRadius: "2px",
              fontFamily: "var(--font-space-mono), monospace",
            }}
          >
            {t("cta.button")}
          </Link>
        </div>
      </section>

      {/* Project modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
