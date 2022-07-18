import { getYearsAndMonths } from "./getYearsAndMonths"

describe("getYearsAndMonths", () => {
  it("compares '2021-10-01T18:53:34+00:00' and '2020-01-01T19:02:29+00:00' and returns object representing range in years and months", () => {
    // Arrange
    const dateLeft = new Date("2021-10-01T18:53:34+00:00")
    const dateRight = new Date("2020-01-01T19:02:29+00:00")

    // Act
    const received = getYearsAndMonths(dateLeft, dateRight)
    const expected = { years: 1, months: 9 }

    // Assert
    expect(received).toEqual(expected)
  })
  it("compares 1634064814000 and 1361732549000 and returns object representing range in years and months", () => {
    // Arrange
    const dateLeft = new Date(1634064814000)
    const dateRight = new Date(1361732549000)

    // Act
    const received = getYearsAndMonths(dateLeft, dateRight)
    const expected = { years: 8, months: 7 }

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
