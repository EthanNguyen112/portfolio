"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectCard } from "@/components/project-card";

export function OrbitalProjectCarousel({ projects }) {
  const [active, setActive] = useState(0);

  const radius = 360;
  const step = 360 / projects.length;

  return (
    <div className="relative h-[480px] w-full overflow-visible">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotateY: -active * step }}
        transition={{ type: "spring", stiffness: 70, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {projects.map((project, id) => {
          const angle = id * step;
          const isActive = id === active;

          return (
            <motion.div
              className="absolute"
              style={{
  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
  transformStyle: "preserve-3d",
  background: "rgba(255,0,0,0.1)",
}}
            >
              <ProjectCard {...project} />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
