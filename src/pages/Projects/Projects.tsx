import { useNavigate } from "react-router-dom"
import { useGetProjects } from "../../hooks/useGetProjects"

export function Projects() {
  const { data, isLoading } = useGetProjects()

  const navigate = useNavigate()

  const goToProject = (id: string) => {
    navigate(`../projects/${id}`)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {data?.map((project) => (
        <div key={project.id}>
          <button onClick={() => goToProject(project.id)}>
            {project.name}
          </button>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}
