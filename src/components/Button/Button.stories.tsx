import decoratorCentered from "@storybook/addon-centered"
import { ComponentStory } from "@storybook/react"
import { Icon } from "../Icon"
import { Button } from "./Button"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/Button",
  decorators: [decoratorCentered],
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Example = Template.bind({})

Example.args = {
  text: "Next project",
  rightAdornment: <Icon className="ml-2" name="arrowRight" />,
}
