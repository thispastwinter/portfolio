import { createClient } from "@supabase/supabase-js"
import { SUPABASE_KEY, SUPABASE_URL } from "../constants/Environment"
import { Article } from "../types/Article"
import { ContentRow } from "../types/ContentRow"
import { ContentBlock } from "../types/ContentBlock"
import { Project } from "../types/Project"
import { ContentColumn } from "../types/ContentColumn"
import { Routes } from "../constants/Routes"
import { ErrorService } from "./ErrorService"

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

  const { data, error, status } = await query

  if (error) {
    throw ErrorService.createError({
      dataType: "projects",
      status,
      metaData: { route: Routes.projects },
    })
  }

  return data ?? undefined
}

const getProjectById: API["getProjectById"] = async (id) => {
  const query = supabase
    .from<Project & ContentBlock & ContentRow & ContentColumn>("projects")
    .select(
      "description, id, image, name, url, categories(icon_name, name), content_columns(id, order, content_rows(id, order, content_blocks(alt_text, display_value, value, type, id)))",
    )
    .order("name", { foreignTable: "categories" })
    .order("order", { foreignTable: "content_columns" })
    .order("order", { foreignTable: "content_columns.content_rows" })
    .order("order", {
      foreignTable: "content_columns.content_rows.content_blocks",
    })

  const { data, error, status } = await query.eq("id", id).limit(1).single()

  if (error) {
    throw ErrorService.createError({
      dataType: "project",
      status,
      metaData: { route: Routes.projectsDetail(id) },
    })
  }

  return data ?? undefined
}

const getArticleByName: API["getArticleByName"] = async (name) => {
  const query = supabase
    .from<Article & ContentBlock & ContentRow & ContentColumn>("articles")
    .select(
      "id, name, content_columns(id, order, className, content_rows(id, order, content_blocks(alt_text, display_value, value, type, id, className)))",
    )
    .order("order", { foreignTable: "content_columns" })
    .order("order", { foreignTable: "content_columns.content_rows" })
    .order("order", {
      foreignTable: "content_columns.content_rows.content_blocks",
    })

  const { data, error, status } = await query.eq("name", name).limit(1).single()

  if (error) {
    throw ErrorService.createError({
      dataType: "article",
      status,
      metaData: {
        route: Routes.articleDetail(name),
      },
    })
  }

  return data ?? undefined
}

export const APIService: API = {
  getProjects,
  getProjectById,
  getArticleByName,
}
