export const ProjectQueryKeys = {
  all: ["projects"] as const,
  byId: (id: string) => [ProjectQueryKeys.all, id] as const,
}
