import { Project } from "../types/Project"
import { DatabaseService } from "./DatabaseService"

interface API {
  getProjects: () => Promise<Project[] | undefined>
  getProjectById: (id: Project["id"]) => Promise<Project | undefined>
}

const getProjects: API["getProjects"] = async () => {
  const projects = await DatabaseService.getAll<Project>("projects")

  return projects
}

const getProjectById: API["getProjectById"] = async (id) => {
  const project = DatabaseService.getById<Project>("projects", id)

  return project ?? undefined
}

export const APIService: API = {
  getProjects,
  getProjectById,
}
