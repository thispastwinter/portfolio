import { ComponentProps } from "react"
import { ContentBlock as ContentBlockType } from "../../types/ContentBlock"
import { ContentBlock } from "../ContentBlock"

interface ContentBlockProps {
  contentBlocks: ContentBlockType[]
  imageProps?: ComponentProps<"img">
  paragraphProps?: ComponentProps<"p">
  subtitleProps?: ComponentProps<"p">
  titleProps?: ComponentProps<"p">
  urlProps?: ComponentProps<"a">
  containerProps?: ComponentProps<"div">
}

export function ContentBlocks({ contentBlocks, ...rest }: ContentBlockProps) {
  return (
    <>
      {contentBlocks.map((content) => (
        <ContentBlock
          {...rest}
          className={content.className}
          key={content.id}
          alt_text={content.alt_text}
          display_value={content.display_value}
          value={content.value}
          type={content.type}
        />
      ))}
    </>
  )
}
