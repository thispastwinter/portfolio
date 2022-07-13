import { render, screen } from "../../testing/test-utils"
import { ContentContainer } from "./ContentContainer"
import { contentColumns } from "./mocks/contentColumns"

describe("ContentContainer", () => {
  it("name prop is rendered", () => {
    // Arrange
    const altText = "A picture"
    const [
      ,
      {
        content_rows: [
          {
            content_blocks: [{ display_value: paragraph1 }],
          },
          {
            content_blocks: [{ display_value: paragraph2 }],
          },
        ],
      },
    ] = contentColumns

    // Act
    render(<ContentContainer columns={contentColumns} />)
    const receivedAltText = screen.getByAltText(altText)
    const receivedParagraph1 = screen.getByText(paragraph1)
    const receivedParagraph2 = screen.getByText(paragraph2)

    // Assert
    expect(receivedAltText).toBeInTheDocument()
    expect(receivedParagraph1).toBeInTheDocument()
    expect(receivedParagraph2).toBeInTheDocument()
  })
})
