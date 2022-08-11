import { useEffect } from "react"
import { useLocation } from "react-router-dom"

interface ErrorProps {
  status?: number | string
  message?: string
  reset?: () => void
}

export function ErrorPage({ status, message, reset }: ErrorProps) {
  const location = useLocation()

  useEffect(() => {
    reset?.()
  }, [location, reset])

  return (
    <>
      <div className="flex flex-col items-center text-center gap-y-8 mt-10">
        <h4 className="font-display2 text-8xl">{status}</h4>
        <h6 className="font-display2 text-6xl">
          {message ?? "Hey, what are you doing here?"}
        </h6>
      </div>
    </>
  )
}
