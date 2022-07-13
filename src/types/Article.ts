import { ContentColumn } from "./ContentColumn"

export type Article = {
  id: number
  created_at: string
  name: string
  content_columns: ContentColumn[]
}
