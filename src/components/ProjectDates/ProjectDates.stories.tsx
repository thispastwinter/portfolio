import decoratorCentered from "@storybook/addon-centered"
import { ComponentStory } from "@storybook/react"
import { ProjectDates } from "./ProjectDates"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/ProjectDates",
  decorators: [decoratorCentered],
  parameters: {
    controls: {
      matchers: {
        start_date: /Date$/,
        end_date: /Date$/,
      },
    },
  },
}

const Template: ComponentStory<typeof ProjectDates> = (args) => (
  <ProjectDates {...args} />
)

export const Example = Template.bind({})

Example.args = {
  start_date: "2020-01-01T19:02:29+00:00",
  end_date: "2021-10-01T18:53:34+00:00",
}
