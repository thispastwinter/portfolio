import { useQuery } from "react-query"
import { ArticleQueryKeys } from "../constants/QueryKeys"
import { APIService } from "../services/APIService"

export function useGetArticleByName(name: string) {
  const { data, isLoading, error } = useQuery(
    ArticleQueryKeys.byName(name),
    () => APIService.getArticleByName(name),
    { useErrorBoundary: true },
  )
  return { data, isLoading, error }
}
