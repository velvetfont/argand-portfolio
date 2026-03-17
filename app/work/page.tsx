"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import type { Project } from "@/lib/projects";

export default function WorkPage() {
  const { t, lang } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <main className="mx-auto max-w-6xl px-6 pt-32 pb-24">
        {/* Section intro */}
        <div className="mb-16">
          <p
            className="mb-2 font-mono text-xs tracking-widest"
            style={{
              color: "rgba(245,158,11,0.5)",
              fontFamily: "var(--font-space-mono), monospace",
            }}
          >
            {t("work.section.tag")}
          </p>
          <h1
            className="mb-4 text-4xl font-semibold tracking-tight md:text-6xl"
            style={{ color: "#e0e6ec" }}
          >
            {lang === "es" ? (
              <>
                Proyectos{" "}
                <span
                  style={{
                    WebkitTextStroke: "1px rgba(245,158,11,0.5)",
                    color: "transparent",
                  }}
                >
                  seleccionados.
                </span>
              </>
            ) : (
              <>
                Selected{" "}
                <span
                  style={{
                    WebkitTextStroke: "1px rgba(245,158,11,0.5)",
                    color: "transparent",
                  }}
                >
                  work.
                </span>
              </>
            )}
          </h1>
          <p
            className="max-w-xl text-sm leading-relaxed"
            style={{ color: "rgba(224,230,236,0.4)" }}
          >
            {lang === "es"
              ? "Infraestructura digital construida para clientes reales. Haz clic en cualquier proyecto para ver los detalles."
              : "Digital infrastructure built for real clients. Click any project to see the details."}
          </p>
        </div>

        {/* Project grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
