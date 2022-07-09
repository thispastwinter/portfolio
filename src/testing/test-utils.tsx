/* eslint-disable import/export */
// https://testing-library.com/docs/react-native-testing-library/setup
import { RenderOptions, render } from "@testing-library/react"
import { ComponentProps, ReactElement } from "react"
import TestProvider from "./TestProvider"

const customRender = (
  component: ReactElement,
  options?: Omit<RenderOptions, "wrapper"> &
    ComponentProps<typeof TestProvider>,
) =>
  render(component, {
    wrapper: (props: Record<string, unknown>) => (
      <TestProvider initialEntries={options?.initialEntries} {...props} />
    ),
    ...options,
  })

export * from "@testing-library/react"

export { customRender as render }
