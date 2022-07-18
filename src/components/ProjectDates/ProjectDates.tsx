import { useMemo } from "react"
import { format } from "date-fns"
import { getYearsAndMonths } from "../../utils/getYearsAndMonths"
import { pluralize } from "../../utils/pluralize"

interface ProjectDatesProps {
  startDate: Date
  endDate: Date
}

const formatDate = (date: Date) => {
  return format(date, "MMM yyyy")
}

const getDisplayValue = (years: number, months: number) => {
  const monthsDisplay = `${months} ${pluralize("month", months)}`
  const yearsDisplay = `${years} ${pluralize("year", years)}`

  if (years && months) {
    return `${yearsDisplay} ${monthsDisplay}`
  } else if (years) {
    return yearsDisplay
  } else {
    return monthsDisplay
  }
}

export function ProjectDates({ startDate, endDate }: ProjectDatesProps) {
  const { years, months } = getYearsAndMonths(endDate, startDate)

  const displayValue = useMemo(
    () => getDisplayValue(years, months),
    [years, months],
  )

  return (
    <div className="flex items-center mt-2 gap-x-2">
      <div className="flex items-center border-charcoal border-r-2 pr-2 gap-x-2">
        <p>{formatDate(startDate)}</p>
        <p>-</p>
        <p>{formatDate(endDate)}</p>
      </div>
      <p>{displayValue}</p>
    </div>
  )
}
