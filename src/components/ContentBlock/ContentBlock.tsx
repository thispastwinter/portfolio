import { ContentBlock as ContentBlockType } from "../../types/ContentBlock"
import { Icon } from "../Icon"

export type ContentBlockProps = Omit<
  ContentBlockType,
  "order" | "created_at" | "id"
>

const ContentBlockMap: {
  [key in ContentBlockType["type"]]: (
    props: Omit<ContentBlockProps, "type"> & { data_testid: string },
  ) => JSX.Element
} = {
  image: (props) => (
    <img
      className="py-4"
      src={props.value}
      alt={props.alt_text}
      data-testid={props.data_testid}
    />
  ),
  paragraph: (props) => (
    <p data-testid={props.data_testid}>{props.display_value}</p>
  ),
  sub_title: (props) => (
    <p data-testid={props.data_testid} className="text-lg py-2">
      {props.display_value}
    </p>
  ),
  title: (props) => (
    <p data-testid={props.data_testid} className="text-2xl font-medium py-2">
      {props.display_value}
    </p>
  ),
  url: (props) => (
    <a
      data-testid={props.data_testid}
      className="flex items-center mt-4 mr-1 font-bold"
      target="_blank"
      href={props.value}
      rel="noreferrer"
    >
      {props.display_value}
      <Icon size={20} className="ml-1" name="arrowUpRight" />
    </a>
  ),
}

export function ContentBlock({ type, ...rest }: ContentBlockProps) {
  const Content = ContentBlockMap[type]

  return <Content {...rest} data_testid="content_block" />
}
