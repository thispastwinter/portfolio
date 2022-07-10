import { Project } from "../../types/Project"
import { getQueryFieldString } from "./getQueryFieldString"

describe("getQueryFields", () => {
  it("works", () => {
    // Arrange

    // Act
    const received = getQueryFieldString<Project, "categories">([
      "description",
      "id",
      "image",
      "name",
      { foreignTable: "categories", fields: ["created_at", "icon_name"] },
    ])
    const expected =
      "description, id, image, name, categories(created_at, icon_name)"

    // Assert
    expect(received).toEqual(expected)
  })
})
