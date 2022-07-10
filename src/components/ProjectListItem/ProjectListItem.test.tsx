import { render, screen } from "../../testing/test-utils"
import { project } from "./mocks/project"
import { ProjectListItem } from "./ProjectListItem"

describe("ProjectListItem", () => {
  it("renders basic info", () => {
    // Arrange
    const name = project.name
    const description = project.short_description ?? ""

    // Act
    render(<ProjectListItem project={project} />)
    const receivedName = screen.getByText(name)
    const receivedDescription = screen.getByText(description)

    // Assert
    expect(receivedName).toBeInTheDocument()
    expect(receivedDescription).toBeInTheDocument()
  })
  it("renders categories", () => {
    // Arrange
    const categories = project.categories
    const iconTestIDMatch = /icon/

    // Act
    render(<ProjectListItem project={project} />)
    const receivedIcons = screen.getAllByTestId(iconTestIDMatch, {
      exact: false,
    })

    // Assert
    expect(receivedIcons).toHaveLength(categories.length)
  })
})
