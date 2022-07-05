export const ProjectQueryKeys = {
  all: ["Projects"] as const,
  byId: (id: string) => [ProjectQueryKeys.all, id] as const,
}
