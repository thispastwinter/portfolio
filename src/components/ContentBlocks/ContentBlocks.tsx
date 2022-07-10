import { ComponentProps } from "react"
import { ContentBlock as ContentBlockType } from "../../types/ContentBlock"
import { ContentBlock } from "../ContentBlock/ContentBlock"

interface ContentBlockProps {
  contentBlocks: ContentBlockType[]
  containerProps?: ComponentProps<"div">
}

export function ContentBlocks({
  contentBlocks,
  containerProps,
}: ContentBlockProps) {
  const sortByOrder = (a: ContentBlockType, b: ContentBlockType) =>
    a.order - b.order

  return (
    <>
      {contentBlocks.sort(sortByOrder).map((content) => (
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