import classNames from "classnames"
import { useMatch } from "react-router-dom"
import { NavLink } from "../NavLink"

export function Header() {
  const match = useMatch("/projects/:id")

  return (
    <div
      className={classNames(
        { "invisible h-0": match },
        "md:visible md:h-auto md:mb-16",
      )}
    >
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
        <div className="flex gap-10 font-medium text-slate-600 text-xl">
          <NavLink to="projects">Recent Work</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="https://www.github.com/thispastwinter">Github</NavLink>
          <NavLink to="https://www.linkedin.com/in/justin-klaas-33a04085/">
            LinkedIn
          </NavLink>
        </div>
      </nav>
    </div>
  )
}
