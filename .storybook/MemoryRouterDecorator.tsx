import { ComponentProps, FC } from "react"
import { MemoryRouter } from "react-router-dom"

export function MemoryRouterDecorator(Story: FC, args: any) {
  const { initialEntries, initialIndex, basename } = args.parameters
    .memoryRouter as Omit<ComponentProps<typeof MemoryRouter>, "children">

  return (
    <MemoryRouter
      basename={basename}
      initialEntries={initialEntries}
      initialIndex={initialIndex}
    >
      <Story />
    </MemoryRouter>
  )
}
