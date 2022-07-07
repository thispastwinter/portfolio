import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function useScrollToTop(scrollRef?: HTMLElement) {
  const scrollElement = scrollRef ?? window
  const { pathname } = useLocation()

  useEffect(() => {
    scrollElement?.scrollTo(0, 0)
  }, [pathname, scrollElement])
}
