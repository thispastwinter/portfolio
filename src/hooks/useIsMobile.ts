// probably not totally necessary, use only if css classes can't help you

import { useCallback, useEffect, useState } from "react"

export const useIsMobile = (mobileSize = 768) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const handleWindowSizeChange = useCallback(() => {
    if (window.innerWidth <= mobileSize) {
      console.log(window.innerWidth)
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [mobileSize])

  // set initial state
  useEffect(() => {
    handleWindowSizeChange()
  }, [handleWindowSizeChange])

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [mobileSize, handleWindowSizeChange])

  return { isMobile }
}
