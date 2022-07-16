import { useMemo } from "react"
import { Outlet, useMatch } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { useIsMobile } from "../hooks/useIsMobile"
import { useScrollToTop } from "../hooks/useScrollToTop"
import { Article } from "../pages/Article"

export function MainLayout() {
  const match = useMatch("/projects/:id")
  useScrollToTop()
  const { isMobile } = useIsMobile()

  const isHidden = useMemo(() => Boolean(match) && isMobile, [match, isMobile])

  return (
    <div className="flex flex-col m-4 md:m-6">
      <Header isHidden={isHidden} />
      <Outlet />
      <Footer>
        <Article articleName="about" />
      </Footer>
    </div>
  )
}
