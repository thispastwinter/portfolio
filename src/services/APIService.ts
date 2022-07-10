import { createClient } from "@supabase/supabase-js"
import { SUPABASE_KEY, SUPABASE_URL } from "../constants/Environment"
import { AnyObject } from "../types/AnyObject"
import { Category } from "../types/Category"
import { ContentBlock } from "../types/ContentBlock"
import { Project } from "../types/Project"

interface API {
  getProjects: () => Promise<Project[] | undefined>
  getProjectById: (id: Project["id"]) => Promise<Project | undefined>
}

type Fields<Data = AnyObject, Relationship = AnyObject> = Array<
  keyof Data | { table: string; fields: Array<keyof Relationship> }
>

// provides type inference when building query strings
const getQueryFields = <Data, Relationship>(
  fields?: Fields<Data, Relationship>,
) => {
  if (fields) {
    return fields
      .map((field) => {
        if (typeof field === "object") {
          return `${field.table}(${field.fields.join(",")})`
        } else {
          return field
        }
      })
      .join(",")
  } else {
    // if fields is undefined, return wildcard
    return "*"
  }
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const getProjects: API["getProjects"] = async () => {
  const queryFields = getQueryFields<Project, Category>([
    "short_description",
    "id",
    "image",
    "name",
    { table: "categories", fields: ["icon_name", "name"] },
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
  const queryFields = getQueryFields<Project, Category & ContentBlock>([
    "description",
    "id",
    "image",
    "name",
    "url",
    { table: "categories", fields: ["icon_name", "name"] },
    {
      table: "content_blocks",
      fields: ["alt_text", "display_value", "value", "order", "type"],
    },
  ])
  const query = supabase
    .from<Project>("projects")
    .select(queryFields)
    .order("created_at", { ascending: false })
    .order("name", { foreignTable: "categories" })

  const { data } = await query.eq("id", id).limit(1).single()

  return data ?? undefined
}

export const APIService: API = {
  getProjects,
  getProjectById,
}
