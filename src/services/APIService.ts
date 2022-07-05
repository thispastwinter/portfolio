import { Project } from "../types/Project"
import { DatabaseService } from "./DatabaseService"

interface API {
  getProjects: () => Promise<Project[] | undefined>
  getProjectById: (id: Project["id"]) => Promise<Project | undefined>
}

const getProjects: API["getProjects"] = () => {
  return DatabaseService.getAll<Project>("projects")
}

const getProjectById: API["getProjectById"] = (id) => {
  return DatabaseService.getById<Project>("projects", id)
}

export const APIService: API = {
  getProjects,
  getProjectById,
}
