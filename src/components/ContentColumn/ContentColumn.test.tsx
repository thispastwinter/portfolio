import { render, screen } from "../../testing/test-utils"
import { ContentColumn } from "./ContentColumn"
import { contentColumn } from "./mocks/contentColumn"

describe("ContentColumn", () => {
  it("renders", () => {
    // Arrange
    const { content_rows } = contentColumn
    const [{ display_value: title1 }] = content_rows[0].content_blocks
    const [{ display_value: title2 }] = content_rows[2].content_blocks
    const [{ display_value: paragraph1 }] = content_rows[1].content_blocks
    const [{ display_value: paragraph2 }] = content_rows[3].content_blocks

    // Act
    render(<ContentColumn {...contentColumn} />)
    const receivedTitle1 = screen.getByText(title1)
    const receivedTitle2 = screen.getByText(title2)
    const receivedParagraph1 = screen.getByText(paragraph1)
    const receivedParagraph2 = screen.getByText(paragraph2)

    // Assert
    expect(receivedTitle1).toBeInTheDocument()
    expect(receivedTitle2).toBeInTheDocument()
    expect(receivedParagraph1).toBeInTheDocument()
    expect(receivedParagraph2).toBeInTheDocument()
  })
})
