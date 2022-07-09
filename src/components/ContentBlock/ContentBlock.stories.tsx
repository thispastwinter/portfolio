import decoratorCentered from "@storybook/addon-centered"
import { ContentBlock } from "./ContentBlock"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "ContentBlock",
  decorators: [decoratorCentered],
}

export const Example = () => <ContentBlock />
