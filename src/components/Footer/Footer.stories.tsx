import decoratorCentered from "@storybook/addon-centered"
import { Footer } from "./Footer"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Footer",
  decorators: [decoratorCentered],
}

export const Example = () => <Footer />
