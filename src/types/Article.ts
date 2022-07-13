import { Column } from "./Column"

export type Article = {
  id: number
  created_at: string
  name: string
  columns: Column[]
}
