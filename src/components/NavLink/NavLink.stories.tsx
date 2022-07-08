import decoratorCentered from "@storybook/addon-centered"
import { Story } from "@storybook/react"
import { ComponentProps } from "react"
import { NavLink } from "./NavLink"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/NavLink",
  decorators: [decoratorCentered],
}

const Template: Story<ComponentProps<typeof NavLink>> = (args) => (
  <NavLink {...args} />
)

export const Default = Template.bind({})

Default.args = {
  to: "",
}
