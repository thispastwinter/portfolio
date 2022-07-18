/**
 * pluralize
 * ------------------------------------------------
 * DESCRIPTION_HERE
 */

export const pluralize = (word: string, count: number, suffix = "s") => {
  if (count === 1) {
    return word
  } else {
    return word + suffix
  }
}
