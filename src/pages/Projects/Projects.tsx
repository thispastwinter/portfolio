import { useNavigate } from "react-router-dom"
import { ProjectListItem } from "../../components/ProjectListItem"
import { Spinner } from "../../components/Spinner"
import { Routes } from "../../constants/Routes"
import { useGetProjects } from "../../hooks/useGetProjects"

export function Projects() {
  const { data, isLoading } = useGetProjects()
  const navigate = useNavigate()

  const goToProject = (id: string) => {
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
    <div className="flex flex-col pb-6">
      <p className="text-4xl mb-10 font-display2 md:hidden">Recent work</p>
      <div className="grid lg:grid-rows lg:grid-flow-col gap-4 max-h-full">
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
