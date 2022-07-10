type ContentBlockType = "paragraph" | "title" | "url" | "image" | "sub_title"

export type ContentBlock = {
  id: number
  order: number
  created_at: string
  alt_text: string
  type: ContentBlockType
  value: string
  display_value: string
}
