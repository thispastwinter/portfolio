export const ProjectQueryKeys = {
  all: ["projects"] as const,
  byId: (id: string) => [ProjectQueryKeys.all, id] as const,
}

export const ArticleQueryKeys = {
  all: ["articles"] as const,
  byId: (id: string) => [ArticleQueryKeys.all, id] as const,
  byName: (name: string) => [ArticleQueryKeys.all, name] as const,
}
