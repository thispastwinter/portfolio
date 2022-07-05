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
      <p className="text-2xl mb-10">My Projects</p>
      <div className="w-1/2">
        {data?.map((project) => (
          <div key={project.id} className="py-3">
            <button onClick={() => goToProject(project.id)}>
              {project.name}
            </button>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
