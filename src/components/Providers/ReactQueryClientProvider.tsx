import { FC, ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ErrorMessage } from "../../constants/ErrorMessage"
import { CustomErrorObject } from "../../types/CustomErrorObject"

const client = new QueryClient({
  defaultOptions: {
    queries: {
      /* 
        We don't need to be aggressive here
        this is a portfolio with very static data
      */
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      // Stale after 24 hours
      staleTime: 86400 * 1000,
      retry(failureCount, err) {
        const error = err as CustomErrorObject
        const status = error.status
        if (status in ErrorMessage) {
          return false
        } else if (failureCount < 3) {
          return true
        } else {
          return false
        }
      },
    },
  },
})

export const ReactQueryClientProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
