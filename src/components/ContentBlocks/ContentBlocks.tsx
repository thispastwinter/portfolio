import { ComponentProps } from "react"
import { ContentBlock as ContentBlockType } from "../../types/ContentBlock"
import { ContentBlock } from "../ContentBlock"

interface ContentBlockProps {
  contentBlocks: ContentBlockType[]
  containerProps?: ComponentProps<"div">
}

export function ContentBlocks({
  contentBlocks,
  containerProps,
}: ContentBlockProps) {
  return (
    <>
      {contentBlocks.map((content) => (
        <ContentBlock
          containerProps={containerProps}
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
