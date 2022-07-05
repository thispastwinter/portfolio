import { useParams } from "react-router-dom"
import { useGetProjectById } from "../../hooks/useGetProjectById"

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useGetProjectById(id ?? "")

  if (isLoading) {
    return <p>Loading...</p>
  }

  return <div>{data?.name}</div>
}
