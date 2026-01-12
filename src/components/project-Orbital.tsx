"use client";

import { motion } from "framer-motion";
import type { ComponentProps } from "react";
import { useState } from "react";
import { ProjectCard } from "@/components/project-card";

interface OrbitalProjectCarouselProps {
  projects: ComponentProps<typeof ProjectCard>[];
}

export function OrbitalProjectCarousel({ projects }: OrbitalProjectCarouselProps) {
  const [active, setActive] = useState(0);

  const radius = 380;
  const step = 360 / projects.length;

  return (
    <div className="relative h-[480px] w-full overflow-visible ">
      <motion.div
        className="absolute inset-0 flex items-center justify-center "
        animate={{ rotateY: -active * step }}
        transition={{ type: "spring", stiffness: 70, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {projects.map((project, id) => {
          const angle = id * step;

          return (
            <motion.div
              key={project.title}
              className="absolute bg-white dark:bg-black rounded-lg shadow-lg h-[200px]"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                transformStyle: "preserve-3d",
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Arrow buttons */}
      <div className="absolute inset-x-0 bottom-[-64px] flex justify-center gap-6">
        <button
          onClick={() => setActive((prev) => prev - 1)}
          className="rounded-full border px-4 py-2 text-sm hover:bg-muted transition"
        >
          ←
        </button>

        <button
          onClick={() => setActive((prev) => prev + 1)}
          className="rounded-full border px-4 py-2 text-sm hover:bg-muted transition"
        >
          →
        </button>
      </div>
    </div>
  );
}
