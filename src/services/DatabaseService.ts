import { createClient } from "@supabase/supabase-js"
import { SUPABASE_KEY, SUPABASE_URL } from "../constants/Environment"

type RelationShip<Table> = {
  name: string
  values: Array<keyof Table>
}

interface Database {
  getAll: <Data, Table = unknown>(
    route: string,
    relationship?: RelationShip<Table>,
  ) => Promise<Data[] | undefined>
  getById: <Data, Table = unknown>(
    route: string,
    id: string,
    relationship?: RelationShip<Table>,
  ) => Promise<Data | undefined>
}

const getRelationshipQuery = <Table>(relationship?: RelationShip<Table>) =>
  `${relationship?.name}(${relationship?.values.join(",")})`

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const getAll: Database["getAll"] = async (route, relationship) => {
  const { data } = await supabase
    .from(route)
    .select(`*, ${getRelationshipQuery(relationship)})`)
  return data ?? undefined
}

const getById: Database["getById"] = async (route, id, relationship) => {
  const { data } = await supabase
    .from(route)
    .select(`*, ${getRelationshipQuery(relationship)})`)
    .eq("id", id)
    .limit(1)
    .single()

  return data ?? undefined
}

export const DatabaseService: Database = {
  getAll,
  getById,
}
