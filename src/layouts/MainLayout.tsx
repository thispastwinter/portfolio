import { useMemo } from "react"
import { Outlet, useMatch } from "react-router-dom"
import { Header } from "../components/Header"
import { useIsMobile } from "../hooks/useIsMobile"
import { useScrollToTop } from "../hooks/useScrollToTop"

export function MainLayout() {
  const match = useMatch("/projects/:id")
  useScrollToTop()
  const { isMobile } = useIsMobile()

  const isHidden = useMemo(() => Boolean(match) && isMobile, [match, isMobile])

  return (
    <div className="flex flex-col m-4">
      <Header isHidden={isHidden} />
      <Outlet />
    </div>
  )
}
