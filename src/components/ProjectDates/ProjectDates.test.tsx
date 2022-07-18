import { render, screen } from "../../testing/test-utils"
import { ProjectDates } from "./ProjectDates"

describe("ProjectDates", () => {
  it("diplays range of dates in format of 'MMM yyyy'", () => {
    // Arrange
    const startDate = new Date("2020-01-01T19:02:29+00:00")
    const endDate = new Date("2021-10-01T18:53:34+00:00")
    const formattedStartDate = "Jan 2020"
    const formattedEndDate = "Oct 2021"

    // Act
    render(<ProjectDates startDate={startDate} endDate={endDate} />)
    const receivedStartDate = screen.getByText(formattedStartDate)
    const receivedEndDate = screen.getByText(formattedEndDate)

    // Assert
    expect(receivedStartDate).toBeInTheDocument()
    expect(receivedEndDate).toBeInTheDocument()
  })
  it("displays years and months when range is greater than a year", () => {
    // Arrange
    const startDate = new Date("2020-01-01T19:02:29+00:00")
    const endDate = new Date("2021-10-01T18:53:34+00:00")
    const displayValue = "1 year 9 months"

    // Act
    render(<ProjectDates startDate={startDate} endDate={endDate} />)
    const received = screen.getByText(displayValue)

    // Assert
    expect(received).toBeInTheDocument()
  })
  it("displays only months if range is less than a year", () => {
    // Arrange
    const startDate = new Date("2020-01-01T19:02:29+00:00")
    const endDate = new Date("2020-10-01T18:53:34+00:00")
    const displayValue = "9 months"

    // Act
    render(<ProjectDates startDate={startDate} endDate={endDate} />)
    const received = screen.getByText(displayValue)

    // Assert
    expect(received).toBeInTheDocument()
  })
  it("displays only years if no trailing months", () => {
    // Arrange
    const startDate = new Date("2020-01-01T19:02:29+00:00")
    const endDate = new Date("2022-01-01T19:02:29+00:00")
    const displayValue = "2 years"

    // Act
    render(<ProjectDates startDate={startDate} endDate={endDate} />)
    const received = screen.getByText(displayValue)

    // Assert
    expect(received).toBeInTheDocument()
  })
})
