import { Category } from "./Category"

export type Project = {
  id: string
  created_at: string
  name: string
  description: string
  image: string
  categories: Category[]
}
