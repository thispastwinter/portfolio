import { FC, ReactNode, Suspense, lazy } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { ErrorMessage } from "../../constants/ErrorMessage"
import { Routes as AvailableRoutes } from "../../constants/Routes"
import { MainLayout } from "../../layouts/MainLayout"
import { ErrorPage } from "../../pages/ErrorPage"
import { Projects } from "../../pages/Projects"
import { CustomErrorObject } from "../../types/CustomErrorObject"
import { Loader } from "../Loader"

const ProjectDetail = lazy(() =>
  import("../../pages/ProjectDetail").then((module) => ({
    default: module.ProjectDetail,
  })),
)
const Article = lazy(() =>
  import("../../pages/Article").then((module) => ({ default: module.Article })),
)

const ErrorBoundaryWrapper: FC<{ children: ReactNode }> = ({ children }) => (
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

export function RouteProvider() {
  const { articleDetail, projects, projectsDetail } = AvailableRoutes
  return (
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
  )
}
