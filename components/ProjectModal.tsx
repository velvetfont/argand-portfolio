"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const { lang } = useLanguage();

  // Close on Escape key
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  if (!project) return null;

  const desc = lang === "es" ? project.descEs : project.descEn;
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`;
  const visitLabel = lang === "es" ? "Visitar sitio →" : "Visit site →";
  const closeLabel = lang === "es" ? "// Cerrar" : "// Close";

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(7,8,10,0.92)" }}
      onClick={onClose}
    >
      {/* Panel — stop propagation so clicking inside doesn't close */}
      <div
        className="relative w-full max-w-2xl overflow-y-auto"
        style={{
          backgroundColor: "#0b0d10",
          border: "1px solid rgba(245,158,11,0.12)",
          borderRadius: "2px",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Screenshot */}
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Image
            src={screenshotUrl}
            alt={project.client}
            fill
            sizes="672px"
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Content */}
        <div className="p-7">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p
                className="mb-1 font-mono text-xs"
                style={{ color: "rgba(245,158,11,0.5)", fontFamily: "var(--font-space-mono), monospace" }}
              >
                // {project.id}
              </p>
              <h2
                className="text-2xl font-semibold tracking-tight"
                style={{ color: "#e0e6ec" }}
              >
                {project.client}
              </h2>
            </div>

            {project.badge && (
              <span
                className="shrink-0 font-mono text-xs"
                style={{
                  color: "#f59e0b",
                  border: "1px solid rgba(245,158,11,0.3)",
                  padding: "3px 10px",
                  borderRadius: "2px",
                  fontFamily: "var(--font-space-mono), monospace",
                  fontSize: "0.6rem",
                }}
              >
                {project.badge}
              </span>
            )}
          </div>

          <p
            className="mb-5 leading-relaxed"
            style={{ color: "rgba(224,230,236,0.6)", fontSize: "0.95rem" }}
          >
            {desc}
          </p>

          <p
            className="mb-7 font-mono text-xs"
            style={{ color: "rgba(224,230,236,0.25)", fontFamily: "var(--font-space-mono), monospace" }}
          >
            {project.stack}
          </p>

          <div className="flex items-center justify-between">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm transition-colors hover:opacity-80"
              style={{
                color: "#f59e0b",
                fontFamily: "var(--font-space-mono), monospace",
                border: "1px solid rgba(245,158,11,0.3)",
                padding: "8px 20px",
                borderRadius: "2px",
              }}
            >
              {visitLabel}
            </a>

            <button
              onClick={onClose}
              className="font-mono text-xs transition-colors hover:text-amber-400"
              style={{
                color: "rgba(224,230,236,0.3)",
                fontFamily: "var(--font-space-mono), monospace",
              }}
            >
              {closeLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
