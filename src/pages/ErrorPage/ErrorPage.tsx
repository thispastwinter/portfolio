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
        <p className="font-display2 text-8xl">{status}</p>
        <p className="font-display2 text-6xl">
          {message ?? "Hey, what are you doing here?"}
        </p>
      </div>
    </>
  )
}
