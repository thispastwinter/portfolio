import { render, screen } from "../../testing/test-utils"
import { Header } from "./Header"

describe("Header", () => {
  it("renders", () => {
    // Arrange
    const title1 = "justin"
    const title2 = "klaas"
    const subTitle =
      "application developer specializing in React-Native, GraphQL, and Typescript."
    const navLinkLabel = /navigate to/i

    // Act
    render(<Header />)
    const receivedTitle1 = screen.getByText(title1)
    const receivedTitle2 = screen.getByText(title2)
    const receivedSubTitle = screen.getByText(subTitle)
    const receivedNavLinks = screen.getAllByLabelText(navLinkLabel, {
      exact: false,
    })

    // Assert
    expect(receivedTitle1).toBeInTheDocument()
    expect(receivedTitle2).toBeInTheDocument()
    expect(receivedSubTitle).toBeInTheDocument()
    expect(receivedNavLinks).toHaveLength(4)
  })
  it("is hidden when isHidden is 'true'", () => {
    // Arrange
    const isHidden = true
    const title1 = "justin"
    const title2 = "klaas"

    // Act
    render(<Header isHidden={isHidden} />)
    const receivedTitle1 = screen.queryByText(title1)
    const receivedTitle2 = screen.queryByText(title2)

    // Assert
    expect(receivedTitle1).not.toBeInTheDocument()
    expect(receivedTitle2).not.toBeInTheDocument()
  })
})
