import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

export function MainLayout() {
  return (
    <div>
      <Header />
      <div className="flex p-4">
        <Outlet />
      </div>
    </div>
  )
}
