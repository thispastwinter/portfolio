import classNames from "classnames"
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
      className={classNames("rounded-md", props.className)}
      src={props.value}
      alt={props.alt_text}
      data-testid={props.data_testid}
    />
  ),
  paragraph: (props) => (
    <p className={classNames(props.className)} data-testid={props.data_testid}>
      {props.display_value.split("\n")}
    </p>
  ),
  sub_title: (props) => (
    <p
      data-testid={props.data_testid}
      className={classNames("text-lg", props.className)}
    >
      {props.display_value}
    </p>
  ),
  title: (props) => (
    <p
      data-testid={props.data_testid}
      className={classNames("text-2xl font-medium", props.className)}
    >
      {props.display_value}
    </p>
  ),
  url: (props) => (
    <a
      data-testid={props.data_testid}
      className={classNames(
        "flex items-center font-bold hover:opacity-60",
        props.className,
      )}
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

  return (
    <div>
      <Content {...rest} data_testid="content_block" />
    </div>
  )
}
