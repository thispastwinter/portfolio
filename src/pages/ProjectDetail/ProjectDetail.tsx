import { useNavigate, useParams } from "react-router-dom"
import { useGetProjectById } from "../../hooks/useGetProjectById"

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useGetProjectById(id ?? "")
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-10">
        <button className="mr-8" onClick={goBack}>
          Go back
        </button>
        <p className="text-2xl">{data?.name}</p>
      </div>
      <p>{data?.description}</p>
    </div>
  )
}
