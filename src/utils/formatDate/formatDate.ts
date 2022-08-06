import { format } from "date-fns"
/**
 * formatDate
 * ------------------------------------------------
 * DESCRIPTION_HERE
 */

export const formatDate = (date: Date) => {
  return format(date, "MMM yyyy")
}
