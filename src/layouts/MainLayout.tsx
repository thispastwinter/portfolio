import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { useScrollToTop } from "../hooks/useScrollToTop"

export function MainLayout() {
  useScrollToTop()

  return (
    <div className="flex flex-col m-4">
      <Header />
      <Outlet />
    </div>
  )
}
