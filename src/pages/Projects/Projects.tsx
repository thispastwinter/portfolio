import { useNavigate } from "react-router-dom"
import { ProjectListItem } from "../../components/ProjectListItem"
import { Spinner } from "../../components/Spinner"
import { Routes } from "../../constants/Routes"
import { useGetProjects } from "../../hooks/useGetProjects"

export function Projects() {
  const { data, isLoading } = useGetProjects()
  const navigate = useNavigate()

  const goToProject = (id: number) => {
    navigate(Routes.projectsDetail(id))
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      <p className="mb-10 text-2xl font-medium">Recent Work</p>
      <div className="grid lg:grid-rows lg:grid-flow-col gap-4 md:gap-6 max-h-full">
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
