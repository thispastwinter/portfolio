import { createClient } from "@supabase/supabase-js"
import { SUPABASE_KEY, SUPABASE_URL } from "../constants/Environment"
import { AnyObject } from "../types/AnyObject"
import { ContentBlock } from "../types/ContentBlock"
import { Project } from "../types/Project"

interface API {
  getProjects: () => Promise<Project[] | undefined>
  getProjectById: (id: Project["id"]) => Promise<Project | undefined>
}

type GetListItem<List extends Array<unknown>> = List[number]

type ForeignTableObject<
  Data extends AnyObject,
  ForeignTable1,
  ForeignTable2,
  ForeignTable3,
> = {
  table: ForeignTable1 | ForeignTable2 | ForeignTable3
  fields:
    | Array<keyof GetListItem<Data[ForeignTable1]>>
    | Array<keyof GetListItem<Data[ForeignTable2]>>
    | Array<keyof GetListItem<Data[ForeignTable3]>>
}

type Fields<Data, ForeignTable1, ForeignTable2, ForeignTable3> = Array<
  | keyof Data
  | ForeignTableObject<Data, ForeignTable1, ForeignTable2, ForeignTable3>
>

// provides type inference when building query strings
const getQueryFields = <
  Data,
  ForeignTable1 = keyof Data,
  ForeignTable2 = keyof Data,
  ForeignTable3 = keyof Data,
>(
  fields?: Fields<Data, ForeignTable1, ForeignTable2, ForeignTable3>,
) => {
  if (fields) {
    return fields
      .map((field) => {
        if (typeof field === "object") {
          return `${String(field.table)}(${field.fields.join(",")})`
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
  const queryFields = getQueryFields<Project, "categories">([
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
  const queryFields = getQueryFields<Project, "categories", "content_blocks">([
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
    .from<Project & ContentBlock>("projects")
    .select(queryFields)
    .order("created_at", { ascending: false })
    .order("name", { foreignTable: "categories" })
    .order("order", { foreignTable: "content_blocks" })

  const { data } = await query.eq("id", id).limit(1).single()

  return data ?? undefined
}

export const APIService: API = {
  getProjects,
  getProjectById,
}
