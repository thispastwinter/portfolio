import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ErrorBoundary } from "react-error-boundary"
import { ReactNode, Suspense, lazy } from "react"
import { MainLayout } from "../../layouts/MainLayout"
import { Routes as AvailableRoutes } from "../../constants/Routes"
import { ErrorPage } from "../../pages/ErrorPage"
import { CustomErrorObject } from "../../types/CustomErrorObject"
import { ErrorMessage } from "../../constants/ErrorMessage"
import { Projects } from "../../pages/Projects"
import { Loader } from "../Loader"

const ProjectDetail = lazy(() =>
  import("../../pages/ProjectDetail").then((module) => ({
    default: module.ProjectDetail,
  })),
)
const Article = lazy(() =>
  import("../../pages/Article").then((module) => ({ default: module.Article })),
)

const client = new QueryClient({
  defaultOptions: {
    queries: {
      /* 
        We don't need to be aggressive here
        this is a portfolio with very static data
      */
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      // Stale after 24 hours
      staleTime: 86400 * 1000,
      retry(failureCount, err) {
        const error = err as CustomErrorObject
        const status = error.status
        if (status in ErrorMessage) {
          return false
        } else if (failureCount < 3) {
          return true
        } else {
          return false
        }
      },
    },
  },
})

const ErrorBoundaryWrapper = ({ children }: { children: ReactNode }) => (
  <ErrorBoundary
    FallbackComponent={({ error: err, resetErrorBoundary }) => {
      const error = err as unknown as CustomErrorObject
      return (
        <ErrorPage
          status={error.status < 500 ? "404" : error.status}
          message={error.message}
          reset={resetErrorBoundary}
        />
      )
    }}
  >
    {children}
  </ErrorBoundary>
)

export function App() {
  const { articleDetail, projects, projectsDetail } = AvailableRoutes

  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundaryWrapper>
                <MainLayout />
              </ErrorBoundaryWrapper>
            }
          >
            <Route index element={<Navigate to={projects} replace />} />
            <Route path={projects} element={<Projects />} />
            <Route
              path={articleDetail(":name")}
              element={
                <ErrorBoundaryWrapper>
                  <Suspense fallback={<Loader />}>
                    <Article />
                  </Suspense>
                </ErrorBoundaryWrapper>
              }
            />
            <Route
              path={projectsDetail(":id")}
              element={
                <ErrorBoundaryWrapper>
                  <Suspense fallback={<Loader />}>
                    <ProjectDetail />
                  </Suspense>
                </ErrorBoundaryWrapper>
              }
            />
            <Route
              path="*"
              element={
                <ErrorPage message={ErrorMessage[404]("page")} status={404} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
