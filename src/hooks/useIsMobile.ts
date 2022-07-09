// probably not totally necessary, use only if css classes can't help you

import { useCallback, useEffect, useState } from "react"

export const useIsMobile = (mobileSize = 768) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const handleWindowSizeChange = useCallback(() => {
    if (window.innerWidth <= mobileSize) {
      setIsMobile(true)
    }
  }, [mobileSize])

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [mobileSize, handleWindowSizeChange])

  return { isMobile }
}
