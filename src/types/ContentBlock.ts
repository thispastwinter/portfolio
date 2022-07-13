type ContentBlockType = "paragraph" | "title" | "url" | "image" | "sub_title"

export type ContentBlock = {
  id: number
  order: number
  alt_text: string
  type: ContentBlockType
  value: string
  display_value: string
}
