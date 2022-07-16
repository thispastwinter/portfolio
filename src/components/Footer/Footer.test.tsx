import { render, screen } from "../../testing/test-utils"
import { Footer } from "./Footer"

describe("Footer", () => {
  it("renders with children", () => {
    // Arrange
    const children = "Hello World"

    // Act
    render(<Footer>{children}</Footer>)
    const received = screen.getByText(children)

    // Assert
    expect(received).toBeInTheDocument()
  })
})
