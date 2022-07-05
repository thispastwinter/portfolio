import { createClient } from "@supabase/supabase-js"
import { Project } from "../types/Project"
import { SUPABASE_KEY, SUPABASE_URL } from "../constants/Environment"

interface API {
  getProjects: () => Promise<Project[] | undefined>
  getProjectById: (id: string) => Promise<Project | undefined>
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const getProjects: API["getProjects"] = async () => {
  const { data } = await supabase.from<Project>("Projects").select("*")
  return data ?? undefined
}

const getProjectById: API["getProjectById"] = async (id) => {
  const { data } = await supabase.from<Project>("Projects").select(id)
  return data?.[0]
}

export const APIService: API = {
  getProjects,
  getProjectById,
}
