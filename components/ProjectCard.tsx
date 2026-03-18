"use client";

import Image from "next/image";
import { Project } from "@/lib/projects";
import { useLanguage } from "@/lib/i18n";

interface Props {
  project: Project;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  const { lang } = useLanguage();
  const desc = lang === "es" ? project.descEs : project.descEn;
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`;

  return (
    <article
      className="project-card group cursor-pointer"
      onClick={() => onClick(project)}
      style={{
        backgroundColor: "#0b0d10",
        border: "1px solid rgba(245,158,11,0.08)",
        borderRadius: "2px",
      }}
    >
      {/* Screenshot */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <Image
          src={screenshotUrl}
          alt={project.client}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          unoptimized
        />
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ backgroundColor: "rgba(7,8,10,0.75)" }}
        >
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: "#06b6d4", fontFamily: "var(--font-space-mono), monospace" }}
          >
            // VER PROYECTO →
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p
              className="mb-1 font-mono text-xs"
              style={{ color: "rgba(6,182,212,0.4)", fontFamily: "var(--font-space-mono), monospace" }}
            >
              // {project.id}
            </p>
            <h3
              className="font-semibold tracking-tight"
              style={{ color: "#e0e6ec", fontFamily: "var(--font-outfit), sans-serif", fontSize: "1.2rem" }}
            >
              {project.client}
            </h3>
          </div>

          {project.badge && (
            <span
              className="shrink-0 font-mono"
              style={{
                color: "#06b6d4",
                border: "1px solid rgba(6,182,212,0.3)",
                padding: "2px 8px",
                borderRadius: "2px",
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "0.65rem",
                whiteSpace: "nowrap",
              }}
            >
              {project.badge}
            </span>
          )}
        </div>

        <p
          className="mb-4 text-base leading-relaxed"
          style={{ color: "rgba(224,230,236,0.5)" }}
        >
          {desc}
        </p>

        <p
          className="font-mono text-sm"
          style={{ color: "rgba(6,182,212,0.3)", fontFamily: "var(--font-space-mono), monospace" }}
        >
          {project.stack}
        </p>
      </div>
    </article>
  );
}