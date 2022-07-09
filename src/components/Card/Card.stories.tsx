import decoratorCentered from "@storybook/addon-centered"
import { Card } from "./Card"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Card",
  decorators: [decoratorCentered],
}

export const Example = () => <Card />
