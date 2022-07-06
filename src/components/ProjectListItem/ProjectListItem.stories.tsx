import decoratorCentered from "@storybook/addon-centered"
import { Story } from "@storybook/react"
import { ComponentProps } from "react"
import { ProjectListItem } from "./ProjectListItem"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/ProjectListItem",
  decorators: [decoratorCentered],
}

const Template: Story<ComponentProps<typeof ProjectListItem>> = (args) => (
  <div className="p-4">
    <ProjectListItem {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  project: {
    description:
      "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    name: "Sample",
    created_at: "",
    id: "1",
    image: "asdf",
  },
}
