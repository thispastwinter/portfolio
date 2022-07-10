import decoratorCentered from "@storybook/addon-centered"
import { Story } from "@storybook/react"
import { ComponentProps } from "react"
import { Route, Routes } from "react-router-dom"
import { NavLink } from "./NavLink"

/**
 * See Storybook Docs: Writing Stories
 * https://storybook.js.org/docs/basics/writing-stories/
 */

export default {
  title: "Components/NavLink",
  decorators: [decoratorCentered],
}

const Template: Story<ComponentProps<typeof NavLink>> = (args) => (
  <NavLink {...args} />
)

export const Active = Template.bind({})

Active.decorators = [
  (Story) => (
    <Routes>
      <Route path="/projects" element={<Story />} />
    </Routes>
  ),
]

Active.args = {
  to: "/projects",
  children: "Recent Work",
}

Active.parameters = {
  memoryRouter: {
    initialEntries: ["/projects"],
  },
}

export const Inactive = Template.bind({})

Inactive.args = {
  to: "/about",
  children: "About",
}
