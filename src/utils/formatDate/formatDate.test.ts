import { formatDate } from "./formatDate"

describe("formatDate", () => {
  it("formats date as 'MMM yyyy'", () => {
    // Arrange
    const date = new Date("2020-01-01T19:02:29+00:00")

    // Act
    const received = formatDate(date)
    const expected = "Jan 2020"

    // Assert
    expect(received).toEqual(expected)
  })
})
