import classNames from "classnames"
import { ComponentProps, ReactNode } from "react"
import { Icon } from "../Icon"

interface DefaultProps {
  text?: string
  startIcon?: ReactNode
  endIcon?: ReactNode
  className?: string
  testId?: string
}

interface LinkProps extends DefaultProps {
  variant: "link"
  to: string
}

export interface ButtonProps extends DefaultProps {
  variant: "button"
  onClick: ComponentProps<"button">["onClick"]
}

type Props = ButtonProps | LinkProps

export function Button(props: Props) {
  const className = classNames(
    {
      "flex items-center mt-4 border p-4 border-gray-400 text-gray-700 ease-in-out duration-300 hover:border-gray-800 hover:bg-gray-800 hover:text-gray-50":
        props.variant === "button",
    },
    {
      "flex items-center font-bold hover:opacity-60": props.variant === "link",
    },
    props.className,
  )

  if (props.variant === "button") {
    return (
      <button
        data-testid={props.testId}
        onClick={props.onClick}
        className={className}
      >
        {props.startIcon}
        {props.text}
        {props.endIcon}
      </button>
    )
  } else {
    const ariaLabel = `navigate to ${props.to}`
    const anchorPropsType = props.to?.includes("http") ? "external" : "internal"
    const defaultAnchorProps = {
      href: props.to,
      "aria-label": ariaLabel,
    }
    const anchorProps = {
      external: {
        ...defaultAnchorProps,
        target: "_blank",
        rel: "noreferrer",
      },
      internal: { ...defaultAnchorProps },
    }

    return (
      <a
        data-testid={props.testId}
        {...anchorProps[anchorPropsType]}
        className={className}
      >
        {props.startIcon}
        {props.text}
        {!props.endIcon && !props.startIcon ? (
          <Icon size={20} className="ml-1" name="arrowUpRight" />
        ) : (
          props.endIcon
        )}
      </a>
    )
  }
}
