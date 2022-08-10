import decoratorCentered from "@storybook/addon-centered"
import { ComponentStory } from "@storybook/react"
import { Icon } from "../Icon"
import { Clickable } from "./Clickable"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/Clickable",
  decorators: [decoratorCentered],
}

const Template: ComponentStory<typeof Clickable> = (args) => (
  <Clickable {...args} />
)

export const ButtonVariant = Template.bind({})

ButtonVariant.args = {
  variant: "button",
  text: "Next project",
}

export const LinkVariantDefault = Template.bind({})

LinkVariantDefault.args = {
  text: "Website",
  variant: "link",
  to: "https://www.google.com",
}

export const LinkVariantCustom = Template.bind({})

LinkVariantCustom.args = {
  text: "Website",
  variant: "link",
  to: "https://www.google.com",
  endIcon: <Icon className="ml-2" name="globe" />,
}

export const EndIcon = Template.bind({})

EndIcon.args = {
  variant: "button",
  endIcon: <Icon className="ml-2" name="github" />,
  text: "Github",
}

export const StartIcon = Template.bind({})

StartIcon.args = {
  startIcon: <Icon className="mr-2" name="linkedin" />,
  text: "Linked In",
  variant: "button",
}
