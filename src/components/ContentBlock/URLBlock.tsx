import { ContentBlockProps } from "../../types/ContentBlockProps"
import { Clickable } from "../Clickable"

export function URLBlock(props: Omit<ContentBlockProps, "type">) {
  return (
    <Clickable
      variant="link"
      className={props.className}
      testId={props.data_testid}
      to={props.value}
      text={props.display_value}
    />
  )
}
