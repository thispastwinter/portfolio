import classNames from "classnames"
import { ContentBlockProps } from "../../types/ContentBlockProps"

export function SubtitleBlock(props: Omit<ContentBlockProps, "type">) {
  return (
    <p
      data-testid={props.data_testid}
      className={classNames("text-lg", props.className)}
    >
      {props.display_value}
    </p>
  )
}
