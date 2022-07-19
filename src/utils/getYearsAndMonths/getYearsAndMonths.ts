import { differenceInMonths, differenceInYears, yearsToMonths } from "date-fns"
/**
 * getYearsAndMonths
 * ------------------------------------------------
 * DESCRIPTION_HERE
 */

export const getYearsAndMonths = (
  dateLeft: Date | number,
  dateRight: Date | number,
) => {
  const numberOfMonths = differenceInMonths(dateLeft, dateRight)
  const years = differenceInYears(dateLeft, dateRight)
  let months = numberOfMonths

  if (years >= 1) {
    months = numberOfMonths - yearsToMonths(years)
    return { years, months }
  } else {
    return { years, months }
  }
}
