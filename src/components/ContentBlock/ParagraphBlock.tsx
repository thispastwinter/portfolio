import classNames from "classnames"
import { ContentBlockProps } from "../../types/ContentBlockProps"

export function ParagraphBlock(props: Omit<ContentBlockProps, "type">) {
  return (
    <p className={classNames(props.className)} data-testid={props.data_testid}>
      {props.display_value.split("\n")}
    </p>
  )
}
