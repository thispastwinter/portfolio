import { Story } from "@storybook/react"
import { ComponentProps } from "react"
import { Header } from "./Header"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/Header",
}

const Template: Story<ComponentProps<typeof Header>> = (args) => (
  <Header {...args} />
)

export const Default = Template.bind({})

Default.parameters = {
  memoryRouter: {
    initialEntries: ["/projects"],
  },
}

Default.args = {
  isHidden: false,
}
