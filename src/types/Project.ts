import { Category } from "./Category"
import { ContentColumn } from "./ContentColumn"

export type Project = {
  id: string
  start_date: string
  end_date: string
  name: string
  description?: string
  short_description?: string
  url?: string
  image?: string
  categories: Category[]
  content_columns: ContentColumn[]
}
