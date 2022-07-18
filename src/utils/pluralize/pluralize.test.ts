import { pluralize } from "./pluralize"

describe("pluralize", () => {
  it("takes a word and pluralizes it", () => {
    // Arrange
    const word = "dog"

    // Act
    const received = pluralize(word, 2)
    const expected = "dogs"

    // Assert
    expect(received).toEqual(expected)
  })
  it("pluralizes with a custom suffix", () => {
    // Arrange
    const word = "crutch"

    // Act
    const received = pluralize(word, 2, "es")
    const expected = "crutches"

    // Assert
    expect(received).toEqual(expected)
  })
  it("returns singular if the count is 1", () => {
    // Arrange
    const word = "dog"

    // Act
    const received = pluralize(word, 1)
    const expected = word

    // Arrange
    expect(received).toEqual(expected)
  })
})
