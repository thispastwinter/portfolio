import { useQuery } from "react-query"
import { ProjectQueryKeys } from "../constants/QueryKeys"
import { APIService } from "../services/APIService"

export function useGetProjectById(id: string) {
  const { data, isLoading, error } = useQuery(
    ProjectQueryKeys.byId(id),
    () => APIService.getProjectById(id),
    { useErrorBoundary: true, onError: (err) => console.log(err) },
  )

  return { data, isLoading, error }
}
