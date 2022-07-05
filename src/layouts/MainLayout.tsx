import { Outlet } from "react-router-dom"

export function MainLayout() {
  return (
    <div className="flex p-4">
      <Outlet />
    </div>
  )
}
