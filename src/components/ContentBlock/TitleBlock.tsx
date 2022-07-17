import classNames from "classnames"
import { ContentBlockProps } from "../../types/ContentBlockProps"

export function TitleBlock(props: Omit<ContentBlockProps, "type">) {
  return (
    <p
      data-testid={props.data_testid}
      className={classNames("text-2xl font-medium", props.className)}
    >
      {props.display_value}
    </p>
  )
}
