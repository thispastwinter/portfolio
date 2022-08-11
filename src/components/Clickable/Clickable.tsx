import classNames from "classnames"
import { ComponentProps, ReactNode } from "react"
import { Icon } from "../Icon"

interface DefaultProps {
  text?: string
  startIcon?: ReactNode
  endIcon?: ReactNode
  className?: string
  testId?: string
  ariaLabel?: string
}

interface LinkProps extends DefaultProps {
  variant: "link"
  to: string
}

export interface ClickableProps extends DefaultProps {
  variant: "button"
  onClick: ComponentProps<"button">["onClick"]
  onHover?: ComponentProps<"button">["onMouseEnter"]
}

const getHoverAndFocusClasses = () => {
  const baseStyles = ["border-gray-800", "bg-gray-800", "text-gray-50"] as const
  const hoverArray = baseStyles.map(
    (baseStyle) => `hover:${baseStyle}` as const,
  )
  const focusArray = baseStyles.map(
    (baseStyle) => `focus:${baseStyle}` as const,
  )
  return [...hoverArray, ...focusArray].join(" ")
}

type Props = ClickableProps | LinkProps

export function Clickable(props: Props) {
  const hoverAndFocusClasses = getHoverAndFocusClasses()
  const className = classNames(
    {
      "flex items-center mt-4 border p-4 border-gray-400 text-gray-700 ease-in-out duration-300":
        props.variant === "button",
      [hoverAndFocusClasses]: props.variant === "button",
    },
    {
      "flex items-center font-bold hover:opacity-60": props.variant === "link",
    },
    props.className,
  )

  if (props.variant === "button") {
    return (
      <button
        aria-label={props.ariaLabel}
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
    const ariaLabel = props.ariaLabel || `navigate to ${props.to}`
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
