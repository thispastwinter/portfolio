import { useNavigate } from "react-router-dom"
import { Icon } from "../Icon"

interface HeaderProps {
  isHidden?: boolean
}

export function Header({ isHidden = false }: HeaderProps) {
  const navigate = useNavigate()

  return !isHidden ? (
    <div className="md:h-auto md:mb-16">
      <div className="mb-4">
        <div className="flex flex-wrap mb-4 max-w-sm">
          <p className="text-8xl font-display1 ml-1.5 text-slate-600">justin</p>
          <p className="text-8xl font-display1 text-slate-800">klaas</p>
        </div>
        <p className="text-2xl font-light text-secondary mt-4">
          application developer specializing in React-Native, GraphQL, and
          Typescript.
        </p>
      </div>
    </div>
  ) : (
    <button
      className="flex pb-4 items-center md:hidden"
      onClick={() => navigate("../")}
    >
      <Icon name="chevronLeft" size={32} />
      <p className="text-xl">Home</p>
    </button>
  )
}
