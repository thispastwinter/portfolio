import classNames from "classnames"
import { ComponentProps } from "react"

type CardProps = ComponentProps<"div">

export function Card({ className, children, ...rest }: CardProps) {
  return (
    <div
      {...rest}
      className={classNames(
        "p-4 rounded-lg bg-white drop-shadow-xl w-full h-full",
        className,
      )}
    >
      {children}
    </div>
  )
}
