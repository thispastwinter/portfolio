import { Outlet } from "react-router-dom"

export function MainLayout() {
  return (
    <div className="p-4">
      <Outlet />
    </div>
  )
}
