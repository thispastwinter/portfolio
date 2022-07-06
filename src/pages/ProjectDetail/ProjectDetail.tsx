import { useParams } from "react-router-dom"
import { useGetProjectById } from "../../hooks/useGetProjectById"

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useGetProjectById(id ?? "")

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="flex flex-col p-4">
      <p className="text-2xl mb-10">{data?.name}</p>
      <img className="rounded-md py-4" alt={data?.name} src={data?.image} />
      <p>{data?.description}</p>
    </div>
  )
}
