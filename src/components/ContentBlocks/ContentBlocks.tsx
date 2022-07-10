import { ContentBlock as ContentBlockType } from "../../types/ContentBlock"
import { ContentBlock } from "../ContentBlock/ContentBlock"

interface ContentBlockProps {
  contentBlocks: ContentBlockType[]
}

export function ContentBlocks({ contentBlocks }: ContentBlockProps) {
  return (
    <>
      {contentBlocks.map((content) => (
        <ContentBlock
          key={content.order}
          alt_text={content.alt_text}
          display_value={content.display_value}
          value={content.value}
          type={content.type}
        />
      ))}
    </>
  )
}
