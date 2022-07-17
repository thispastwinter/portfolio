import classNames from "classnames"
import { ContentBlockProps } from "../../types/ContentBlockProps"

export function ImageBlock(props: Omit<ContentBlockProps, "type">) {
  return (
    <img
      className={classNames("rounded-md", props.className)}
      src={props.value}
      alt={props.alt_text}
      data-testid={props.data_testid}
    />
  )
}
