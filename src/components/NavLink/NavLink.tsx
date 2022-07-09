import classNames from "classnames"
import { ReactNode } from "react"
import { NavLink as RouterNavLink } from "react-router-dom"
import "./index.css"

interface NavLinkProps {
  to: string
  tooltip?: string
  children: ReactNode
}

export function NavLink({ children, to }: NavLinkProps) {
  const getClassName = (isActive?: boolean) =>
    classNames({ active: isActive }, "nav-item")

  const isExternalLink = to.includes("https")

  const ariaLabel = `navigate to ${to}`

  return !isExternalLink ? (
    <RouterNavLink aria-label={ariaLabel} to={to}>
      {({ isActive }) => (
        <div className={getClassName(isActive)}>{children}</div>
      )}
    </RouterNavLink>
  ) : (
    <a
      aria-label={ariaLabel}
      className={getClassName()}
      href={to}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  )
}
