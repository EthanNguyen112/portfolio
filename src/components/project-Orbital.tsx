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
  const [rotation, setRotation] = useState(0);

  const radius = 600;
  const step = 360 / projects.length;
  
  return (
    <div className="relative h-[480px] w-full overflow-visible pointer-events-none">
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotateY: rotation }}
        transition={{
          type: "tween",
          ease: [0.4, 0.0, 0.2, 1],
          duration: 0.6,
        }}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {projects.map((project, id) => {
          const angle = id * step;
          const parentRotation = rotation;
          
          const rawAngle = (angle + rotation) % 360;
          const normalized = Math.abs(rawAngle > 180 ? 360 - rawAngle : rawAngle);
          const depth = 1 - normalized / 180;

          

        {/* CardWrapper */}
          return (
            <motion.div
              key={project.title}
              className="absolute bg-white dark:bg-black rounded-lg shadow-lg pointer-events-auto"
              animate={{
                transform: `
                  rotateY(${angle}deg)
                  translateZ(${radius}px)
                  rotateY(${-(angle + parentRotation)}deg)
                `,
                opacity: 0.35 + depth * 0.65,
                scale: 0.85 + depth * 0.15,
              }}
              transition={{
                type: "tween",
                ease: [0.4, 0.0, 0.2, 1],
                duration: 0.6,
              }}
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Arrow buttons */}
      <div className="absolute inset-x-0 bottom-[-64px] flex justify-center gap-6 z-20 pointer-events-auto">
        <button
          onClick={() => {
            setActive((prev) => (prev - 1 + projects.length) % projects.length);
            setRotation((prev) => prev + step);
          }}
          className="rounded-full bg-white dark:bg-black border px-4 py-2 text-sm hover:bg-muted transition"
        >
          ←
        </button>

        <button
          onClick={() => {
            setActive((prev) => (prev + 1) % projects.length);
            setRotation((prev) => prev - step);
          }}
          className="rounded-full bg-white dark:bg-black border px-4 py-2 text-sm hover:bg-muted transition"
        >
          →
        </button>
      </div>
    </div>
  );
}
