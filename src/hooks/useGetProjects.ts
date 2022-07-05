import { useQuery } from "react-query"
import { ProjectQueryKeys } from "../constants/QueryKeys"
import { APIService } from "../services/APIService"

export function useGetProjects() {
  const { data, isLoading, error } = useQuery(
    ProjectQueryKeys.all,
    APIService.getProjects,
  )

  return { data, isLoading, error }
}
