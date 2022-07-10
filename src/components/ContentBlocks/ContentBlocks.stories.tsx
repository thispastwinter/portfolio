import decoratorCentered from "@storybook/addon-centered"
import { Story } from "@storybook/react"
import { ComponentProps } from "react"
import { ContentBlocks } from "./ContentBlocks"
import { contentBlocks } from "./mocks/contentBlocks"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/ContentBlocks",
  decorators: [decoratorCentered],
}

const Template: Story<ComponentProps<typeof ContentBlocks>> = (args) => (
  <div className="m-4">
    <ContentBlocks {...args} />
  </div>
)

export const Example = Template.bind({})

Example.args = {
  contentBlocks: contentBlocks,
}
