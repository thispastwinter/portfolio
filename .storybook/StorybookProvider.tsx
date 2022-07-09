import { FC } from "react"

export const StorybookProvider = (Story: FC) => {
  // Include any providers your stories need to render
  return <Story />
}
