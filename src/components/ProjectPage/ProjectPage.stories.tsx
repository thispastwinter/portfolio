import decoratorCentered from "@storybook/addon-centered"
import { ProjectPage } from "./ProjectPage"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "ProjectPage",
  decorators: [decoratorCentered],
}

export const Example = () => <ProjectPage />
