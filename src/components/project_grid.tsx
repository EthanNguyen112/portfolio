import { ProjectCard } from "@/components/project-card";
import type { ComponentProps } from "react";
import BlurFade from "@/components/magicui/blur-fade";

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
      {projects.map((project, idx) => (
        <BlurFade
          key={project.title}
          delay={0.1 + idx * 0.05}
          xOffset={idx % 2 === 0 ? -24 : 24}
        >
          <ProjectCard {...project} />
        </BlurFade>
      ))}
    </div>
  );
}