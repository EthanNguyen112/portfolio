"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import dynamic from "next/dynamic";
import { GridProjectLayout } from "@/components/project_grid";
import { DATA } from "@/data/resume";

const OrbitalProjectCarousel = dynamic(
  () => import("@/components/project-Orbital").then((m) => m.OrbitalProjectCarousel),
  { loading: () => <div className="h-[520px] sm:h-[560px] md:h-[600px]" /> }
);

export function ProjectSection() {
  const [view, setView] = useState<"orbit" | "grid">("orbit");

  return (
    <section id="projects" className="py-16 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between z-20 relative">
        <h2 className="font-heading text-3xl font-bold">Project View</h2>

        {/* Toggle Button */}
        <button
          onClick={() =>
            setView((v) => (v === "orbit" ? "grid" : "orbit"))}
          className="rounded-full bg-white border px-4 py-2 text-sm hover:bg-muted transition z-30 relative"
        >
          {view === "orbit" ? "Grid View" : "Orbit View"}
        </button>
      </div>

      {/* Animated Layout Switch */}
      <AnimatePresence mode="wait">
        {view === "orbit" && (
          <motion.div
            key="orbit"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <OrbitalProjectCarousel projects={DATA.projects.map(p => ({ ...p, links: [...p.links] }))} />
          </motion.div>
        )}

        {view === "grid" && (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <GridProjectLayout projects={DATA.projects.map(p => ({ ...p, links: [...p.links] }))} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}