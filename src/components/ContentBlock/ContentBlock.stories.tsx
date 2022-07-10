import decoratorCentered from "@storybook/addon-centered"
import { Story } from "@storybook/react"
import { ComponentProps } from "react"
import { ContentBlock, ContentBlockProps } from "./ContentBlock"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/ContentBlock",
  decorators: [decoratorCentered],
  argTypes: {
    type: {
      control: "select",
      options: [
        "image",
        "paragraph",
        "sub_title",
        "title",
        "sub_title",
        "url",
      ] as ContentBlockProps["type"][],
    },
  },
}

const Template: Story<ComponentProps<typeof ContentBlock>> = (args) => (
  <ContentBlock {...args} />
)

export const Paragraph = Template.bind({})

Paragraph.args = {
  alt_text: "",
  display_value: "This is paragraph text",
  type: "paragraph",
  value: "",
}

export const URL = Template.bind({})

URL.args = {
  alt_text: "",
  display_value: "Website",
  type: "url",
  value: "https://www.google.com",
}

export const Image = Template.bind({})

Image.args = {
  alt_text: "This is an image",
  display_value: "",
  type: "image",
  value: require("../../assets/images/placeholder.png"),
}

export const Title = Template.bind({})

Title.args = {
  alt_text: "",
  display_value: "This is title text",
  type: "title",
  value: "",
}

export const Subtitle = Template.bind({})

Subtitle.args = {
  alt_text: "",
  display_value: "this is subtitle text",
  type: "sub_title",
  value: "",
}
