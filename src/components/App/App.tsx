import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "../../layouts/MainLayout"
import { Article } from "../../pages/Article"
import { Main } from "../../pages/Main"
import { ProjectDetail } from "../../pages/ProjectDetail"

const client = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="/:name" element={<Article />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
