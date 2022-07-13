import { ContentBlock } from "./ContentBlock"

export type ContentRow = {
  id: number
  order: number
  content_blocks: ContentBlock[]
}
