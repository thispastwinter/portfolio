import decoratorCentered from "@storybook/addon-centered"
import { Spinner } from "./Spinner"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/Spinner",
  decorators: [decoratorCentered],
}

export const Example = () => <Spinner />
