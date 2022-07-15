import { Project } from "../types/Project"

export const Routes = {
  articles: "/articles" as const,
  articleDetail: (name: string) => `${Routes.articles}/${name}` as const,
  projects: "/projects" as const,
  projectsDetail: (id: Project["id"]) => `${Routes.projects}/${id}` as const,
}
