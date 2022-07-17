import { ComponentStory } from "@storybook/react"
import { Footer } from "./Footer"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/Footer",
}

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Example = Template.bind({})

Example.args = {
  children: <p>Hello World, this is my footer.</p>,
}
