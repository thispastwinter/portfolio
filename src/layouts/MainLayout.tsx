import { Outlet, useMatch } from "react-router-dom"
import { Header } from "../components/Header"
import { useScrollToTop } from "../hooks/useScrollToTop"

export function MainLayout() {
  const match = useMatch("/projects/:id")
  useScrollToTop()

  return (
    <div className="flex flex-col m-4 h-[100vh]">
      <Header isHidden={Boolean(match)} />
      <Outlet />
    </div>
  )
}
