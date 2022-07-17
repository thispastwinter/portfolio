import { ContentBlock } from "./ContentBlock"

export interface ContentBlockProps
  extends Omit<ContentBlock, "order" | "created_at" | "id"> {
  data_testid?: string
}
