import { createClient } from "@supabase/supabase-js"
import { SUPABASE_KEY, SUPABASE_URL } from "../constants/Environment"

interface Database {
  getAll: <Data>(route: string) => Promise<Data[] | undefined>
  getById: <Data>(table: string, id: string) => Promise<Data | undefined>
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const getAll: Database["getAll"] = async (route) => {
  const { data } = await supabase.from(route).select("*")
  return data ?? undefined
}

const getById: Database["getById"] = async (route, id) => {
  const { data } = await supabase
    .from(route)
    .select("*")
    .eq("id", id)
    .limit(1)
    .single()

  return data ?? undefined
}

export const DatabaseService: Database = {
  getAll,
  getById,
}
