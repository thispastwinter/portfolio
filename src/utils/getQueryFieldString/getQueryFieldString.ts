/**
 * getQueryFields
 * ------------------------------------------------
 * DESCRIPTION_HERE
 */

import { QueryFields } from "../../types/QueryFields"

// provides type inference when building query strings
export const getQueryFieldString = <
  Data,
  ForeignTable1 = keyof Data,
  ForeignTable2 = keyof Data,
  ForeignTable3 = keyof Data,
>(
  fields?: QueryFields<Data, ForeignTable1, ForeignTable2, ForeignTable3>,
) => {
  if (fields) {
    return fields
      .map((field) => {
        if (typeof field === "object") {
          return `${String(field.foreignTable)}(${field.fields.join(", ")})`
        } else {
          return field
        }
      })
      .join(", ")
  } else {
    // if fields is undefined, return wildcard
    return "*"
  }
}
