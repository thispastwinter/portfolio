import { useGetProjects } from "../../hooks/useGetProjects"

export function ProjectPage() {
  const { data, isLoading } = useGetProjects()

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {data?.map((project) => (
        <div key={project.id}>
          <p>{project.name}</p>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  )
}
