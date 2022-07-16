import { useNavigate, useParams } from "react-router-dom"
import { ContentContainer } from "../../components/ContentContainer"
import { Icon } from "../../components/Icon"
import { Spinner } from "../../components/Spinner"
import { Routes } from "../../constants/Routes"
import { useGetProjectById } from "../../hooks/useGetProjectById"
import { useGetProjects } from "../../hooks/useGetProjects"
import { Project } from "../../types/Project"
import { ErrorService } from "../../services/ErrorService"

const toDate = (timestamp: string) => new Date(timestamp)

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const { data: currentProject, isLoading } = useGetProjectById(id ?? "")
  const { data: projects } = useGetProjects()
  const navigate = useNavigate()

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh] md:h-auto">
        <Spinner />
      </div>
    )
  }

  if (!currentProject) {
    throw ErrorService.createError({ dataType: "project", status: 404 })
  }

  const onProjectClick = (id: number) => {
    navigate(Routes.projectsDetail(id))
  }

  const getOtherProjects = (project: Project) => {
    return toDate(currentProject.start_date) < toDate(project.start_date)
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="flex flex-col md:pr-4 max-w-lg w-full md:mr-20">
            <img
              className="border rounded-lg"
              alt={currentProject.name}
              src={currentProject.image}
            />
            <div className="flex justify-between md:justify-start md:flex-col gap-y-4 my-4">
              <a
                className="flex items-center font-medium"
                target="_blank"
                href={currentProject.url}
                rel="noreferrer"
              >
                Website
                <Icon size={20} className="ml-1" name="arrowUpRight" />
              </a>
              <div className="flex gap-x-2">
                {currentProject.categories.map(({ icon_name, name }) => (
                  <Icon
                    title={name}
                    size={24}
                    key={icon_name}
                    name={icon_name}
                  />
                ))}
              </div>
            </div>
          </div>
          <article className="flex flex-col md:pl-4">
            <div className="mb-12">
              <p className="text-4xl font-bold mt-4 md:mt-0 mb-2">
                {currentProject.name}
              </p>
              <p>{currentProject.role}</p>
            </div>
            <div className="mb-12">
              <p>{currentProject.description}</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <ContentContainer
                columns={currentProject.content_columns || []}
              />
            </div>
          </article>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-x-4 mt-10">
        {projects?.filter(getOtherProjects).map((project) => (
          <div key={project.id} className="max-w-xs min-h-[150px] my-4">
            <div>
              <p className="font-medium mb-2">{project.name}</p>
              <p className="text-xs">{project.short_description}</p>
              <button
                onClick={() => onProjectClick(project.id)}
                className="flex items-center mt-4 border p-4 border-gray-400"
              >
                <p>Next project</p>
                <Icon className="ml-2" name="arrowRight" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
