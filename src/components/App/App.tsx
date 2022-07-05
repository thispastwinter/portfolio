import { QueryClient, QueryClientProvider } from "react-query"
import { ProjectPage } from "../ProjectPage"

const client = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={client}>
      <ProjectPage />
    </QueryClientProvider>
  )
}
