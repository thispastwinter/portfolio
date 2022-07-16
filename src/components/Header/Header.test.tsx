import { render, screen } from "../../testing/test-utils"
import { Header } from "./Header"

describe("Header", () => {
  it("renders", () => {
    // Arrange
    const headerImageLabel = "Return to home"
    const subTitle =
      "application developer specializing in React-Native, GraphQL, and Typescript."

    // Act
    render(<Header />)
    const receivedHeaderImage = screen.getByLabelText(headerImageLabel)
    const receivedSubTitle = screen.getByText(subTitle)

    // Assert
    expect(receivedHeaderImage).toBeInTheDocument()
    expect(receivedSubTitle).toBeInTheDocument()
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
