import decoratorCentered from "@storybook/addon-centered"
import { Story } from "@storybook/react"
import { ComponentProps } from "react"
import { Icon, IconName, getIcon } from "./Icon"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

const iconNames = Object.keys(getIcon({})) as IconName[]

export default {
  title: "Components/Icon",
  decorators: [decoratorCentered],
  argTypes: {
    name: {
      control: "select",
      options: iconNames,
    },
  },
}

const Template: Story<ComponentProps<typeof Icon>> = (args) => (
  <Icon {...args} />
)

export const Default = Template.bind({})

Default.args = {
  name: iconNames[0],
  size: 64,
}
