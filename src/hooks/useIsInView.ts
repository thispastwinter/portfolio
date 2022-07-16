import { RefObject, useEffect, useState } from "react"

export default function useIsInView<T extends RefObject<HTMLDivElement>>(
  ref: T,
  options: IntersectionObserverInit = { threshold: 1 },
) {
  const [isInView, setIsInView] = useState(false)
  useEffect(() => {
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(false)
      } else {
        setIsInView(true)
      }
    }, options)
    ref?.current && observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  })
  return { isInView }
}
