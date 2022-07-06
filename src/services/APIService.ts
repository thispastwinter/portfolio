import { Category } from "../types/Category"
import { Project } from "../types/Project"
import { DatabaseService } from "./DatabaseService"

interface API {
  getProjects: () => Promise<Project[] | undefined>
  getProjectById: (id: Project["id"]) => Promise<Project | undefined>
}

const getProjects: API["getProjects"] = () => {
  return DatabaseService.getAll<Project, Category>("projects", {
    name: "categories",
    values: ["name", "id", "icon_name"],
  })
}

const getProjectById: API["getProjectById"] = (id) => {
  return DatabaseService.getById<Project, Category>("projects", id, {
    name: "categories",
    values: ["name", "id", "icon_name"],
  })
}

export const APIService: API = {
  getProjects,
  getProjectById,
}
