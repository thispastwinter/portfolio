import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { MainLayout } from "../../layouts/MainLayout"
import { ProjectDetail } from "../../pages/ProjectDetail"
import { Projects } from "../../pages/Projects"

const client = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Navigate to="/projects" replace />} />
            <Route path="/about" element={<div />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
