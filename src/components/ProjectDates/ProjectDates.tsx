import { useMemo } from "react"
import { formatDate } from "../../utils/formatDate"
import { getYearsAndMonths } from "../../utils/getYearsAndMonths"
import { pluralize } from "../../utils/pluralize"

interface ProjectDatesProps {
  startDate: Date
  endDate: Date
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
  const displayValue = useMemo(() => {
    const { years, months } = getYearsAndMonths(endDate, startDate)
    return getDisplayValue(years, months)
  }, [endDate, startDate])

  return (
    <div className="flex items-center mt-2 gap-x-2">
      <div className="flex items-center border-charcoal border-r pr-2 gap-x-2">
        <p>{formatDate(startDate)}</p>
        <p>-</p>
        <p>{formatDate(endDate)}</p>
      </div>
      <p>{displayValue}</p>
    </div>
  )
}
