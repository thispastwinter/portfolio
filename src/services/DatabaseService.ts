import { createClient } from "@supabase/supabase-js"
import { SUPABASE_KEY, SUPABASE_URL } from "../constants/Environment"

interface Database {
  getAll: <Data>(table: string) => Promise<Data[] | undefined>
  getById: <Data extends { id: string }>(
    table: string,
    id: string,
  ) => Promise<Data | undefined>
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const getAll: Database["getAll"] = async (table) => {
  const { data } = await supabase.from(table).select("*")
  return data ?? undefined
}

const getById: Database["getById"] = async (table, id) => {
  const { data } = await supabase
    .from(table)
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
