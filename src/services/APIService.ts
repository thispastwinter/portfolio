import { Project } from "../types/Project"

interface API {
  getProjects: () => Promise<Project[]>
}

const getProjects: API["getProjects"] = () => {
  return new Promise((resolve) => resolve([]))
}

export const APIService: API = {
  getProjects,
}
