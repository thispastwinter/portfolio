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
        <div className="flex">
          <Logo
            className="cursor-pointer"
            onClick={goBackToHome}
            aria-label="Return to home"
          />
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
  return <header>{child}</header>
}
