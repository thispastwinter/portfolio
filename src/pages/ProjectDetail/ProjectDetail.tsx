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
      <button onClick={goBack}>Go Back</button>
      <p>{data?.name}</p>
    </div>
  )
}
