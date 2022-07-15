const defaultMessage = (dataType: string) => {
  return `${dataType} not found` as const
}

export const ErrorMessage = {
  418: "I'm a teapot" as const,
  404: defaultMessage,
  400: defaultMessage,
  406: defaultMessage,
  500: "Something went wrong on our end, try again later." as const,
}
