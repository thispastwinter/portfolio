import { Story } from "@storybook/react"
import { ComponentProps } from "react"
import { ContentContainer } from "./ContentContainer"
import { contentColumns } from "./mocks/contentColumns"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/ContentContainer",
}

const Template: Story<ComponentProps<typeof ContentContainer>> = (args) => (
  <ContentContainer {...args} />
)

export const Example = Template.bind({})

Example.args = {
  columns: contentColumns,
}
