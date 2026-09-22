import { ProjectCard } from "@/components/project-card";
import type { ComponentProps } from "react";

interface GridProjectLayoutProps {
  projects: ComponentProps<typeof ProjectCard>[];
}

export function GridProjectLayout({ projects }: GridProjectLayoutProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-8
        auto-rows-fr
      "
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          {...project}
        />
      ))}
    </div>
  );
}