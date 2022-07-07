import classNames from "classnames"
import { useMatch } from "react-router-dom"

export function Header() {
  const match = useMatch("/projects/:id")

  return (
    <div
      className={classNames({ "invisible h-0": match }, "md:visible md:h-auto")}
    >
      <div className="mb-8">
        <div className="flex flex-wrap mb-6">
          <p className="text-8xl font-display1 ml-4 mr-6">Justin</p>
          <p className="text-8xl font-display1">Klaas</p>
        </div>
        <p className="text-2xl font-light text-secondary mt-4">
          application developer specializing in React-Native, GraphQL, and
          Typescript.
        </p>
      </div>
    </div>
  )
}
