import classNames from "classnames"
import { ComponentProps, ReactNode } from "react"

export interface ButtonProps extends ComponentProps<"button"> {
  text: string
  leftAdornment?: ReactNode
  rightAdornment?: ReactNode
}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        "flex items-center mt-4 border p-4 border-gray-400 text-gray-700 ease-in-out duration-300 hover:border-gray-800 hover:bg-gray-800 hover:text-gray-50",
        props.className,
      )}
    >
      {props.leftAdornment}
      {props.text}
      {props.rightAdornment}
    </button>
  )
}
