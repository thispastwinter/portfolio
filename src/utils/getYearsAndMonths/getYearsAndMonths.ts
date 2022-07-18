import { differenceInMonths } from "date-fns"
/**
 * getYearsAndMonths
 * ------------------------------------------------
 * DESCRIPTION_HERE
 */

const WEEKS_IN_MONTH = 4.34524

const WEEKS_IN_YEAR = 52.1429

const weeksToMonths = (numberOfWeeks: number) => {
  const months = numberOfWeeks / WEEKS_IN_MONTH
  return Math.round(months)
}

const yearDecimalToWeeks = (yearDecimal: number) => {
  const weeks = yearDecimal * WEEKS_IN_YEAR
  return Math.round(weeks)
}

export const getYearsAndMonths = (
  dateLeft: Date | number,
  dateRight: Date | number,
) => {
  const numberOfMonths = differenceInMonths(dateLeft, dateRight)

  if (numberOfMonths >= 12) {
    const numberOfYears = numberOfMonths / 12
    const [years, yearDecimal] = String(numberOfYears)
      .split(".")
      .map((value, index) => {
        if (index === 1) {
          return Number(`.${value.slice(0, 2)}`)
        } else {
          return Number(value)
        }
      })
    const remainingWeeks = yearDecimalToWeeks(yearDecimal)
    return { years, months: weeksToMonths(remainingWeeks) }
  } else {
    return { years: 0, months: numberOfMonths }
  }
}
