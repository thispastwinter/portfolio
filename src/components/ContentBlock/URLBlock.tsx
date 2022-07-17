import classNames from "classnames"
import { ContentBlockProps } from "../../types/ContentBlockProps"
import { Icon } from "../Icon"

export function URLBlock(props: Omit<ContentBlockProps, "type">) {
  return (
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
  )
}
