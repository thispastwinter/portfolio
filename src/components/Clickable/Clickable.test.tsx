import userEvent from "@testing-library/user-event"
import { render, screen } from "../../testing/test-utils"
import { Icon } from "../Icon"
import { Clickable } from "./Clickable"

describe("Clickable", () => {
  it("fires onClick callback when clicked", async () => {
    // Arrange
    const onClick = jest.fn()
    const text = "Hello Clickable"

    // Act
    render(<Clickable onClick={onClick} variant="button" text={text} />)
    const button = screen.getByText(text) as HTMLButtonElement

    await userEvent.click(button)

    // Assert
    expect(onClick).toBeCalled()
  })
  it("renders anchor element when variant prop is 'link'", () => {
    // Arrange
    const variant = "link"
    const text = "Hello Anchor"

    // Act
    render(<Clickable variant={variant} to="" text={text} />)
    const anchor = screen.getByText(text)

    // Assert
    expect(anchor).toBeInstanceOf(HTMLAnchorElement)
  })
  it("renders button element when component prop is 'button'", () => {
    // Arrange
    const variant = "button"
    const text = "Hello Clickable"

    // Act
    render(<Clickable onClick={jest.fn()} variant={variant} text={text} />)
    const button = screen.getByText(text)

    // Assert
    expect(button).toBeInstanceOf(HTMLButtonElement)
  })
  it("renders 'arrowUpRight' as default endIcon for link variant", () => {
    // Arrange
    const iconTestID = "icon_arrowUpRight"

    // Act
    render(<Clickable variant="link" to="" />)
    const received = screen.getByTestId(iconTestID)

    // Assert
    expect(received).toBeInTheDocument()
  })
  it("renders custom icons", () => {
    // Arrange
    const startIcon = <Icon name="linkedin" />
    const startIconTestID = `icon_linkedin`
    const endIcon = <Icon name="github" />
    const endIconTestID = `icon_github`

    // Act
    render(
      <Clickable
        startIcon={startIcon}
        endIcon={endIcon}
        variant="link"
        to=""
      />,
    )
    const receivedStartIcon = screen.getByTestId(startIconTestID)
    const receivedEndIcon = screen.getByTestId(endIconTestID)

    // Assert
    expect(receivedStartIcon).toBeInTheDocument()
    expect(receivedEndIcon).toBeInTheDocument()
  })
})
