import { ProjectCard } from "@/components/project-card";

interface GridProjectLayoutProps {
  projects: any[];
}

export function GridProjectLayout({ projects }: GridProjectLayoutProps) {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        auto-rows-fr
        justify-items-center
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
