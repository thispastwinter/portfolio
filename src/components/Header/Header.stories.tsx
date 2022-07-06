import decoratorCentered from "@storybook/addon-centered"
import { Header } from "./Header"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Header",
  decorators: [decoratorCentered],
}

export const Example = () => <Header />
