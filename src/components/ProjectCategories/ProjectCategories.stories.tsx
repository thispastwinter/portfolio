import decoratorCentered from "@storybook/addon-centered"
import { ComponentStory } from "@storybook/react"
import { Project } from "../../types/Project"
import { ProjectCategories } from "./ProjectCategories"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/ProjectCategories",
  decorators: [decoratorCentered],
}

const categories: Project["categories"] = [
  { icon_name: "github", id: 1, name: "Github" },
  { icon_name: "react", id: 2, name: "React" },
]

const Template: ComponentStory<typeof ProjectCategories> = (args) => (
  <ProjectCategories {...args} />
)

export const WithSmallIcons = Template.bind({})

WithSmallIcons.args = {
  categories,
  size: "sm",
}

export const WithLargeIcons = Template.bind({})

WithLargeIcons.args = {
  categories,
  size: "lg",
}
