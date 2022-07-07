import { Category } from "./Category"

export type Project = {
  id: string
  created_at: string
  name: string
  description?: string
  short_description?: string
  url?: string
  image?: string
  categories: Category[]
}
