import { createClient } from "@supabase/supabase-js"
import { SUPABASE_KEY, SUPABASE_URL } from "../constants/Environment"
import { Article } from "../types/Article"
import { ContentBlock } from "../types/ContentBlock"
import { Project } from "../types/Project"
import { getQueryFieldString } from "../utils/getQueryFieldString"

interface API {
  getProjects: () => Promise<Project[] | undefined>
  getProjectById: (id: Project["id"]) => Promise<Project | undefined>
  getArticleByName: (name: Article["name"]) => Promise<Article | undefined>
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const getProjects: API["getProjects"] = async () => {
  const queryFields = getQueryFieldString<Project, "categories">([
    "short_description",
    "id",
    "image",
    "name",
    { foreignTable: "categories", fields: ["icon_name", "name"] },
  ])
  const query = supabase
    .from<Project>("projects")
    .select(queryFields)
    .order("created_at", { ascending: false })
    .order("name", { foreignTable: "categories" })

  const { data } = await query

  return data ?? undefined
}

const getProjectById: API["getProjectById"] = async (id) => {
  const queryFields = getQueryFieldString<
    Project,
    "categories",
    "content_blocks"
  >([
    "description",
    "id",
    "image",
    "name",
    "url",
    { foreignTable: "categories", fields: ["icon_name", "name"] },
    {
      foreignTable: "content_blocks",
      fields: ["alt_text", "display_value", "value", "order", "type"],
    },
  ])

  const query = supabase
    .from<Project & ContentBlock>("projects")
    .select(queryFields)
    .order("created_at", { ascending: false })
    .order("name", { foreignTable: "categories" })
    .order("order", { foreignTable: "content_blocks" })

  const { data } = await query.eq("id", id).limit(1).single()

  return data ?? undefined
}

const getArticleByName: API["getArticleByName"] = async (name) => {
  const queryFields = getQueryFieldString<Article, "content_blocks">([
    "id",
    "name",
    {
      foreignTable: "content_blocks",
      fields: ["alt_text", "display_value", "value", "order", "type"],
    },
  ])
  const query = supabase
    .from<Article & ContentBlock>("articles")
    .select(queryFields)
    .order("order", { foreignTable: "content_blocks" })

  const { data } = await query.eq("name", name).limit(1).single()

  return data ?? undefined
}

export const APIService: API = {
  getProjects,
  getProjectById,
  getArticleByName,
}
