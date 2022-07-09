import "../src/index.css"
import { MemoryRouterDecorator } from "./MemoryRouterDecorator"
import { StorybookProvider } from "./StorybookProvider"

export const decorators = [StorybookProvider, MemoryRouterDecorator]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  memoryRouter: {
    initialEntries: ["/"],
  },
}
