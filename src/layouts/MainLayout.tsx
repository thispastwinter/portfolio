import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"

export function MainLayout() {
  return (
    <div className="flex flex-col m-8">
      <Header />
      <Outlet />
    </div>
  )
}
