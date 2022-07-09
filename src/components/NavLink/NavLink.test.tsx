import { URL } from "../../constants/URL"
import { render, screen } from "../../testing/test-utils"
import { NavLink } from "./NavLink"

describe("NavLink", () => {
  it("renders internal links", () => {
    // Arrange
    const path = "/projects"
    const text = "Recent Work"

    // Act
    render(<NavLink to={path}>{text}</NavLink>)
    const received = screen.getByText(text)

    // Assert
    expect(received).toBeInTheDocument()
  })
  it("renders external links", () => {
    // Arrange
    const externalLink = URL.github
    const text = "Github"

    // Act
    render(<NavLink to={externalLink}>{text}</NavLink>)
    const received = screen.getByText(text)

    // Assert
    expect(received).toBeInTheDocument()
  })
})
