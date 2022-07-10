import { render, screen } from "../../testing/test-utils"
import { ContentBlocks } from "./ContentBlocks"
import { contentBlocks } from "./mocks/contentBlocks"

describe("ContentBlocks", () => {
  it("renders ContentBlocks", () => {
    // Arrange
    const testID = "content_block"

    // Act
    render(<ContentBlocks contentBlocks={contentBlocks} />)
    const received = screen.getAllByTestId(testID)

    // Assert
    expect(received).toHaveLength(contentBlocks.length)
  })
})
