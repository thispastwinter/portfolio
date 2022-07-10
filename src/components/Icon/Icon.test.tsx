import { render, screen } from "../../testing/test-utils"
import { Icon, IconName, getIcon } from "./Icon"

describe("Icon", () => {
  it("renders all icons", () => {
    // Arrange
    const icons = Object.keys(getIcon({})) as IconName[]
    const testIdMatch = /icon/

    // Act
    render(
      <div>
        {icons.map((iconName) => (
          <Icon key={iconName} name={iconName} />
        ))}
      </div>,
    )
    const receivedIcons = screen.getAllByTestId(testIdMatch, {
      exact: false,
    })

    // Assert
    expect(receivedIcons).toHaveLength(icons.length)
  })
})
