import classNames from "classnames"
import { ComponentProps } from "react"
import { ContentBlock as ContentBlockType } from "../../types/ContentBlock"
import { Icon } from "../Icon"

export interface ContentBlockProps
  extends Omit<ContentBlockType, "order" | "created_at" | "id"> {
  imageProps?: ComponentProps<"img">
  paragraphProps?: ComponentProps<"p">
  subtitleProps?: ComponentProps<"p">
  titleProps?: ComponentProps<"p">
  urlProps?: ComponentProps<"a">
  containerProps?: ComponentProps<"div">
}

const ContentBlockMap: {
  [key in ContentBlockType["type"]]: (
    props: Omit<ContentBlockProps, "type"> & { data_testid: string },
  ) => JSX.Element
} = {
  image: (props) => (
    <img
      className={classNames(
        "rounded-md",
        props.imageProps?.className,
        props.className,
      )}
      src={props.value}
      alt={props.alt_text}
      data-testid={props.data_testid}
    />
  ),
  paragraph: (props) => (
    <p
      {...props.paragraphProps}
      className={classNames(props.paragraphProps?.className, props.className)}
      data-testid={props.data_testid}
    >
      {props.display_value.split("\n")}
    </p>
  ),
  sub_title: (props) => (
    <p
      {...props.subtitleProps}
      data-testid={props.data_testid}
      className={classNames(
        "text-lg",
        props.subtitleProps?.className,
        props.className,
      )}
    >
      {props.display_value}
    </p>
  ),
  title: (props) => (
    <p
      {...props.titleProps}
      data-testid={props.data_testid}
      className={classNames(
        "text-2xl font-medium",
        props.titleProps?.className,
        props.className,
      )}
    >
      {props.display_value}
    </p>
  ),
  url: (props) => (
    <a
      {...props.urlProps}
      data-testid={props.data_testid}
      className={classNames(
        "flex items-center font-bold",
        props.urlProps?.className,
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
    <div {...rest.containerProps}>
      <Content {...rest} data_testid="content_block" />
    </div>
  )
}
