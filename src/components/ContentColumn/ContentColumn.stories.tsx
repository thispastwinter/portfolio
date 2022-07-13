import { Story } from "@storybook/react"
import { ComponentProps } from "react"
import { ContentColumn } from "./ContentColumn"
import { contentColumn } from "./mocks/contentColumn"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/ContentColumn",
}

const Template: Story<ComponentProps<typeof ContentColumn>> = (args) => (
  <ContentColumn {...args} />
)

export const Example = Template.bind({})

Example.args = {
  ...contentColumn,
}
