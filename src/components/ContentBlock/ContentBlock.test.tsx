import { render, screen } from "../../testing/test-utils"
import { ContentBlock as ContentBlockType } from "../../types/ContentBlock"
import { ContentBlock } from "./ContentBlock"

describe("ContentBlock", () => {
  it("renders paragraph content", () => {
    // Arrange
    const contentBlock: ContentBlockType = {
      alt_text: "",
      display_value: "I am a paragraph",
      id: 1,
      order: 1,
      type: "paragraph",
      value: "",
    }

    // Act
    render(<ContentBlock {...contentBlock} />)
    const received = screen.getByText(contentBlock.display_value)

    // Assert
    expect(received).toBeInTheDocument()
  })
  it("renders title content", () => {
    // Arrange
    const contentBlock: ContentBlockType = {
      alt_text: "",
      display_value: "I am a title",
      id: 2,
      order: 2,
      type: "title",
      value: "",
    }

    // Act
    render(<ContentBlock {...contentBlock} />)
    const received = screen.getByText(contentBlock.display_value)

    // Assert
    expect(received).toBeInTheDocument()
  })
  it("renders sub_title content", () => {
    // Arrange
    const contentBlock: ContentBlockType = {
      alt_text: "",
      display_value: "I am a subtitle",
      id: 3,
      order: 3,
      type: "sub_title",
      value: "",
    }

    // Act
    render(<ContentBlock {...contentBlock} />)
    const received = screen.getByText(contentBlock.display_value)

    // Assert
    expect(received).toBeInTheDocument()
  })
  it("renders url content", () => {
    // Arrange
    const contentBlock: ContentBlockType = {
      alt_text: "",
      display_value: "Website",
      id: 4,
      order: 4,
      type: "url",
      value: "https://www.google.com",
    }

    // Act
    render(<ContentBlock {...contentBlock} />)
    const received = screen.getByText(contentBlock.display_value)

    // Assert
    expect(received).toBeInTheDocument()
  })
  it("renders image content", () => {
    // Arrange
    const contentBlock: ContentBlockType = {
      alt_text: "I am a image",
      display_value: "",
      id: 5,
      order: 5,
      type: "image",
      value: require("../../assets/images/placeholder.png"),
    }

    // Act
    render(<ContentBlock {...contentBlock} />)
    const received = screen.getByAltText(contentBlock.alt_text)

    // Assert
    expect(received).toBeInTheDocument()
  })
})
