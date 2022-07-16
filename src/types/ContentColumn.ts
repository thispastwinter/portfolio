import { ContentRow } from "./ContentRow"

export type ContentColumn = {
  id: number
  order: number
  content_rows: ContentRow[]
  className: string
}
