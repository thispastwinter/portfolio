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
    <div className="flex flex-col">
      <p className="text-4xl mb-10 font-display2">Recent work</p>
      <div className="grid lg:grid-rows lg:grid-flow-col gap-6 max-h-full">
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
            <ProjectListItem project={project} />
          </div>
        ))}
      </div>
    </div>
  )
}
