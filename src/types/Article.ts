import { ContentBlock } from "./ContentBlock"

export type Article = {
  id: number
  created_at: string
  name: string
  content_blocks: ContentBlock[]
}
