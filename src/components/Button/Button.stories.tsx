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

export const ButtonVariant = Template.bind({})

ButtonVariant.args = {
  component: "button",
  text: "Next project",
}

export const LinkVariantDefault = Template.bind({})

LinkVariantDefault.args = {
  text: "Website",
  component: "a",
  to: "https://www.google.com",
}

export const LinkVariantCustom = Template.bind({})

LinkVariantCustom.args = {
  text: "Website",
  component: "a",
  to: "https://www.google.com",
  endIcon: <Icon className="ml-2" name="globe" />,
}

export const EndIcon = Template.bind({})

EndIcon.args = {
  component: "button",
  endIcon: <Icon className="ml-2" name="github" />,
  text: "Github",
}

export const StartIcon = Template.bind({})

StartIcon.args = {
  startIcon: <Icon className="mr-2" name="linkedin" />,
  text: "Linked In",
}
