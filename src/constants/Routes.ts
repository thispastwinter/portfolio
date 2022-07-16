export const Routes = {
  articles: "/articles" as const,
  articleDetail: (name: string) => `${Routes.articles}/${name}` as const,
  projects: "/projects" as const,
  projectsDetail: (id: string | number) => `${Routes.projects}/${id}` as const,
}
