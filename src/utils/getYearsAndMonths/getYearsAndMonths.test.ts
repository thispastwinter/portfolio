import { getYearsAndMonths } from "./getYearsAndMonths"

describe("getYearsAndMonths", () => {
  it("converts two dates to an object representing range in years and months", () => {
    // Arrange
    const dateLeft = new Date("2021-10-01T18:53:34+00:00")
    const dateRight = new Date("2020-01-01T19:02:29+00:00")

    // Act
    const received = getYearsAndMonths(dateLeft, dateRight)
    const expected = { years: 1, months: 9 }

    // Assert
    expect(received).toEqual(expected)
  })
  it("returns 0 years and however many months if months less than a year", () => {
    // Arrange
    const dateLeft = new Date("2021-10-01T18:53:34+00:00")
    const dateRight = new Date("2021-01-01T19:02:29+00:00")

    // Act
    const received = getYearsAndMonths(dateLeft, dateRight)
    const expected = { years: 0, months: 9 }

    // Assert
    expect(received).toEqual(expected)
  })
})
