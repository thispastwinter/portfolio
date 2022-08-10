import { useNavigate } from "react-router-dom"
import { Icon } from "../Icon"
import { ReactComponent as Logo } from "../../assets/images/logo.svg"

interface HeaderProps {
  isHidden?: boolean
}

export function Header({ isHidden = false }: HeaderProps) {
  const navigate = useNavigate()
  const goBackToHome = () => {
    navigate("/")
  }

  const child = !isHidden ? (
    <div className="mb-16">
      <div className="mb-4">
        <button
          className="flex"
          aria-label="Return to home"
          onClick={goBackToHome}
        >
          <Logo className="cursor-pointer" aria-label="Justin Klaas logo" />
        </button>
        <h1 className="sr-only">Justin Klaas</h1>
        <h4 className="text-2xl font-light text-secondary mt-4">
          application developer specializing in React-Native, GraphQL, and
          Typescript.
        </h4>
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
  return <header>{child}</header>
}
