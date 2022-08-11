import { Placement } from "@popperjs/core"
import {
  AriaAttributes,
  CSSProperties,
  KeyboardEvent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react"
import { usePopper } from "react-popper"
import { Transition, TransitionStatus } from "react-transition-group"
import classes from "./Tooltip.module.css"

type TooltipProps = {
  children: ReactNode
  label: string
  fontSize?: number
  animationDuration?: number
  alwaysShow?: boolean
  showArrow?: boolean
  distance?: number
  skidding?: number
  placement?: Placement
  enterDelay?: number
  exitDelay?: number
  hideOnClick?: boolean
} & Pick<AriaAttributes, "aria-describedby">

export function Tooltip({
  children,
  label,
  fontSize = 14,
  animationDuration = 300,
  showArrow,
  alwaysShow,
  placement = "auto",
  distance = 10,
  skidding = 0,
  enterDelay,
  exitDelay,
  hideOnClick,
  ...aria
}: TooltipProps) {
  const enterTimeout = useRef<NodeJS.Timeout>()
  const exitTimeout = useRef<NodeJS.Timeout>()

  useEffect(() => {
    return () => {
      clearTimeout(enterTimeout.current)
      clearTimeout(exitTimeout.current)
    }
  }, [])

  const [isOpen, setIsOpen] = useState(false)
  /* 
  in order to ensure all elements are properly anchored, 
  we need these states updated via their ref callbacks
  See docs: https://popper.js.org/react-popper/v2/#example
  */
  const [anchorElement, setAnchorElement] = useState<HTMLSpanElement | null>(
    null,
  )
  const [boxElement, setBoxElement] = useState<HTMLSpanElement | null>(null)
  const arrowRef = useRef<HTMLDivElement>(null)

  const { styles, attributes } = usePopper(anchorElement, boxElement, {
    modifiers: [
      { name: "arrow", options: { element: arrowRef.current } },
      {
        name: "offset",
        options: { offset: [skidding, distance] },
      },
    ],
    placement,
  })

  const handleShow = () => setIsOpen(true)

  const handleHide = () => setIsOpen(false)

  const handleClick = () => hideOnClick && handleHide()

  const handleKeyDown = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Escape") {
      handleHide()
    }
    if (e.key === "Enter") {
      handleShow()
    }
  }

  const handleMouseEnter = () => {
    clearTimeout(enterTimeout.current)
    if (enterDelay) {
      enterTimeout.current = setTimeout(handleShow, enterDelay)
    } else {
      handleShow()
    }
  }

  const handleMouseLeave = () => {
    clearTimeout(exitTimeout.current)
    if (exitDelay) {
      exitTimeout.current = setTimeout(handleHide, exitDelay)
    } else {
      handleHide()
    }
  }

  const defaultStyle = {
    transition: `opacity ${animationDuration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles: { [key in TransitionStatus]: CSSProperties } = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exited: {},
    exiting: {},
    unmounted: {},
  }

  return (
    <>
      <span
        data-testid="tooltip_span"
        role={hideOnClick ? "button" : "none"}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={setAnchorElement}
        {...aria}
      >
        {children}
        <span className={classes.screenReader}>{label}</span>
      </span>
      <Transition in={isOpen || alwaysShow} timeout={animationDuration}>
        {(status) => (
          <span
            data-testid="tooltip"
            id={aria["aria-describedby"]}
            role="tooltip"
            ref={setBoxElement}
            style={{
              ...styles.popper,
              ...defaultStyle,
              ...transitionStyles[status],
              fontSize,
            }}
            className={classes.box}
            {...attributes.popper}
          >
            {label}
            {showArrow && (
              <div
                data-testid="tooltip_arrow"
                ref={arrowRef}
                className={classes.arrow}
                style={styles.arrow}
              />
            )}
          </span>
        )}
      </Transition>
    </>
  )
}