import decoratorCentered from "@storybook/addon-centered"
import { Story } from "@storybook/react"
import { ComponentProps } from "react"
import { Card } from "./Card"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/Card",
  decorators: [decoratorCentered],
}

const Template: Story<ComponentProps<typeof Card>> = (args) => (
  <Card {...args} />
)

export const Default = Template.bind({})

Default.args = {
  children: "This is a card.",
}
