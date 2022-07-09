import { ReactNode } from "react"
import { MemoryRouter } from "react-router-dom"

interface Props {
  children?: ReactNode
  initialEntries?: string[]
}

export default function TestProvider({ children, initialEntries }: Props) {
  // add any context providers necessary for your tests to run

  return <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
}
