import { getAllProjects, projectCategories } from "@/lib/projects";
import { ProjectsSectionClient } from "./ProjectsSectionClient";

export function ProjectsSection() {
  const projects = getAllProjects();

  return <ProjectsSectionClient projects={projects} projectCategories={projectCategories} />;
}
