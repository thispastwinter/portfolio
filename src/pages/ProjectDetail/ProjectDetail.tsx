import { useNavigate, useParams } from "react-router-dom"
import { useMemo } from "react"
import { useQueryClient } from "react-query"
import { ContentContainer } from "../../components/ContentContainer"
import { Icon } from "../../components/Icon"
import { Routes } from "../../constants/Routes"
import { useGetProjectById } from "../../hooks/useGetProjectById"
import { useGetProjects } from "../../hooks/useGetProjects"
import { ErrorService } from "../../services/ErrorService"
import { Clickable } from "../../components/Clickable"
import { ProjectDates } from "../../components/ProjectDates"
import { ProjectCategories } from "../../components/ProjectCategories"
import { Loader } from "../../components/Loader"
import { ProjectQueryKeys } from "../../constants/QueryKeys"
import { APIService } from "../../services/APIService"
import { PageButton } from "./PageButton"

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const { data: currentProject, isLoading } = useGetProjectById(id ?? "")
  const { data: projects } = useGetProjects()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const currentIndex = useMemo(
    () =>
      Number(
        projects?.findIndex((project) => project.id === currentProject?.id),
      ),
    [currentProject, projects],
  )

  const previousProject = projects?.[currentIndex - 1]

  const nextProject = projects?.[currentIndex + 1]

  if (isLoading) return <Loader />

  if (!currentProject) {
    throw ErrorService.createError({ dataType: "project", status: 404 })
  }

  const onProjectClick = (id: number) => {
    navigate(Routes.projectsDetail(id))
  }

  const onProjectHover = async (id: number) => {
    await queryClient.prefetchQuery(ProjectQueryKeys.byId(id), () =>
      APIService.getProjectById(id),
    )
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="flex flex-col md:pr-4 max-w-lg w-full md:mr-20">
            <img
              className="border rounded-lg"
              alt={currentProject.image_alt_text}
              src={currentProject.image}
            />
            <div className="flex justify-between md:justify-start md:flex-col gap-y-4 my-4">
              <Clickable
                to={currentProject.url ?? ""}
                variant="link"
                text="Website"
              />
              <ProjectCategories
                categories={currentProject.categories}
                size="lg"
              />
            </div>
          </div>
          <article className="flex flex-col md:pl-4">
            <div className="mb-12">
              <p className="text-4xl font-bold mt-4 md:mt-0 mb-2">
                {currentProject.name}
              </p>
              <p className="font-medium">{currentProject.role}</p>
              <ProjectDates
                startDate={new Date(currentProject.start_date)}
                endDate={new Date(currentProject.end_date)}
              />
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
      <div className="flex items-center gap-x-4 justify-between md:justify-end mt-10">
        {previousProject ? (
          <PageButton
            onProjectHover={onProjectHover}
            onProjectClick={onProjectClick}
            project={previousProject}
            variant="previous"
          />
        ) : (
          <Clickable
            text="Home"
            variant="button"
            onClick={() => navigate(Routes.projects)}
            startIcon={<Icon className="mr-2" name="arrowLeft" />}
          />
        )}
        {nextProject && (
          <PageButton
            onProjectHover={onProjectHover}
            onProjectClick={onProjectClick}
            project={nextProject}
            variant="next"
          />
        )}
      </div>
    </div>
  )
}
