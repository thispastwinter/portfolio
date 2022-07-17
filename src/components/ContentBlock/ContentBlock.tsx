import { ContentBlock as ContentBlockType } from "../../types/ContentBlock"
import { ContentBlockProps } from "../../types/ContentBlockProps"
import { ImageBlock } from "./ImageBlock"
import { ParagraphBlock } from "./ParagraphBlock"
import { SubtitleBlock } from "./SubtitleBlock"
import { TitleBlock } from "./TitleBlock"
import { URLBlock } from "./URLBlock"

type ContentBlockMapType = {
  [key in ContentBlockType["type"]]: JSX.Element
}

const getContentBlock = (props: ContentBlockProps) => {
  const ContentBlockMap: ContentBlockMapType = {
    image: <ImageBlock {...props} />,
    paragraph: <ParagraphBlock {...props} />,
    sub_title: <SubtitleBlock {...props} />,
    title: <TitleBlock {...props} />,
    url: <URLBlock {...props} />,
  }
  return ContentBlockMap[props.type]
}

const Content = (props: ContentBlockProps) => getContentBlock(props)

export function ContentBlock(props: ContentBlockProps) {
  return <Content {...props} data_testid="content_block" />
}
