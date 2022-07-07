import { createClient } from "@supabase/supabase-js"
import { SUPABASE_KEY, SUPABASE_URL } from "../constants/Environment"
import { AnyObject } from "../types/AnyObject"

type Fields<Data = AnyObject, Relationship = AnyObject> = Array<
  keyof Data | { name: string; fields: Array<keyof Relationship> }
>
interface Database {
  getAll: <Data, Relationship = AnyObject>(
    route: string,
    fields?: Fields<Data, Relationship>,
  ) => Promise<Data[] | undefined>
  getById: <Data, Relationship = AnyObject>(
    route: string,
    id: string,
    fields?: Fields<Data, Relationship>,
  ) => Promise<Data | undefined>
}

const getQueryFields = (fields?: Fields) => {
  if (fields) {
    return fields
      .map((field) => {
        if (typeof field === "object") {
          return `${field.name}(${field.fields.join(",")})`
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

const getAll: Database["getAll"] = async (route, fields) => {
  const queryFields = getQueryFields(fields)
  const { data } = await supabase.from(route).select(queryFields)
  return data ?? undefined
}

const getById: Database["getById"] = async (route, id, fields) => {
  const queryFields = getQueryFields(fields)
  const { data } = await supabase
    .from(route)
    .select(`${queryFields}`)
    .eq("id", id)
    .limit(1)
    .single()

  return data ?? undefined
}

export const DatabaseService: Database = {
  getAll,
  getById,
}
