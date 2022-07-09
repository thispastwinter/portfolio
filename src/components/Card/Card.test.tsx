import { render, screen } from "../../testing/test-utils"
import { Card } from "./Card"

describe("Card", () => {
  it("renders children", () => {
    // Arrange
    const text = "This is a card."

    // Act
    render(<Card>{text}</Card>)
    const received = screen.getByText(text)

    // Assert
    expect(received).toBeInTheDocument()
  })
})
