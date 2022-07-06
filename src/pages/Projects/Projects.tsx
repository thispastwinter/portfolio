import { useNavigate } from "react-router-dom"
import { ProjectListItem } from "../../components/ProjectListItem"
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
      <p className="text-2xl mb-10 p-4">My Projects</p>
      <div className="max-w-xl">
        {data?.map((project, index) => (
          <div
            role="button"
            key={project.id}
            tabIndex={index}
            onKeyDown={({ key }) =>
              key.toLowerCase() === "enter" && goToProject(project.id)
            }
            onClick={() => goToProject(project.id)}
          >
            <ProjectListItem className="p-4" project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}
