import { createClient } from "@supabase/supabase-js"
import { SUPABASE_KEY, SUPABASE_URL } from "../constants/Environment"
import { Article } from "../types/Article"
import { Row } from "../types/Row"
import { ContentBlock } from "../types/ContentBlock"
import { Project } from "../types/Project"
import { Column } from "../types/Column"

interface API {
  getProjects: () => Promise<Project[] | undefined>
  getProjectById: (id: Project["id"]) => Promise<Project | undefined>
  getArticleByName: (name: Article["name"]) => Promise<Article | undefined>
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const getProjects: API["getProjects"] = async () => {
  const query = supabase
    .from<Project>("projects")
    .select("short_description, id, image, name, categories(icon_name, name)")
    .order("start_date", { ascending: false })
    .order("name", { foreignTable: "categories" })

  const { data } = await query

  return data ?? undefined
}

const getProjectById: API["getProjectById"] = async (id) => {
  const query = supabase
    .from<Project & ContentBlock & Row & Column>("projects")
    .select(
      "description, id, image, name, url, categories(icon_name, name), columns(id, order, rows(id, order, content_blocks(alt_text, display_value, value, type, id)))",
    )
    .order("name", { foreignTable: "categories" })
    .order("order", { foreignTable: "columns" })
    .order("order", { foreignTable: "columns.rows" })
    .order("order", { foreignTable: "columns.rows.content_blocks" })

  const { data } = await query.eq("id", id).limit(1).single()

  return data ?? undefined
}

const getArticleByName: API["getArticleByName"] = async (name) => {
  const query = supabase
    .from<Article & ContentBlock & Row & Column>("articles")
    .select(
      "id, name, columns(id, order, rows(id, order, content_blocks(alt_text, display_value, value, type, id)))",
    )
    .order("order", { foreignTable: "columns" })
    .order("order", { foreignTable: "columns.rows" })
    .order("order", { foreignTable: "columns.rows.content_blocks" })

  const { data } = await query.eq("name", name).limit(1).single()

  return data ?? undefined
}

export const APIService: API = {
  getProjects,
  getProjectById,
  getArticleByName,
}
