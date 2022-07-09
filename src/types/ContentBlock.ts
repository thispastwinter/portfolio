type ContentBlockType = "paragraph" | "title" | "url" | "image" | "sub_title"

export type ContentBlock = {
  id: string
  created_at: string
  type: ContentBlockType
  value: string
}
