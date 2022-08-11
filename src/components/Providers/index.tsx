import { ReactQueryClientProvider } from "./ReactQueryClientProvider"
import { RouteProvider } from "./RouteProvider"

export function Providers() {
  return (
    <ReactQueryClientProvider>
      <RouteProvider />
    </ReactQueryClientProvider>
  )
}
