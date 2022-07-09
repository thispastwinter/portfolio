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
    short_description:
      "Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    name: "Sample",
    created_at: "",
    id: "1",
    image: require("../../assets/images/placeholder.png"),
    categories: [
      {
        id: 1,
        icon_name: "mapbox",
        name: "mapbox",
        created_at: "",
      },
      {
        id: 2,
        icon_name: "smartphone",
        name: "mobile",
        created_at: "",
      },
      {
        id: 3,
        icon_name: "react",
        name: "react",
        created_at: "",
      },
      {
        id: 4,
        icon_name: "typescript",
        name: "typescript",
        created_at: "",
      },
    ],
  },
}
