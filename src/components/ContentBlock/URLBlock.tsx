import { ContentBlockProps } from "../../types/ContentBlockProps"
import { Button } from "../Button"

export function URLBlock(props: Omit<ContentBlockProps, "type">) {
  return (
    <Button
      variant="link"
      className={props.className}
      testId={props.data_testid}
      to={props.value}
      text={props.display_value}
    />
  )
}
