import classNames from "classnames"
import { URL } from "../../constants/URL"
import { NavLink } from "../NavLink"

interface HeaderProps {
  isHidden?: boolean
}

export function Header({ isHidden = false }: HeaderProps) {
  return (
    <div className={classNames({ hidden: isHidden }, "md:h-auto md:mb-16")}>
      <div className="mb-4">
        <div className="flex flex-wrap mb-4 max-w-sm">
          <p className="text-8xl font-display1 ml-1.5 text-slate-600 drop-shadow-lg">
            justin
          </p>
          <p className="text-8xl font-display1 text-slate-800 drop-shadow-lg">
            klaas
          </p>
        </div>
        <p className="text-2xl font-light text-secondary mt-4">
          application developer specializing in React-Native, GraphQL, and
          Typescript.
        </p>
      </div>
      <nav className="invisible h-0 md:visible md:h-auto">
        <div className="flex gap-10">
          <NavLink to="projects">Recent Work</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to={URL.github}>Github</NavLink>
          <NavLink to={URL.linkedIn}>LinkedIn</NavLink>
        </div>
      </nav>
    </div>
  )
}
